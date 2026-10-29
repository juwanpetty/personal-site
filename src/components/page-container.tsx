import { cn } from "@/lib/cn";
import { ReactNode } from "react";

const sizes = {
  sm: "max-w-2xl",
  md: "max-w-3xl",
  lg: "max-w-5xl",
  full: "max-w-none",
} as const;

type PageContainerProps = {
  size?: keyof typeof sizes;
  children: ReactNode;
};

export function PageContainer({ children, size = "md" }: PageContainerProps) {
  return (
    <main
      className={cn("mx-auto w-full px-4 pt-12 pb-24 sm:px-6", sizes[size])}
    >
      {children}
    </main>
  );
}
