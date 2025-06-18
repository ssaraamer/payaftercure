import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="container">
      <section className="hero">
        <div className="hero-grid">
          <div className="hero-content">
            <h1>
              Holistic Healing, <br />
              <span className="highlight">Removing the Root Cause</span>
            </h1>
            <p>
              Experience the power of homeopathy with our unique <b>Smart Remedy Finder</b> model. We're so confident in our
              treatments that you only pay when you see results.
            </p>
            <div className="hero-buttons">
              <Link href="/login" className="btn btn-primary">
                Get Started
              </Link>
              <Link href="/blog" className="btn btn-outline">
                Read Success Stories
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <Image
              src="/pills.png?height=800&width=600"
              alt="Herbal medicine"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <h2>How PayAfterCure Works</h2>
        <div className="steps-grid">
          <div className="step-card">
            <div className="step-number">1</div>
            <h3>Complete Assessment</h3>
            <p>Fill out our comprehensive symptom questionnaire to help us understand your condition.</p>
          </div>
          <div className="step-card">
            <div className="step-number">2</div>
            <h3>Receive Treatment</h3>
            <p>Our expert homeopaths will create a personalized treatment plan just for you.</p>
          </div>
          <div className="step-card">
            <div className="step-number">3</div>
            <h3>Pay After Results</h3>
            <p>Only pay when you experience improvement in your condition. No cure, no payment.</p>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2>Testimonials</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-header">
              <div className="testimonial-avatar"></div>
              <div>
                <div className="testimonial-name">Sarah Johnson</div>
                <div className="testimonial-role">Chronic Migraine Patient</div>
              </div>
            </div>
            <p className="testimonial-text">
              "After years of suffering from migraines, I tried PayAfterCure as a last resort. Within 3 weeks, my
              migraines reduced by 80%. I'm now living a normal life again!"
            </p>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-header">
              <div className="testimonial-avatar"></div>
              <div>
                <div className="testimonial-name">Michael Rodriguez</div>
                <div className="testimonial-role">Eczema Sufferer</div>
              </div>
            </div>
            <p className="testimonial-text">
              "I was skeptical about homeopathy, but the pay-after-cure model convinced me to try. My eczema cleared up
              in just 6 weeks. I'm a believer now!"
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
