import { PostList } from "@/features/blog/components/post-list/post-list";
import { allPosts } from "content-collections";

export default function Page() {
  return (
    <div className="mx-auto max-w-2xl">
      <PostList posts={allPosts} />
    </div>
  );
}
