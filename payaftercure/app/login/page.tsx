import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="login-container">
      <div className="container">
        <div className="login-card">
          <div className="login-header">
            <div className="login-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{ color: "#16a34a" }}>
                <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
              </svg>
            </div>
            <h1>Welcome Back</h1>
            <p>Sign in to access your personalized healing journey</p>
          </div>

          <form>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input id="email" type="email" placeholder="you@example.com" className="form-input" />
            </div>

            <div className="form-group">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "0.5rem",
                }}
              >
                <label htmlFor="password" className="form-label" style={{ margin: 0 }}>
                  Password
                </label>
                <Link
                  href="/forgot-password"
                  style={{ fontSize: "0.875rem", color: "#16a34a", textDecoration: "none" }}
                >
                  Forgot password?
                </Link>
              </div>
              <input id="password" type="password" className="form-input" />
            </div>

            <div className="checkbox-group">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember" style={{ fontSize: "0.875rem", color: "#6b7280" }}>
                Remember me
              </label>
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
              Sign In
            </button>
          </form>

          <div style={{ marginTop: "1.5rem", textAlign: "center" }}>
            <p style={{ color: "#6b7280", fontSize: "0.875rem" }}>
              Don't have an account?{" "}
              <Link href="/register" style={{ color: "#16a34a", textDecoration: "none", fontWeight: "500" }}>
                Sign up
              </Link>
            </p>
          </div>
        </div>

        <div className="login-benefits">
          <h2>Why Choose PayAfterCure?</h2>
          <ul className="benefits-list">
            <li>Pay only after you experience improvement</li>
            <li>Personalized treatment plans based on your symptoms</li>
            <li>Expert homeopaths with years of experience</li>
            <li>Natural remedies with no side effects</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
