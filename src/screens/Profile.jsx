import { Icon, TabBar, Avatar, Phone } from '../components/shared';

export default function Profile({ onTabChange }) {
  return (
    <Phone anchor="violet">
      <div className="scrollarea" style={{ height: '100%', paddingBottom: 110 }}>

        {/* Banner */}
        <div style={{ height: 200, position: 'relative', overflow: 'hidden', background: 'var(--pine)' }}>
          <div className="photo-fallback" style={{ position: 'absolute', inset: 0 }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(20,40,63,0.15) 0%, rgba(20,40,63,0.6) 100%)' }} />
          <div className="topo" style={{ position: 'absolute', inset: 0, color: 'rgba(255,255,255,0.06)', mixBlendMode: 'screen' }} />
          <div style={{ position: 'absolute', top: 14, right: 16, display: 'flex', gap: 8 }}>
            {[Icon.bell, Icon.more].map((I, i) => (
              <div key={i} style={{
                width: 38, height: 38, borderRadius: 999,
                background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.25)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff',
              }}>
                <I />
              </div>
            ))}
          </div>
        </div>

        {/* Group identity */}
        <div style={{ padding: '0 24px', marginTop: -36, position: 'relative', zIndex: 2 }}>
          <div style={{
            width: 76, height: 76, borderRadius: 22,
            background: 'linear-gradient(135deg, var(--raspberry), var(--navy))',
            border: '4px solid var(--bg)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff', fontFamily: 'var(--f-display)', fontWeight: 800, fontSize: 30,
            letterSpacing: '-0.02em', boxShadow: '0 12px 24px -8px rgba(245,55,92,0.4)',
          }}>WS</div>
          <div style={{ marginTop: 14 }}>
            <div className="display" style={{ fontSize: 30 }}>Wild Spokes</div>
            <div style={{ fontFamily: 'var(--f-editorial)', fontStyle: 'italic', fontSize: 18, color: 'var(--text-2)', marginTop: -2 }}>
              women who ride far.
            </div>
            <div style={{ display: 'flex', gap: 16, marginTop: 14, fontSize: 12, color: 'var(--text-2)' }}>
              <div><span style={{ fontFamily: 'var(--f-display)', fontWeight: 700, fontSize: 18, color: 'var(--text)' }}>12</span> riders</div>
              <div><span style={{ fontFamily: 'var(--f-display)', fontWeight: 700, fontSize: 18, color: 'var(--text)' }}>8</span> trips</div>
              <div>
                <span style={{ fontFamily: 'var(--f-display)', fontWeight: 700, fontSize: 18, color: 'var(--text)' }}>1,847</span>
                <span style={{ fontFamily: 'var(--f-mono)', opacity: 0.6 }}> mi</span>
              </div>
            </div>
          </div>
        </div>

        {/* Invite card */}
        <div style={{ padding: '20px 16px 14px' }}>
          <div className="card" style={{ padding: 16, display: 'flex', alignItems: 'center', gap: 12, background: 'var(--surface-2)', borderColor: 'var(--stone)' }}>
            <div style={{ width: 40, height: 40, borderRadius: 12, background: 'var(--raspberry)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon.link />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-3)', fontWeight: 600 }}>Invite code · admin only</div>
              <div style={{ fontFamily: 'var(--f-mono)', fontSize: 17, color: 'var(--text)', fontWeight: 600, marginTop: 2, letterSpacing: '0.08em' }}>
                WILD-4F8K-2Q
              </div>
            </div>
            <button className="btn-ghost" style={{ padding: '8px 14px', fontSize: 12 }}>Copy</button>
          </div>
        </div>

        {/* Members */}
        <div style={{ padding: '0 24px 8px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <div className="display" style={{ fontSize: 17 }}>The crew</div>
          <div style={{ fontSize: 12, color: 'var(--text-3)' }}>5 on this trip · 12 total</div>
        </div>
        <div style={{ padding: '0 16px 16px' }}>
          <div className="card" style={{ padding: 4 }}>
            {[
              { name: 'Mira Reyes',  idx: 2, sub: 'you · admin',  role: 'admin',  stat: '320 mi YTD' },
              { name: 'Jess Lin',    idx: 0, sub: 'route lead',   role: 'member', stat: '440 mi YTD' },
              { name: 'Sara K.',     idx: 1, sub: 'group medic',  role: 'member', stat: '512 mi YTD' },
              { name: 'Annika N.',   idx: 3, sub: 'mechanic',     role: 'member', stat: '218 mi YTD' },
              { name: 'Tara H.',     idx: 4, sub: 'SAG driver',   role: 'sag',    stat: '—'          },
            ].map((m, i, arr) => (
              <div key={i} style={{
                padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 12,
                borderBottom: i < arr.length - 1 ? '1px solid var(--border)' : 'none',
              }}>
                <Avatar name={m.name.slice(0, 2)} size={40} idx={m.idx} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--text)' }}>{m.name}</div>
                    {m.role === 'admin' && (
                      <div style={{ fontSize: 9, padding: '1px 6px', borderRadius: 4, background: 'rgba(245,55,92,0.12)', color: 'var(--raspberry)', fontWeight: 700, letterSpacing: '0.06em' }}>
                        ADMIN
                      </div>
                    )}
                    {m.role === 'sag' && (
                      <div style={{ fontSize: 9, padding: '1px 6px', borderRadius: 4, background: 'rgba(17,132,206,0.15)', color: 'var(--sky)', fontWeight: 700, letterSpacing: '0.06em' }}>
                        SAG
                      </div>
                    )}
                  </div>
                  <div style={{ fontSize: 11, color: 'var(--text-3)', marginTop: 1 }}>
                    {m.sub} · <span style={{ fontFamily: 'var(--f-mono)' }}>{m.stat}</span>
                  </div>
                </div>
                <Icon.chevR style={{ width: 16, height: 16, color: 'var(--text-3)' }} />
              </div>
            ))}
          </div>
        </div>

        {/* Settings */}
        <div style={{ padding: '0 24px 8px' }}>
          <div className="display" style={{ fontSize: 17 }}>Group settings</div>
        </div>
        <div style={{ padding: '0 16px' }}>
          <div className="card" style={{ padding: 4 }}>
            {[
              { i: Icon.bell,   l: 'Notifications',        r: 'Alerts + chat' },
              { i: Icon.shield, l: 'Privacy & visibility', r: 'Invite only'   },
              { i: Icon.cal,    l: 'Default trip template',r: 'Multi-day tour' },
              { i: Icon.heart,  l: 'Past trips & memories',r: '7 trips'       },
            ].map((s, i, arr) => {
              const I = s.i;
              return (
                <div key={i} style={{
                  padding: 14, display: 'flex', alignItems: 'center', gap: 14,
                  borderBottom: i < arr.length - 1 ? '1px solid var(--border)' : 'none',
                }}>
                  <div style={{ width: 32, height: 32, borderRadius: 9, background: 'var(--surface-2)', color: 'var(--text-2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <I style={{ width: 17, height: 17 }} />
                  </div>
                  <div style={{ flex: 1, fontSize: 14, color: 'var(--text)' }}>{s.l}</div>
                  <div style={{ fontSize: 12, color: 'var(--text-3)' }}>{s.r}</div>
                  <Icon.chevR style={{ width: 14, height: 14, color: 'var(--text-3)' }} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <TabBar active="me" onTabChange={onTabChange} />
    </Phone>
  );
}
