import { ChangelogItem } from "@/features/changelog/components/changelog-item/changelog-item";
import { Changelog } from "content-collections";

type ChangelogListProps = {
  changelogs: Changelog[];
};

export function ChangelogList({ changelogs }: ChangelogListProps) {
  return (
    <div className="flex flex-col gap-y-2">
      {changelogs.map((changelog) => (
        <ChangelogItem key={changelog._meta.path} changelog={changelog} />
      ))}
    </div>
  );
}
