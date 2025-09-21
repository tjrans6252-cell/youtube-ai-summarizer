# 환경 변수 설정

## 🚨 중요: 환경 변수 설정이 필요합니다!

피드백 기능을 사용하려면 프로젝트 루트에 `.env.local` 파일을 생성해야 합니다.

## 📝 설정 방법

1. **프로젝트 루트에 `.env.local` 파일 생성**
2. **다음 내용을 복사하여 붙여넣기:**

```env
# Supabase 설정
NEXT_PUBLIC_SUPABASE_URL=https://hxyutwviiyrbwbydueli.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh4eXV0d3ZpaXlyYndieWR1ZWxpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgzNzc1NDgsImV4cCI6MjA3Mzk1MzU0OH0.SGvM5QKN5tlLNT2GyRmzof41FTd0Es3feJ6WvM8y-1c
```

## 🔄 설정 후 할 일

1. ✅ `.env.local` 파일 생성 완료
2. 🔄 **개발 서버 재시작**: `npm run dev`
3. 🧪 **피드백 기능 테스트**: http://localhost:3000/feedback

## 📊 테스트 데이터

이미 3개의 테스트 피드백이 데이터베이스에 저장되어 있습니다:
- 김철수 (5점): "정말 유용한 서비스입니다!"
- 이영희 (4점): "AI 요약 품질이 좋네요"
- 박민수 (5점): "무료로 이런 퀄리티의 서비스를 제공해주셔서 감사합니다!"

## ⚠️ 에러 해결

만약 "supabaseUrl is required" 에러가 발생한다면:
1. `.env.local` 파일이 프로젝트 루트에 있는지 확인
2. 파일 내용이 정확히 복사되었는지 확인
3. 개발 서버를 재시작했는지 확인
