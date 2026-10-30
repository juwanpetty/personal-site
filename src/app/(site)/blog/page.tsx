import { PostList } from "@/features/blog/components/post-list/post-list";
import { PageContainer } from "@/components/page-container";
import { getPosts } from "@/features/blog/queries/get-posts";

export default function Page() {
  const posts = getPosts();

  return (
    <PageContainer>
      <PostList posts={posts} />
    </PageContainer>
  );
}
