// src/app/login/page.jsx

"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './login.module.css';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError('Email cannot be blank.');
      return;
    }
    setError('');
    alert(`Signing in with email: ${email}`);
  };

  return (
    // This new div creates the grey page background
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
                {error && <p className={styles.errorMessage}>{error}</p>}
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
              <div className={styles.forgotLinkContainer}>
                <Link href="/forgot-password" className={styles.forgotLink}>
                  Forgot Password?
                </Link>
              </div>
              <button type="submit" className={styles.submitButton}>Sign In</button>
            </form>
            <p className={styles.signUpLink}>
              Not a Member yet? <Link href="/signup">Sign Up</Link>
            </p>
          </div>
        </div>

        {/* Right Column: Graphic */}
        <div className={styles.graphicColumn}>
          {/* This new div creates the frame for the image */}
          <div className={styles.imageFrame}>
            <Image
              src="/assets/login-dashboard.png" // The dashboard image you have
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