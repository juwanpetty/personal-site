import { IconSquareDashedOutline18 } from "nucleo-ui-outline-18";

export function AppHeader() {
  return (
    <div className="border-gray-4 sticky top-0 z-10 flex h-14 w-full items-center justify-between border-b px-4 sm:px-6">
      {/* Left Section */}
      <div className="flex min-w-0 flex-1 items-center gap-6">
        <div className="flex items-center gap-2 text-sm font-medium">
          <IconSquareDashedOutline18 className="size-4" />
          <span>Page title</span>
        </div>
      </div>

      {/* Right section */}
      <div className="flex min-w-0 flex-1 items-center justify-end gap-2">
        <button className="bg-gray-12 flex h-8 items-center rounded-full px-3.5 text-sm font-medium text-white">
          <span>Subscribe</span>
        </button>
      </div>
    </div>
  );
}
