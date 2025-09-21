import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 텍스트 콘텐츠 */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                YouTube 영상을
                <span className="bg-gradient-primary bg-clip-text text-transparent"> AI로 요약</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                긴 YouTube 영상을 몇 초 만에 핵심 내용으로 요약해드립니다
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>빠른 AI 분석</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>핵심 내용 추출</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>무료 서비스</span>
                </div>
              </div>
            </div>
          </div>

          {/* 이미지 */}
          <div className="relative animate-slide-up">
            <div className="relative">
              <Image
                src="/hero-image.webp"
                alt="YouTube AI 요약 서비스"
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl shadow-glow"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* 장식 요소 */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-32 -translate-x-32"></div>
    </section>
  );
};