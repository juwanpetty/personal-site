import { MDXContent } from "@content-collections/mdx/react";
import type { Changelog } from "content-collections";
import { components as mdxComponents } from "@/mdx-components";
import { formatDate } from "@/utils/date.utils";

type ChangelogDetailProps = {
  changelog: Changelog;
};

export function ChangelogDetail({ changelog }: ChangelogDetailProps) {
  const { title, published, mdx } = changelog;
  const formattedDate = formatDate(published);

  return (
    <div className="mx-auto max-w-2xl">
      <header className="space-y-1">
        <h1 className="text-gray-12 max-w-3xl text-lg font-semibold text-balance">
          {title}
        </h1>

        <div className="text-gray-11 max-w-xl text-base/relaxed text-pretty">
          <span>{formattedDate}</span>
        </div>
      </header>

      <div className="mt-20">
        <div className="prose">
          <MDXContent components={mdxComponents} code={mdx} />
        </div>
      </div>
    </div>
  );
}
