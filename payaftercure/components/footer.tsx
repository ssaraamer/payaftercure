import Link from "next/link"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-section">
            <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
              <svg
                style={{ width: "1.5rem", height: "1.5rem", marginRight: "0.5rem", color: "#86efac" }}
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
              </svg>
              <span style={{ fontWeight: "bold", fontSize: "1.25rem" }}>PayAfterCure</span>
            </div>
            <p style={{ color: "#bbf7d0", marginBottom: "1rem" }}>
              Natural healing with guaranteed results or you don't pay. Our unique approach ensures you only pay for
              treatments that work.
            </p>
            <div style={{ display: "flex", gap: "1rem" }}>
              <Link href="#" style={{ color: "#bbf7d0" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </Link>
              <Link href="#" style={{ color: "#bbf7d0" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/treatments">Treatments</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Treatments</h3>
            <ul>
              <li>
                <Link href="/treatments/allergies">Allergies</Link>
              </li>
              <li>
                <Link href="/treatments/digestive">Digestive Issues</Link>
              </li>
              <li>
                <Link href="/treatments/skin">Skin Conditions</Link>
              </li>
              <li>
                <Link href="/treatments/stress">Stress & Anxiety</Link>
              </li>
              <li>
                <Link href="/treatments/chronic">Chronic Pain</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Us</h3>
            <ul style={{ listStyle: "none" }}>
              <li style={{ display: "flex", alignItems: "flex-start", marginBottom: "1rem" }}>
                <svg
                  style={{
                    width: "1.25rem",
                    height: "1.25rem",
                    color: "#86efac",
                    marginRight: "0.5rem",
                    marginTop: "0.125rem",
                  }}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span style={{ color: "#bbf7d0" }}>+1 (555) 123-4567</span>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start", marginBottom: "1rem" }}>
                <svg
                  style={{
                    width: "1.25rem",
                    height: "1.25rem",
                    color: "#86efac",
                    marginRight: "0.5rem",
                    marginTop: "0.125rem",
                  }}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span style={{ color: "#bbf7d0" }}>contact@payaftercure.com</span>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start" }}>
                <svg
                  style={{
                    width: "1.25rem",
                    height: "1.25rem",
                    color: "#86efac",
                    marginRight: "0.5rem",
                    marginTop: "0.125rem",
                  }}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span style={{ color: "#bbf7d0" }}>123 Healing Street, Nature Valley, CA 94123</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} PayAfterCure. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
