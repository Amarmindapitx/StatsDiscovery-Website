// src/app/signup/page.jsx

"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// We are reusing the styles from the login page
import styles from '../login/login.module.css';

// Ensure the function is exported as the default
export default function SignUpPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName) {
      setError('First name cannot be blank.');
      return;
    }
    setError('');
    alert(`Signing up with email: ${email}`);
  };

  return (
    <div className={styles.background}>
      <div className={styles.pageWrapper}>
        {/* Left Column: Form */}
        <div className={styles.formColumn}>
          <div className={styles.formContainer}>
            <h1 className={styles.title}>Sign Up</h1>
            <form onSubmit={handleSubmit} noValidate>
              <div className={styles.nameRow}>
                <div className={styles.inputGroup}>
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    placeholder='first Name'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className={error ? styles.inputError : ''}
                  />
                  {error && <p className={styles.errorMessage}>{error}</p>}
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    placeholder='Last Name'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="company">Company Name (Optional)</label>
                <input type="text" id="company" placeholder='Company Name (Optinal)' />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder='Enter your email id'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
              
              <button type="submit" className={styles.submitButton}>Next</button>
            </form>
            <p className={styles.signUpLink}>
              Already have an account? <Link href="/login">Login</Link>
            </p>
          </div>
        </div>

        {/* Right Column: Graphic */}
        <div className={styles.graphicColumn}>
          <div className={styles.imageFrame}>
            <Image
              src="/assets/feature-dashboard.png"
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