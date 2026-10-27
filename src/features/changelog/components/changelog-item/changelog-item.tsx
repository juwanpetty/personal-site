import { formatDate } from "@/utils/date";
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
      className="-mx-2 flex items-start justify-center gap-4 rounded-2xl p-2 hover:bg-gray-2"
    >
      <div className="relative flex h-13 w-11 shrink-0 select-none items-center justify-center overflow-hidden rounded-md border border-gray-4 bg-white" />

      <div className="w-full flex min-w-0 flex-col items-start justify-center text-base/6.5">
        <span className="w-full truncate font-medium text-gray-12">
          {changelog.title}
        </span>
        <p className="w-full text-pretty text-gray-11 line-clamp-2 sm:line-clamp-1">
          <span className="text-nowrap">{formattedDate}</span>
          {" · "}
          {changelog.description}
        </p>
      </div>
    </Link>
  );
}
