import { Hero } from '@/components/Hero'
import { YouTubeSummarizer } from '@/components/YouTubeSummarizer'
import Link from 'next/link'
import { MessageSquare } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-background">
      <Hero />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <YouTubeSummarizer />
        </div>
      </section>
      
      {/* 피드백 섹션 */}
      <section className="py-16 bg-gradient-card">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              서비스가 어떠셨나요?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              여러분의 소중한 피드백이 더 나은 서비스를 만드는 원동력입니다
            </p>
            <Link
              href="/feedback"
              className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              <MessageSquare className="w-5 h-5" />
              피드백 남기기
            </Link>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 border-t border-border/50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            YouTube AI 요약 서비스 - 영상을 빠르게 이해하세요
          </p>
        </div>
      </footer>
    </div>
  )
}
