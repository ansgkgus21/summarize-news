import React, { useState } from 'react';
import { 
  Search, 
  Menu, 
  User, 
  ShieldCheck, 
  Trash2, 
  History, 
  Bookmark, 
  Settings, 
  Plus, 
  MessageSquare,
  ArrowRight,
  TrendingUp,
  Brain,
  Library,
  Newspaper,
  CheckCircle2,
  ChevronRight,
  AlertTriangle,
  ArrowUpCircle,
  HelpCircle,
  Mail,
  Lock,
  Quote
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
type Page = 'home' | 'login' | 'signup' | 'dashboard' | 'profile';

// --- Mock Data ---
const USER = {
  name: "지호 Kim 박사",
  title: "디지털 인문학 박사",
  email: "jiho.kim@chronicle.ai",
  bio: "디지털 인문학 및 AI 윤리 연구원. Chronicle AI를 통해 지식의 깊이를 더하고 있습니다.",
  joinDate: "2023년 11월",
  savedReports: 128,
  monthlySummaries: 42,
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop"
};

// --- Components ---

const Header = ({ setPage }: { setPage: (p: Page) => void }) => (
  <header className="sticky top-0 z-50 w-full border-b border-hairline bg-canvas">
    <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
      <div className="flex items-center gap-8">
        <div 
          onClick={() => setPage('home')}
          className="flex cursor-pointer items-center gap-2 font-serif text-2xl font-bold text-ink"
        >
          <span className="text-primary text-xl">✦</span> Chronicle AI
        </div>
        <nav className="hidden md:flex gap-6">
          {['요약', '탐색', '아카이브', '멤버십'].map(item => (
            <button key={item} className="text-sm font-medium text-muted hover:text-ink transition-colors cursor-pointer">
              {item}
            </button>
          ))}
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <button 
          onClick={() => setPage('login')}
          className="text-sm font-medium text-muted hover:text-ink transition-colors px-4 py-2 cursor-pointer"
        >
          로그인
        </button>
        <button 
          onClick={() => setPage('signup')}
          className="rounded-md bg-primary px-6 py-2 text-sm font-medium text-white hover:bg-primary-light transition-all active:scale-95 cursor-pointer"
        >
          구독하기
        </button>
      </div>
    </div>
  </header>
);

const Footer = () => (
  <footer className="w-full border-t border-hairline bg-canvas py-16">
    <div className="mx-auto max-w-7xl px-6">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
        <div className="col-span-2">
          <div className="flex items-center gap-2 font-serif text-xl font-bold text-ink mb-4">
            <span className="text-primary">✦</span> Chronicle AI
          </div>
          <p className="max-w-xs text-sm text-muted leading-relaxed">
            현대 지식인을 위해 설계된 AI 기반 지식 플랫폼입니다.
            깊이와 맥락을 담아 정보를 선별된 지혜로 전환합니다.
          </p>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-ink mb-6">제품</h4>
          <ul className="space-y-4 text-sm text-muted">
            <li>요약</li>
            <li>탐색</li>
            <li>멤버십</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-ink mb-6">법적 고지</h4>
          <ul className="space-y-4 text-sm text-muted">
            <li>개인정보 처리방침</li>
            <li>서비스 이용약관</li>
            <li>윤리적 AI 선언문</li>
          </ul>
        </div>
      </div>
      <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-hairline pt-8 md:flex-row">
        <p className="text-xs text-muted-soft">© 2024 Chronicle AI. 모든 권리 보유. 현대 지식인을 위해 구축되었습니다.</p>
        <div className="flex items-center gap-2 text-xs text-muted-soft uppercase tracking-widest">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-teal"></span>
          시스템 정상 작동 중
        </div>
      </div>
    </div>
  </footer>
);

// --- Pages ---

const HomePage: React.FC<{ setPage: (p: Page) => void }> = ({ setPage }) => (
  <motion.div 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    exit={{ opacity: 0 }}
    className="bg-canvas"
  >
    <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
        <div>
          <div className="mb-6 flex items-center gap-2 text-primary">
            <Newspaper className="h-4 w-4" />
            <span className="text-xs font-bold uppercase tracking-widest">지적 통찰의 새로운 기준</span>
          </div>
          <h1 className="mb-8 text-6xl leading-[1.05] text-ink font-sans font-extralight tracking-tight">
            지식의 <br />
            <span className="italic text-primary">본질</span>을 추출하다.
          </h1>
          <p className="mb-10 max-w-lg text-lg leading-relaxed text-body">
            Chronicle AI는 단순한 요약을 넘어 문제의 맥락과 핵심을 파악합니다. 
            독자적인 AI 엔진이 매일 수천 개의 리소스를 분석하여 여러분에게 꼭 필요한 통찰을 제공합니다.
          </p>
          <div className="flex gap-4">
            <button 
              onClick={() => setPage('dashboard')}
              className="rounded-lg bg-primary px-8 py-4 text-lg font-medium text-white shadow-lg shadow-primary/20 hover:bg-primary-light transition-all cursor-pointer"
            >
              탐색 시작하기
            </button>
            <button className="rounded-lg border border-hairline bg-transparent px-8 py-4 text-lg font-medium text-ink hover:bg-surface-soft transition-all cursor-pointer">
              작동 원리
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-2xl bg-surface-dark p-8 shadow-2xl border border-hairline/10">
            <div className="mb-8 flex items-center justify-between border-b border-hairline/10 pb-4">
              <div className="flex gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-red-500/40"></div>
                <div className="h-2.5 w-2.5 rounded-full bg-amber-500/40"></div>
                <div className="h-2.5 w-2.5 rounded-full bg-teal-500/40"></div>
              </div>
              <span className="font-mono text-[10px] text-muted-soft">chronicle_v2.0.sh</span>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Brain className="h-5 w-5 text-accent-teal" />
                <div className="flex-1">
                  <div className="mb-2 text-[10px] font-bold uppercase tracking-widest text-primary-fixed-dim">글로벌 학술지 분석 중...</div>
                  <div className="h-1 w-full rounded-full bg-muted/20">
                    <motion.div 
                      initial={{ width: 0 }} 
                      animate={{ width: '72%' }}
                      transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                      className="h-full rounded-full bg-accent-teal" 
                    />
                  </div>
                </div>
              </div>
              <div className="rounded-xl bg-surface-dark-elevated p-6 border border-hairline/5">
                <h3 className="mb-3 font-serif text-xl text-canvas">경제적 전환점: 2024년 분석</h3>
                <p className="text-sm leading-relaxed text-muted-soft">
                  연준의 최근 금리 동결 결정은 기술 산업의 투자 심리에 중대한 변화를 예고합니다...
                  <span className="font-bold text-accent-amber"> 주요 요인:</span> 유동성, 지정학, AI 자본화.
                </p>
                <div className="mt-4 flex gap-2">
                  <span className="rounded bg-primary/20 px-2 py-1 text-[10px] uppercase font-bold text-primary-fixed-dim border border-primary/20 text-xs">금융</span>
                  <span className="rounded bg-accent-teal/20 px-2 py-1 text-[10px] uppercase font-bold text-accent-teal border border-accent-teal/20 text-xs">전략</span>
                </div>
              </div>
              <div className="flex items-center gap-2 font-mono text-[11px] text-muted-soft italic">
                <CheckCircle2 className="h-3 w-3" />
                1,240개의 소스 분석 완료 (15초 소요)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </motion.div>
);

const ProfilePage: React.FC = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }} 
    animate={{ opacity: 1, y: 0 }} 
    exit={{ opacity: 0, y: -20 }}
    className="mx-auto max-w-7xl px-6 py-24"
  >
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
      {/* Sidebar Summary */}
      <aside className="lg:col-span-3">
        <div className="rounded-2xl bg-surface-card p-8 border border-hairline/50 text-center sticky top-28">
          <div className="relative mx-auto mb-6 h-28 w-28">
            <img src={USER.avatar} alt="Profile" className="h-full w-full rounded-full object-cover border-4 border-canvas shadow-xl" />
            <div className="absolute bottom-1 right-1 h-5 w-5 rounded-full border-4 border-surface-card bg-accent-teal"></div>
          </div>
          <h2 className="mb-1 text-2xl font-serif text-ink">{USER.name}</h2>
          <div className="mb-4 inline-block rounded-full bg-surface-cream-strong px-4 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">
            학자 레벨
          </div>
          <p className="mb-8 text-sm leading-relaxed text-muted">{USER.bio}</p>
          <div className="space-y-4 border-t border-hairline py-6 text-sm">
            <div className="flex justify-between">
              <span className="text-muted">가입일</span>
              <span className="font-medium text-ink">{USER.joinDate}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted">보고서</span>
              <span className="font-medium text-ink">{USER.savedReports}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted">요약본</span>
              <span className="font-medium text-ink">{USER.monthlySummaries}</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Settings */}
      <div className="lg:col-span-9">
        <div className="mb-12">
          <h1 className="mb-2 text-5xl text-ink">프로필 설정</h1>
          <p className="text-muted">계정 정보 및 보안을 관리하세요. 변경 사항은 즉시 동기화됩니다.</p>
        </div>

        <div className="space-y-8">
          {/* Personal Info */}
          <section className="rounded-2xl border border-hairline bg-white p-8 shadow-sm">
            <div className="mb-8 flex items-center gap-3">
              <User className="h-5 w-5 text-primary" />
              <h3 className="font-serif text-xl text-ink">개인 정보</h3>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-muted-soft">이름</label>
                <input 
                  type="text" 
                  defaultValue={USER.name} 
                  className="w-full rounded-lg border border-hairline bg-canvas px-4 py-3 outline-none focus:ring-1 focus:ring-primary transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-muted-soft">이메일 주소</label>
                <input 
                  type="email" 
                  defaultValue={USER.email} 
                  className="w-full rounded-lg border border-hairline bg-canvas px-4 py-3 outline-none focus:ring-1 focus:ring-primary transition-all"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-muted-soft">자기소개</label>
                <textarea 
                  rows={4} 
                  defaultValue={USER.bio}
                  className="w-full rounded-lg border border-hairline bg-canvas px-4 py-3 outline-none focus:ring-1 focus:ring-primary transition-all resize-none"
                />
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button className="rounded-lg bg-ink px-8 py-3 font-medium text-white hover:bg-body active:scale-[0.98] transition-all cursor-pointer">
                변경사항 저장
              </button>
            </div>
          </section>

          {/* Security */}
          <section className="rounded-2xl border border-hairline bg-white p-8 shadow-sm">
            <div className="mb-8 flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-primary" />
              <h3 className="font-serif text-xl text-ink">보안 및 액세스</h3>
            </div>
            <div className="divide-y divide-hairline">
              <div className="flex items-center justify-between py-6">
                <div>
                  <h4 className="font-medium text-ink">비밀번호 변경</h4>
                  <p className="text-sm text-muted">마지막 변경: 3개월 전</p>
                </div>
                <button className="rounded-lg border border-hairline px-6 py-2 text-sm font-medium hover:bg-canvas transition-colors cursor-pointer">
                  재설정
                </button>
              </div>
              <div className="flex items-center justify-between py-6">
                <div>
                  <h4 className="font-medium text-ink">2단계 인증 (2FA)</h4>
                  <p className="text-sm text-muted">계정에 추가적인 보안 계층을 추가하세요.</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-accent-teal">활성화됨</span>
                  <button className="text-sm font-bold text-primary cursor-pointer">관리</button>
                </div>
              </div>
            </div>
          </section>

          {/* Danger Zone */}
          <section className="rounded-2xl border border-hairline bg-surface-container p-8">
            <div className="mb-8 flex items-center gap-3">
              <AlertTriangle className="h-5 w-5 text-red-600" />
              <h3 className="font-serif text-xl text-red-600">위험 구역</h3>
            </div>
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl">
                <h4 className="font-medium text-ink">계정 삭제</h4>
                <p className="text-sm text-muted">계정을 삭제하면 복구할 수 없습니다. 128개의 보고서를 포함한 모든 데이터가 영구적으로 삭제됩니다.</p>
              </div>
              <button className="whitespace-nowrap rounded-lg bg-red-600 px-8 py-3 font-medium text-white hover:opacity-90 transition-all shadow-sm cursor-pointer">
                영구 삭제
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  </motion.div>
);

const AuthPage: React.FC<{ type: 'login' | 'signup', setPage: (p: Page) => void }> = ({ type, setPage }) => (
  <motion.div 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    exit={{ opacity: 0 }}
    className="flex min-h-[calc(100vh-80px)]"
  >
    {/* Left Editorial Visual */}
    <div className="relative hidden w-1/2 bg-surface-dark p-16 md:flex flex-col justify-between overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1200" 
          className="h-full w-full object-cover mix-blend-overlay"
          alt="Atmosphere"
        />
      </div>
      <div className="relative z-10">
        <div className="mb-12 flex items-center gap-2 font-serif text-2xl font-bold text-canvas">
          <span className="text-primary-fixed-dim">✦</span> Chronicle AI
        </div>
        <div className="max-w-md">
          {type === 'signup' ? (
            <h1 className="mb-6 text-5xl leading-tight text-canvas">
              깊이를 더하는 <br />
              <span className="italic text-primary-fixed-dim">독서 경험</span>
            </h1>
          ) : (
            <div className="space-y-8">
              <Quote className="h-10 w-10 text-primary-fixed-dim shrink-0" />
              <h1 className="text-4xl text-primary-fixed-dim leading-tight">
                "지식은 단순히 정보의 집합이 아니라, 소음 속에서 의미를 찾는 통찰력입니다."
              </h1>
            </div>
          )}
          <p className="mt-8 text-muted-soft leading-relaxed">
            현대 지식인을 위한 고급 AI 요약 시스템. 연구와 학습의 혁신을 경험하세요.
          </p>
        </div>
      </div>
      <div className="relative z-10 flex gap-8">
         <div className="flex flex-col">
          <span className="font-serif text-2xl text-canvas">12k+</span>
          <span className="text-[10px] font-bold uppercase tracking-widest text-muted-soft">활성 독자</span>
         </div>
         <div className="flex flex-col">
          <span className="font-serif text-2xl text-canvas">4.9/5</span>
          <span className="text-[10px] font-bold uppercase tracking-widest text-muted-soft">사용자 만족도</span>
         </div>
      </div>
    </div>

    {/* Right Auth Form */}
    <div className="flex w-full flex-col items-center justify-center p-8 bg-canvas md:w-1/2">
      <div className="w-full max-w-sm">
        <div className="mb-10 text-center md:text-left">
          <h2 className="mb-2 text-4xl text-ink font-serif">{type === 'signup' ? '계정 만들기' : '환영합니다'}</h2>
          <p className="text-sm text-muted">{type === 'signup' ? 'Chronicle AI와 함께 통찰력을 넓혀보세요.' : '지적 여정을 계속하세요.'}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <button className="flex items-center justify-center gap-2 rounded-lg border border-hairline py-2.5 text-sm font-medium hover:bg-surface-soft transition-colors cursor-pointer">
             <span className="text-blue-500">G</span> Google
          </button>
          <button className="flex items-center justify-center gap-2 rounded-lg border border-hairline py-2.5 text-sm font-medium hover:bg-surface-soft transition-colors cursor-pointer">
            <User className="h-4 w-4" />
            Apple
          </button>
        </div>

        <div className="relative mb-8 text-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-hairline"></div>
          </div>
          <span className="relative bg-canvas px-4 text-[10px] font-bold uppercase tracking-widest text-muted-soft">또는 이메일로 계속하기</span>
        </div>

        <form className="space-y-6">
          {type === 'signup' && (
            <div className="space-y-1.5 focus-within:text-primary">
              <label className="ml-1 text-[10px] font-bold uppercase tracking-widest text-muted-soft transition-colors">이름</label>
              <input type="text" placeholder="홍길동" className="w-full rounded-lg border border-hairline bg-transparent px-4 py-3 outline-none focus:border-primary transition-all" />
            </div>
          )}
          <div className="space-y-1.5 focus-within:text-primary">
            <label className="ml-1 text-[10px] font-bold uppercase tracking-widest text-muted-soft transition-colors">이메일 주소</label>
            <input type="email" placeholder="name@example.com" className="w-full rounded-lg border border-hairline bg-transparent px-4 py-3 outline-none focus:border-primary transition-all" />
          </div>
          <div className="space-y-1.5 focus-within:text-primary">
            <div className="flex justify-between">
              <label className="ml-1 text-[10px] font-bold uppercase tracking-widest text-muted-soft transition-colors">비밀번호</label>
              {type === 'login' && <button type="button" className="text-[10px] font-bold text-primary uppercase tracking-widest hover:underline cursor-pointer">비밀번호 찾기</button>}
            </div>
            <input type="password" placeholder="••••••••" className="w-full rounded-lg border border-hairline bg-transparent px-4 py-3 outline-none focus:border-primary transition-all" />
          </div>
          <button 
            type="button"
            onClick={() => setPage('dashboard')}
            className="w-full rounded-lg bg-primary py-4 font-serif text-xl font-medium text-white hover:opacity-90 active:scale-[0.98] transition-all shadow-md cursor-pointer"
          >
            {type === 'signup' ? '무료로 시작하기' : '로그인'}
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-body">
          {type === 'signup' ? '이미 계정이 있으신가요?' : "계정이 없으신가요?"} {' '}
          <button 
            onClick={() => setPage(type === 'signup' ? 'login' : 'signup')}
            className="font-bold text-primary hover:underline cursor-pointer"
          >
            {type === 'signup' ? '로그인' : '지금 가입하기'}
          </button>
        </p>
      </div>
    </div>
  </motion.div>
);

const DashboardPage: React.FC = () => (
  <motion.div 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    exit={{ opacity: 0 }}
    className="flex h-[calc(100vh-80px)] overflow-hidden"
  >
    {/* Side Navigation */}
    <aside className="w-64 shrink-0 border-r border-hairline bg-surface-soft p-4 flex flex-col gap-6">
      <div className="flex items-center gap-3 px-2">
        <img src={USER.avatar} className="h-10 w-10 rounded-full object-cover" alt="User" />
        <div className="flex flex-col">
          <span className="text-sm font-bold text-ink">편집 데스크</span>
          <span className="text-[10px] text-muted-soft">학자 레벨</span>
        </div>
      </div>
      <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-2.5 text-sm font-medium text-white active:scale-95 transition-transform cursor-pointer">
        <Plus className="h-4 w-4" /> 새 요약
      </button>
      <nav className="flex flex-col gap-1">
        <div className="flex items-center gap-3 rounded-lg bg-primary/10 px-4 py-3 text-sm font-medium text-primary">
          <MessageSquare className="h-4 w-4" /> 현재 대화
        </div>
        <div className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-body hover:bg-hairline transition-colors cursor-pointer">
          <History className="h-4 w-4" /> 기록
        </div>
        <div className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-body hover:bg-hairline transition-colors cursor-pointer">
          <Bookmark className="h-4 w-4" /> 저장된 보고서
        </div>
        <div className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-body hover:bg-hairline transition-colors cursor-pointer">
          <Settings className="h-4 w-4" /> 설정
        </div>
      </nav>
    </aside>

    {/* Chat Content */}
    <main className="flex-1 overflow-y-auto bg-canvas p-12 no-scrollbar pb-32">
      <div className="mx-auto max-w-3xl space-y-12">
        {/* User Prompt */}
        <div className="flex justify-end">
          <div className="max-w-[80%] rounded-2xl rounded-tr-none bg-surface-variant p-6 text-ink">
            디지털 인문학의 미래와 AI가 문학 비평에 미치는 영향에 대해 요약해줘.
          </div>
        </div>

        {/* AI response */}
        <div className="space-y-8">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
            <Brain className="h-4 w-4" /> Chronicle 분석 엔진
          </div>
          
          <div className="rounded-2xl bg-surface-card p-10 border border-hairline/50">
            <h2 className="mb-6 text-4xl font-serif text-ink">디지털 인문학의 새로운 지평</h2>
            <p className="text-lg leading-relaxed text-body">
              인공지능은 단순한 도구를 넘어 문학 비평의 새로운 방법론을 제시하고 있습니다. 
              '원거리 독해(Distant Reading)'를 통해 수천 개의 텍스트를 동시에 분석하고, 
              기존의 미시적 접근으로는 발견할 수 없었던 거시적 서사 패턴을 포착합니다...
            </p>
          </div>

          <div className="rounded-2xl bg-white p-10 border border-hairline shadow-sm">
            <h3 className="mb-8 font-serif text-2xl italic text-ink border-b border-hairline pb-4">비평의 세 가지 변화</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-primary">01 데이터 기반 분석</span>
                <p className="text-sm text-body leading-relaxed">단어 빈도와 상관관계 맵을 통해 작가의 무의식적 스타일을 정량화합니다.</p>
              </div>
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-primary">02 맥락적 확장</span>
                <p className="text-sm text-body leading-relaxed">역사적 아카이브와의 교차 검증을 통해 사회적 맥락을 실시간으로 재구성합니다.</p>
              </div>
            </div>
          </div>

          {/* Technical Chrome */}
          <div className="rounded-2xl bg-surface-dark p-8 font-mono text-[13px] text-accent-teal border border-hairline/5">
            <div className="mb-4 flex items-center gap-2 opacity-50 border-b border-hairline/10 pb-4">
              <div className="h-2 w-2 rounded-full bg-red-500/60"></div>
              <div className="h-2 w-2 rounded-full bg-amber-500/60"></div>
              <div className="h-2 w-2 rounded-full bg-teal-500/60"></div>
              <span className="ml-2">analysis_engine.py</span>
            </div>
            <pre className="overflow-x-auto text-xs whitespace-pre-wrap">
{`def analyze_literary_sentiment(text):
    tokens = chronicle_tokenizer.encode(text)
    sentiment_map = model.compute_vector_space(tokens)
    return interpret_latent_themes(sentiment_map)

# 분석 엔진 실행 중...
# 결과: 서사 응집력 87% 확인`}
            </pre>
          </div>
        </div>

        {/* Floating Input Area (Simulated) */}
        <div className="fixed bottom-12 left-[calc(16rem+48px)] right-80 mx-auto max-w-3xl">
          <div className="relative">
            <input 
              type="text" 
              placeholder="추가 질문을 입력하세요..." 
              className="w-full rounded-2xl border border-hairline bg-white px-8 py-5 pr-20 shadow-xl outline-none focus:border-primary transition-all"
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-primary hover:scale-110 transition-transform cursor-pointer">
              <ArrowUpCircle className="h-10 w-10" />
            </button>
          </div>
        </div>
      </div>
    </main>

    {/* Right Sidebar Metadata */}
    <aside className="hidden lg:flex w-80 shrink-0 border-l border-hairline bg-surface-dark p-8 flex-col gap-12 overflow-y-auto no-scrollbar">
      <section>
        <h4 className="mb-6 text-[10px] font-bold uppercase tracking-widest text-primary-fixed-dim border-b border-hairline/20 pb-2">주요 지표</h4>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-xl bg-surface-dark-elevated p-4">
            <span className="text-[10px] uppercase text-muted-soft">깊이</span>
            <div className="text-3xl text-canvas">9.4</div>
          </div>
          <div className="rounded-xl bg-surface-dark-elevated p-4">
            <span className="text-[10px] uppercase text-muted-soft">신뢰도</span>
            <div className="text-3xl text-accent-teal">98%</div>
          </div>
        </div>
      </section>

      <section>
        <h4 className="mb-6 text-[10px] font-bold uppercase tracking-widest text-primary-fixed-dim border-b border-hairline/20 pb-2">시각적 참조</h4>
        <div className="space-y-4">
          <div className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-muted cursor-pointer transition-transform hover:scale-[1.02]">
            <img src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=400" className="h-full w-full object-cover transition-transform group-hover:scale-110" alt="Ref" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 p-4">
              <p className="text-[10px] font-bold text-white uppercase tracking-widest">역사적 아카이브 맵</p>
            </div>
          </div>
          <div className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-muted cursor-pointer transition-transform hover:scale-[1.02]">
            <img src="https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=400" className="h-full w-full object-cover transition-transform group-hover:scale-110" alt="Ref" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 p-4">
              <p className="text-[10px] font-bold text-white uppercase tracking-widest">서사 형태학</p>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-auto pt-8 border-t border-hairline/10">
        <p className="text-[10px] text-muted-soft italic uppercase tracking-tighter leading-relaxed">
          © 2024 Chronicle AI. 학술 연구를 위해 최적화된 현대적 에디토리얼 인텔리전스.
        </p>
        <div className="mt-4 flex gap-4">
          <HelpCircle className="h-4 w-4 text-muted-soft" />
          <Settings className="h-4 w-4 text-muted-soft" />
        </div>
      </div>
    </aside>
  </motion.div>
);

// --- Root App ---

export default function App() {
  const [page, setPage] = useState<Page>('home');

  const goToProfile = () => setPage('profile');

  return (
    <div className="min-h-screen bg-canvas font-sans selection:bg-primary/20 selection:text-primary">
      {/* Persistant Top Header for all except Auth Screens */}
      {page !== 'login' && page !== 'signup' && (
        <Header setPage={setPage} />
      )}
      
      {/* Quick context menu for profile if logged in (simulated) */}
      {page === 'dashboard' && (
        <div className="fixed top-4 right-4 z-[60]">
             <button 
              onClick={goToProfile}
              className="p-2 rounded-full bg-white shadow-xl border border-hairline hover:bg-surface-soft transition-colors cursor-pointer"
             >
                <User className="h-5 w-5 text-ink" />
             </button>
        </div>
      )}

      <main>
        <AnimatePresence mode="wait">
          {page === 'home' && <HomePage key="home" setPage={setPage} />}
          {page === 'login' && <AuthPage key="login" type="login" setPage={setPage} />}
          {page === 'signup' && <AuthPage key="signup" type="signup" setPage={setPage} />}
          {page === 'dashboard' && <DashboardPage key="dashboard" />}
          {page === 'profile' && <ProfilePage key="profile" />}
        </AnimatePresence>
      </main>

      {/* Persistence Footer only on basic pages */}
      {(page === 'home' || page === 'profile') && <Footer />}
    </div>
  );
}
