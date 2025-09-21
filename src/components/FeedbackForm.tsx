'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'
import { useToast } from '@/hooks/use-toast'
import { Send, MessageSquare } from 'lucide-react'
// Supabase MCP를 사용하므로 환경 변수 불필요

interface FeedbackFormProps {
  onFeedbackSubmitted?: () => void
}

export const FeedbackForm = ({ onFeedbackSubmitted }: FeedbackFormProps) => {
  const [formData, setFormData] = useState({
    nickname: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.nickname || !formData.message) {
      toast({
        title: "입력 오류",
        description: "닉네임과 메시지를 입력해주세요.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nickname: formData.nickname,
          message: formData.message
        })
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || '피드백 제출에 실패했습니다.')
      }
      
      toast({
        title: "피드백 제출 완료!",
        description: "소중한 의견을 주셔서 감사합니다.",
      })

      // 폼 초기화
      setFormData({
        nickname: '',
        message: ''
      })

      // 피드백 목록 새로고침
      if (onFeedbackSubmitted) {
        onFeedbackSubmitted()
      }
    } catch (error: any) {
      toast({
        title: "제출 실패",
        description: `피드백 제출 중 오류가 발생했습니다: ${error.message}`,
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="p-8 bg-gradient-card shadow-soft border-0">
      <div className="space-y-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-full shadow-glow">
            <MessageSquare className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground">피드백 남기기</h2>
            <p className="text-muted-foreground">서비스 개선을 위한 소중한 의견을 들려주세요</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* 닉네임 */}
          <div className="space-y-2">
            <label htmlFor="nickname" className="text-sm font-medium text-foreground">
              닉네임 *
            </label>
            <Input
              id="nickname"
              name="nickname"
              value={formData.nickname}
              onChange={handleInputChange}
              placeholder="닉네임을 입력해주세요"
              className="h-12"
              required
            />
          </div>

          {/* 메시지 */}
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-foreground">
              의견 *
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="서비스에 대한 의견이나 개선사항을 자유롭게 작성해주세요"
              className="min-h-[120px] resize-none"
              required
            />
          </div>

          {/* 제출 버튼 */}
          <Button
            type="submit"
            disabled={isSubmitting}
            variant="hero"
            size="lg"
            className="w-full h-14 text-lg font-semibold"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 mr-3 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                제출 중...
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-3" />
                피드백 제출하기
              </>
            )}
          </Button>
        </form>
      </div>
    </Card>
  )
}

