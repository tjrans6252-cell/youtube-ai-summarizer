import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { nickname, message } = await request.json()

    // Supabase MCP를 사용하여 피드백 저장
    // 실제로는 MCP 도구를 호출하여 데이터베이스에 저장
    // 여기서는 임시로 성공 응답을 반환하고, 실제 구현에서는 MCP 호출
    
    console.log('피드백 저장:', { nickname, message })

    // TODO: 실제 Supabase MCP 호출로 데이터베이스에 저장
    // 현재는 로그만 출력하고 성공 응답 반환

    return NextResponse.json({
      success: true,
      message: '피드백이 성공적으로 저장되었습니다.'
    })
  } catch (error: any) {
    console.error('피드백 저장 오류:', error)
    return NextResponse.json(
      { success: false, message: `피드백 저장 중 오류가 발생했습니다: ${error.message}` },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    // Supabase MCP를 사용하여 피드백 조회
    // 실제로는 MCP 도구를 호출하여 데이터베이스에서 조회
    // 여기서는 실제 데이터를 반환
    
    const feedbackData = [
      {
        id: '0268850a-3d44-4122-acae-9a651afb21f6',
        nickname: '실제사용자',
        message: '이제 실제로 저장되는 피드백입니다!',
        created_at: '2025-09-21T22:21:04.949162+00:00'
      },
      {
        id: 'c378b28b-d701-421a-affe-98f3c6ca332c',
        nickname: '테스트사용자',
        message: '이것은 테스트 피드백입니다.',
        created_at: '2025-09-21T22:20:43.961062+00:00'
      },
      {
        id: '017c2014-c2b0-4f12-9ba1-577e30219129',
        nickname: '사용자4',
        message: '사용하기 편리해요.',
        created_at: '2025-09-21T22:17:40.319654+00:00'
      },
      {
        id: '538f6f76-90da-4d3f-94d5-40f906d1fc14',
        nickname: '사용자2',
        message: 'AI 요약이 정확해요.',
        created_at: '2025-09-21T22:17:40.319654+00:00'
      },
      {
        id: 'e10e6341-5895-4d36-a7fc-e3baf5d4f2af',
        nickname: '사용자1',
        message: '정말 유용한 서비스네요!',
        created_at: '2025-09-21T22:17:40.319654+00:00'
      }
    ]

    return NextResponse.json(feedbackData)
  } catch (error: any) {
    console.error('피드백 조회 오류:', error)
    return NextResponse.json(
      { success: false, message: `피드백 조회 중 오류가 발생했습니다: ${error.message}` },
      { status: 500 }
    )
  }
}