import Image from 'next/image';

const situations = [
  { number: '01', title: 'You are opening or moving', description: 'Get internet and phones lined up before the new space becomes a last-minute problem.' },
  { number: '02', title: 'Your current service is not working', description: 'See what else is available at your address and whether a better fit exists.' },
  { number: '03', title: 'Your phones need to catch up', description: 'Set up a system that works for the front desk, the field, remote staff, or all three.' },
];

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Keen Solutions Group home">
          <Image src="/ksg-logo.png" alt="KSG" width={46} height={46} priority />
          <span>Keen Solutions Group</span>
        </a>
        <a className="header-contact" href="#review">Free review</a>
      </header>

      <section className="hero">
        <div className="hero-inner">
          <p className="eyebrow">Central Indiana business connectivity</p>
          <h1>Internet and phones, without the headache.</h1>
          <p className="hero-lede">We help businesses understand their options, choose the right service, and get it installed. One local contact from first question to go-live.</p>
          <div className="hero-actions">
            <a className="primary-button" href="#review">Get a free service review</a>
            <a className="text-link" href="#how-it-works">How it works <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <div className="hero-rule" />
        <div className="hero-note"><span>For businesses</span><span>Internet · Phone · New locations</span></div>
      </section>

      <section className="plain-intro section">
        <p className="eyebrow">What KSG does</p>
        <div className="intro-grid">
          <h2>You tell us what you need. We handle the confusing part.</h2>
          <p>Providers, pricing, contracts, installation dates, number transfers—there is a lot to sort out. KSG brings the options together, explains them plainly, and helps keep the project on track.</p>
        </div>
      </section>

      <section className="situations" aria-labelledby="situations-title">
        <div className="section">
          <p className="eyebrow">When to call</p>
          <h2 id="situations-title">We are useful when…</h2>
          <div className="situation-list">
            {situations.map((situation) => (
              <article key={situation.number}>
                <span className="situation-number">{situation.number}</span>
                <div><h3>{situation.title}</h3><p>{situation.description}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="process section" id="how-it-works">
        <div className="process-heading"><p className="eyebrow">How it works</p><h2>A simple place to start.</h2></div>
        <ol>
          <li><strong>Tell us about the business.</strong><span>Where you are, what is changing, and what has not been working.</span></li>
          <li><strong>We look at the options.</strong><span>We compare what is available and walk you through the real tradeoffs.</span></li>
          <li><strong>You choose with confidence.</strong><span>Then we help coordinate the order, install, and activation.</span></li>
        </ol>
      </section>

      <section className="review" id="review">
        <div className="section review-inner">
          <div><p className="eyebrow eyebrow-light">Start with a conversation</p><h2>Not sure if your service is the right fit?</h2><p className="review-copy">Ask for a no-cost review. We will look at what you have, what is available, and where there may be a better option.</p></div>
          <Image className="review-logo" src="/ksg-logo-full.png" alt="Keen Solutions Group" width={400} height={400} />
          <a className="review-button" href="mailto:info@keensolutionsgroup.com?subject=Free%20Business%20Connectivity%20Review">Request a free review</a>
        </div>
      </section>

      <footer>
        <div className="footer-brand"><Image src="/ksg-logo.png" alt="" width={34} height={34} /><span>Keen Solutions Group</span></div>
        <a href="mailto:info@keensolutionsgroup.com">info@keensolutionsgroup.com</a>
        <p>Noblesville, Indiana · Serving Central Indiana businesses</p>
        <p>© {new Date().getFullYear()} Keen Solutions Group</p>
      </footer>
    </main>
  );
}
