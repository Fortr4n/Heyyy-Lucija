import { useState, useRef, useCallback } from 'react'
import FluidSubconscious from '../sections/FluidSubconscious'
import HeroOverlay from '../sections/HeroOverlay'
import DeepSpaceFold from '../sections/DeepSpaceFold'
import GenerativeCascade from '../sections/GenerativeCascade'
import { footerConfig } from '../config'

import confetti from 'canvas-confetti'

function DecisionButtons() {
  const noButtonRef = useRef<HTMLButtonElement>(null)
  const [yesClicked, setYesClicked] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleNoHover = useCallback(() => {
    const button = noButtonRef.current
    if (!button) return
    const x = Math.random() * (window.innerWidth - button.offsetWidth)
    const y = Math.random() * (window.innerHeight - button.offsetHeight)
    button.style.position = 'fixed'
    button.style.left = `${x}px`
    button.style.top = `${y}px`
    button.style.transition = 'all 0.3s ease'
    button.style.zIndex = '1000'
  }, [])

  const handleYesClick = () => {
    setYesClicked(true)
    const duration = 3 * 1000
    const animationEnd = Date.now() + duration
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 10000 }

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min
    
    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now()
      if (timeLeft <= 0) {
        return clearInterval(interval)
      }
      const particleCount = 50 * (timeLeft / duration)
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } })
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } })
    }, 250)
  }

  const handleGoogleCalendar = () => {
    const url = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Sushi+Date+with+Kadean&dates=20260523T190000Z/20260523T210000Z&details=Sushi+date+at+Japatapa+Toshibar.+Dress+code:+Main+Character+Energy.&location=Japatapa+Toshibar";
    window.open(url, '_blank');
  };

  const handleOutlookCalendar = () => {
    const url = "https://outlook.live.com/calendar/0/deeplink/compose?path=/calendar/action/compose&rru=addevent&startdt=2026-05-23T19:00:00Z&enddt=2026-05-23T21:00:00Z&subject=Sushi%20Date%20with%20Kadean&body=Sushi%20date%20at%20Japatapa%20Toshibar.%20Dress%20code:%20Main%20Character%20Energy.&location=Japatapa%20Toshibar";
    window.open(url, '_blank');
  };

  if (yesClicked) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          padding: 'clamp(40px, 8vh, 80px) 24px',
          maxWidth: '600px',
          margin: '0 auto',
        }}
      >
        <div
          className="font-serif-display"
          style={{
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            fontWeight: 700,
            color: '#ffffff',
            marginBottom: '24px',
            letterSpacing: '0.04em',
          }}
        >
          She said YES!
        </div>
        <div
          className="font-mono-data"
          style={{
            fontSize: '0.85rem',
            color: 'rgba(255,255,255,0.7)',
            letterSpacing: '0.08em',
            lineHeight: 1.8,
            marginBottom: '40px',
          }}
        >
          <div>See you on the 23rd, Lucija</div>
          <div style={{ marginTop: '8px', color: 'rgba(255,255,255,0.4)' }}>
            Kadean is doing a happy dance right now
          </div>
        </div>

        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '48px' }}>
          <button
            onClick={handleGoogleCalendar}
            style={{
              padding: '16px 32px',
              fontSize: '0.85rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              background: 'transparent',
              color: '#ffffff',
              border: '1px solid rgba(255,255,255,0.3)',
              cursor: 'pointer',
              fontFamily: "'Geist Mono', monospace",
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
              e.currentTarget.style.border = '1px solid rgba(255,255,255,0.8)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.border = '1px solid rgba(255,255,255,0.3)'
            }}
          >
            Add to Google
          </button>
          
          <button
            onClick={handleOutlookCalendar}
            style={{
              padding: '16px 32px',
              fontSize: '0.85rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              background: 'transparent',
              color: '#ffffff',
              border: '1px solid rgba(255,255,255,0.3)',
              cursor: 'pointer',
              fontFamily: "'Geist Mono', monospace",
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
              e.currentTarget.style.border = '1px solid rgba(255,255,255,0.8)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.border = '1px solid rgba(255,255,255,0.3)'
            }}
          >
            Add to Outlook
          </button>
        </div>

        {!formSubmitted ? (
          <div style={{ width: '100%', textAlign: 'left', background: 'rgba(255,255,255,0.03)', padding: '32px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <h3 className="font-mono-data" style={{ color: '#fff', letterSpacing: '0.1em', marginBottom: '24px', fontSize: '1.1rem' }}>PRE-DATE PREFERENCES</h3>
            <form 
              onSubmit={(e) => { 
                e.preventDefault(); 
                setFormSubmitted(true); 
              }}
              style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label className="font-mono-data" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.1em' }}>ANY DIETARY RESTRICTIONS?</label>
                <input 
                  type="text" 
                  placeholder="e.g. no shellfish, allergic to bad vibes..." 
                  style={{ background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.2)', padding: '12px 16px', color: '#fff', fontFamily: "'Geist Mono', monospace", fontSize: '0.85rem' }}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label className="font-mono-data" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.1em' }}>DRINK OF CHOICE?</label>
                <input 
                  type="text" 
                  placeholder="Sake, Wine, Matcha, Water..." 
                  style={{ background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.2)', padding: '12px 16px', color: '#fff', fontFamily: "'Geist Mono', monospace", fontSize: '0.85rem' }}
                />
              </div>
              <button 
                type="submit"
                style={{
                  marginTop: '16px',
                  padding: '16px',
                  background: '#fff',
                  color: '#000',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: "'Geist Mono', monospace",
                  fontWeight: 'bold',
                  letterSpacing: '0.1em'
                }}
              >
                SUBMIT PREFERENCES
              </button>
            </form>
          </div>
        ) : (
          <div className="font-mono-data" style={{ padding: '32px', border: '1px dashed rgba(255,255,255,0.2)', color: '#4ade80', letterSpacing: '0.05em' }}>
            ✓ Preferences saved! Everything is set.
          </div>
        )}
      </div>
    )
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '32px',
        flexWrap: 'wrap',
        padding: 'clamp(40px, 8vh, 80px) 24px',
        minHeight: '200px',
        position: 'relative',
      }}
    >
      <button
        onClick={handleYesClick}
        style={{
          padding: '20px 60px',
          fontSize: 'clamp(1rem, 2vw, 1.4rem)',
          fontWeight: 700,
          letterSpacing: '0.2em',
          textTransform: 'uppercase' as const,
          background: '#ffffff',
          color: '#000000',
          border: 'none',
          cursor: 'pointer',
          fontFamily: "'Geist Mono', monospace",
          transition: 'all 0.3s ease',
          boxShadow: '0 0 30px rgba(255,255,255,0.2)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)'
          e.currentTarget.style.boxShadow = '0 0 60px rgba(255,255,255,0.4)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)'
          e.currentTarget.style.boxShadow = '0 0 30px rgba(255,255,255,0.2)'
        }}
      >
        Say Yes
      </button>

      <button
        ref={noButtonRef}
        onMouseEnter={handleNoHover}
        style={{
          padding: '20px 60px',
          fontSize: 'clamp(1rem, 2vw, 1.4rem)',
          fontWeight: 700,
          letterSpacing: '0.2em',
          textTransform: 'uppercase' as const,
          background: '#333333',
          color: '#666666',
          border: '1px solid #444444',
          cursor: 'not-allowed',
          fontFamily: "'Geist Mono', monospace",
          position: 'relative',
        }}
      >
        Say No
      </button>
    </div>
  )
}

export default function Home() {
  const hasFooter =
    !!footerConfig.brandText ||
    footerConfig.taglineLines.length > 0 ||
    footerConfig.navigationLinks.length > 0 ||
    footerConfig.contactLinks.length > 0 ||
    !!footerConfig.copyright

  return (
    <>
      <FluidSubconscious />

      <main>
        <HeroOverlay />
        <GenerativeCascade />
        <DeepSpaceFold />

        {/* Decision Section */}
        <section
          style={{
            position: 'relative',
            zIndex: 2,
            width: '100%',
            background: '#000000',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <DecisionButtons />
        </section>

        {hasFooter && (
          <footer
            style={{
              position: 'relative',
              zIndex: 2,
              width: '100%',
              background: '#000000',
              borderTop: '1px solid rgba(255,255,255,0.08)',
              padding: 'clamp(60px, 10vh, 120px) clamp(24px, 6vw, 80px)',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                gap: '48px',
                maxWidth: '1400px',
                margin: '0 auto',
              }}
            >
              <div style={{ maxWidth: '400px' }}>
                {footerConfig.brandText && (
                  <div
                    className="font-serif-display"
                    style={{
                      fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                      fontWeight: 700,
                      color: '#ffffff',
                      marginBottom: '16px',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {footerConfig.brandText}
                  </div>
                )}
                {footerConfig.taglineLines.length > 0 && (
                  <div
                    className="font-mono-data"
                    style={{
                      fontSize: '0.7rem',
                      color: 'rgba(255,255,255,0.35)',
                      lineHeight: 1.8,
                      letterSpacing: '0.08em',
                    }}
                  >
                    {footerConfig.taglineLines.map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </div>
                )}
              </div>

              {(footerConfig.navigationLinks.length > 0 || footerConfig.contactLinks.length > 0) && (
                <div
                  style={{
                    display: 'flex',
                    gap: 'clamp(32px, 6vw, 80px)',
                    flexWrap: 'wrap',
                  }}
                >
                  {footerConfig.navigationLinks.length > 0 && (
                    <div>
                      {footerConfig.navigationHeading && (
                        <div
                          className="font-mono-data"
                          style={{
                            fontSize: '0.6rem',
                            color: 'rgba(255,255,255,0.3)',
                            letterSpacing: '0.2em',
                            marginBottom: '16px',
                          }}
                        >
                          {footerConfig.navigationHeading}
                        </div>
                      )}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {footerConfig.navigationLinks.map((link) => (
                          <span
                            key={link.label}
                            style={{
                              fontSize: '0.85rem',
                              color: 'rgba(255,255,255,0.55)',
                              letterSpacing: '0.06em',
                              fontWeight: 300,
                            }}
                          >
                            {link.label}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {footerConfig.contactLinks.length > 0 && (
                    <div>
                      {footerConfig.contactHeading && (
                        <div
                          className="font-mono-data"
                          style={{
                            fontSize: '0.6rem',
                            color: 'rgba(255,255,255,0.3)',
                            letterSpacing: '0.2em',
                            marginBottom: '16px',
                          }}
                        >
                          {footerConfig.contactHeading}
                        </div>
                      )}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {footerConfig.contactLinks.map((link) => (
                          <span
                            key={link.label}
                            className="font-mono-data"
                            style={{
                              fontSize: '0.75rem',
                              color: 'rgba(255,255,255,0.45)',
                              letterSpacing: '0.06em',
                            }}
                          >
                            {link.label}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {(footerConfig.copyright || footerConfig.creditText) && (
              <div
                style={{
                  marginTop: 'clamp(48px, 8vh, 80px)',
                  paddingTop: '24px',
                  borderTop: '1px solid rgba(255,255,255,0.06)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '16px',
                  maxWidth: '1400px',
                  margin: 'clamp(48px, 8vh, 80px) auto 0',
                }}
              >
                {footerConfig.copyright && (
                  <div
                    className="font-mono-data"
                    style={{
                      fontSize: '0.6rem',
                      color: 'rgba(255,255,255,0.2)',
                      letterSpacing: '0.12em',
                    }}
                  >
                    {footerConfig.copyright}
                  </div>
                )}
                {footerConfig.creditText && (
                  <div
                    className="font-mono-data"
                    style={{
                      fontSize: '0.6rem',
                      color: 'rgba(255,255,255,0.15)',
                      letterSpacing: '0.12em',
                    }}
                  >
                    {footerConfig.creditText}
                  </div>
                )}
              </div>
            )}
          </footer>
        )}
      </main>
    </>
  )
}
