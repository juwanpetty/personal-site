import { PostList } from "@/features/blog/components/post-list/post-list";
import { allPosts } from "content-collections";
import { PageContainer } from "@/components/page-container";

export default function HomePage() {
  return (
    <PageContainer>
      <PostList posts={allPosts} />
    </PageContainer>
  );
}
