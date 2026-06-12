import { Icon, Avatar, Phone } from '../components/shared';

export default function LiveRide() {
  return (
    <Phone dark={false} bg="#F0F9DC" anchor="blue">
      <div style={{ position: 'absolute', inset: 0, paddingTop: 0 }}>

        {/* ── MAP BACKGROUND ─────────────────────────────── */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(160deg, #F0F9DC 0%, #E4F0C0 45%, #D4E6A8 100%)',
          overflow: 'hidden',
        }}>
          {/* Topographic contour lines */}
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} viewBox="0 0 400 870" preserveAspectRatio="none">
            <defs>
              <filter id="rough">
                <feTurbulence baseFrequency="0.02" numOctaves="2" seed="3" />
                <feDisplacementMap in="SourceGraphic" scale="8" />
              </filter>
            </defs>
            <g stroke="rgba(46,158,63,0.2)" strokeWidth="1" fill="none" filter="url(#rough)">
              <ellipse cx="120" cy="280" rx="160" ry="100"/>
              <ellipse cx="120" cy="280" rx="120" ry="74"/>
              <ellipse cx="120" cy="280" rx="80"  ry="48"/>
              <ellipse cx="120" cy="280" rx="40"  ry="22"/>
              <ellipse cx="320" cy="180" rx="120" ry="90"/>
              <ellipse cx="320" cy="180" rx="85"  ry="62"/>
              <ellipse cx="320" cy="180" rx="50"  ry="34"/>
              <ellipse cx="280" cy="600" rx="180" ry="120"/>
              <ellipse cx="280" cy="600" rx="135" ry="88"/>
              <ellipse cx="280" cy="600" rx="90"  ry="58"/>
              <ellipse cx="280" cy="600" rx="50"  ry="30"/>
            </g>

            {/* River */}
            <path d="M -20 480 Q 80 460 130 510 T 280 540 Q 340 560 420 530"
              stroke="#1184CE" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.35"/>
            <path d="M -20 480 Q 80 460 130 510 T 280 540 Q 340 560 420 530"
              stroke="#6FBBF2" strokeWidth="2" fill="none" strokeLinecap="round"/>

            {/* Completed route — coral */}
            <path d="M 50 750 Q 90 700 110 640 Q 130 580 90 520 Q 60 460 130 420 Q 200 380 230 320"
              stroke="#F5375C" strokeWidth="4" fill="none" strokeLinecap="round"/>

            {/* Upcoming route — dashed blue */}
            <path d="M 230 320 Q 270 270 310 280 Q 360 300 350 200 Q 340 120 380 80"
              stroke="var(--pine-deep)" strokeWidth="3" fill="none" strokeLinecap="round"
              strokeDasharray="4 6" opacity="0.65"/>
          </svg>

          {/* SAG marker */}
          <div style={{ position: 'absolute', top: 220, left: 270, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{
              background: 'var(--pine-deep)', color: '#fff',
              padding: '4px 10px', borderRadius: 6,
              fontSize: 10, fontWeight: 600, letterSpacing: '0.05em',
              whiteSpace: 'nowrap', boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            }}>SAG · 4.2 mi</div>
            <div style={{
              width: 0, height: 0,
              borderLeft: '5px solid transparent', borderRight: '5px solid transparent',
              borderTop: '6px solid var(--pine-deep)',
            }} />
            <div style={{
              width: 36, height: 36, borderRadius: 999,
              background: '#fff', border: '3px solid var(--pine)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--pine)', marginTop: -2, boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
            }}>
              <Icon.truck style={{ width: 16, height: 16 }} />
            </div>
          </div>

          {/* Rider position pulse */}
          <div style={{ position: 'absolute', top: 305, left: 215 }}>
            <div style={{
              width: 76, height: 76, borderRadius: 999,
              background: 'radial-gradient(circle, rgba(245,55,92,0.4), transparent 70%)',
              position: 'absolute', top: -22, left: -22,
              animation: 'pulse 2s ease-out infinite',
            }} />
            <div style={{
              width: 32, height: 32, borderRadius: 999,
              background: 'var(--raspberry)', border: '3px solid #fff',
              boxShadow: '0 4px 16px rgba(245,55,92,0.4)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff', position: 'relative',
            }}>
              <Icon.bike style={{ width: 16, height: 16 }} />
            </div>
          </div>

          {/* Crew dots */}
          <div style={{ position: 'absolute', top: 340, left: 180 }}><Avatar name="JL" size={26} idx={0} ring /></div>
          <div style={{ position: 'absolute', top: 360, left: 240 }}><Avatar name="SK" size={26} idx={1} ring /></div>
          <div style={{ position: 'absolute', top: 290, left: 165 }}><Avatar name="AN" size={26} idx={3} ring /></div>
        </div>

        {/* ── TOP OVERLAY — distance + buttons ───────────── */}
        <div style={{
          position: 'absolute', top: 64, left: 16, right: 16,
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 10,
        }}>
          <div style={{
            background: 'rgba(255,255,255,0.88)', backdropFilter: 'blur(20px)',
            borderRadius: 16, padding: '10px 14px',
            border: '1px solid rgba(255,255,255,0.6)',
            boxShadow: '0 8px 24px -8px rgba(0,0,0,0.15)',
          }}>
            <div style={{ fontSize: 10, color: '#2A0F47', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.6 }}>
              Day 1 · Cedar City
            </div>
            <div style={{ display: 'flex', gap: 14, marginTop: 4, alignItems: 'baseline' }}>
              <div>
                <span style={{ fontFamily: 'var(--f-display)', fontWeight: 700, fontSize: 22, color: '#2A0F47' }}>32.4</span>
                <span style={{ fontFamily: 'var(--f-mono)', fontSize: 11, color: '#2A0F47', opacity: 0.6 }}> /62 mi</span>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{
              width: 44, height: 44, borderRadius: 999,
              background: 'var(--raspberry)', color: '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 8px 24px -8px rgba(245,55,92,0.55)',
            }}>
              <Icon.sos style={{ width: 22, height: 22 }} />
            </div>
            <div style={{
              width: 44, height: 44, borderRadius: 999,
              background: 'rgba(255,255,255,0.88)', backdropFilter: 'blur(20px)',
              color: '#2A0F47', display: 'flex', alignItems: 'center', justifyContent: 'center',
              border: '1px solid rgba(255,255,255,0.6)',
            }}>
              <Icon.cam style={{ width: 20, height: 20 }} />
            </div>
          </div>
        </div>

        {/* ── SLURRY RISK BANNER (Gemini feature) ────────── */}
        <div style={{
          position: 'absolute', top: 148, left: 16, right: 16,
          background: 'rgba(168,216,122,0.92)', backdropFilter: 'blur(20px)',
          borderRadius: 14, padding: '10px 14px',
          display: 'flex', alignItems: 'center', gap: 10,
          color: '#1F4010', fontSize: 12, fontWeight: 500,
          boxShadow: '0 8px 24px -8px rgba(168,216,122,0.6)',
          border: '1px solid rgba(168,216,122,0.5)',
        }}>
          <Icon.rain style={{ width: 18, height: 18, flexShrink: 0 }} />
          <div style={{ flex: 1 }}>
            <span style={{ fontWeight: 700 }}>Slurry Risk: Moderate</span>
            {' · '}Light rain near Mile 32. Wet-lube chain + fenders on.
          </div>
          <Icon.chevR style={{ width: 14, height: 14, opacity: 0.6 }} />
        </div>

        {/* ── BOTTOM SHEET ───────────────────────────────── */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          background: 'rgba(255,255,255,0.94)', backdropFilter: 'blur(24px)',
          borderTopLeftRadius: 28, borderTopRightRadius: 28,
          padding: '14px 20px 30px',
          boxShadow: '0 -8px 32px -8px rgba(20,40,63,0.12)',
        }}>
          <div style={{ width: 38, height: 4, borderRadius: 999, background: 'rgba(42,15,71,0.18)', margin: '0 auto 14px' }} />

          {/* Stats row */}
          <div style={{ display: 'flex', gap: 8, marginBottom: 14 }}>
            {[
              { v: '14.2', u: 'mph', l: 'pace'  },
              { v: '156',  u: 'bpm', l: 'heart' },
              { v: '1,840',u: 'ft',  l: 'elev'  },
              { v: '2:18', u: 'hr',  l: 'ride'  },
            ].map((s, i) => (
              <div key={i} style={{ flex: 1, textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--f-display)', fontWeight: 700, fontSize: 19, color: '#2A0F47', letterSpacing: '-0.02em' }}>
                  {s.v}<span style={{ fontFamily: 'var(--f-mono)', fontSize: 9, color: 'rgba(42,15,71,0.5)', marginLeft: 2 }}>{s.u}</span>
                </div>
                <div style={{ fontSize: 9, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(42,15,71,0.5)', fontWeight: 600, marginTop: 1 }}>{s.l}</div>
              </div>
            ))}
          </div>

          {/* Trail Beats media widget (Gemini feature) */}
          <div style={{
            background: 'rgba(245,55,92,0.06)', borderRadius: 14,
            padding: '10px 14px', marginBottom: 12,
            display: 'flex', alignItems: 'center', gap: 12,
            border: '1px solid rgba(245,55,92,0.12)',
          }}>
            <div style={{
              width: 36, height: 36, borderRadius: 10,
              background: 'linear-gradient(135deg, #F5375C, #901DF5)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>
              <Icon.music style={{ width: 16, height: 16, color: '#fff' }} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                Coyote Falls
              </div>
              <div style={{ fontSize: 11, color: 'var(--text-3)', marginTop: 1 }}>Long Neck · Cycling Mix</div>
            </div>
            <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
              <div style={{ color: 'var(--text-3)', display: 'flex' }}>
                <Icon.skipB style={{ width: 18, height: 18 }} />
              </div>
              <div style={{
                width: 32, height: 32, borderRadius: 999,
                background: 'var(--raspberry)', color: '#fff',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(245,55,92,0.4)',
              }}>
                <Icon.play style={{ width: 14, height: 14, marginLeft: 2 }} />
              </div>
              <div style={{ color: 'var(--text-3)', display: 'flex' }}>
                <Icon.skipF style={{ width: 18, height: 18 }} />
              </div>
            </div>
          </div>

          {/* SAG Depot next-stop card */}
          <div style={{
            borderRadius: 16, background: 'var(--pine-deep)',
            padding: 16, color: '#fff',
            display: 'flex', alignItems: 'center', gap: 14,
          }}>
            <div style={{
              width: 44, height: 44, borderRadius: 999,
              background: 'rgba(255,255,255,0.15)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Icon.truck />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.65, fontWeight: 600 }}>
                Next SAG meetup · Tara
              </div>
              <div style={{ fontFamily: 'var(--f-display)', fontWeight: 600, fontSize: 16, marginTop: 2 }}>
                Panguitch Lake overlook
              </div>
              <div style={{ display: 'flex', gap: 12, marginTop: 4, fontSize: 11, fontFamily: 'var(--f-mono)', opacity: 0.8 }}>
                <span>4.2 mi</span>
                <span>~18 min</span>
                <span style={{ color: '#FFDE05' }}>+450 ft</span>
              </div>
            </div>
            <Icon.chevR style={{ color: 'rgba(255,255,255,0.6)' }} />
          </div>
        </div>
      </div>
    </Phone>
  );
}
