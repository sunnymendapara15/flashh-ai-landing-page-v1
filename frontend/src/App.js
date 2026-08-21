import './App.css';

const navLinks = [
  { label: 'Product', target: '#product' },
  { label: 'Features', target: '#features' },
  { label: 'Pricing', target: '#pricing' },
  { label: 'FAQ', target: '#faq' }
];

const featureHighlights = [
  {
    title: 'Conversational workflows',
    description:
      'Tell Flashh AI what you need in plain language and watch it orchestrate apps, approvals, and actions instantly.'
  },
  {
    title: 'Technical depth, simplified',
    description:
      'Under the hood, Flashh composes secure automations with conditional logic, data enrichment, and observability.'
  },
  {
    title: 'Guided for every team',
    description:
      'Tailored templates, contextual tips, and AI coaching keep both builders and business leads confident.'
  }
];

const benefits = [
  'Explain your intent once, and Flashh keeps every step aligned across tools.',
  'Transparent activity timelines with proactive alerts and insights for stakeholders.',
  'Enterprise-grade security wrapped in an intuitive conversational interface.'
];

const testimonials = [
  {
    quote:
      'Flashh AI turned our idea backlog into working automations faster than any internal sprint ever could.',
    author: 'Maya Patel',
    role: 'Head of Operations, Momentum Labs'
  },
  {
    quote:
      'Our non-technical marketing leads now launched multi-step campaigns with nothing but a chat prompt.',
    author: 'Luca Chen',
    role: 'Growth Lead, Nova Pixel'
  },
  {
    quote:
      'The transparency of each workflow and the on-hover previews keep our product and legal teams aligned.',
    author: 'Jordan Reyes',
    role: 'Chief of Staff, Atlas Ten'
  }
];

const pricingTiers = [
  {
    title: 'Launchpad',
    price: '$29',
    frequency: '/mo',
    description: 'Perfect for individuals & small teams testing what Flashh can automate.',
    perks: ['Unlimited prompts', 'Core connectors', 'Community forum support']
  },
  {
    title: 'Momentum',
    price: '$89',
    frequency: '/mo',
    description: 'Designed for growing teams who need robust guardrails and insights.',
    perks: ['Workflow analytics', 'Approval routing', 'Dedicated success partner']
  },
  {
    title: 'Velocity',
    price: 'Custom',
    frequency: '',
    description: 'For enterprises needing bespoke integrations and compliance controls.',
    perks: ['SLA-backed support', 'Private connectors', 'Security review & training']
  }
];

const faqs = [
  {
    question: 'Do I need to know coding to use Flashh AI?',
    answer:
      'Not at all. Flashh guides you with conversational prompts and suggestions, while it handles the technical orchestration.'
  },
  {
    question: 'Can Flashh connect to my current tools?',
    answer:
      'Yes. It currently supports 100+ apps via secure API integrations and can connect custom tools through webhooks.'
  },
  {
    question: 'How does Flashh keep workflows compliant?',
    answer:
      'Every workflow includes audit-ready activity logs, role-based access, and optional approval checkpoints.'
  }
];

function App() {
  return (
    <div className="app-shell">
      <header className="navbar">
        <div className="brand">Flashh AI</div>
        <nav aria-label="Primary">
          <ul>
            {navLinks.map((link) => (
              <li key={link.target}>
                <a className="nav-link" href={link.target}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button className="ghost-btn" type="button">
          Launch Flashh
        </button>
      </header>

      <main>
        <section className="hero" id="product">
          <div className="hero-content">
            <p className="eyebrow">Describe your idea, build workflows</p>
            <h1>
              Flashh AI turns simple text conversations into intelligent workflows that feel handcrafted.
            </h1>
            <p className="lede">
              From marketing briefs to ops playbooks, Flashh combines refined prompts with deep automation logic and
              delivers polished, production-ready workflows in moments.
            </p>
            <div className="hero-actions">
              <button className="primary-btn" type="button">
                Describe my idea
              </button>
              <button className="secondary-btn" type="button">
                Watch the demo
              </button>
            </div>
          </div>
          <div className="hero-panel" aria-label="Live workflow example">
            <div className="panel-heading">Live workflow preview</div>
            <div className="panel-body">
              <p className="panel-title">Idea: Launch a new product teaser</p>
              <ul>
                <li>Ask marketing for launch checklist</li>
                <li>Create campaign workflow with approvals</li>
                <li>Post updates to Slack and HubSpot</li>
                <li>Generate summary and send to execs</li>
              </ul>
            </div>
            <div className="panel-foot">
              <span>Real-time, conversational control.</span>
              <button className="micro-btn" type="button">
                See more →
              </button>
            </div>
          </div>
        </section>

        <section className="social-proof" aria-label="Trusted by">
          <p>Used by builders and decision makers at</p>
          <div className="logos">
            {['NovaPixel', 'Momentum Labs', 'Atlas Ten', 'Lucent Bank', 'Pulse.', 'Northwind'].map((logo) => (
              <span key={logo}>{logo}</span>
            ))}
          </div>
        </section>

        <section className="features" id="features">
          <div className="section-heading">
            <p className="eyebrow">Guided for every team member</p>
            <h2>Features that keep momentum high</h2>
          </div>
          <div className="feature-grid">
            {featureHighlights.map((feature, index) => (
              <article
                className="feature-card animate"
                key={feature.title}
                style={{ animationDelay: `${index * 0.18}s` }}
              >
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <span>Learn more →</span>
              </article>
            ))}
          </div>
        </section>

        <section className="product-showcase" id="showcase">
          <div className="showcase-text">
            <p className="eyebrow">Premium control, delightful motion</p>
            <h2>Ambient motion keeps you oriented</h2>
            <p>
              Subtle scroll reveals, hover glows, and layered gradients make Flashh feel like a modern command center. A
              glassmorphic workspace surfaces the right context while remaining calm and focused.
            </p>
            <ul>
              <li>Staggered entrance for status cards</li>
              <li>Hover to see next-step microinteractions</li>
              <li>Ambient motion textures hint at intelligence</li>
            </ul>
          </div>
          <div className="showcase-panel">
            <div className="glass-card">
              <p className="preview-tag">Workflow in progress</p>
              <h3>Team Sprint Review</h3>
              <p className="descr">Flashh summarized blockers, assigned owners, and scheduled updates—all via chat.</p>
              <div className="timeline">
                {['Collect feedback', 'Route approvals', 'Publish summary', 'Follow-up automation'].map((step, idx) => (
                  <div
                    className="timeline-step"
                    key={step}
                    style={{ animationDelay: `${idx * 0.12}s` }}
                  >
                    <span className="step-dot" />
                    <p>{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="benefits">
          <div className="section-heading">
            <p className="eyebrow">Why Flashh AI</p>
            <h2>Focus on ideas, not infrastructure</h2>
          </div>
          <div className="benefit-list">
            {benefits.map((item, index) => (
              <article className="benefit-card" key={item} style={{ animationDelay: `${index * 0.15}s` }}>
                <h3>{`0${index + 1}`.slice(-2)}</h3>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="testimonials" id="testimonials">
          <div className="section-heading">
            <p className="eyebrow">Voices of builders</p>
            <h2>Trusted by teams with ambitious visions</h2>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((testimonial, index) => (
              <article
                className="testimonial-card animate"
                key={testimonial.author}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <p className="quote">“{testimonial.quote}”</p>
                <p className="author">
                  {testimonial.author} <span>{testimonial.role}</span>
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="pricing" id="pricing">
          <div className="section-heading">
            <p className="eyebrow">Choose your launch speed</p>
            <h2>Pricing made transparent</h2>
          </div>
          <div className="pricing-grid">
            {pricingTiers.map((tier, index) => (
              <article className="pricing-card" key={tier.title} style={{ animationDelay: `${index * 0.15}s` }}>
                <div>
                  <p className="tier-title">{tier.title}</p>
                  <p className="tier-price">
                    {tier.price}
                    <span>{tier.frequency}</span>
                  </p>
                  <p className="tier-description">{tier.description}</p>
                </div>
                <ul>
                  {tier.perks.map((perk) => (
                    <li key={perk}>{perk}</li>
                  ))}
                </ul>
                <button className="primary-btn" type="button">
                  {tier.title === 'Velocity' ? 'Talk to sales' : 'Start free trial'}
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="faq" id="faq">
          <div className="section-heading">
            <p className="eyebrow">Need clarity?</p>
            <h2>Flashh answers the questions</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details key={faq.question} className="faq-card" open={index === 0}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="cta" aria-label="Call to action">
          <div>
            <p className="eyebrow">Ready to describe your idea?</p>
            <h2>Flashh AI is the partner that builds it for you.</h2>
            <p>
              Share your brief, watch Flashh craft the workflow, and invite collaborators with the same premium
              experience.
            </p>
          </div>
          <button className="primary-btn" type="button">
            Describe my idea
          </button>
        </section>
      </main>

      <footer className="footer">
        <div>
          <div className="brand">Flashh AI</div>
          <p>Modern automation, human conversation.</p>
        </div>
        <div className="footer-links">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </div>
        <p className="footer-note">© {new Date().getFullYear()} Flashh AI. Crafted with intent.</p>
      </footer>
    </div>
  );
}

export default App;
