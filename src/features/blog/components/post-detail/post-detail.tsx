import { MDXContent } from "@content-collections/mdx/react";
import type { Post } from "content-collections";
import { components as mdxComponents } from "@/../mdx-components";
import { formatDate } from "@/features/blog/utils/date/date.utils";

type PostDetailProps = {
  post: Post;
};

export function PostDetail({ post }: PostDetailProps) {
  const { title, published, mdx } = post;
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
