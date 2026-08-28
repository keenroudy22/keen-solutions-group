import Image from 'next/image';
import ReviewRequest from './review-request';

const services = ['Business internet', 'Business phone systems', 'New locations and office moves', 'Backup and service reviews'];
const steps = ['Tell us what is changing.', 'We review the available options with you.', 'We help coordinate the service you choose.'];
const providerLogos = [
  { file: 'comcast-business.png', name: 'Comcast Business' },
  { file: 'spectrum.png', name: 'Spectrum' },
  { file: '8x8.png', name: '8x8' },
  { file: 'dialpad.png', name: 'Dialpad' },
];
export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Keen Solutions Group home">
          <Image className="brand-mark" src="/ksg-mark-transparent.png" alt="KSG" width={64} height={64} priority />
          <span>Keen Solutions Group</span>
        </a>
      </header>

      <section className="hero">
        <div className="content hero-inner">
          <p className="eyebrow">Central Indiana • business connectivity</p>
          <h1>Internet or phones slowing your business down?</h1>
          <p>Tell KSG what is not working. We will sort through the options and help you move forward.</p>
          <ReviewRequest />
        </div>
      </section>

      <section className="content services" aria-labelledby="services-title">
        <p className="eyebrow">What KSG can handle</p>
        <h2 id="services-title">Internet, phone, or a new location—we will help you get it right.</h2>
        <ul>{services.map((service) => <li key={service}>{service}</li>)}</ul>
      </section>

      <section className="content process" aria-labelledby="process-title">
        <div><p className="eyebrow">How it works</p><h2 id="process-title">You tell us the problem. We help solve it.</h2></div>
        <ol>{steps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, '0')}</span>{step}</li>)}</ol>
      </section>

      <section className="provider-network" aria-labelledby="network-title">
        <div className="content">
          <p className="eyebrow">More options, one point of contact</p>
          <h2 id="network-title">KSG works through the Telarus supplier network.</h2>
          <p className="network-copy">That gives your business access to leading internet and phone providers while KSG helps you compare the options that fit your location and needs.</p>
          <div className="provider-logos" aria-label="Selected provider options">
            {providerLogos.map(({ file, name }) => <Image key={file} src={`/providers/${file}`} alt={name} width={150} height={52} />)}
          </div>
        </div>
      </section>

      <footer id="contact-done">
        <p className="submission-notice">Thanks — KSG received your request and will be in touch.</p>
        <div className="footer-brand"><Image src="/ksg-mark-transparent.png" alt="" width={30} height={30} /><span>Keen Solutions Group</span></div>
        <p>© {new Date().getFullYear()} Keen Solutions Group</p>
      </footer>
    </main>
  );
}
