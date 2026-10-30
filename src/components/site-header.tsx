import { isEnabled, topNav } from "@/config/nav";
import Link from "next/link";
import { IconTransformFill18 } from "nucleo-ui-fill-18";

export function SiteHeader() {
  return (
    <div className="flex h-14 w-full items-center justify-between px-6">
      {/* Left section */}
      <div className="flex min-w-0 flex-1 items-center gap-6">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <div className="bg-gray-12 flex size-7 items-center justify-center rounded-md">
              <IconTransformFill18 className="size-3.5 text-white" />
              <span className="sr-only">Go to homepage</span>
            </div>
          </Link>
        </div>

        <nav className="flex items-center">
          {topNav.filter(isEnabled).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-11 hover:text-gray-12 hover:bg-gray-3 flex h-8 items-center rounded-[10px] px-3 text-sm font-medium transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Center section */}
      <div className="hidden shrink-0 xl:block"></div>

      {/* Right section */}
      <div className="flex min-w-0 flex-1 items-center justify-end gap-2"></div>
    </div>
  );
}
