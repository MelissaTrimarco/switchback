import { Icon, TabBar, AvatarStack, Phone } from '../components/shared';

const days = [
  {
    d: 'Day 01', date: 'Wed · May 14', mi: '62', gain: '+2,800',
    title: 'Cedar City → Red Canyon',
    stops: [
      { t: 'bed',  name: 'Best Western Plus Cedar City',  sub: 'Check-out · 7:30 am',   tag: 'Lodging' },
      { t: 'fork', name: 'Centro Woodfired Pizza',        sub: 'Lunch · mile 32',        tag: 'Food'    },
      { t: 'pin',  name: 'Red Canyon Visitor Center',     sub: 'Photo + water · mile 51',tag: 'Stop'    },
      { t: 'bed',  name: 'Bryce Canyon Pines Motel',      sub: 'Check-in · ~5:00 pm',    tag: 'Lodging' },
    ],
  },
  {
    d: 'Day 02', date: 'Thu · May 15', mi: '48', gain: '+3,400',
    title: 'Rim Trail loop',
    stops: [
      { t: 'beer', name: 'Bryce Brews', sub: 'Pre-ride coffee · 7am', tag: 'Stop' },
    ],
  },
];

const iconFor = t => {
  const map = { bed: Icon.bed, fork: Icon.fork, beer: Icon.beer, pin: Icon.pin };
  const I = map[t] || Icon.pin;
  return <I style={{ width: 16, height: 16 }} />;
};
const colorFor = t => ({ bed: '#1184CE', fork: '#F5375C', beer: '#901DF5', pin: '#A8D87A' }[t]);

export default function TripDetail({ onTabChange }) {
  return (
    <Phone anchor="green">
      <div className="scrollarea" style={{ height: '100%', paddingBottom: 110 }}>

        {/* Hero */}
        <div style={{ height: 320, position: 'relative', overflow: 'hidden' }}>
          <div className="photo-fallback" style={{ position: 'absolute', inset: 0 }} />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(180deg, rgba(20,40,63,0.5) 0%, transparent 30%, rgba(20,40,63,0.9) 100%)',
          }} />

          {/* Back / share pills */}
          <div style={{ position: 'absolute', top: 10, left: 0, right: 0, padding: '0 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{
              width: 38, height: 38, borderRadius: 999,
              background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.25)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff',
            }}>
              <Icon.chevL />
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              {[Icon.heart, Icon.more].map((I, i) => (
                <div key={i} style={{
                  width: 38, height: 38, borderRadius: 999,
                  background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff',
                }}>
                  <I />
                </div>
              ))}
            </div>
          </div>

          {/* Title */}
          <div style={{ position: 'absolute', bottom: 22, left: 22, right: 22, color: '#fff' }}>
            <div style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600, color: 'rgba(255,255,255,0.75)', marginBottom: 6 }}>
              May 14 — 18 · 4 days
            </div>
            <div className="display" style={{ fontSize: 40, lineHeight: 0.95 }}>Bryce Canyon</div>
            <div style={{ fontFamily: 'var(--f-editorial)', fontStyle: 'italic', fontSize: 28, lineHeight: 1, marginTop: 2, color: 'rgba(255,255,255,0.85)' }}>
              loop &amp; rim
            </div>
          </div>
        </div>

        {/* Stats card */}
        <div style={{ padding: '0 16px', marginTop: -28, position: 'relative', zIndex: 2 }}>
          <div className="card" style={{ padding: '16px 8px', display: 'flex', boxShadow: '0 12px 32px -16px rgba(20,40,63,0.25)' }}>
            {[
              { v: '248', l: 'miles' },
              { v: '12.4k', l: 'ft gain' },
              { v: '4', l: 'days' },
              { v: '5', l: 'crew' },
            ].map((s, i) => (
              <div key={i} style={{ flex: 1, textAlign: 'center', borderRight: i < 3 ? '1px solid var(--border)' : 'none' }}>
                <div className="display" style={{ fontSize: 22, color: 'var(--pine)' }}>{s.v}</div>
                <div style={{ fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-3)', marginTop: 2 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tab chips */}
        <div style={{ padding: '20px 16px 10px', display: 'flex', gap: 6, overflowX: 'auto' }} className="scrollarea">
          {['Itinerary', 'Route', 'Packing', 'Crew', 'Expenses'].map((t, i) => (
            <div key={i} className={'chip ' + (i === 0 ? 'chip-active' : '')}>{t}</div>
          ))}
        </div>

        {/* Day cards */}
        <div style={{ padding: '4px 16px', display: 'flex', flexDirection: 'column', gap: 14 }}>
          {days.map((day, di) => (
            <div key={di}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 10, padding: '0 4px' }}>
                <div className="eyebrow" style={{ color: 'var(--raspberry)' }}>{day.d}</div>
                <div style={{ fontSize: 12, color: 'var(--text-3)' }}>{day.date}</div>
                <div style={{ marginLeft: 'auto', display: 'flex', gap: 10, fontFamily: 'var(--f-mono)', fontSize: 11, color: 'var(--text-2)' }}>
                  <span>{day.mi} mi</span>
                  <span style={{ color: 'var(--text-3)' }}>{day.gain} ft</span>
                </div>
              </div>
              <div className="card" style={{ padding: 4 }}>
                <div style={{ padding: '14px 16px 8px' }}>
                  <div style={{ fontFamily: 'var(--f-display)', fontSize: 18, fontWeight: 600, color: 'var(--text)' }}>
                    {day.title}
                  </div>
                </div>
                <div style={{ padding: '0 16px 14px', display: 'flex', flexDirection: 'column' }}>
                  {day.stops.map((s, si) => (
                    <div key={si} style={{ display: 'flex', gap: 12, paddingTop: 10, position: 'relative' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 28 }}>
                        <div style={{
                          width: 28, height: 28, borderRadius: 999,
                          background: `${colorFor(s.t)}1A`, color: colorFor(s.t),
                          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                        }}>{iconFor(s.t)}</div>
                        {si < day.stops.length - 1 && (
                          <div style={{ flex: 1, width: 2, background: 'var(--border)', marginTop: 4, minHeight: 14 }} />
                        )}
                      </div>
                      <div style={{ flex: 1, paddingBottom: si < day.stops.length - 1 ? 6 : 0 }}>
                        <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--text)' }}>{s.name}</div>
                        <div style={{ fontSize: 12, color: 'var(--text-3)', marginTop: 1 }}>{s.sub}</div>
                      </div>
                      <Icon.chevR style={{ width: 16, height: 16, color: 'var(--text-3)', marginTop: 6 }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <TabBar active="trips" onTabChange={onTabChange} />
    </Phone>
  );
}
