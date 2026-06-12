// Shared icons, components, and helpers

// ── Icons (24×24 stroke-based) ───────────────────────────
export const Icon = {
  bike:    (p={}) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="6" cy="17" r="3.5"/><circle cx="18" cy="17" r="3.5"/><path d="M6 17l4-8h5l3 8M10 9l-1-3h-2M15 9l2-3"/></svg>,
  map:     (p={}) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M9 4l-6 2.5v14L9 18l6 2.5 6-2.5V4l-6 2.5L9 4z"/><path d="M9 4v14M15 6.5v14"/></svg>,
  chat:    (p={}) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M21 12c0 4-4 7-9 7-1.2 0-2.4-.2-3.4-.5L4 20l1.3-3.6C4.5 15 4 13.6 4 12c0-4 4-7 9-7s8 3 8 7z"/></svg>,
  list:    (p={}) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M9 6h11M9 12h11M9 18h11"/><rect x="3" y="4.5" width="3" height="3" rx="0.6"/><rect x="3" y="10.5" width="3" height="3" rx="0.6"/><rect x="3" y="16.5" width="3" height="3" rx="0.6"/></svg>,
  money:   (p={}) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="3" y="6" width="18" height="13" rx="2"/><circle cx="12" cy="12.5" r="3"/><path d="M6 9.5h.01M18 15.5h.01"/></svg>,
  user:    (p={}) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="12" cy="8" r="4"/><path d="M4 20c1.5-4 4.5-6 8-6s6.5 2 8 6"/></svg>,
  plus:    (p={}) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...p}><path d="M12 5v14M5 12h14"/></svg>,
  chevR:   (p={}) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M9 5l7 7-7 7"/></svg>,
  chevL:   (p={}) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M15 5l-7 7 7 7"/></svg>,
  search:  (p={}) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="11" cy="11" r="6.5"/><path d="M20 20l-4-4"/></svg>,
  bell:    (p={}) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M6 9a6 6 0 1112 0c0 5 2 6 2 6H4s2-1 2-6zM10 19a2 2 0 004 0"/></svg>,
  pin:     (p={}) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 2C8.5 2 6 4.5 6 8c0 4.5 6 13 6 13s6-8.5 6-13c0-3.5-2.5-6-6-6z"/><circle cx="12" cy="8" r="2.2"/></svg>,
  cal:     (p={}) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>,
  mountain:(p={}) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M3 20l5-8 4 6 3-4 6 6H3z"/><circle cx="8" cy="6" r="2"/></svg>,
  beer:    (p={}) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M6 8v11a2 2 0 002 2h6a2 2 0 002-2V8H6z"/><path d="M16 11h2a2 2 0 010 4h-2M9 12v6M12 12v6"/></svg>,
  bed:     (p={}) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M3 18v-7h18v7M3 18v3M21 18v3M3 14h18"/><path d="M7 11V8a1 1 0 011-1h3a1 1 0 011 1v3"/></svg>,
  fork:    (p={}) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M6 3v6c0 1.5 1 3 2.5 3H10v9M9 3v6M15 3c-1 2-2 4-2 7s1 3 2 3v8"/></svg>,
  alert:   (p={}) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 3l10 18H2L12 3zM12 10v5M12 18v.5"/></svg>,
  check:   (p={}) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M4 12l5 5L20 7"/></svg>,
  truck:   (p={}) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="2" y="7" width="12" height="9" rx="1"/><path d="M14 10h4l3 3v3h-7M6 19a2 2 0 100-4 2 2 0 000 4zM17 19a2 2 0 100-4 2 2 0 000 4z"/></svg>,
  cam:     (p={}) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M3 7h4l2-2h6l2 2h4v12H3V7z"/><circle cx="12" cy="13" r="3.5"/></svg>,
  send:    (p={}) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M3 12l18-8-7 18-3-7-8-3z"/></svg>,
  more:    (p={}) => <svg viewBox="0 0 24 24" fill="currentColor" {...p}><circle cx="5" cy="12" r="1.7"/><circle cx="12" cy="12" r="1.7"/><circle cx="19" cy="12" r="1.7"/></svg>,
  sos:     (p={}) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2"/><circle cx="12" cy="12" r="4"/></svg>,
  cloud:   (p={}) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M7 18a4 4 0 010-8 5 5 0 019.6-1.4A4 4 0 0118 18H7z"/></svg>,
  drop:    (p={}) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 3s7 7 7 12a7 7 0 11-14 0c0-5 7-12 7-12z"/></svg>,
  wrench:  (p={}) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M14 7a5 5 0 015 5c0 .7-.1 1.4-.4 2L21 16l-3 3-2-2.4c-.6.3-1.3.4-2 .4a5 5 0 01-5-5c0-.7.1-1.4.4-2L4 4h3l2 3 3 2 .4 3"/></svg>,
  heart:   (p={}) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 21s-8-5-8-12a4.5 4.5 0 018-3 4.5 4.5 0 018 3c0 7-8 12-8 12z"/></svg>,
  shield:  (p={}) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6l8-3z"/></svg>,
  link:    (p={}) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M10 14a4 4 0 005 .5l3-3a4 4 0 00-6-6l-1 1M14 10a4 4 0 00-5-.5l-3 3a4 4 0 006 6l1-1"/></svg>,
  music:   (p={}) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>,
  play:    (p={}) => <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M8 5v14l11-7z"/></svg>,
  skipF:   (p={}) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M5 4l10 8-10 8V4zM19 4v16"/></svg>,
  skipB:   (p={}) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M19 4L9 12l10 8V4zM5 4v16"/></svg>,
  rain:    (p={}) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M7 18a4 4 0 010-8 5 5 0 019.6-1.4A4 4 0 0118 18"/><path d="M8 22l1-2M12 22l1-2M16 22l1-2"/></svg>,
};

// ── Bottom Tab Bar ────────────────────────────────────────
export function TabBar({ active = 'trips', onTabChange }) {
  const tabs = [
    { id: 'trips',  label: 'Trips',  icon: Icon.mountain },
    { id: 'ride',   label: 'Ride',   icon: Icon.map },
    { id: 'chat',   label: 'Chat',   icon: Icon.chat },
    { id: 'money',  label: 'Splits', icon: Icon.money },
    { id: 'me',     label: 'Crew',   icon: Icon.user },
  ];
  return (
    <div className="tabbar">
      <div className="tabbar-pill">
        {tabs.map(t => {
          const I = t.icon;
          return (
            <div
              key={t.id}
              className={'tab ' + (active === t.id ? 'tab-active' : '')}
              onClick={() => onTabChange?.(t.id)}
            >
              <I />
              <span>{t.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Avatar gradients ──────────────────────────────────────
const AVATAR_GRADIENTS = [
  ['#1184CE', '#901DF5'],  // blue + violet
  ['#F5375C', '#901DF5'],  // coral + violet
  ['#F5375C', '#1184CE'],  // coral + blue
  ['#901DF5', '#F5375C'],  // violet + coral
  ['#1184CE', '#F5375C'],  // blue + coral
  ['#901DF5', '#2A0F47'],  // violet + navy
  ['#A8D87A', '#1184CE'],  // sage + blue
  ['#F87A8C', '#901DF5'],  // salmon + violet
];

export function Avatar({ name = 'AB', size = 32, idx = 0, ring = false }) {
  const [a, b] = AVATAR_GRADIENTS[idx % AVATAR_GRADIENTS.length];
  return (
    <div style={{
      width: size, height: size, borderRadius: 999,
      background: `linear-gradient(135deg, ${a}, ${b})`,
      color: '#fff', display: 'inline-flex',
      alignItems: 'center', justifyContent: 'center',
      fontWeight: 600, fontSize: size * 0.38,
      fontFamily: 'var(--f-body)', flexShrink: 0,
      border: ring ? '2px solid #fff' : 'none',
      boxShadow: ring ? '0 0 0 1px rgba(0,0,0,0.06)' : 'none',
    }}>{name}</div>
  );
}

// ── Stacked avatars ───────────────────────────────────────
export function AvatarStack({ people = [], size = 28, max = 4 }) {
  const shown = people.slice(0, max);
  const extra = people.length - max;
  return (
    <div style={{ display: 'flex' }}>
      {shown.map((p, i) => (
        <div key={i} style={{ marginLeft: i === 0 ? 0 : -size * 0.35 }}>
          <Avatar name={p.name} size={size} idx={p.idx ?? i} ring />
        </div>
      ))}
      {extra > 0 && (
        <div style={{
          width: size, height: size, borderRadius: 999,
          background: 'var(--surface)', border: '2px solid #fff',
          color: 'var(--text-2)', display: 'inline-flex',
          alignItems: 'center', justifyContent: 'center',
          fontWeight: 600, fontSize: size * 0.32,
          marginLeft: -size * 0.35,
        }}>+{extra}</div>
      )}
    </div>
  );
}

// ── iOS status bar ────────────────────────────────────────
export function StatusBar({ dark = false, time = '9:41' }) {
  const c = dark ? '#fff' : '#000';
  return (
    <div style={{
      position: 'absolute', top: 0, left: 0, right: 0, height: 54,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '18px 32px 0', zIndex: 50,
      fontFamily: '-apple-system, "SF Pro", system-ui',
      fontWeight: 600, fontSize: 15, color: c, pointerEvents: 'none',
    }}>
      <span>{time}</span>
      <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
        <svg width="17" height="11" viewBox="0 0 19 12">
          <rect x="0"    y="7.5" width="3.2" height="4.5" rx="0.7" fill={c}/>
          <rect x="4.8"  y="5"   width="3.2" height="7"   rx="0.7" fill={c}/>
          <rect x="9.6"  y="2.5" width="3.2" height="9.5" rx="0.7" fill={c}/>
          <rect x="14.4" y="0"   width="3.2" height="12"  rx="0.7" fill={c}/>
        </svg>
        <svg width="24" height="11" viewBox="0 0 27 13">
          <rect x="0.5" y="0.5" width="23" height="12" rx="3.5"
            stroke={c} strokeOpacity="0.4" fill="none"/>
          <rect x="2" y="2" width="20" height="9" rx="2" fill={c}/>
          <path d="M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z"
            fill={c} fillOpacity="0.4"/>
        </svg>
      </div>
    </div>
  );
}

// ── Per-page anchor palettes ──────────────────────────────
export const ANCHORS = {
  blue:   { base: '#1184CE', deep: '#0A5F96', soft: '#6FBBF2', ink: '#FFFFFF' },
  green:  { base: '#2E9E3F', deep: '#1F7A2D', soft: '#82CF7D', ink: '#FFFFFF' },
  violet: { base: '#901DF5', deep: '#7315C4', soft: '#A94FF7', ink: '#FFFFFF' },
  pink:   { base: '#F5375C', deep: '#D42B4F', soft: '#F87A8C', ink: '#FFFFFF' },
};

// ── Phone frame — 402×874, iOS Dynamic Island ─────────────
export function Phone({ children, dark = false, bg = 'var(--bg)', anchor }) {
  const a = ANCHORS[anchor];
  const anchorVars = a ? {
    '--pine':       a.base,
    '--pine-deep':  a.deep,
    '--pine-soft':  a.soft,
    '--anchor-ink': a.ink,
  } : {};

  return (
    <div
      className="screen"
      data-theme={dark ? 'dark' : 'light'}
      style={{
        width: 402, height: 874,
        background: bg,
        borderRadius: 56, overflow: 'hidden', position: 'relative',
        boxShadow:
          '0 30px 60px -20px rgba(20,28,46,0.4), ' +
          '0 0 0 11px #15151A, ' +
          '0 0 0 12.5px #2c2c34',
        ...anchorVars,
      }}
    >
      {/* Dynamic Island */}
      <div style={{
        position: 'absolute', top: 11, left: '50%',
        transform: 'translateX(-50%)',
        width: 124, height: 36, borderRadius: 22,
        background: '#000', zIndex: 60,
      }} />
      <StatusBar dark={dark} />
      <div style={{ position: 'absolute', inset: 0, paddingTop: 54 }}>
        {children}
      </div>
      {/* Home indicator */}
      <div style={{
        position: 'absolute', bottom: 8,
        left: '50%', transform: 'translateX(-50%)',
        width: 134, height: 5, borderRadius: 100,
        background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.35)',
        zIndex: 70,
      }} />
    </div>
  );
}
