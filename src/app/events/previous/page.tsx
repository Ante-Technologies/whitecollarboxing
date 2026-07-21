"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function PreviousEventsPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/category/events_main_page/previous_events");
  }, [router]);

  return (
    <p className="p-8 text-center text-sm text-muted">
      Redirecting to previous events…
    </p>
  );
}
