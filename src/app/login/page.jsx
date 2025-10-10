"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './login.module.css';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in both fields.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://overcostly-unsullen-loraine.ngrok-free.dev/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed. Please try again.");
      }

      alert("Login successful!");
      console.log("User data:", data);

      // Example: Redirect after successful login (optional)
      // window.location.href = "/dashboard";

    } catch (err) {
      console.error("Login error:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.background}>
      <div className={styles.pageWrapper}>
        {/* Left Column: Form */}
        <div className={styles.formColumn}>
          <div className={styles.formContainer}>
            <h1 className={styles.title}>Login</h1>
            <form onSubmit={handleSubmit} noValidate>
              <div className={styles.inputGroup}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder='Enter your email id'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={error ? styles.inputError : ''}
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder='Enter your password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {error && <p className={styles.errorMessage}>{error}</p>}

              <div className={styles.forgotLinkContainer}>
                <Link href="/forgot-password" className={styles.forgotLink}>
                  Forgot Password?
                </Link>
              </div>

              <button
                type="submit"
                className={styles.submitButton}
                disabled={loading}
              >
                {loading ? "Signing In..." : "Sign In"}
              </button>
            </form>

            <p className={styles.signUpLink}>
              Not a Member yet? <Link href="/signup">Sign Up</Link>
            </p>
          </div>
        </div>

        {/* Right Column: Graphic */}
        <div className={styles.graphicColumn}>
          <div className={styles.imageFrame}>
            <Image
              src="/assets/login-dashboard.png"
              alt="StatsDiscovery Dashboard Preview"
              width={500}
              height={400}
            />
          </div>
          <h2 className={styles.graphicTitle}>SEO Audit & Reporting Tool</h2>
          <p className={styles.graphicSubtitle}>+ Comprehensive SEO Toolset</p>
        </div>
      </div>
    </div>
  );
}
