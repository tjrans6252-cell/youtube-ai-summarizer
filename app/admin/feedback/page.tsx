import { FeedbackDashboard } from '@/components/FeedbackDashboard'
import Link from 'next/link'
import { ArrowLeft, Home } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function AdminFeedbackPage() {
  return (
    <div className="min-h-screen bg-gradient-background py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* 뒤로가기 버튼 */}
          <div className="mb-8">
            <Link href="/">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                홈으로 돌아가기
              </Button>
            </Link>
          </div>

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              피드백 대시보드
            </h1>
            <p className="text-xl text-muted-foreground">
              사용자 피드백 현황과 통계를 확인하세요
            </p>
          </div>
          
          <FeedbackDashboard />
          
          <div className="mt-12 text-center">
            <Link href="/">
              <Button variant="hero" className="flex items-center gap-2 mx-auto">
                <Home className="w-4 h-4" />
                홈페이지로 이동
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
