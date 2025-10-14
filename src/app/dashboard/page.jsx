import React from 'react';
// --- 1. THE FIX: Import with a capital 'D' ---
import DashboardLayout from '@/components/dashboard/DashboardLayout/DashboardLayout';

const DashboardPage = () => {
  return (
    // --- 2. THE FIX: Use the component with a capital 'D' ---
    <DashboardLayout />
  );
};

export default DashboardPage;