import { Icon, TabBar, Avatar, AvatarStack, Phone } from '../components/shared';

function Msg({ name, idx, side, time, role, children }) {
  const isMe = side === 'right';
  return (
    <div style={{ display: 'flex', gap: 8, marginBottom: 12, flexDirection: isMe ? 'row-reverse' : 'row' }}>
      {!isMe && <Avatar name={name.slice(0, 2)} size={28} idx={idx} />}
      <div style={{ maxWidth: '76%', display: 'flex', flexDirection: 'column', alignItems: isMe ? 'flex-end' : 'flex-start' }}>
        {!isMe && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: 'var(--text-3)', marginBottom: 3, paddingLeft: 4 }}>
            <span style={{ fontWeight: 600, color: 'var(--text-2)' }}>{name}</span>
            {role && (
              <span style={{ background: 'rgba(17,132,206,0.15)', color: 'var(--sky)', fontSize: 9, padding: '1px 6px', borderRadius: 4, fontWeight: 700 }}>
                {role}
              </span>
            )}
            {time && <span>{time}</span>}
          </div>
        )}
        <div style={{
          padding: '10px 14px',
          background: isMe ? 'var(--raspberry)' : 'var(--surface)',
          color: isMe ? '#fff' : 'var(--text)',
          border: isMe ? 'none' : '1px solid var(--border)',
          borderRadius: 18,
          borderTopRightRadius: isMe ? 6 : 18,
          borderTopLeftRadius:  isMe ? 18 : 6,
          fontSize: 14, lineHeight: 1.4,
        }}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default function Chat({ onTabChange }) {
  return (
    <Phone anchor="blue">
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>

        {/* Header */}
        <div style={{
          padding: '4px 16px 12px',
          borderBottom: '1px solid var(--border)',
          background: 'var(--surface)',
          display: 'flex', alignItems: 'center', gap: 12,
        }}>
          <Icon.chevL style={{ color: 'var(--text-2)', width: 22, height: 22 }} />
          <div style={{
            width: 38, height: 38, borderRadius: 12,
            background: 'linear-gradient(135deg, var(--pine), var(--navy))',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff',
          }}>
            <Icon.mountain style={{ width: 18, height: 18 }} />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontFamily: 'var(--f-display)', fontWeight: 600, fontSize: 15, color: 'var(--text)' }}>
              Bryce Canyon trip
            </div>
            <div style={{ fontSize: 11, color: 'var(--text-3)', display: 'flex', alignItems: 'center', gap: 4 }}>
              <div style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--pine-soft)' }} />
              5 of 5 active
            </div>
          </div>
          <Icon.more style={{ color: 'var(--text-2)' }} />
        </div>

        {/* Channel chips */}
        <div style={{
          padding: '10px 16px', display: 'flex', gap: 6, overflowX: 'auto',
          background: 'var(--surface)', borderBottom: '1px solid var(--border)',
        }} className="scrollarea">
          {[
            { l: '# main',    n: 3,  active: true },
            { l: '# route' },
            { l: '# food' },
            { l: '# sag',     alert: true },
            { l: '🚨 alerts', n: 1 },
          ].map((c, i) => (
            <div key={i} style={{
              flexShrink: 0,
              padding: '6px 12px', borderRadius: 999,
              background: c.active ? 'var(--pine)' : 'var(--surface-2)',
              color: c.active ? '#fff' : 'var(--text-2)',
              fontSize: 12, fontWeight: 500,
              border: c.active ? 'none' : '1px solid var(--border)',
              display: 'flex', alignItems: 'center', gap: 6,
            }}>
              {c.l}
              {c.n && (
                <span style={{ background: c.active ? 'rgba(255,255,255,0.2)' : 'var(--raspberry)', color: '#fff', fontSize: 10, fontWeight: 700, padding: '1px 6px', borderRadius: 999 }}>
                  {c.n}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Pinned alert */}
        <div style={{
          margin: '12px 14px 0', padding: '12px 14px',
          background: 'rgba(255,222,5,0.14)', border: '1px solid rgba(255,222,5,0.45)',
          borderRadius: 14, display: 'flex', alignItems: 'flex-start', gap: 10,
        }}>
          <Icon.pin style={{ width: 16, height: 16, color: '#B8930A', flexShrink: 0, marginTop: 2 }} />
          <div style={{ flex: 1, fontSize: 12, color: 'var(--text-2)', lineHeight: 1.4 }}>
            <span style={{ fontWeight: 600, color: 'var(--text)' }}>Pinned · </span>
            Meet at <span style={{ fontWeight: 600, color: 'var(--text)' }}>Centro Pizza</span> for lunch · mile 32 · ~12:30
          </div>
        </div>

        {/* Messages */}
        <div className="scrollarea" style={{ flex: 1, padding: '12px 14px 8px', overflowY: 'auto' }}>
          <div style={{ textAlign: 'center', fontSize: 10, color: 'var(--text-3)', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600, margin: '4px 0 14px' }}>
            Today · 9:24 am
          </div>

          <Msg name="Jess" idx={0} side="left">
            <div>Brewery stop after we descend? Bryce Brews opens at 4.</div>
          </Msg>

          <Msg name="Sara" idx={1} side="left" time="9:26">
            <div style={{ marginBottom: 6 }}>Down. Also — the wind today is brutal 😤</div>
            <div style={{ borderRadius: 12, overflow: 'hidden', width: 200, height: 110, background: 'linear-gradient(135deg, var(--sky), var(--pine))', position: 'relative' }}>
              <div className="topo" style={{ position: 'absolute', inset: 0, color: 'rgba(255,255,255,0.2)' }} />
              <div style={{ position: 'absolute', bottom: 8, left: 10, color: '#fff', fontSize: 10, fontFamily: 'var(--f-mono)', fontWeight: 600, background: 'rgba(0,0,0,0.3)', padding: '3px 8px', borderRadius: 6 }}>
                📍 Red Canyon
              </div>
            </div>
          </Msg>

          {/* Thread reply */}
          <div style={{ marginLeft: 44, marginBottom: 14, marginTop: -6, display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 14, height: 8, borderLeft: '2px solid var(--border)', borderBottom: '2px solid var(--border)', borderBottomLeftRadius: 6 }} />
            <AvatarStack people={[{ name: 'AN', idx: 3 }, { name: 'JL', idx: 0 }]} size={18} max={2} />
            <span style={{ fontSize: 11, color: 'var(--raspberry)', fontWeight: 500 }}>2 replies</span>
            <span style={{ fontSize: 11, color: 'var(--text-3)' }}>· last 9:34</span>
          </div>

          <Msg name="me" idx={2} side="right" time="9:42">
            <div>Pizza first, beer after. Tara's pulling up to lunch ✊</div>
          </Msg>

          <Msg name="Tara" idx={4} side="left" time="9:48" role="SAG">
            <div>Pulling into Centro now, grabbing the table on the patio. Wave when you roll up 🚐</div>
          </Msg>

          {/* Typing indicator */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 8 }}>
            <Avatar name="AN" size={28} idx={3} />
            <div style={{ padding: '12px 14px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 18, borderTopLeftRadius: 6, display: 'flex', gap: 4, alignItems: 'center' }}>
              {[0, 1, 2].map(i => (
                <div key={i} style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--text-3)', opacity: 0.4 }} />
              ))}
            </div>
          </div>
        </div>

        {/* Input */}
        <div style={{ padding: '10px 14px 100px', borderTop: '1px solid var(--border)', background: 'var(--surface)', display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 36, height: 36, borderRadius: 999, background: 'var(--surface-2)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-2)' }}>
            <Icon.plus />
          </div>
          <div style={{ flex: 1, height: 38, borderRadius: 999, background: 'var(--surface-2)', border: '1px solid var(--border)', padding: '0 14px', display: 'flex', alignItems: 'center', color: 'var(--text-3)', fontSize: 14 }}>
            Message the crew…
          </div>
          <div style={{ width: 38, height: 38, borderRadius: 999, background: 'var(--raspberry)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(245,55,92,0.4)' }}>
            <Icon.send style={{ width: 18, height: 18 }} />
          </div>
        </div>
      </div>
    </Phone>
  );
}
