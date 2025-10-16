import * as React from "react"

import { cn } from "@/lib/utils"

// --- Main Card Wrapper ---
// Changes:
// - Removed `shadow-sm` for a flat design.
// - Changed `py-6` to `p-6` for uniform padding.
// - Reduced `gap-6` to `gap-4` for tighter spacing.
function Card({ className, ...props }) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-4 rounded-xl border p-6", // Updated classes
        className
      )}
      {...props} />
  );
}

// --- Card Header ---
// No changes needed here, but kept for completeness.
function CardHeader({ className, ...props }) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props} />
  );
}

// --- Card Title ---
// No changes needed.
function CardTitle({ className, ...props }) {
  return (
    <div
      data-slot="card-title"
      className={cn("text-sm font-medium text-muted-foreground", className)} // Adjusted for consistency
      {...props} />
  );
}

// --- Card Description ---
// No changes needed.
function CardDescription({ className, ...props }) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props} />
  );
}

// --- Card Action (if used) ---
// No changes needed.
function CardAction({ className, ...props }) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props} />
  );
}

// --- Card Content ---
// Changes:
// - Removed horizontal padding `px-6` because the parent Card now handles it with `p-6`.
function CardContent({ className, ...props }) {
  return (<div data-slot="card-content" className={cn("", className)} {...props} />);
}

// --- Card Footer ---
// Changes:
// - Removed horizontal padding `px-6` as well.
function CardFooter({ className, ...props }) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center [.border-t]:pt-6", className)}
      {...props} />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}