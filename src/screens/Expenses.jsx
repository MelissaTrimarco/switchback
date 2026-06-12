import { Icon, TabBar, Avatar, Phone } from '../components/shared';

export default function Expenses({ onTabChange }) {
  return (
    <Phone anchor="green">
      <div className="scrollarea" style={{ height: '100%', paddingBottom: 110 }}>

        {/* Header */}
        <div style={{ padding: '6px 24px 14px' }}>
          <div className="eyebrow">Bryce Canyon · 4 days</div>
          <div className="display" style={{ fontSize: 30, marginTop: 4 }}>
            The <span className="editorial" style={{ color: 'var(--raspberry)' }}>tab.</span>
          </div>
        </div>

        {/* Big total card */}
        <div style={{ padding: '0 16px 14px' }}>
          <div style={{
            background: 'var(--pine)', color: '#fff',
            borderRadius: 22, padding: 22,
            position: 'relative', overflow: 'hidden',
          }}>
            <div className="topo" style={{ position: 'absolute', inset: 0, color: 'rgba(255,255,255,0.06)' }} />
            <div style={{ position: 'relative' }}>
              <div style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', opacity: 0.7, fontWeight: 600 }}>
                Trip total · split 5 ways
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginTop: 6 }}>
                <span style={{ fontFamily: 'var(--f-display)', fontWeight: 700, fontSize: 48, letterSpacing: '-0.03em' }}>$2,418</span>
                <span style={{ fontFamily: 'var(--f-mono)', fontSize: 13, opacity: 0.6 }}>.40</span>
              </div>

              <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
                <div style={{ flex: 1, background: 'rgba(255,255,255,0.1)', borderRadius: 12, padding: '12px 14px' }}>
                  <div style={{ fontSize: 10, opacity: 0.7, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>You owe</div>
                  <div style={{ fontFamily: 'var(--f-display)', fontWeight: 700, fontSize: 22, marginTop: 2 }}>
                    $84<span style={{ fontFamily: 'var(--f-mono)', fontSize: 11, opacity: 0.6 }}>.20</span>
                  </div>
                </div>
                <div style={{ flex: 1, background: 'rgba(255,255,255,0.1)', borderRadius: 12, padding: '12px 14px' }}>
                  <div style={{ fontSize: 10, opacity: 0.7, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--sky-soft)' }}>You're owed</div>
                  <div style={{ fontFamily: 'var(--f-display)', fontWeight: 700, fontSize: 22, marginTop: 2 }}>
                    $152<span style={{ fontFamily: 'var(--f-mono)', fontSize: 11, opacity: 0.6 }}>.70</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Settle up CTA */}
        <div style={{ padding: '0 16px 16px' }}>
          <button className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: 14 }}>
            Settle up with the crew
          </button>
        </div>

        {/* Per-person */}
        <div style={{ padding: '0 24px 8px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <div className="display" style={{ fontSize: 17 }}>Who paid for what</div>
          <div style={{ fontSize: 12, color: 'var(--text-3)' }}>4 days</div>
        </div>
        <div style={{ padding: '0 16px 16px' }}>
          <div className="card" style={{ padding: 4 }}>
            {[
              { name: 'Mira (you)', idx: 2, paid: 502.40, net: '+$18.72',  positive: true  },
              { name: 'Jess',       idx: 0, paid: 320.00, net: '−$163.68', positive: false },
              { name: 'Sara',       idx: 1, paid: 612.50, net: '+$128.82', positive: true  },
              { name: 'Annika',     idx: 3, paid: 410.00, net: '−$73.68',  positive: false },
              { name: 'Tara · SAG',idx: 4, paid: 573.50, net: '+$89.82',  positive: true  },
            ].map((p, i, arr) => (
              <div key={i} style={{
                padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 12,
                borderBottom: i < arr.length - 1 ? '1px solid var(--border)' : 'none',
              }}>
                <Avatar name={p.name.slice(0, 2)} size={36} idx={p.idx} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--text)' }}>{p.name}</div>
                  <div style={{ fontSize: 11, color: 'var(--text-3)', fontFamily: 'var(--f-mono)' }}>paid ${p.paid.toFixed(2)}</div>
                </div>
                <div style={{ fontFamily: 'var(--f-display)', fontWeight: 600, fontSize: 15, color: p.positive ? 'var(--pine)' : 'var(--raspberry)' }}>
                  {p.net}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent receipts */}
        <div style={{ padding: '0 24px 8px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <div className="display" style={{ fontSize: 17 }}>Recent receipts</div>
          <div style={{ fontSize: 12, color: 'var(--raspberry)', fontWeight: 600 }}>+ Add</div>
        </div>
        <div style={{ padding: '0 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
          {[
            { name: 'Centro Wood-fired',      cat: 'Food',      who: 'Sara',  idx: 1, amt: '$84.20',  tag: 'fork',  col: '#F5375C', date: 'May 14' },
            { name: 'Bryce Canyon Pines · 2', cat: 'Lodging',   who: 'Mira',  idx: 2, amt: '$612.50', tag: 'bed',   col: '#1184CE', date: 'May 14' },
            { name: 'Bryce Brews · 5 pours',  cat: 'Drinks',    who: 'Jess',  idx: 0, amt: '$48.75',  tag: 'beer',  col: '#901DF5', date: 'May 15' },
            { name: 'Gas — SAG van',           cat: 'Transport', who: 'Tara',  idx: 4, amt: '$72.40',  tag: 'truck', col: '#A8D87A', date: 'May 15' },
          ].map((e, i) => {
            const I = Icon[e.tag];
            return (
              <div key={i} className="card" style={{ padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: 12, background: e.col + '1A', color: e.col, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <I />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--text)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {e.name}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 2, fontSize: 11, color: 'var(--text-3)' }}>
                    <Avatar name={e.who.slice(0, 2)} size={16} idx={e.idx} />
                    {e.who} · {e.cat} · {e.date}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontFamily: 'var(--f-display)', fontWeight: 700, fontSize: 16, color: 'var(--text)' }}>{e.amt}</div>
                  <div style={{ fontSize: 10, color: 'var(--text-3)', fontFamily: 'var(--f-mono)' }}>split 5</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <TabBar active="money" onTabChange={onTabChange} />
    </Phone>
  );
}
