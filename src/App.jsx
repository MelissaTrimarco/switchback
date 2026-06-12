import { useState, useEffect, useCallback } from 'react';
import Home from './screens/Home';
import TripDetail from './screens/TripDetail';
import LiveRide from './screens/LiveRide';
import Packing from './screens/Packing';
import Chat from './screens/Chat';
import Expenses from './screens/Expenses';
import Profile from './screens/Profile';

const CANVAS_SCALE = 0.74;
const PHONE_W = 402;
const PHONE_H = 874;

const SCREENS = [
  { id: 'home',      label: 'Home',       anchor: 'violet', Component: Home      },
  { id: 'trip',      label: 'Trip',       anchor: 'green',  Component: TripDetail },
  { id: 'live',      label: 'Live Ride',  anchor: 'blue',   Component: LiveRide  },
  { id: 'packing',   label: 'Packing',    anchor: 'green',  Component: Packing   },
  { id: 'chat',      label: 'Chat',       anchor: 'blue',   Component: Chat      },
  { id: 'expenses',  label: 'Expenses',   anchor: 'green',  Component: Expenses  },
  { id: 'profile',   label: 'Profile',    anchor: 'violet', Component: Profile   },
];

const ANCHOR_COLORS = {
  violet: '#901DF5',
  blue:   '#1184CE',
  green:  '#2E9E3F',
  pink:   '#F5375C',
};

const TAB_SCREEN = {
  home:    'home',
  trips:   'trip',
  live:    'live',
  list:    'packing',
  chat:    'chat',
  money:   'expenses',
  me:      'profile',
};

export default function App() {
  const [focused, setFocused] = useState(null);
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const focusedIdx = focused !== null ? SCREENS.findIndex(s => s.id === focused) : -1;

  const handleTabChange = useCallback((tab) => {
    const screenId = TAB_SCREEN[tab];
    if (screenId) setFocused(screenId);
  }, []);

  const navigate = useCallback((dir) => {
    if (focusedIdx === -1) return;
    const next = focusedIdx + dir;
    if (next >= 0 && next < SCREENS.length) {
      setFocused(SCREENS[next].id);
    }
  }, [focusedIdx]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setFocused(null);
      if (e.key === 'ArrowLeft')  navigate(-1);
      if (e.key === 'ArrowRight') navigate(1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [navigate]);

  const focusedScreen = focused ? SCREENS.find(s => s.id === focused) : null;
  const FocusedComponent = focusedScreen?.Component;

  return (
    <div style={{
      minHeight: '100vh',
      background: '#0e0e10',
      fontFamily: "'Inter', system-ui, sans-serif",
      color: '#fff',
    }}>
      {/* Header */}
      <header style={{
        padding: '48px 60px 0',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 16,
      }}>
        <div>
          <div style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 800,
            fontSize: 48,
            letterSpacing: '-0.03em',
            lineHeight: 1,
            background: 'linear-gradient(135deg, #fff 30%, rgba(255,255,255,0.5))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Switchback
          </div>
          <div style={{
            fontFamily: "'Instrument Serif', serif",
            fontStyle: 'italic',
            fontSize: 18,
            color: 'rgba(255,255,255,0.45)',
            marginTop: 4,
          }}>
            Wild Spokes · Suburban Chicago Women's Cycling
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, paddingBottom: 4 }}>
          <div style={{ display: 'flex', gap: 8 }}>
            {Object.entries(ANCHOR_COLORS).map(([name, color]) => (
              <div key={name} title={name} style={{
                width: 12, height: 12, borderRadius: 999,
                background: color,
                boxShadow: `0 0 8px ${color}80`,
              }} />
            ))}
          </div>
          <div style={{
            fontSize: 11,
            fontFamily: "'Geist Mono', monospace",
            color: 'rgba(255,255,255,0.3)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}>
            7 screens · React + Vite
          </div>
        </div>
      </header>

      {/* Hint strip */}
      <div style={{
        padding: '18px 60px 0',
        fontSize: 10,
        fontFamily: "'Geist Mono', monospace",
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.18)',
      }}>
        Click any screen to focus · ← → navigate · Esc to exit
      </div>

      {/* Canvas */}
      <div style={{
        overflowX: 'auto',
        overflowY: 'visible',
        padding: '40px 60px 72px',
        display: 'flex',
        gap: 28,
        scrollSnapType: 'x mandatory',
        scrollPadding: '0 60px',
      }}>
        {SCREENS.map((screen, i) => {
          const { Component } = screen;
          const accentColor = ANCHOR_COLORS[screen.anchor];
          const isHovered = hoveredIdx === i;

          return (
            <div
              key={screen.id}
              style={{
                flexShrink: 0,
                scrollSnapAlign: 'start',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 14,
                cursor: 'pointer',
              }}
              onClick={() => setFocused(screen.id)}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              {/* Phone wrapper at canvas scale */}
              <div style={{
                width: PHONE_W * CANVAS_SCALE,
                height: PHONE_H * CANVAS_SCALE,
                transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
                transition: 'transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s ease',
                boxShadow: isHovered
                  ? `0 24px 60px -12px ${accentColor}50, 0 0 0 1px rgba(255,255,255,0.06)`
                  : '0 12px 40px -8px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)',
                borderRadius: 52 * CANVAS_SCALE,
                overflow: 'hidden',
                transformOrigin: 'bottom center',
              }}>
                <div style={{
                  transform: `scale(${CANVAS_SCALE})`,
                  transformOrigin: 'top left',
                  width: PHONE_W,
                  height: PHONE_H,
                }}>
                  <Component onTabChange={handleTabChange} />
                </div>
              </div>

              {/* Label */}
              <div style={{
                fontSize: 11,
                fontFamily: "'Geist Mono', monospace",
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: isHovered ? accentColor : 'rgba(255,255,255,0.3)',
                transition: 'color 0.2s ease',
                fontWeight: 600,
              }}>
                {screen.label}
              </div>
            </div>
          );
        })}
      </div>

      {/* Fullscreen focus overlay */}
      {focusedScreen && FocusedComponent && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.85)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            zIndex: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'fadeIn 0.18s ease',
          }}
          onClick={(e) => { if (e.target === e.currentTarget) setFocused(null); }}
        >
          {/* Prev arrow */}
          <button
            onClick={() => navigate(-1)}
            disabled={focusedIdx === 0}
            style={{
              position: 'absolute',
              left: 28,
              top: '50%',
              transform: 'translateY(-50%)',
              width: 48, height: 48,
              borderRadius: 999,
              background: focusedIdx === 0 ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.12)',
              border: '1px solid rgba(255,255,255,0.12)',
              color: focusedIdx === 0 ? 'rgba(255,255,255,0.2)' : '#fff',
              cursor: focusedIdx === 0 ? 'default' : 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 20, transition: 'background 0.15s',
            }}
          >
            ←
          </button>

          {/* Phone at full size */}
          <div style={{
            width: PHONE_W,
            height: PHONE_H,
            flexShrink: 0,
            boxShadow: '0 40px 100px -20px rgba(0,0,0,0.8)',
            borderRadius: 52,
            overflow: 'hidden',
          }}>
            <FocusedComponent onTabChange={handleTabChange} />
          </div>

          {/* Next arrow */}
          <button
            onClick={() => navigate(1)}
            disabled={focusedIdx === SCREENS.length - 1}
            style={{
              position: 'absolute',
              right: 28,
              top: '50%',
              transform: 'translateY(-50%)',
              width: 48, height: 48,
              borderRadius: 999,
              background: focusedIdx === SCREENS.length - 1 ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.12)',
              border: '1px solid rgba(255,255,255,0.12)',
              color: focusedIdx === SCREENS.length - 1 ? 'rgba(255,255,255,0.2)' : '#fff',
              cursor: focusedIdx === SCREENS.length - 1 ? 'default' : 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 20, transition: 'background 0.15s',
            }}
          >
            →
          </button>

          {/* Close button */}
          <button
            onClick={() => setFocused(null)}
            style={{
              position: 'absolute',
              top: 24, right: 24,
              width: 40, height: 40,
              borderRadius: 999,
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.15)',
              color: 'rgba(255,255,255,0.7)',
              cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 18,
            }}
          >
            ×
          </button>

          {/* Screen label */}
          <div style={{
            position: 'absolute',
            top: 32,
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize: 11,
            fontFamily: "'Geist Mono', monospace",
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: ANCHOR_COLORS[focusedScreen.anchor],
            fontWeight: 600,
          }}>
            {focusedScreen.label}
          </div>

          {/* Dot navigation */}
          <div style={{
            position: 'absolute',
            bottom: 32,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: 8,
            alignItems: 'center',
          }}>
            {SCREENS.map((s, i) => (
              <button
                key={s.id}
                onClick={(e) => { e.stopPropagation(); setFocused(s.id); }}
                style={{
                  width: i === focusedIdx ? 20 : 6,
                  height: 6,
                  borderRadius: 999,
                  background: i === focusedIdx
                    ? ANCHOR_COLORS[s.anchor]
                    : 'rgba(255,255,255,0.25)',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'all 0.22s cubic-bezier(0.34,1.56,0.64,1)',
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
