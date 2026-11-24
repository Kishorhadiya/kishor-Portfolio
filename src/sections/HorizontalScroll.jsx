import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ─────────────────────────────────────────────
   Horizontal Section Phrases
──────────────────────────────────────────────── */
const PHRASES = [
  { text: 'CRAFTING SEAMLESS', sub: 'MERN & REACT.JS EXPERIENCES' },
  { text: 'INNOVATIVE', sub: 'ARCHITECTURE & CLEAN CODE' },
  { text: 'HIGH PERFORMANCE', sub: 'RESPONSIVE FULL-STACK APPS' },
  { text: 'MODERN TECH STACK', sub: 'RESTFUL APIS & SECURE AUTH' },
];

const HorizontalScroll = () => {
  const sectionRef    = useRef(null);
  const trackRef      = useRef(null);
  const cardRefs      = useRef([]);
  const numRef        = useRef(null);
  const mobileListRef = useRef(null);

  useEffect(() => {
    const section    = sectionRef.current;
    const track      = trackRef.current;
    const mobileList = mobileListRef.current;
    if (!section) return;

    const mm = gsap.matchMedia();

    // ── Desktop: Silky Pinned Scrub Animation ──
    mm.add('(min-width: 769px)', () => {
      if (!track) return;
      const getTravelDistance = () => Math.max(0, track.scrollWidth - window.innerWidth);

      /* 1. Main Horizontal Pinning & Translation */
      const hTween = gsap.to(track, {
        x: () => -getTravelDistance(),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${getTravelDistance() + 200}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 0,
          fastScrollEnd: true,
          preventOverlaps: true,
          onUpdate: (self) => {
            if (numRef.current) {
              const progressVal = Math.round(self.progress * 100);
              numRef.current.textContent = String(progressVal).padStart(3, '0');
            }
          },
        },
      });

      /* 2. Uniform Brightness & Motion for All Cards */
      cardRefs.current.forEach((card, idx) => {
        if (!card) return;
        const title = card.querySelector('.h-title');
        const sub   = card.querySelector('.h-sub');

        // All cards maintain full, uniform 100% light brightness (no dimmed/less-light cards)
        gsap.set([title, sub], { opacity: 1 });

        if (idx > 0) {
          // Smooth glide-in on scroll without reducing opacity
          if (title) {
            gsap.fromTo(title,
              { y: 25 },
              {
                y: 0,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: card,
                  containerAnimation: hTween,
                  start: 'left 92%',
                  end: 'left 52%',
                  scrub: 0.8,
                },
              }
            );
          }

          if (sub) {
            gsap.fromTo(sub,
              { y: 15 },
              {
                y: 0,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: card,
                  containerAnimation: hTween,
                  start: 'left 88%',
                  end: 'left 55%',
                  scrub: 0.8,
                },
              }
            );
          }
        }
      });

      /* 3. Subtle continuous spin on separators */
      const separators = section.querySelectorAll('.h-separator');
      if (separators.length) {
        gsap.to(separators, {
          rotate: 360,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: () => `+=${getTravelDistance() + 200}`,
            scrub: 1,
          },
        });
      }
    });

    // ── Mobile: Smooth vertical flow without viewport locking ──
    mm.add('(max-width: 768px)', () => {
      if (!mobileList) return;
      const items = Array.from(mobileList.children);
      gsap.fromTo(items,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: 'power2.out',
          scrollTrigger: {
            trigger: mobileList,
            start: 'top 85%',
            once: true,
          },
        }
      );
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="horizontal-scroll"
      style={{
        width: '100%',
        height: '100vh',
        minHeight: '100vh',
        background: '#0a0a0a',
        position: 'relative',
        zIndex: 10,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Decorative hairline borders */}
      <div
        style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)',
          pointerEvents: 'none',
        }}
      />

      {/* Desktop Indicator - Explore */}
      <div
        className="h-desktop-indicator"
        style={{
          position: 'absolute',
          top: '2.5rem',
          left: 'clamp(1.5rem, 5vw, 4rem)',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.65rem',
          letterSpacing: '0.22em',
          color: 'rgba(255,255,255,0.75)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          pointerEvents: 'none',
          zIndex: 20,
        }}
      >
        <span
          style={{
            width: 7, height: 7, borderRadius: '50%', background: '#ffffff',
            display: 'inline-block', boxShadow: '0 0 10px rgba(255,255,255,0.8)',
          }}
        />
        HORIZONTAL SCROLL EXPERIENCE →
      </div>

      {/* Desktop Indicator - Progress Counter */}
      <div
        className="h-desktop-indicator"
        style={{
          position: 'absolute',
          top: '2.5rem',
          right: 'clamp(1.5rem, 5vw, 4rem)',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.65rem',
          letterSpacing: '0.22em',
          color: 'rgba(255,255,255,0.75)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          pointerEvents: 'none',
          zIndex: 20,
        }}
      >
        <span ref={numRef} style={{ fontSize: '1.05rem', fontWeight: 800, color: '#ffffff' }}>
          000
        </span>
        <span style={{ color: 'rgba(255,255,255,0.7)' }}>/ 100</span>
      </div>

      {/* Desktop Indicator - Bottom Badge */}
      <div
        className="h-desktop-indicator"
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          right: 'clamp(1.5rem, 5vw, 4rem)',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.6rem',
          letterSpacing: '0.22em',
          color: 'rgba(255,255,255,0.65)',
          pointerEvents: 'none',
          zIndex: 20,
        }}
      >
        GSAP PINNED TRACK · FLUID MOTION
      </div>

      {/* Desktop Pinned Moving Horizontal Track */}
      <div
        ref={trackRef}
        className="h-desktop-track"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10vw',
          paddingLeft: 'clamp(2.5rem, 8vw, 6rem)',
          paddingRight: 'clamp(4rem, 25vw, 20rem)',
          whiteSpace: 'nowrap',
          willChange: 'transform',
          userSelect: 'none',
        }}
      >
        {PHRASES.map((phrase, idx) => (
          <React.Fragment key={idx}>
            <div
              ref={(el) => { cardRefs.current[idx] = el; }}
              className="h-card"
              style={{
                display: 'inline-flex',
                flexDirection: 'column',
                gap: '0.5rem',
                cursor: 'default',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.2em',
                  color: 'rgba(255,255,255,0.7)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                }}
              >
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#ffffff' }} />
                // 0{idx + 1}
              </div>

              <h2
                className="h-title"
                style={{
                  display: 'inline-block',
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(3.5rem, 8vw, 8.5rem)',
                  fontWeight: 900,
                  letterSpacing: '-0.04em',
                  lineHeight: 1,
                  color: '#ffffff',
                  margin: 0,
                  opacity: 1,
                  willChange: 'transform',
                }}
              >
                {phrase.text}
              </h2>

              <div
                className="h-sub"
                style={{
                  display: 'inline-block',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'clamp(0.85rem, 1.6vw, 1.4rem)',
                  letterSpacing: '0.24em',
                  color: 'rgba(255,255,255,0.85)',
                  paddingLeft: '0.12em',
                  opacity: 1,
                  willChange: 'transform',
                }}
              >
                {phrase.sub}
              </div>
            </div>

            {idx < PHRASES.length - 1 && (
              <div
                className="h-separator"
                style={{
                  display: 'inline-flex',
                  flexShrink: 0,
                  width: 'clamp(48px, 5.5vw, 76px)',
                  height: 'clamp(48px, 5.5vw, 76px)',
                  borderRadius: '50%',
                  border: '1px solid rgba(255,255,255,0.35)',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  fontSize: 'clamp(1.2rem, 2vw, 2rem)',
                  background: 'rgba(255,255,255,0.06)',
                  boxShadow: '0 0 20px rgba(255,255,255,0.1)',
                  willChange: 'transform',
                }}
              >
                ✦
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Mobile Flow Layout (rendered naturally on mobile, zero scroll locks) */}
      <div className="h-mobile-layout">
        <div style={{
          display: 'flex', alignItems: 'center', gap: '0.6rem',
          fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
          letterSpacing: '0.2em', color: 'rgba(255,255,255,0.75)',
          marginBottom: '1rem',
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'white' }} />
          CORE PHILOSOPHY
        </div>

        <div ref={mobileListRef} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {PHRASES.map((phrase, idx) => (
            <div
              key={idx}
              style={{
                padding: '1.5rem',
                borderRadius: '1rem',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.15)',
              }}
            >
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
                letterSpacing: '0.15em', color: 'rgba(255,255,255,0.7)',
                marginBottom: '0.5rem',
              }}>
                // 0{idx + 1}
              </div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.75rem, 6vw, 2.5rem)',
                fontWeight: 900,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                color: '#ffffff',
                marginBottom: '0.5rem',
              }}>
                {phrase.text}
              </h3>
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                letterSpacing: '0.15em',
                color: 'rgba(255,255,255,0.85)',
              }}>
                {phrase.sub}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .h-title {
          display: inline-block;
          color: #ffffff !important;
          opacity: 1 !important;
        }
        .h-sub {
          display: inline-block;
          color: rgba(255, 255, 255, 0.85) !important;
          opacity: 1 !important;
        }
        @media (max-width: 768px) {
          #horizontal-scroll {
            height: auto !important;
            min-height: auto !important;
            padding: 4.5rem 1.25rem !important;
            overflow: visible !important;
            display: block !important;
          }
          .h-desktop-track,
          .h-desktop-indicator {
            display: none !important;
          }
          .h-mobile-layout {
            display: flex !important;
            flex-direction: column;
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
          }
        }
        @media (min-width: 769px) {
          .h-mobile-layout {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HorizontalScroll;
