import { AppHeader } from "@/components/app-header";
import { PageContainer } from "@/components/page-container";
import { IconBook2Outline18 } from "nucleo-ui-outline-18";

export default function Page() {
  return (
    <div>
      <AppHeader title="Reading" icon={IconBook2Outline18} />
      <PageContainer>Reading Index</PageContainer>
    </div>
  );
}
