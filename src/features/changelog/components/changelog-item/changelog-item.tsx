import { formatDate } from "@/utils/date.utils";
import { Changelog } from "content-collections";
import Link from "next/link";

type ChangelogItemProps = {
  changelog: Changelog;
};

export function ChangelogItem({ changelog }: ChangelogItemProps) {
  const hrefPath = `/changelog/${changelog._meta.path}`;

  const formattedDate = formatDate(changelog.published, {
    month: "long",
    day: "numeric",
  });

  return (
    <Link
      href={hrefPath}
      className="hover:bg-gray-2 -mx-2 flex items-start justify-center gap-4 rounded-2xl p-2"
    >
      <div className="border-gray-4 relative flex h-13 w-11 shrink-0 items-center justify-center overflow-hidden rounded-md border bg-white select-none" />

      <div className="flex w-full min-w-0 flex-col items-start justify-center text-base/6.5">
        <span className="text-gray-12 w-full truncate font-medium">
          {changelog.title}
        </span>
        <p className="text-gray-11 line-clamp-2 w-full text-pretty sm:line-clamp-1">
          <span className="text-nowrap">{formattedDate}</span>
          {" · "}
          {changelog.description}
        </p>
      </div>
    </Link>
  );
}
