-- Supabase 피드백 테이블 생성 스크립트
-- 이 스크립트를 Supabase SQL Editor에서 실행하세요

-- 피드백 테이블 생성
CREATE TABLE IF NOT EXISTS feedback (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 인덱스 생성
CREATE INDEX IF NOT EXISTS idx_feedback_created_at ON feedback(created_at);
CREATE INDEX IF NOT EXISTS idx_feedback_rating ON feedback(rating);

-- RLS (Row Level Security) 활성화
ALTER TABLE feedback ENABLE ROW LEVEL SECURITY;

-- 모든 사용자가 피드백을 제출할 수 있도록 정책 설정
CREATE POLICY "Anyone can insert feedback" ON feedback
  FOR INSERT WITH CHECK (true);

-- 모든 사용자가 피드백을 조회할 수 있도록 정책 설정 (읽기 전용)
CREATE POLICY "Anyone can view feedback" ON feedback
  FOR SELECT USING (true);

