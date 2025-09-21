'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Play, FileText, Bot } from "lucide-react";

export const YouTubeSummarizer = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [summary, setSummary] = useState("");
  const { toast } = useToast();

  const isValidYouTubeUrl = (url: string) => {
    const patterns = [
      /^https?:\/\/(www\.)?youtube\.com\/watch\?v=[\w-]+/,
      /^https?:\/\/youtu\.be\/[\w-]+/,
      /^https?:\/\/(www\.)?youtube\.com\/embed\/[\w-]+/,
    ];
    return patterns.some(pattern => pattern.test(url));
  };

  const handleSummarize = async () => {
    if (!videoUrl.trim()) {
      toast({
        title: "오류",
        description: "YouTube 링크를 입력해주세요.",
        variant: "destructive",
      });
      return;
    }

    if (!isValidYouTubeUrl(videoUrl)) {
      toast({
        title: "잘못된 링크",
        description: "올바른 YouTube 링크를 입력해주세요.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setSummary("");

    try {
      // TODO: 실제 API 연동 필요
      // 현재는 데모용 딜레이와 샘플 텍스트
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      setSummary(`🎥 **영상 요약**

이 YouTube 영상은 다음과 같은 내용을 다룹니다:

**주요 내용:**
• 첫 번째 핵심 포인트에 대한 설명
• 두 번째 중요한 개념과 예시
• 실용적인 팁과 활용 방법
• 결론 및 요약

**핵심 메시지:**
영상에서 전달하고자 하는 핵심 메시지는 [주제]에 대한 이해를 높이고, 실제 적용할 수 있는 방법을 제시하는 것입니다.

**시청 시간:** 약 10분
**난이도:** 초급~중급

💡 **요약 완료!** 더 자세한 내용은 원본 영상을 시청해보세요.`);

      toast({
        title: "요약 완료!",
        description: "AI가 영상을 성공적으로 요약했습니다.",
      });
    } catch (error) {
      toast({
        title: "오류 발생",
        description: "요약 중 문제가 발생했습니다. 다시 시도해주세요.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      {/* 입력 섹션 */}
      <Card className="p-8 bg-gradient-card shadow-soft border-0">
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-full shadow-glow">
              <Play className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">YouTube 링크 입력</h2>
              <p className="text-muted-foreground">분석하고 싶은 YouTube 영상의 링크를 붙여넣어주세요</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <Input
              type="url"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              placeholder="https://www.youtube.com/watch?v=..."
              className="h-14 text-lg border-2 focus:border-primary transition-all duration-300"
              disabled={isLoading}
            />
            
            <Button
              onClick={handleSummarize}
              disabled={isLoading || !videoUrl.trim()}
              variant="hero"
              size="lg"
              className="w-full h-14 text-lg font-semibold"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-3 animate-spin" />
                  AI가 분석 중...
                </>
              ) : (
                <>
                  <Bot className="w-5 h-5 mr-3" />
                  AI로 요약하기
                </>
              )}
            </Button>
          </div>
        </div>
      </Card>

      {/* 결과 섹션 */}
      {(isLoading || summary) && (
        <Card className="p-8 bg-gradient-card shadow-soft border-0 animate-slide-up">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-full shadow-glow">
              <FileText className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">AI 요약 결과</h2>
              <p className="text-muted-foreground">영상 내용을 분석하여 요약했습니다</p>
            </div>
          </div>

          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-12 space-y-4">
              <div className="relative">
                <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
                <Bot className="absolute inset-0 m-auto w-8 h-8 text-primary animate-pulse-gentle" />
              </div>
              <p className="text-lg font-medium text-foreground">AI가 영상을 분석하고 있습니다...</p>
              <p className="text-sm text-muted-foreground">잠시만 기다려주세요</p>
            </div>
          ) : (
            <div className="prose prose-lg max-w-none">
              <div className="bg-background/50 rounded-lg p-6 whitespace-pre-line text-foreground leading-relaxed">
                {summary}
              </div>
            </div>
          )}
        </Card>
      )}
    </div>
  );
};