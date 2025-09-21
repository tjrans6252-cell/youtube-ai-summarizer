# Supabase 설정 가이드

## 1. Supabase 프로젝트 생성

1. [Supabase](https://supabase.com)에 접속하여 새 프로젝트를 생성합니다.
2. 프로젝트 이름을 입력하고 데이터베이스 비밀번호를 설정합니다.
3. 프로젝트가 생성되면 대시보드로 이동합니다.

## 2. 데이터베이스 테이블 생성

1. Supabase 대시보드에서 "SQL Editor"로 이동합니다.
2. `supabase-setup.sql` 파일의 내용을 복사하여 SQL Editor에 붙여넣습니다.
3. "Run" 버튼을 클릭하여 테이블을 생성합니다.

## 3. 환경 변수 설정

프로젝트 루트에 `.env.local` 파일을 생성하고 다음 내용을 추가합니다:

```env
# Supabase 설정
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Supabase URL과 Key 찾는 방법:

1. Supabase 대시보드에서 "Settings" → "API"로 이동합니다.
2. "Project URL"을 복사하여 `NEXT_PUBLIC_SUPABASE_URL`에 입력합니다.
3. "Project API keys" 섹션에서 "anon public" 키를 복사하여 `NEXT_PUBLIC_SUPABASE_ANON_KEY`에 입력합니다.

## 4. 개발 서버 재시작

환경 변수를 설정한 후 개발 서버를 재시작합니다:

```bash
npm run dev
```

## 5. 테스트

1. http://localhost:3000 에 접속합니다.
2. "피드백 남기기" 버튼을 클릭합니다.
3. 피드백 폼을 작성하고 제출합니다.
4. Supabase 대시보드의 "Table Editor"에서 `feedback` 테이블을 확인하여 데이터가 저장되었는지 확인합니다.

## 피드백 기능

- **이름**: 사용자 이름 (필수)
- **이메일**: 연락처 이메일 (필수)
- **평점**: 1-5점 만족도 평가 (필수)
- **의견**: 자유 텍스트 피드백 (필수)

모든 피드백은 Supabase 데이터베이스에 안전하게 저장되며, RLS(Row Level Security)가 활성화되어 있습니다.

