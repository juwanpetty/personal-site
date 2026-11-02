import { AppHeader } from "@/components/app-header";
import { PageContainer } from "@/components/page-container";
import { IconClapperboardOutline18 } from "nucleo-ui-outline-18";

export default function Page() {
  return (
    <div>
      <AppHeader title="Watching" icon={IconClapperboardOutline18} />
      <PageContainer>Watching Index</PageContainer>
    </div>
  );
}
