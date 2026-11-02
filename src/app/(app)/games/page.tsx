import { AppHeader } from "@/components/app-header";
import { PageContainer } from "@/components/page-container";
import { IconGamepadOutline18 } from "nucleo-ui-outline-18";

export default function Page() {
  return (
    <div>
      <AppHeader title="Playing" icon={IconGamepadOutline18} />
      <PageContainer>Playing Index</PageContainer>
    </div>
  );
}
