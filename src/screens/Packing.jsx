import { Icon, TabBar, Avatar, AvatarStack, Phone } from '../components/shared';

const cats = [
  {
    name: 'Bike & gear', icon: Icon.bike, color: '#901DF5', done: 6, total: 9,
    items: [
      { t: 'Helmet · MIPS',           a: 'me',    tag: 'mine',       done: true  },
      { t: 'Spare tubes (2× 700c)',    a: 'me',    tag: 'mine',       done: true  },
      { t: 'Hydration vest · 12L',     a: 'me',    tag: 'mine',       done: false },
      { t: 'Floor pump',               a: 'group', who: 'JL', tag: 'group',  done: true,  comments: 3 },
      { t: 'Chain lube · wet',         a: 'group', who: 'SK', tag: 'group',  done: false, comments: 1 },
    ],
  },
  {
    name: 'First aid', icon: Icon.shield, color: '#F5375C', done: 1, total: 4,
    items: [
      { t: 'Group first-aid kit',  a: 'group', who: 'MR', tag: 'group',      done: true,  comments: 5 },
      { t: 'Electrolyte tabs',     a: 'unassigned',        tag: 'unassigned', done: false },
      { t: 'Sunscreen SPF 50+',    a: 'me',                tag: 'mine',       done: false },
      { t: 'Doorstops (3×)',       a: 'unassigned',        tag: 'unassigned', done: false },
    ],
  },
  {
    name: 'Layers & clothes', icon: Icon.cloud, color: '#1184CE', done: 4, total: 7,
    items: [],
  },
];

export default function Packing({ onTabChange }) {
  return (
    <Phone anchor="green">
      <div className="scrollarea" style={{ height: '100%', paddingBottom: 110 }}>

        {/* Header */}
        <div style={{ padding: '6px 24px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <div className="eyebrow">Bryce Canyon · Day 1—4</div>
            <div className="display" style={{ fontSize: 30, marginTop: 4 }}>
              What we're <span className="editorial" style={{ color: 'var(--raspberry)' }}>hauling.</span>
            </div>
          </div>
          <div style={{
            width: 38, height: 38, borderRadius: 999,
            background: 'var(--surface)', border: '1px solid var(--border)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-2)',
          }}>
            <Icon.plus />
          </div>
        </div>

        {/* Progress card */}
        <div style={{ padding: '0 16px 16px' }}>
          <div className="card" style={{ padding: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <div>
                <div style={{ fontSize: 12, color: 'var(--text-3)', letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 600 }}>
                  Packed by the crew
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 4 }}>
                  <span className="display" style={{ fontSize: 36, color: 'var(--pine)' }}>34</span>
                  <span style={{ fontFamily: 'var(--f-mono)', color: 'var(--text-3)', fontSize: 13 }}>/ 41 items</span>
                </div>
              </div>
              <AvatarStack people={[
                { name: 'MR', idx: 2 }, { name: 'JL', idx: 0 },
                { name: 'SK', idx: 1 }, { name: 'AN', idx: 3 },
              ]} size={28} max={4} />
            </div>
            <div style={{ height: 6, background: 'var(--stone)', borderRadius: 999, marginTop: 12, overflow: 'hidden', display: 'flex' }}>
              <div style={{ width: '82%', background: 'var(--pine)', borderRadius: 999 }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8, fontSize: 11, color: 'var(--text-3)' }}>
              <span>83% packed · 7 to go</span>
              <span style={{ color: 'var(--raspberry)', fontWeight: 600 }}>3 unassigned</span>
            </div>
          </div>
        </div>

        {/* Filter chips */}
        <div style={{ padding: '0 16px 14px', display: 'flex', gap: 6, overflowX: 'auto' }} className="scrollarea">
          {[
            { l: 'All', n: 41, active: true },
            { l: 'Mine', n: 18 },
            { l: 'Group gear', n: 12 },
            { l: 'Unassigned', n: 3 },
          ].map((c, i) => (
            <div key={i} className={'chip ' + (c.active ? 'chip-active' : '')} style={{ flexShrink: 0 }}>
              {c.l} <span style={{ opacity: 0.6, fontFamily: 'var(--f-mono)', fontSize: 11 }}>{c.n}</span>
            </div>
          ))}
        </div>

        {/* Categories */}
        <div style={{ padding: '0 16px', display: 'flex', flexDirection: 'column', gap: 14 }}>
          {cats.map((cat, ci) => {
            const I = cat.icon;
            return (
              <div key={ci} className="card" style={{ padding: 4, overflow: 'hidden' }}>
                <div style={{ padding: '14px 16px 10px', display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{
                    width: 30, height: 30, borderRadius: 8,
                    background: cat.color + '1A', color: cat.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}><I style={{ width: 16, height: 16 }} /></div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: 'var(--f-display)', fontWeight: 600, fontSize: 15, color: 'var(--text)' }}>
                      {cat.name}
                    </div>
                  </div>
                  <div style={{ fontFamily: 'var(--f-mono)', fontSize: 11, color: 'var(--text-3)' }}>
                    {cat.done}/{cat.total}
                  </div>
                </div>
                {cat.items.map((it, ii) => (
                  <div key={ii} style={{
                    padding: '10px 16px',
                    borderTop: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center', gap: 12,
                    background: it.tag === 'unassigned' ? 'rgba(245,55,92,0.04)' : 'transparent',
                  }}>
                    <div style={{
                      width: 22, height: 22, borderRadius: 7, flexShrink: 0,
                      border: it.done ? 'none' : '1.5px solid var(--stone-deep)',
                      background: it.done ? 'var(--pine)' : 'transparent',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff',
                    }}>
                      {it.done && <Icon.check style={{ width: 14, height: 14 }} />}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 14, color: 'var(--text)', textDecoration: it.done ? 'line-through' : 'none', opacity: it.done ? 0.5 : 1 }}>
                        {it.t}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 3 }}>
                        {it.tag === 'group' && (
                          <div style={{ fontSize: 10, padding: '2px 7px', borderRadius: 999, background: 'rgba(17,132,206,0.12)', color: 'var(--sky)', fontWeight: 600, letterSpacing: '0.04em' }}>
                            GROUP
                          </div>
                        )}
                        {it.tag === 'unassigned' && (
                          <div style={{ fontSize: 10, padding: '2px 7px', borderRadius: 999, background: 'rgba(245,55,92,0.12)', color: 'var(--raspberry)', fontWeight: 600, letterSpacing: '0.04em' }}>
                            NEEDS OWNER
                          </div>
                        )}
                        {it.comments && (
                          <div style={{ display: 'flex', alignItems: 'center', gap: 3, color: 'var(--text-3)', fontSize: 11 }}>
                            <Icon.chat style={{ width: 12, height: 12 }} />{it.comments}
                          </div>
                        )}
                      </div>
                    </div>
                    {it.who ? (
                      <Avatar name={it.who} size={26} idx={ii + ci} />
                    ) : it.tag === 'mine' ? (
                      <Avatar name="MR" size={26} idx={2} />
                    ) : (
                      <div style={{ width: 26, height: 26, borderRadius: 999, border: '1.5px dashed var(--stone-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-3)' }}>
                        <Icon.plus style={{ width: 14, height: 14 }} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
      <TabBar active="trips" onTabChange={onTabChange} />
    </Phone>
  );
}
