import { IconProps } from "nucleo-ui-outline-18";
import { ComponentType } from "react";

type AppHeaderProps = {
  title: string;
  icon?: ComponentType<IconProps>;
};

export function AppHeader({ title, icon: Icon }: AppHeaderProps) {
  return (
    <div className="border-gray-4 sticky top-0 z-10 flex h-14 w-full items-center justify-between border-b px-4 sm:px-6">
      {/* Left Section */}
      <div className="flex min-w-0 flex-1 items-center gap-6">
        <div className="flex items-center gap-2 text-sm font-medium">
          {Icon && <Icon className="size-4 shrink-0" aria-hidden />}
          <span className="truncate text-sm font-medium">{title}</span>
        </div>
      </div>

      {/* Right section */}
      <div className="flex min-w-0 flex-1 items-center justify-end gap-2"></div>
    </div>
  );
}
