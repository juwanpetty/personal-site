import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ChangelogDetail } from "@/features/changelog/components/changelog-detail/changelog-detail";
import { getChangelogs } from "@/features/changelog/queries/get-changelogs";
import { getChangelog } from "@/features/changelog/queries/get-changelog";

export async function generateStaticParams() {
  return getChangelogs().map((changelog) => ({
    slug: changelog._meta.path,
  }));
}

type MetadataProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const { slug } = await params;
  const changelog = getChangelog(slug);

  if (!changelog) notFound();

  return {
    title: changelog.title,
    openGraph: {
      title: changelog.title,
      url: `https://juwanpetty.com/changelog/${slug}`,
      siteName: "Juwan Petty",
      type: "article",
    },
  };
}

type ChangelogPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ChangelogPage({ params }: ChangelogPageProps) {
  const { slug } = await params;
  const changelog = getChangelog(slug);

  if (!changelog) {
    return notFound();
  }

  return <ChangelogDetail changelog={changelog} />;
}
