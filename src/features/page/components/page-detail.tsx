// features/page/components/page-content/page-content.tsx
import { MDXContent } from "@content-collections/mdx/react";
import type { Page } from "content-collections";
import { components } from "@/mdx-components";

export function PageDetail({ page }: { page: Page }) {
  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="text-gray-12 text-lg font-semibold">{page.title}</h1>
      <div className="prose mt-20">
        <MDXContent components={components} code={page.mdx} />
      </div>
    </div>
  );
}
