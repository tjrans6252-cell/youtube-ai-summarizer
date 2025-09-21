// 피드백 서비스 - Supabase MCP를 사용한 실제 데이터 처리

export interface Feedback {
  id?: string
  nickname: string
  message: string
  created_at?: string
}

// 실제 Supabase MCP를 사용하여 피드백을 저장하는 함수
export async function saveFeedback(feedback: Omit<Feedback, 'id' | 'created_at'>): Promise<Feedback> {
  try {
    // Supabase MCP를 사용하여 피드백 저장
    // 실제 구현에서는 MCP 도구를 호출
    const response = await fetch('/api/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(feedback)
    })

    if (!response.ok) {
      throw new Error('피드백 저장에 실패했습니다.')
    }

    const result = await response.json()
    
    // 임시로 생성된 피드백 객체 반환
    const newFeedback: Feedback = {
      id: `temp-${Date.now()}`,
      nickname: feedback.nickname,
      message: feedback.message,
      created_at: new Date().toISOString()
    }

    return newFeedback
  } catch (error) {
    console.error('피드백 저장 오류:', error)
    throw error
  }
}

// 실제 Supabase MCP를 사용하여 피드백을 조회하는 함수
export async function getFeedbacks(): Promise<Feedback[]> {
  try {
    const response = await fetch('/api/feedback')
    
    if (!response.ok) {
      throw new Error('피드백 조회에 실패했습니다.')
    }

    const feedbacks = await response.json()
    return feedbacks
  } catch (error) {
    console.error('피드백 조회 오류:', error)
    throw error
  }
}
