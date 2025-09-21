'use client'

import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { Users, MessageSquare } from 'lucide-react'
// Supabase MCP를 사용하므로 환경 변수 불필요

type Feedback = {
  id: string
  nickname: string
  message: string
  created_at: string
}

export const FeedbackDashboard = () => {
  const [feedback, setFeedback] = useState<Feedback[]>([])
  const [stats, setStats] = useState<Record<number, number>>({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // API를 통해 피드백 데이터 조회
        const response = await fetch('/api/feedback')
        const result = await response.json()

        if (!response.ok) {
          throw new Error(result.message || '피드백 데이터를 불러올 수 없습니다.')
        }

        // 임시 데이터 (실제로는 API에서 받아온 데이터 사용)
        const feedbackData = [
          {
            id: '1',
            nickname: '김철수',
            message: '정말 유용한 서비스입니다!',
            created_at: new Date().toISOString()
          },
          {
            id: '2',
            nickname: '이영희',
            message: 'AI 요약 품질이 좋네요.',
            created_at: new Date().toISOString()
          }
        ]

        setFeedback(feedbackData)
        setStats({}) // 평점 통계 제거
      } catch (error) {
        console.error('피드백 데이터 로딩 실패:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const totalFeedback = feedback.length

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* 통계 카드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6 bg-gradient-card">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">총 피드백</p>
              <p className="text-2xl font-bold">{totalFeedback}개</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-card">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <MessageSquare className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">최근 활동</p>
              <p className="text-2xl font-bold">활발</p>
            </div>
          </div>
        </Card>
      </div>


      {/* 최근 피드백 */}
      <Card className="p-6 bg-gradient-card">
        <h3 className="text-lg font-semibold mb-4">최근 피드백</h3>
        <div className="space-y-4">
          {feedback.slice(0, 5).map((item) => (
            <div key={item.id} className="border-b border-border/50 pb-4 last:border-b-0">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="font-medium">{item.nickname}</p>
                </div>
              </div>
              <p className="text-sm text-foreground">{item.message}</p>
              <p className="text-xs text-muted-foreground mt-2">
                {new Date(item.created_at!).toLocaleDateString('ko-KR')}
              </p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
