/* 경력 기술서 콘텐츠 — 모든 방향(테마)이 공유하는 단일 데이터 소스 */
window.RESUME = {
  profile: {
    name: "김성진",
    nameEn: "KIM SEONGJIN",
    role: "서버 백엔드 엔지니어",
    domain: "Backend · E-commerce",
    email: "seongjin1037@gmail.com",
    links: [
      { label: "Blog", text: "diary-developer.tistory.com", href: "https://diary-developer.tistory.com/category/개발%20이야기" },
      { label: "GitLab", text: "gitlab.com/deepit-labs", href: "https://gitlab.com/deepit-labs" },
      { label: "GitLab", text: "gitlab.com/whor/educational-institute", href: "https://gitlab.com/whor/educational-institute" }
    ]
  },

  nav: [
    { id: "intro", label: "소개" },
    { id: "skills", label: "기술" },
    { id: "career", label: "경력" },
    { id: "projects", label: "프로젝트" },
    { id: "side", label: "사이드" },
    { id: "education", label: "교육" },
    { id: "etc", label: "그 외" }
  ],

  stats: [
    { value: "6", suffix: "년+", label: "개발 경력" },
    { value: "8", suffix: "개+", label: "대형 프로젝트" },
    { value: "70", suffix: "만+", label: "블로그 조회수" },
    { value: "3", suffix: "개", label: "사이드 프로젝트" }
  ],

  intro: {
    lead: "E-커머스 백엔드 전문 개발자",
    body: [
      "상품·주문·프로모션·클레임 등 핵심 도메인을 5년간 설계·개발·운영했습니다.",
      "Java/Spring과 Oracle 기반 대규모 백오피스 환경에서 성능 최적화, 안정성 확보, CI/CD 자동화를 통해 비즈니스 성과로 연결되는 개발을 해왔으며, 대규모 트래픽 최적화·신규 서비스 론칭·레거시 전환까지 폭넓은 프로젝트 경험을 보유하고 있습니다."
    ],
    highlights: ["상품·주문·프로모션·클레임", "Java/Spring", "Oracle"]
  },

  skills: [
    { title: "Backend", items: ["Java", "REST API", "Spring MVC", "Spring Boot", "Spring Batch", "JWT", "Maven", "Gradle"] },
    { title: "Frontend", items: ["Javascript ES5/ES6", "React", "ExtJS", "jQuery"] },
    { title: "AI / Data", items: ["Python", "FastAPI", "pandas · scikit-learn", "Claude API", "Gemini API", "TabPFN · LightGBM"] },
    { title: "Data / Infra", items: ["Oracle · PL/SQL", "MariaDB (AWS RDS)", "MyBatis", "JPA", "QueryDSL", "Redis", "AWS EC2", "Docker", "Nginx", "Linux", "Git", "SVN", "Jenkins (CI/CD)"] }
  ],

  career: [
    {
      period: "2025.11 — 현재",
      duration: "재입사",
      company: "커머스웨어",
      status: "재직 중",
      role: "백엔드 개발자 · 주문팀 프론트 API",
      points: [
        "현대백화점 NCP 구축 프로젝트 완료 (2025.11 — 2026.04)",
        "더현대·투홈 플랫폼 통합 고도화 — 주문상세·고객자산·사은행사·선물받기 API 개발 및 운영"
      ]
    },
    {
      period: "2019.01 — 2024.11",
      duration: "5년 11개월",
      company: "커머스웨어",
      status: "",
      role: "백엔드 개발자 · Java, Spring, Batch, Oracle, PL/SQL, Git/SVN, Jenkins",
      points: [
        "상품/주문/클레임/프로모션 백오피스 개발 및 운영",
        "CTI 인터페이스 개발 및 운영",
        "보이는 ARS 개발",
        "대량 조회 쿼리 설계·튜닝",
        "Jenkins 기반 CI/CD 구축"
      ]
    }
  ],

  projects: [
    {
      name: "프로모션 효율성 분석 자동화",
      status: "파일럿 운영중",
      featured: true,
      period: "2025.11 — 현재 · 사내 자체 과제",
      sections: [
        { title: "프로젝트 개요", items: [
          "프로모션 실적 데이터를 AI가 자연어로 분석·해석하는 사내 자체 과제",
          "Python(pandas/scikit-learn)으로 통계 계산 후 Claude · Gemini · Groq · Ollama 멀티 AI 프로바이더가 결과 해석 — AI에게 원시 데이터 전달 금지 원칙 준수",
          "FastAPI 백엔드 + React+Vite 프론트엔드, PostgreSQL, SSE 스트리밍 챗봇"
        ]},
        { title: "내 역할", items: [
          "전체 아키텍처 설계 (4계층 클린 아키텍처: routers / services / analysis / infra)",
          "분석 엔진 개발: Lift(DiD), 가격 탄력성(선형·곡선 회귀), 구매 트리거(분위수), TabPFN+LightGBM+Ridge 앙상블",
          "멀티 AI 프로바이더 라우팅 설계 — 모델명 패턴으로 Claude·Gemini·Groq·Ollama 자동 선택",
          "의도 분류 13종(lift / elasticity / trigger / forecasting / what-if 등) 챗봇 오케스트레이션",
          "이상 탐지·Root Cause 분석·RAG 서비스(768차원 코사인)·일일 리포트 자동 생성 구현",
          "Claude 프롬프트 캐싱(policies/*.md + cache_control: ephemeral), AI 응답 전량 DB 저장",
          "Slack/SMTP 알림(24h 디바운스), APScheduler 백그라운드 스케줄러"
        ]},
        { title: "성과", items: [
          "Phase 0~P2-2 전 단계 완료, 파일럿 운영 단계 진행 중",
          "16개 정책 파일 MD5 버저닝으로 AI 응답 재현성 확보",
          "프로모션 사전 시뮬레이션·백테스트·이상 탐지 자동화로 분석 리드타임 단축"
        ]}
      ],
      tech: ["Python", "FastAPI", "pandas · scikit-learn", "TabPFN · LightGBM", "React + Vite", "Zustand", "SSE", "PostgreSQL", "Docker", "Claude API", "Gemini API", "Groq API"]
    },
    {
      name: "현대백화점 NCP 구축",
      status: "",
      period: "2025.11 — 2026.04 · 약 6개월 (중도 합류) · 더현대 · 투홈 플랫폼 통합 고도화",
      sections: [
        { title: "프로젝트 개요", items: [
          "현대백화점 더현대·투홈 플랫폼 통합 및 고도화 — NCP(New Commerce Platform) 구축",
          "주문팀 프론트 API 담당으로 중도 합류하여 인수인계 후 개발·운영 전 과정 수행"
        ]},
        { title: "담당 API", items: [
          "주문상세 API",
          "고객자산 API — 예치금 · H.Point · RSVP · 바우처",
          "사은행사 API",
          "선물받기 API"
        ]},
        { title: "내 역할", items: [
          "인수인계 받은 API 영역 개발 및 운영 대응 수행",
          "담당 API 기능 개발 및 운영 안정화",
          "오픈 직전 변경 요청에 대해 영향 범위 분석 및 안정적 반영"
        ]},
        { title: "이슈 대응 사례", items: [
          "바우처 정책 변경 대응 — 옵션 포맷 가변화로 SUBSTR 파싱 오류 발생, 영향 쿼리 전수 도출 후 정규식으로 일괄 교체 · 유/무 케이스 검증 완료"
        ]},
        { title: "성과", items: [
          "통합 플랫폼 오픈 일정 내 안정적 마무리",
          "고객 자산 도메인(포인트·바우처·예치금) 및 복합 주문 흐름 End-to-End 경험",
          "레거시 구조 분석·적응 역량 및 공통화·표준화 필요성 체감"
        ]}
      ],
      tech: []
    },
    {
      name: "할인권 프로모션",
      status: "",
      period: "2024.08 — 2024.10 · 3개월",
      sections: [
        { title: "프로젝트 개요", items: [
          "매달 고객 실적(등급)에 따라 할인권 금액 자동 지급",
          "주문 시 할인이 자동 적용되도록 프로세스 개발"
        ]},
        { title: "내 역할", items: ["백오피스 주문 및 C/S 프로세스에 할인권 적용 로직 개발"] },
        { title: "성과", items: [
          "주문 시 자동할인 적용으로 고객 편의성 증대",
          "할인권 프로모션 자동 적용으로 업무 효율화"
        ]}
      ],
      tech: []
    },
    {
      name: "카드즉시할인 프로모션",
      status: "",
      period: "2024.01 — 2024.07 · 7개월",
      sections: [
        { title: "프로젝트 개요", items: [
          "청구할인의 한계를 개선하기 위해 즉시할인 프로세스를 신규 개발",
          "결제 단계에서 즉시할인 체감 → 구매 전환율 상승",
          "쇼핑몰은 사후 세금 경정청구 / 운영 비용 절감"
        ]},
        { title: "내 역할", items: [
          "백오피스 인바운드 주문 프로세스에 카드 즉시할인 로직 신규 추가",
          "다중 채널(TV, ARS, 웹/앱) 영향 범위 검증 및 사이드 이펙트 최소화",
          "유닛/통합 테스트 케이스 작성, 안정성 확보"
        ]},
        { title: "성과", items: [
          "프로젝트 성공적 완료 및 안정적 운영 중",
          "고객 즉시 할인 체감으로 구매 전환율 상승",
          "쇼핑몰의 세금 경정청구/운영비용 절감 → 매출 기여"
        ]}
      ],
      tech: []
    },
    {
      name: "전시 모듈화",
      status: "",
      period: "2023.10 — 2023.12 · 3개월",
      sections: [
        { title: "프로젝트 개요", items: [
          "이벤트/특정 전시 등 정형화되지 않은 전시 페이지는 매번 신규 개발 필요",
          "개발자 리소스 소모 증가, 협력업체의 즉각적 전시 변경 어려움",
          "전시 모듈화를 통해 컴포넌트 단위로 조합 및 구성 가능하도록 개선"
        ]},
        { title: "내 역할", items: [
          "백오피스 관리 기능 개발: 전시 컴포넌트 API 개발",
          "프론트 조합 구조 설계 지원"
        ]},
        { title: "성과", items: ["반복 개발 리소스 절감", "전시 화면 리드타임 단축"] }
      ],
      tech: []
    },
    {
      name: "PC몰 리뉴얼",
      status: "",
      period: "2023.05 — 2023.08 · 4개월",
      sections: [
        { title: "프로젝트 개요", items: [
          "기존 PC몰 일부 화면의 응답 속도 지연(최대 4~5초) 개선",
          "최신 UI/UX 트렌드 반영을 통한 사용자 경험 개선"
        ]},
        { title: "내 역할", items: ["쿼리 속도 개선", "Spring Cache 적용(빈번 조회 데이터 캐싱)", "UI/UX 개선"] },
        { title: "성과", items: [
          "주요 화면 응답 속도 3~5초 → 1~2초 단축",
          "최신 디자인 적용으로 PC 이탈률 감소 기대"
        ]}
      ],
      tech: []
    },
    {
      name: "보이는 ARS",
      status: "",
      period: "2021.09 — 2022.02 · 6개월",
      sections: [
        { title: "프로젝트 개요", items: [
          "ARS 채널에서 주문/결제/상담 흐름을 시각화하여 고객 편의성 개선",
          "PG 연동을 포함한 주문 및 C/S 프로세스 구축"
        ]},
        { title: "내 역할", items: [
          "PG사 인터페이스 연동",
          "주문 및 C/S(배송지변경, 결제방법변경, 배송조회) 프로세스 설계 및 개발",
          "오픈 이후 안정화 작업 및 유지보수"
        ]},
        { title: "성과", items: ["현재 실제 서비스 안정적으로 운영 중"] }
      ],
      tech: []
    },
    {
      name: "기간계 시스템 고도화",
      status: "",
      period: "2020.01 — 2021.01 · 1년 1개월",
      sections: [
        { title: "프로젝트 개요", items: [
          "Adobe Flex 기반으로 구현된 BackOffice/Partner 시스템",
          "IE 지원 종료 및 느린 응답 속도 개선을 위해 레거시 시스템 전환 필요",
          "Javascript Framework(ExtJS)로 전환 및 주요 업무 고도화"
        ]},
        { title: "내 역할", items: [
          "레거시 시스템에 대한 분석",
          "프로젝트 인원을 대상으로 ExtJS 교육 진행",
          "프로젝트 환경 구성 및 코어/공통 모듈 개발(전환) 및 검증 (AA 역할)",
          "오류·기술 문의 창구 역할, 사내 R&D센터 협업",
          "CTI 연동 · 외부 상담시스템 연동",
          "Jeus, Webtob 설정 인프라 지원",
          "Jenkins 기반 CI/CD 환경 설정 및 서버 배포 지원(배포 자동화)",
          "기존 인프라 구조 파악 및 신규 시스템 배포 파이프라인 정립"
        ]},
        { title: "성과", items: [
          "Adobe Flex 기반 레거시 시스템 JS 프레임워크로 전환 성공",
          "신규 시스템 안정적 오픈 및 현재까지 무중단 운영",
          "방대한 범위의 전환 완료 및 전반적 업무 프로세스 개선 기여"
        ]}
      ],
      tech: []
    },
    {
      name: "호주 시스템 구축/운영",
      status: "",
      period: "2019.03 — 2019.12 · 10개월",
      sections: [
        { title: "프로젝트 개요", items: [
          "첫 해외 출장 프로젝트로 신규 홈쇼핑 시스템 구축",
          "프로젝트 환경설정부터 개발/테스트/운영까지 전 과정 참여"
        ]},
        { title: "내 역할", items: [
          "CTI 인터페이스 개발",
          "ARS 시나리오에 따른 IVR API 연동 개발",
          "BackOffice/Partner 화면 수정, SQL 쿼리 작성",
          "요구사항 및 현지화 반영(다국어 전환)",
          "PC, 모바일 수정사항 개발 지원",
          "운영 배포 후 초기 운영 지원"
        ]},
        { title: "성과", items: [
          "CTI 연동 DirectX 종속 구조를 Event-Driven 방식으로 전환하여 플랫폼 의존성 제거 및 유지보수성 향상",
          "호주 현지 테스트 및 수정으로 안정적 오픈 달성",
          "신규 홈쇼핑 시스템 해외 런칭 기여 및 해외 경험",
          "시스템 전반 이해도 및 문제 해결 능력 향상"
        ]}
      ],
      tech: []
    }
  ],

  side: [
    {
      name: "Fitness In Service",
      status: "진행중",
      period: "2025.10 — 진행중",
      link: { text: "beta.fitness-trainer-assistant.ai.kr", href: "https://beta.fitness-trainer-assistant.ai.kr" },
      sections: [
        { title: "프로젝트 개요", items: [
          "헬스장 운영 전반을 관리하는 종합 플랫폼 — 센터·트레이너·회원·PT 세션·급여·GX 클래스 통합 관리",
          "Domain-Driven Design 기반 Spring Boot 멀티모듈 구조 (BO API + MO API + Batch)",
          "BO API: 관리자 포털 (센터·트레이너·세션·급여·대시보드·결제)",
          "MO API: 회원 앱 (인증·GX 클래스 예약·마이페이지·장바구니·결제)",
          "Batch: PT 세션 합계 자동 집계 (매시 정각 실행)"
        ]},
        { title: "내 역할", items: [
          "전체 아키텍처 설계 및 멀티모듈 프로젝트 환경 구성",
          "BO API / MO API / Batch 전 기능 설계·개발·배포"
        ]},
        { title: "구현 내용 (완료)", items: [
          "BO: 센터·장비·상품·트레이너 배정·상담이력 관리, PT 세션 및 신체기록, 급여 정산, GX 클래스 스케줄·예약·취소 관리, 월 매출/트레이너 랭킹/재등록율 대시보드, 수기 결제 및 결제 취소",
          "MO: 이메일 회원가입·로그인, 이메일 인증, Kakao OAuth 소셜 로그인, GX 클래스 스케줄 조회·예약, 마이페이지(이용권·예약목록·포인트·쿠폰·출석·티어), 장바구니, Toss Payments 결제 연동, SSE 실시간 알림",
          "AWS EC2 배포, Docker 컨테이너화, Nginx 리버스 프록시, SSL 적용",
          "Redis 기반 세션 관리, JWT Access/Refresh 토큰 인증 구조",
          "TraceId AOP, P6Spy SQL 로깅, Spring Mail + Thymeleaf 이메일 발송"
        ]}
      ],
      tech: ["Java 17", "Spring Boot 4.0", "Spring Batch", "MyBatis", "Gradle 멀티모듈", "MariaDB (AWS RDS)", "Redis", "JWT (JJWT)", "AWS EC2", "Docker", "Nginx", "Toss Payments", "Kakao OAuth", "SSE", "SpringDoc OpenAPI"]
    },
    {
      name: "Deepit",
      status: "",
      period: "2023.01 — 2024.06 · 1년 6개월",
      link: { text: "gitlab.com/deepit-labs", href: "https://gitlab.com/deepit-labs" },
      sections: [
        { title: "프로젝트 개요", items: [
          "주식 관련 정보 제공 애플리케이션",
          "데이터 수집 및 가공하여 실시간 제공"
        ]},
        { title: "내 역할", items: [
          "API 및 배치(Quartz 스케줄러) 개발",
          "데이터 수집/자동화(집계) 및 가공",
          "API 기능 명세서 작성"
        ]},
        { title: "성과", items: [
          "JPA, QueryDSL 적용",
          "JWT, 소셜로그인(애플, 카카오) 적용",
          "Android, iOS 구독 결제 적용",
          "텔레그램 봇 연동 / 앱 푸시(Firebase)",
          "AWS EC2 환경설정 및 NGINX 서버 배포 / SSL 적용(Let's Encrypt)"
        ]}
      ],
      tech: ["Spring Boot", "Spring Batch", "Gradle", "JPA", "QueryDSL", "JWT", "AWS EC2", "NGINX"]
    },
    {
      name: "학원 페이지",
      status: "",
      period: "2020.10 — 2020.11 · 2개월",
      link: { text: "gitlab.com/whor/educational-institute", href: "https://gitlab.com/whor/educational-institute" },
      sections: [
        { title: "프로젝트 개요", items: [
          "학원 정보를 소개하는 웹 페이지",
          "별도의 UI/UX 프레임워크/라이브러리 없이 제작"
        ]},
        { title: "내 역할", items: [
          "프로젝트 환경 설정 및 관리",
          "메인 화면, 공통 영역 개발 및 서버 배포",
          "테스트 케이스 작성 및 테스트 진행"
        ]},
        { title: "성과", items: ["반응형 웹(모바일, 태블릿, PC)", "카카오 지도 API 연동"] }
      ],
      tech: ["JSP", "HTML", "Javascript", "CSS"]
    }
  ],

  education: [
    "도쿄 코코로일본어학교 (東京こころ日本語学校, 6개월)",
    "일본어 능력 시험 — JLPT N3 (2025)",
    "정보처리기사 (2018)",
    "Java&Python 기반 응용SW 개발자 양성과정 (2018, 7개월)"
  ],

  etc: [
    {
      title: "기술 블로그",
      meta: "diary-developer.tistory.com",
      href: "https://diary-developer.tistory.com/category/개발%20이야기",
      body: "새롭게 배운 개발 관련 지식 공유를 위한 기술 블로그를 운영하고 있습니다. 2022년부터 작성하여 70만 이상의 누적 조회수를 달성했습니다."
    },
    {
      title: "워킹 홀리데이 · 일본",
      meta: "2024.12 — 2025.11 (11개월)",
      body: "퇴사 후 일본으로 워킹 홀리데이를 떠났습니다. 다양한 사람들을 만나고 새로운 문화를 경험하며 시야를 넓힐 수 있었습니다. 이 경험을 통해 얻은 교훈과 성장한 점들을 앞으로의 삶과 커리어에 잘 녹여내고자 합니다."
    }
  ]
};
