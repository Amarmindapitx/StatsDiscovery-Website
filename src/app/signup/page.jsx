"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../login/login.module.css';

export default function SignUpPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [company, setCompany] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!firstName || !email || !password) {
      setError('Please fill all required fields.');
      return;
    }

    setLoading(true);

    // Combine first and last name into one variable
    const name = `${firstName} ${lastName}`.trim();

    try {
      const response = await fetch(
        'https://seo-4x8c.vercel.app/api/auth/signup',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            password,
            company,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setSuccess('Signup successful! Redirecting to login...');
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setCompany('');

        // Redirect after signup
        setTimeout(() => {
          window.location.href = '/login';
        }, 1500);
      } else {
        setError(data?.message || 'Signup failed. Please try again.');
      }
    } catch (err) {
      setError('Error connecting to server. Please try again.');
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
            <h1 className={styles.title}>Sign Up</h1>
            <form onSubmit={handleSubmit} noValidate>
              <div className={styles.nameRow}>
                <div className={styles.inputGroup}>
                  <label htmlFor="firstName">First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="company">Company Name (Optional)</label>
                <input
                  type="text"
                  id="company"
                  placeholder="Company Name (Optional)"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="password">Password *</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {error && <p className={styles.errorMessage}>{error}</p>}
              {success && <p className={styles.successMessage}>{success}</p>}

              <button
                type="submit"
                className={styles.submitButton}
                disabled={loading}
              >
                {loading ? 'Signing Up...' : 'Next'}
              </button>
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
