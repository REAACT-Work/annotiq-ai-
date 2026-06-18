import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const email = 'sumanasanaroy@gmail.com';
const linkedIn = 'https://www.linkedin.com/in/annotiq-ai-860820416';

const navItems = [
  ['home', 'Home'],
  ['services', 'Services'],
  ['industries', 'Industries'],
  ['portfolio', 'Portfolio'],
  ['clients', 'Clients'],
  ['careers', 'Careers'],
  ['contact', 'Contact'],
];

const pages = {
  home: {
    title: 'Powering AI with carefully prepared training data',
    lead: 'Annotiq AI helps AI teams turn raw images, videos, text, audio, and documents into clean, useful datasets. We combine human attention with organized review so your models learn from labels you can trust.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop',
    sections: [
      {
        type: 'cards',
        alt: true,
        title: 'Training data prepared with human care',
        text: 'Good AI starts with patient, consistent labeling. Our team works through images, videos, text, audio, and documents with clear guidelines, review loops, and practical judgement.',
        cards: [
          ['Computer Vision Datasets', 'Bounding boxes, polygons, segmentation, key points, and object tracking for detection, safety, retail, robotics, and inspection models.', 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop'],
          ['Language and Document Work', 'Intent tagging, sentiment review, OCR correction, entity extraction, search relevance, and document classification with clean handoffs.', 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop'],
          ['Managed Quality Checks', 'Sample calibration, double review, edge-case tracking, and feedback cycles so your dataset improves as work moves forward.', 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop'],
        ],
      },
      {
        type: 'split',
        title: 'Built for teams that need dependable progress',
        text: 'We support early experiments, model refreshes, and long-running production datasets with practical annotation workflows your engineers can trust.',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop',
        points: ['Clear project setup with sample tasks before full production begins.', 'Flexible team sizes for pilot batches, urgent deadlines, and ongoing data operations.', 'Communication that explains issues clearly instead of hiding them in vague reports.'],
      },
    ],
  },
  services: {
    title: 'Annotation services for real machine learning teams',
    lead: 'From computer vision to text and document AI, we prepare datasets with clear instructions, reliable review, and a workflow that can grow with your project.',
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=1200&auto=format&fit=crop',
    sections: [
      {
        type: 'cards',
        alt: true,
        title: 'What we can annotate for you',
        text: 'Our services are shaped around real machine learning workflows: define the label set, test it on sample data, fix confusing rules, then scale with review and reporting.',
        cards: [
          ['Image Annotation', 'Bounding boxes, polygons, cuboids, landmarks, segmentation masks, classification, and defect labeling.', 'https://images.unsplash.com/photo-1535378620166-273708d44e4c?q=80&w=1200&auto=format&fit=crop'],
          ['Video Annotation', 'Frame-by-frame object tracking, event tagging, movement paths, and temporal labels.', 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop'],
          ['NLP and Text Labeling', 'Entity recognition, sentiment, intent, moderation, response ranking, and search relevance evaluation.', 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop'],
          ['Document and OCR', 'Invoice fields, receipts, IDs, forms, handwritten text review, and table extraction.', 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&auto=format&fit=crop'],
        ],
      },
    ],
  },
  industries: {
    title: 'Data annotation shaped for your industry',
    lead: 'We support teams in healthcare, retail, mobility, agriculture, robotics, finance, and customer experience with labels that match real-world data.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop',
    sections: [
      {
        type: 'cards',
        alt: true,
        title: 'Industry-focused annotation support',
        text: 'Different AI products need different judgement. Each dataset needs separate rules, examples, and quality expectations.',
        cards: [
          ['Healthcare AI', 'Careful labeling support for medical images, clinical documents, scanned forms, and patient communication datasets.', 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop'],
          ['Retail and E-commerce', 'Product categorization, shelf images, catalog enrichment, attribute tagging, and search quality evaluation.', 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?q=80&w=1200&auto=format&fit=crop'],
          ['Mobility and Autonomous Systems', 'Road objects, lanes, signs, pedestrians, vehicle behavior, LiDAR support, and video tracking.', 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop'],
          ['Agriculture and Environment', 'Drone imagery, crop health review, pest detection, land classification, and environmental monitoring datasets.', 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1200&auto=format&fit=crop'],
        ],
      },
    ],
  },
  portfolio: {
    title: 'Recent annotation project examples',
    lead: 'Explore dataset preparation work Annotiq AI can support, from image labeling and segmentation to OCR cleanup and human review.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
    sections: [
      {
        type: 'cards',
        alt: true,
        title: 'Examples of work we support',
        text: 'Annotiq AI can take messy raw data and turn it into structured training sets for real client needs.',
        cards: [
          ['Retail Image Dataset', 'Product detection, shelf gap checks, package classification, and quality review for store and warehouse images.', 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop'],
          ['Robotics Segmentation', 'Pixel-level masks for tools, hands, parts, work surfaces, and safety zones.', 'https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=1200&auto=format&fit=crop'],
          ['OCR and Document AI', 'Field extraction and correction for invoices, forms, receipts, contracts, and handwritten notes.', 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop'],
        ],
      },
    ],
  },
  clients: {
    title: 'Start a client project with Annotiq AI',
    lead: 'Tell us what kind of data you have, what labels you need, and when you want the first batch. We are based in Bengal, India.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop',
    clientPage: true,
    sections: [],
  },
  careers: {
    title: 'Join our remote data annotation workforce',
    lead: 'We are building a careful, dependable team for annotation, review, and project support.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop',
    sections: [
      {
        type: 'cards',
        alt: true,
        title: 'Work with us on practical AI data projects',
        text: 'Annotiq AI welcomes careful, curious people who enjoy detail-oriented work.',
        cards: [
          ['Remote Annotation Roles', 'Support image, text, document, and video labeling projects with clear task instructions.', 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop'],
          ['Quality Review', 'Compare completed labels with guidelines, catch inconsistencies, and explain corrections.', 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop'],
          ['Project Coordination', 'Track delivery, prepare notes for clients, and keep annotation teams aligned.', 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop'],
        ],
      },
    ],
  },
  contact: {
    title: 'Let us build better AI data together',
    lead: 'Send your project details, career enquiry, or partnership question. For official connection, use sumanasanaroy@gmail.com.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop',
    contactPage: true,
    sections: [],
  },
};

function App() {
  const [page, setPage] = useState(() => window.location.pathname.replace('/', '') || 'home');
  const [menuOpen, setMenuOpen] = useState(false);

  

  useEffect(() => {
  const onPopState = () => setPage(window.location.pathname.replace('/', '') || 'home');
  window.addEventListener('popstate', onPopState);
  return () => window.removeEventListener('popstate', onPopState);
}, []);

  const activePage = pages[page] ? page : 'home';
  const current = pages[activePage];

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  const goToPage = (id) => {
  window.history.pushState({}, '', id === 'home' ? '/' : `/${id}`);
  setPage(id);
};

  return (
    <>
      <div className="bg-lines" />
      <Header activePage={activePage} menuOpen={menuOpen} setMenuOpen={setMenuOpen} goToPage={goToPage} />
      <Hero page={current} />
      {current.sections.map((section, index) => <ContentSection key={index} section={section} />)}
      {activePage === 'home' && <LiveProject />}
      {current.clientPage && <ClientSection />}
      {current.contactPage && <ContactSection />}
      <VideoSection />
      <Footer />
    </>
  );
}

function Header({ activePage, menuOpen, setMenuOpen, goToPage }) {
  return (
    <header>
      <a className="logo-wrap" href="#/home" aria-label="Annotiq AI home">
        <img src="/logo-nav.png" alt="Annotiq AI logo" />
        <h2>Annotiq AI</h2>
      </a>
      <div className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        <button className="nav-toggle" type="button" aria-label="Open navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          &ctdot;
        </button>
        <nav className="nav-panel" aria-label="Main navigation">
          {navItems.map(([id, label]) => (
            <a key={id} className={activePage === id ? 'active' : ''} href={`#/${id}`}>{label}</a>
          ))}
          <a href={linkedIn} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </nav>
      </div>
    </header>
  );
}

function Hero({ page }) {
  return (
    <section className="hero">
      <div>
        <h1>{page.title}</h1>
        <p className="lead">{page.lead}</p>
        <a className="btn" href="#/clients">Start a Client Project</a>
        <p className="note">Bengal, India | Official connection: <a className="email" href={`mailto:${email}`}>{email}</a> | <a className="social-link" href={linkedIn} target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
      </div>
      <div><img src={page.image} alt="Annotiq AI visual" /></div>
    </section>
  );
}

function ContentSection({ section }) {
  if (section.type === 'split') {
    return (
      <section className="section reveal">
        <div className="split">
          <div>
            <h2>{section.title}</h2>
            <p>{section.text}</p>
            <div className="list">{section.points.map((point) => <p key={point}>{point}</p>)}</div>
          </div>
          <img className="feature-img" src={section.image} alt={section.title} />
        </div>
      </section>
    );
  }

  return (
    <section className={`section reveal ${section.alt ? 'alt' : ''}`}>
      <div className="section-title">
        <h2>{section.title}</h2>
        <p>{section.text}</p>
      </div>
      <div className="grid">
        {section.cards.map(([title, text, image]) => (
          <article className="card reveal" key={title}>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function LiveProject() {
  return (
    <section className="section live-project reveal">
      <div className="section-title">
        <h2>Live Project</h2>
        <p>A featured view of how Annotiq AI can support active video and ad data projects with clean labels and review notes.</p>
      </div>
      <div className="project-card">
        <img className="project-img" src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=1200&auto=format&fit=crop" alt="Video annotation dashboard preview" />
        <div>
          <span className="project-kicker">Tapi Video Annotation</span>
          <h3>Ads Tagging</h3>
          <p>For ad tagging projects, Annotiq AI can review video frames, mark brand placements, classify ad types, tag product visibility, note scene context, and flag unclear moments for quality review.</p>
          <div className="project-tags"><span>Video review</span><span>Ad placement tags</span><span>Frame-level QA</span><span>Client-ready notes</span></div>
        </div>
      </div>
    </section>
  );
}

function ClientSection() {
  return (
    <>
      <section className="section alt reveal">
        <div className="split">
          <div>
            <h2>Client enquiry details</h2>
            <p>Use this page as a simple starting point for clients. The email button opens a prepared message so they can share the important details easily.</p>
            <div className="list">
              <p>Project type: image annotation, video annotation, ads tagging, OCR, text labeling, or custom review.</p>
              <p>Expected data volume, sample files, deadline, and preferred delivery format.</p>
              <p>Guidelines, label names, examples, and any quality checks the client already requires.</p>
            </div>
          </div>
          <ContactBox title="Quick Client Form" subject="Client Project Enquiry - Annotiq AI" client />
        </div>
      </section>
      <section className="section reveal">
        <div className="section-title"><h2>What happens next</h2><p>After a client reaches out, Annotiq AI can move from project discussion to a calibration batch and then a clear delivery plan.</p></div>
        <div className="stats">
          <div className="stat"><strong>1. Scope</strong><p>Understand data type, labels, privacy needs, expected volume, and timeline.</p></div>
          <div className="stat"><strong>2. Sample</strong><p>A small test batch confirms rules, edge cases, and review expectations.</p></div>
          <div className="stat"><strong>3. Delivery</strong><p>Plan milestones, quality checks, and final handoff so the client starts smoothly.</p></div>
        </div>
      </section>
    </>
  );
}

function ContactSection() {
  return (
    <section className="section alt reveal">
      <div className="split">
        <div>
          <h2>Tell us what you are building</h2>
          <p>Whether you need a small pilot dataset or steady annotation support, send a short note with your data type, expected volume, timeline, and labels.</p>
          <div className="list">
            <p>Email for official connection: <a className="email" href={`mailto:${email}`}>{email}</a></p>
            <p>Share sample guidelines, example images, documents, or label names if you already have them.</p>
            <p>For careers, include your role interest, location, and relevant experience.</p>
          </div>
        </div>
        <ContactBox title="Contact Form" subject="Annotiq AI Project Enquiry" />
      </div>
    </section>
  );
}

function ContactBox({ title, subject, client = false }) {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('sending');
    const formData = new FormData(event.currentTarget);
    formData.append('form-name', 'annotiq-contact');

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });
      setStatus('sent');
      event.currentTarget.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="contact-box">
      <h2>{title}</h2>
      <form name="annotiq-contact" method="post" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit}>
        <input type="hidden" name="form-name" value="annotiq-contact" />
        <input className="hidden-field" name="bot-field" tabIndex="-1" autoComplete="off" />
        <input name="name" type="text" placeholder={client ? 'Name / Company' : 'Name'} required />
        <input name="email" type="email" placeholder={client ? 'Work email' : 'Email address'} required />
        {client && (
          <select name="project_type" required>
            <option value="">Project type</option>
            <option>Video annotation</option>
            <option>Ads tagging</option>
            <option>Image annotation</option>
            <option>Text or document labeling</option>
            <option>Custom data project</option>
          </select>
        )}
        <textarea name="details" placeholder={client ? 'Data details, label rules, volume, and deadline' : 'Project details, data type, and timeline'} required />
        <button className="btn" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending...' : 'Send Message'}</button>
        {status === 'sent' && <p className="form-message success">Thank you. Your message has been sent to Annotiq AI.</p>}
        {status === 'error' && <p className="form-message error">Message could not be sent. Please try again or email {email}.</p>}
      </form>
    </div>
  );
}

function VideoSection() {
  const videos = [
    ['Visual Label Review', 'Moving frames can be checked with bounding boxes, labels, and reviewer notes before model training.', 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', 'Object labels + QA'],
    ['Video Annotation Flow', 'Teams can track objects across frames, tag actions, and prepare structured data for computer vision projects.', 'https://media.w3.org/2010/05/sintel/trailer.mp4', 'Frame-by-frame tracking'],
    ['Human-in-the-loop QA', 'Reviewers compare edge cases, correct inconsistent labels, and keep datasets useful for real AI systems.', 'https://media.w3.org/2010/05/bunny/trailer.mp4', 'Human review layer'],
  ];

  return (
    <section className="section alt video-section reveal">
      <div className="section-title">
        <h2>Videos With Annotation Motion</h2>
        <p>Scroll through short moving previews with animated label boxes, giving visitors a clearer feel for object review, frame tracking, and quality checking.</p>
      </div>
      <div className="video-grid">
        {videos.map(([title, text, src, label]) => (
          <article className="video-card reveal" key={title}>
            <div className="video-shell">
              <video autoPlay muted loop playsInline controls preload="metadata">
                <source src={src} type="video/mp4" />
              </video>
              <span className="annotation-box one" /><span className="annotation-box two" /><span className="annotation-label">{label}</span>
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div>© 2026 Annotiq AI - All Rights Reserved | Bengal, India</div>
      <div className="footer-links"><a className="email" href={`mailto:${email}`}>{email}</a><a className="social-link" href={linkedIn} target="_blank" rel="noopener noreferrer">LinkedIn</a></div>
    </footer>
  );
}

createRoot(document.getElementById('root')).render(<App />);
