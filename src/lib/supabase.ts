import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl) {
  throw new Error('NEXT_PUBLIC_SUPABASE_URL 환경 변수가 설정되지 않았습니다. .env.local 파일을 생성하고 NEXT_PUBLIC_SUPABASE_URL을 설정해주세요.')
}

if (!supabaseAnonKey) {
  throw new Error('NEXT_PUBLIC_SUPABASE_ANON_KEY 환경 변수가 설정되지 않았습니다. .env.local 파일을 생성하고 NEXT_PUBLIC_SUPABASE_ANON_KEY를 설정해주세요.')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// 피드백 타입 정의
export interface Feedback {
  id?: string
  name: string
  email: string
  rating: number
  message: string
  created_at?: string
}

// 피드백 관련 함수들
export const feedbackService = {
  // 피드백 제출
  async submitFeedback(feedback: Omit<Feedback, 'id' | 'created_at'>) {
    const { data, error } = await supabase
      .from('feedback')
      .insert([feedback])
      .select()
    
    if (error) {
      throw new Error(error.message)
    }
    
    return data
  },

  // 피드백 목록 조회 (관리자용)
  async getFeedback() {
    const { data, error } = await supabase
      .from('feedback')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) {
      throw new Error(error.message)
    }
    
    return data
  },

  // 평점별 통계 조회
  async getFeedbackStats() {
    const { data, error } = await supabase
      .from('feedback')
      .select('rating')
    
    if (error) {
      throw new Error(error.message)
    }
    
    const stats = data.reduce((acc, item) => {
      acc[item.rating] = (acc[item.rating] || 0) + 1
      return acc
    }, {} as Record<number, number>)
    
    return stats
  }
}

