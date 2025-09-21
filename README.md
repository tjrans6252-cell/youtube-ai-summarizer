# 🎬 YouTube AI Summarizer

> Next.js 기반 YouTube 영상 AI 요약 서비스

[![Next.js](https://img.shields.io/badge/Next.js-15.5.3-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-MCP-green?style=flat-square&logo=supabase)](https://supabase.com/)

## ✨ 주요 기능

- 🎥 **YouTube URL 입력**: YouTube 링크를 입력하여 영상 분석
- 🤖 **AI 요약**: AI가 영상 내용을 자동으로 요약
- 💬 **피드백 시스템**: 사용자 피드백 수집 및 관리
- 📱 **반응형 디자인**: 모바일 우선 반응형 UI
- 🌏 **한국어 지원**: 완전한 한국어 UI
- 🎨 **모던 디자인**: shadcn/ui 기반 아름다운 인터페이스

## 🚀 기술 스택

### Frontend
- **Next.js 15.5.3** - React 프레임워크
- **TypeScript 5.8.3** - 타입 안전성
- **Tailwind CSS 3.4.17** - 유틸리티 우선 CSS
- **shadcn/ui** - 재사용 가능한 UI 컴포넌트
- **Radix UI** - 접근성 우선 헤드리스 컴포넌트
- **Lucide React** - 아이콘 라이브러리

### Backend & Database
- **Supabase MCP** - 백엔드 서비스
- **PostgreSQL** - 데이터베이스
- **Next.js API Routes** - API 엔드포인트

### 개발 도구
- **ESLint** - 코드 품질 관리
- **PostCSS** - CSS 처리
- **Autoprefixer** - CSS 벤더 프리픽스

## 📁 프로젝트 구조

```
odol-project/
├── app/                          # Next.js App Router
│   ├── api/                     # API 라우트
│   ├── admin/                   # 관리자 페이지
│   ├── feedback/                # 피드백 페이지
│   ├── layout.tsx               # 루트 레이아웃
│   └── page.tsx                 # 홈페이지
├── src/
│   ├── components/              # React 컴포넌트
│   │   ├── ui/                 # shadcn/ui 컴포넌트
│   │   ├── Hero.tsx            # 히어로 섹션
│   │   ├── YouTubeSummarizer.tsx # 메인 기능
│   │   └── FeedbackForm.tsx    # 피드백 폼
│   ├── hooks/                   # 커스텀 훅
│   └── lib/                     # 유틸리티 함수
├── public/                      # 정적 파일
└── .cursor/rules/              # Cursor Rules
```

## 🛠️ 설치 및 실행

### 필수 요구사항
- Node.js 18.0.0 이상
- npm 또는 yarn

### 설치 방법

1. **저장소 클론**
```bash
git clone https://github.com/tjrans6252-cell/youtube-ai-summarizer.git
cd youtube-ai-summarizer
```

2. **의존성 설치**
```bash
npm install
```

3. **개발 서버 실행**
```bash
npm run dev
```

4. **브라우저에서 확인**
```
http://localhost:3000
```

## 🎯 사용 방법

1. **YouTube 링크 입력**: 분석하고 싶은 YouTube 영상의 URL을 입력
2. **AI 요약**: "AI로 요약하기" 버튼을 클릭하여 영상 분석 시작
3. **결과 확인**: AI가 생성한 요약 결과를 확인
4. **피드백 남기기**: 서비스에 대한 의견을 남기고 다른 사용자들의 피드백 확인

## 🔧 개발 가이드

### Cursor Rules
프로젝트에는 포괄적인 Cursor Rules가 설정되어 있습니다:

- **Architecture Rules** - 프로젝트 구조 및 아키텍처 가이드
- **Styling Rules** - 디자인 시스템 및 스타일링 가이드
- **Conventions** - 코딩 컨벤션 및 패턴
- **TypeScript Rules** - TypeScript 사용 가이드
- **Project-specific Rules** - 프로젝트별 특수 규칙

### 코드 스타일
- **컴포넌트**: PascalCase (예: `YouTubeSummarizer`)
- **파일**: PascalCase for components, camelCase for utilities
- **변수**: camelCase (예: `videoUrl`, `isLoading`)
- **함수**: camelCase with descriptive verbs (예: `handleSubmit`)

## 📝 API 문서

### 피드백 API

#### POST `/api/feedback`
피드백 제출
```json
{
  "nickname": "사용자명",
  "message": "피드백 내용"
}
```

#### GET `/api/feedback`
피드백 목록 조회
```json
[
  {
    "id": "uuid",
    "nickname": "사용자명",
    "message": "피드백 내용",
    "created_at": "2025-01-01T00:00:00Z"
  }
]
```

## 🚀 배포

### Lovable 플랫폼
1. [Lovable 프로젝트](https://lovable.dev/projects/a4a179e2-40df-4336-943b-50429c71a2a0) 방문
2. Share → Publish 클릭

### Vercel 배포
```bash
npm run build
npm run start
```

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 📞 문의

프로젝트에 대한 문의사항이 있으시면 이슈를 생성해 주세요.

---

⭐ 이 프로젝트가 도움이 되었다면 Star를 눌러주세요!