"use client"; // Client Component

import DashboardLayout from "@/components/dashboard/DashboardLayout/DashboardLayout";

export const dynamic = "force-dynamic"; // disables prerendering

export default function DashboardPage() {
  return <DashboardLayout />;
}
