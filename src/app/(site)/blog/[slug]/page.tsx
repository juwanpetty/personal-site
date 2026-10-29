import { notFound } from "next/navigation";
import { Metadata } from "next";
import { PostDetail } from "@/features/blog/components/post-detail/post-detail";
import { getPosts } from "@/features/blog/queries/get-posts";
import { getPost } from "@/features/blog/queries/get-post";
import { siteConfig } from "@/config/site";

export async function generateStaticParams() {
  return getPosts().map((post) => ({
    slug: post._meta.path,
  }));
}

type MetadataProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) notFound();

  return {
    title: post.title,
    openGraph: {
      title: post.title,
      url: `${siteConfig.url}/blog/${slug}`,
      siteName: siteConfig.name,
      type: "article",
    },
  };
}

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return notFound();
  }

  return <PostDetail post={post} />;
}
