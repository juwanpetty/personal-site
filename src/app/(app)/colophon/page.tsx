import { notFound } from "next/navigation";
import { getPage } from "@/features/page/queries/get-page";
import { PageDetail } from "@/features/page/components/page-detail/page-detail";
import { PageContainer } from "@/components/page-container";

export default function ColophonPage() {
  const page = getPage("colophon");
  if (!page) notFound();
  return (
    <PageContainer size="sm">
      <PageDetail page={page} />
    </PageContainer>
  );
}
