import { Icon, TabBar, Avatar, AvatarStack, Phone } from '../components/shared';

export default function Home({ onTabChange }) {
  return (
    <Phone anchor="violet">
      <div className="scrollarea" style={{ height: '100%', paddingBottom: 110 }}>

        {/* Header */}
        <div style={{ padding: '8px 24px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 6 }}>Wild Spokes · 12 members</div>
            <div className="display" style={{ fontSize: 34, color: 'var(--text)' }}>
              Hey, Mira <span className="editorial" style={{ color: 'var(--raspberry)' }}>—</span>
            </div>
            <div style={{ fontFamily: 'var(--f-editorial)', fontStyle: 'italic', fontSize: 26, color: 'var(--text-2)', marginTop: -2 }}>
              the trail's calling.
            </div>
          </div>
          <div style={{ display: 'flex', gap: 8, paddingTop: 4 }}>
            <div style={{
              width: 38, height: 38, borderRadius: 999,
              background: 'var(--surface)', border: '1px solid var(--border)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--text-2)', position: 'relative',
            }}>
              <Icon.bell />
              <div style={{
                position: 'absolute', top: 8, right: 9,
                width: 8, height: 8, borderRadius: 999,
                background: 'var(--raspberry)', border: '2px solid var(--surface)',
              }} />
            </div>
            <Avatar name="MR" size={38} idx={2} />
          </div>
        </div>

        {/* Featured trip hero */}
        <div style={{ padding: '0 16px' }}>
          <div style={{
            borderRadius: 28, overflow: 'hidden', position: 'relative',
            height: 380, background: 'var(--pine)',
          }}>
            {/* Photo placeholder */}
            <div className="photo-fallback" style={{ position: 'absolute', inset: 0 }} />
            {/* Gradient overlay */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(180deg, rgba(20,40,63,0.1) 0%, rgba(20,40,63,0.85) 100%)',
            }} />
            {/* Topo texture */}
            <div className="topo" style={{
              position: 'absolute', inset: 0,
              color: 'rgba(255,255,255,0.07)', mixBlendMode: 'screen', pointerEvents: 'none',
            }} />

            {/* Content */}
            <div style={{
              position: 'absolute', inset: 0, padding: 22,
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              color: '#fff',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{
                  background: 'rgba(255,255,255,0.16)', backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.25)',
                  borderRadius: 999, padding: '6px 12px',
                  fontSize: 11, fontWeight: 600, letterSpacing: '0.08em',
                  textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 6,
                }}>
                  <div style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--raspberry)' }} />
                  Next trip
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 500 }}>
                  <Icon.cal style={{ width: 14, height: 14 }} />
                  May 14 — 18
                </div>
              </div>

              <div>
                <div style={{ fontFamily: 'var(--f-display)', fontWeight: 800, fontSize: 44, lineHeight: 0.95, letterSpacing: '-0.03em' }}>
                  Bryce Canyon
                </div>
                <div style={{ fontFamily: 'var(--f-editorial)', fontStyle: 'italic', fontSize: 30, lineHeight: 1, marginTop: 2, color: 'rgba(255,255,255,0.85)' }}>
                  loop &amp; rim
                </div>
                <div style={{ display: 'flex', gap: 14, marginTop: 18, fontSize: 12, fontFamily: 'var(--f-mono)', color: 'rgba(255,255,255,0.85)' }}>
                  <span>248 mi</span>
                  <span style={{ opacity: 0.4 }}>·</span>
                  <span>4 days</span>
                  <span style={{ opacity: 0.4 }}>·</span>
                  <span>+12,400 ft</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 18 }}>
                  <AvatarStack people={[
                    { name: 'MR', idx: 2 }, { name: 'JL', idx: 0 },
                    { name: 'SK', idx: 1 }, { name: 'AN', idx: 3 },
                  ]} size={30} max={4} />
                  <button className="btn-primary" style={{ padding: '12px 18px', fontSize: 14 }}>
                    Open trip <Icon.chevR style={{ width: 14, height: 14 }} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Countdown strip */}
        <div style={{ padding: '20px 16px 8px', display: 'flex', gap: 10 }}>
          {[
            { n: '17', l: 'days away' },
            { n: '4',  l: 'crew confirmed' },
            { n: '83%', l: 'packed' },
          ].map((s, i) => (
            <div key={i} className="card" style={{ flex: 1, padding: '14px 12px' }}>
              <div className="display" style={{ fontSize: 26, color: 'var(--pine)' }}>{s.n}</div>
              <div style={{ fontSize: 11, color: 'var(--text-3)', marginTop: 2 }}>{s.l}</div>
            </div>
          ))}
        </div>

        {/* Section header */}
        <div style={{ padding: '14px 24px 10px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <div className="display" style={{ fontSize: 18, color: 'var(--text)' }}>On the horizon</div>
          <div style={{ fontSize: 12, color: 'var(--raspberry)', fontWeight: 600 }}>See all</div>
        </div>

        {/* Trip list */}
        <div style={{ padding: '0 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            { title: 'Lost Coast',    sub: 'gravel · 3 days',   date: 'Jun 22', mi: '120 mi', n: 6, photoBg: 'linear-gradient(135deg, #1184CE, #901DF5)' },
            { title: 'Skyline Drive', sub: 'tarmac · 5 days',   date: 'Aug 04', mi: '310 mi', n: 8, photoBg: 'linear-gradient(135deg, #F5375C, #901DF5)' },
            { title: 'Adirondacks',   sub: 'mixed · weekend',   date: 'Sep 19', mi: '85 mi',  n: 4, photoBg: 'linear-gradient(135deg, #A8D87A, #1184CE)' },
          ].map((t, i) => (
            <div key={i} className="card" style={{ padding: 14, display: 'flex', gap: 14, alignItems: 'center' }}>
              <div style={{
                width: 60, height: 76, borderRadius: 14,
                background: t.photoBg, position: 'relative', flexShrink: 0, overflow: 'hidden',
              }}>
                <div className="topo" style={{ position: 'absolute', inset: 0, color: 'rgba(255,255,255,0.18)' }} />
                <div style={{ position: 'absolute', top: 8, left: 0, right: 0, textAlign: 'center', color: '#fff', fontSize: 10, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.9 }}>
                  {t.date.split(' ')[0]}
                </div>
                <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', color: '#fff', fontFamily: 'var(--f-display)', fontWeight: 700, fontSize: 22 }}>
                  {t.date.split(' ')[1]}
                </div>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div className="display" style={{ fontSize: 19, color: 'var(--text)' }}>{t.title}</div>
                <div style={{ fontSize: 12, color: 'var(--text-3)', marginTop: 2 }}>{t.sub}</div>
                <div style={{ display: 'flex', gap: 8, marginTop: 8, alignItems: 'center' }}>
                  <div style={{ fontSize: 11, fontFamily: 'var(--f-mono)', color: 'var(--pine)', background: 'rgba(144,29,245,0.08)', padding: '3px 8px', borderRadius: 999 }}>
                    {t.mi}
                  </div>
                  <div style={{ fontSize: 11, color: 'var(--text-3)' }}>·</div>
                  <AvatarStack people={Array.from({ length: t.n }, (_, i) => ({ name: '', idx: i }))} size={20} max={3} />
                </div>
              </div>
              <Icon.chevR style={{ width: 18, height: 18, color: 'var(--text-3)' }} />
            </div>
          ))}

          {/* Create trip CTA */}
          <div style={{
            border: '1.5px dashed var(--stone-deep)', borderRadius: 18,
            padding: 18, display: 'flex', alignItems: 'center', gap: 12,
            color: 'var(--text-2)', marginTop: 4,
          }}>
            <div style={{
              width: 38, height: 38, borderRadius: 999,
              background: 'var(--raspberry)', color: '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Icon.plus />
            </div>
            <div>
              <div style={{ fontWeight: 600, color: 'var(--text)', fontSize: 14 }}>Plan something new</div>
              <div style={{ fontSize: 12, color: 'var(--text-3)' }}>Invite the crew, pick a route</div>
            </div>
          </div>
        </div>
      </div>
      <TabBar active="trips" onTabChange={onTabChange} />
    </Phone>
  );
}
