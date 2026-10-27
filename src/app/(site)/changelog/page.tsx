import { ChangelogList } from "@/features/changelog/components/changelog-list/changelog-list";
import { allChangelogs } from "content-collections";

export default function Page() {
  return (
    <div className="mx-auto max-w-2xl">
      <header className="space-y-1">
        <h1 className="text-gray-12 max-w-3xl text-lg font-semibold text-balance">
          What&apos;s new
        </h1>

        <div className="text-gray-11 max-w-xl text-base/relaxed text-pretty">
          <span>
            Keep up with the latest releases, improvements, and fixes.
          </span>
        </div>
      </header>

      <div className="mt-20">
        <ChangelogList changelogs={allChangelogs} />
      </div>
    </div>
  );
}
