import defaultTheme from "tailwindcss/defaultTheme";
import { useMatchMedia } from "@/hooks/use-match-media";

type Breakpoint = keyof typeof defaultTheme.screens;

// `defaultTheme` reflects Tailwind's built-in --breakpoint-* values, not any
// overrides in globals.css's @theme block. Fine while none are overridden.
export function useTailwindBreakpoint(breakpoint: Breakpoint) {
  return useMatchMedia(`(min-width: ${defaultTheme.screens[breakpoint]})`);
}
