'use client'

import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { MessageSquare, User, Clock } from 'lucide-react'

type Feedback = {
  id: string
  nickname: string
  message: string
  created_at: string
}

interface FeedbackListProps {
  refreshTrigger?: number
}

export const FeedbackList = ({ refreshTrigger }: FeedbackListProps) => {
  const [feedback, setFeedback] = useState<Feedback[]>([])
  const [loading, setLoading] = useState(true)

  const fetchFeedback = async () => {
    try {
      const response = await fetch('/api/feedback')
      const data = await response.json()
      
      if (response.ok) {
        setFeedback(data)
      } else {
        console.error('피드백 로딩 실패:', data.message)
      }
    } catch (error) {
      console.error('피드백 로딩 오류:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchFeedback()
  }, [])

  useEffect(() => {
    if (refreshTrigger) {
      fetchFeedback()
    }
  }, [refreshTrigger])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  if (loading) {
    return (
      <Card className="p-6 bg-gradient-card">
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          <p className="ml-3 text-muted-foreground">피드백 로딩 중...</p>
        </div>
      </Card>
    )
  }

  if (feedback.length === 0) {
    return (
      <Card className="p-6 bg-gradient-card">
        <div className="text-center py-8">
          <MessageSquare className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-foreground mb-2">
            아직 피드백이 없습니다
          </h3>
          <p className="text-muted-foreground">
            첫 번째 피드백을 남겨보세요!
          </p>
        </div>
      </Card>
    )
  }

  return (
    <Card className="p-6 bg-gradient-card">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full">
          <MessageSquare className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground">다른 사용자들의 피드백</h3>
          <p className="text-sm text-muted-foreground">
            총 {feedback.length}개의 피드백
          </p>
        </div>
      </div>

      <div className="space-y-4 max-h-96 overflow-y-auto">
        {feedback.map((item) => (
          <div
            key={item.id}
            className="border border-border/50 rounded-lg p-4 bg-background/50 hover:bg-background/80 transition-colors"
          >
            <div className="flex items-start gap-3">
              <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full flex-shrink-0">
                <User className="w-4 h-4 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-medium text-foreground text-sm">
                    {item.nickname}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {formatDate(item.created_at)}
                  </div>
                </div>
                <p className="text-sm text-foreground leading-relaxed">
                  {item.message}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
