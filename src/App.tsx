import { useState, type FormEvent } from 'react'
import './App.css'

const services = [
  {
    title: 'Google Ads',
    detail: 'Acquisition, optimization & scaling.',
  },
  {
    title: 'Meta Ads',
    detail: 'Creative testing, optimization & scaling.',
  },
  {
    title: 'Paid Acquisition Strategy',
    detail: 'Turning paid traffic into predictable customer acquisition.',
  },
]

const qualifiers = [
  'You already have a working SaaS product',
  'You have paying customers',
  'You have an existing acquisition channel',
  "You're ready to invest in paid growth",
  'You want to scale without blindly increasing spend',
]

function GrowthMark() {
  const points: [number, number][] = [
    [40, 260],
    [130, 232],
    [200, 244],
    [270, 168],
    [340, 118],
    [430, 46],
  ]
  const path = points.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x} ${y}`).join(' ')

  return (
    <svg
      className="growth-mark"
      viewBox="0 0 460 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Upward growth chart"
    >
      <line x1="40" y1="20" x2="40" y2="300" stroke="var(--border-strong)" strokeWidth="1" />
      <line x1="40" y1="300" x2="440" y2="300" stroke="var(--border-strong)" strokeWidth="1" />
      {[80, 160, 220].map((y) => (
        <line key={y} x1="40" y1={y} x2="440" y2={y} stroke="var(--border)" strokeWidth="1" />
      ))}
      <path
        className="growth-line"
        d={path}
        stroke="var(--accent)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {points.map(([cx, cy], i) => (
        <circle className="growth-dot" key={i} cx={cx} cy={cy} r="4" fill="var(--bg)" stroke="var(--accent)" strokeWidth="2" />
      ))}
    </svg>
  )
}

function App() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <header className="site-header">
        <div className="shell header-row">
          <span className="logo">RScaling</span>
          <a className="btn btn-accent btn-small" href="#apply">
            Apply
          </a>
        </div>
      </header>

      <main>
        <section className="hero" id="hero">
          <div className="shell hero-grid">
            <div className="hero-copy">
              <h1>Scaling SaaS With Paid Ads</h1>
              <p className="hero-sub">
                Google &amp; Meta Ads built to acquire more customers and scale profitably.
              </p>
              <a className="btn btn-accent" href="#apply">
                Apply now
              </a>
            </div>
            <div className="hero-visual" aria-hidden="false">
              <GrowthMark />
            </div>
          </div>
        </section>

        <section className="section" id="what-we-do">
          <div className="shell">
            <h2 className="section-heading">Built for SaaS companies ready to scale</h2>
            <div className="card-grid">
              {services.map((service) => (
                <div className="card" key={service.title}>
                  <h3>{service.title}</h3>
                  <p>{service.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="who-its-for">
          <div className="shell who-grid">
            <h2 className="section-heading who-heading">
              Built for SaaS companies with something that already works.
            </h2>
            <ul className="qualifier-list">
              {qualifiers.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section apply-section" id="apply">
          <div className="shell apply-shell">
            <div className="apply-intro">
              <h2 className="section-heading">See if we're a good fit</h2>
              <p className="apply-sub">
                Tell us a little about your business and we'll review your application.
              </p>
            </div>

            {submitted ? (
              <div className="apply-success" role="status">
                <h3>Application received</h3>
                <p>Thanks — we'll review your details and get back to you by email.</p>
              </div>
            ) : (
              <form className="apply-form" onSubmit={handleSubmit}>
                <div className="field">
                  <label htmlFor="website">Website URL</label>
                  <input id="website" name="website" type="url" placeholder="https://yourcompany.com" required />
                </div>

                <div className="field field-full">
                  <label htmlFor="what">What does your SaaS do?</label>
                  <textarea id="what" name="what" rows={2} required />
                </div>

                <div className="field">
                  <label htmlFor="mrr">MRR</label>
                  <input id="mrr" name="mrr" type="text" placeholder="e.g. $18,000/mo" required />
                </div>

                <div className="field">
                  <label htmlFor="spend">Current monthly ad spend</label>
                  <input id="spend" name="spend" type="text" placeholder="e.g. $5,000/mo" required />
                </div>

                <div className="field">
                  <label htmlFor="runningAds">Do you currently run paid ads?</label>
                  <select id="runningAds" name="runningAds" required defaultValue="">
                    <option value="" disabled>
                      Select an answer
                    </option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>

                <div className="field">
                  <label htmlFor="budget">Target monthly ad budget</label>
                  <input id="budget" name="budget" type="text" placeholder="e.g. $10,000/mo" required />
                </div>

                <fieldset className="field field-full">
                  <legend>Where do you currently advertise?</legend>
                  <div className="checkbox-row">
                    {['Google', 'Meta', 'TikTok', 'LinkedIn', 'Other'].map((channel) => (
                      <label className="checkbox-pill" key={channel}>
                        <input type="checkbox" name="channels" value={channel} />
                        {channel}
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div className="field">
                  <label htmlFor="knowsMetrics">Do you know your CAC / LTV / ROAS?</label>
                  <select id="knowsMetrics" name="knowsMetrics" required defaultValue="">
                    <option value="" disabled>
                      Select an answer
                    </option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                    <option value="some">Some of them</option>
                  </select>
                </div>

                <div className="field">
                  <label htmlFor="email">Email address</label>
                  <input id="email" name="email" type="email" placeholder="you@company.com" required />
                </div>

                <div className="field field-full">
                  <label htmlFor="challenge">What is your main growth challenge?</label>
                  <textarea id="challenge" name="challenge" rows={3} required />
                </div>

                <button className="btn btn-accent" type="submit">
                  Submit application
                </button>
              </form>
            )}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-row">
          <span>© 2026 RScaling. All rights reserved.</span>
          <a href="mailto:rinatandreev@gmail.com">rinatandreev@gmail.com</a>
        </div>
      </footer>
    </>
  )
}

export default App
