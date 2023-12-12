"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";

export default function PageWrapper({ children }: { children: ReactNode }) {
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const path = usePathname();

  return (
    <div
      className="flex flex-col pt-2 px-4 space-y-2 flex-grow pb-4"
    >
      {children}
    </div>
  );
}