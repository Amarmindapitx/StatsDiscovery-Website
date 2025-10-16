"use client";

import { useSearchParams } from "next/navigation";

export default function SearchParamsWrapper() {
  const searchParams = useSearchParams();

  return <div>Query param: {searchParams.get("q")}</div>;
}
