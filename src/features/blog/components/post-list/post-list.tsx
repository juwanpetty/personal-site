import { PostItem } from "@/features/blog/components/post-item/post-item";
import { groupPostsByYear } from "@/features/blog/utils/group-posts-by-year/group-posts-by-year.utils";
import { Post } from "content-collections";

type PostListProps = {
  posts: Post[];
};

export function PostList({ posts }: PostListProps) {
  const postsByYear = groupPostsByYear(posts);

  return (
    <div className="space-y-16 sm:space-y-24">
      {postsByYear.map(({ year, posts }, index) => (
        <section key={index}>
          <h2 className="flex w-full items-center font-medium text-gray-12 mb-3">
            {year}
          </h2>
          <div className="flex flex-col gap-y-2">
            {posts.map((post) => (
              <PostItem key={post._meta.path} post={post} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
