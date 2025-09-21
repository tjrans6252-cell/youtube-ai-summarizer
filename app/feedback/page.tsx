'use client'

import { FeedbackForm } from '@/components/FeedbackForm'
import { FeedbackList } from '@/components/FeedbackList'
import Link from 'next/link'
import { ArrowLeft, Home } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function FeedbackPage() {
  const [refreshTrigger, setRefreshTrigger] = useState(0)

  const handleFeedbackSubmitted = () => {
    setRefreshTrigger(prev => prev + 1)
  }
  return (
    <div className="min-h-screen bg-gradient-background py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
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
              피드백
            </h1>
            <p className="text-xl text-muted-foreground">
              YouTube AI 요약기 서비스를 더욱 개선하기 위해<br />
              여러분의 소중한 의견을 들려주세요
            </p>
          </div>
          
          {/* 피드백 폼과 목록을 나란히 배치 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* 피드백 작성 폼 */}
            <div>
              <FeedbackForm onFeedbackSubmitted={handleFeedbackSubmitted} />
            </div>
            
            {/* 피드백 목록 */}
            <div>
              <FeedbackList refreshTrigger={refreshTrigger} />
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-4">
              피드백은 서비스 개선을 위해서만 사용되며, 개인정보는 안전하게 보호됩니다.
            </p>
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

