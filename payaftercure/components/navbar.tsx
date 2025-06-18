"use client"

import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container">
        <div className="nav-container">
            <img
              src="/logo.png?height=20&width=20"
            />
            PayAfterCure

          <nav className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/treatments">Treatments</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          <div className="nav-buttons">
            <Link href="/login" className="btn btn-outline">
              Login
            </Link>
            <Link href="/register" className="btn btn-primary">
              Register
            </Link>
          </div>

          <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {isMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div style={{ padding: "1rem 0", borderTop: "1px solid #dcfce7" }}>
            <nav style={{ display: "flex", flexDirection: "column", gap: "1rem", paddingBottom: "1rem" }}>
              <Link href="/" style={{ color: "#374151", textDecoration: "none" }}>
                Home
              </Link>
              <Link href="/about" style={{ color: "#374151", textDecoration: "none" }}>
                About
              </Link>
              <Link href="/treatments" style={{ color: "#374151", textDecoration: "none" }}>
                Treatments
              </Link>
              <Link href="/blog" style={{ color: "#374151", textDecoration: "none" }}>
                Blog
              </Link>
              <Link href="/contact" style={{ color: "#374151", textDecoration: "none" }}>
                Contact
              </Link>
            </nav>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                paddingTop: "1rem",
                borderTop: "1px solid #dcfce7",
              }}
            >
              <Link href="/login" className="btn btn-outline" style={{ width: "100%" }}>
                Login
              </Link>
              <Link href="/register" className="btn btn-primary" style={{ width: "100%" }}>
                Register
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
