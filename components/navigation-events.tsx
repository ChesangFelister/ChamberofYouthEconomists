"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import NProgress from "nprogress";

// Ensure this component is only used within a <Suspense> boundary
export function NavigationEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    NProgress.configure({
      showSpinner: false,
      minimum: 0.15,
      easing: "ease-out",
      speed: 350,
      trickleSpeed: 150,
    });

    const handleStart = () => NProgress.start();
    const handleComplete = () => NProgress.done();

    window.addEventListener("beforeunload", handleStart);
    window.addEventListener("load", handleComplete);

    return () => {
      window.removeEventListener("beforeunload", handleStart);
      window.removeEventListener("load", handleComplete);
    };
  }, []);

  useEffect(() => {
    NProgress.done();
  }, [pathname, searchParams]);

  return null;
}
