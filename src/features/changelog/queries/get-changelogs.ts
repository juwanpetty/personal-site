import { allChangelogs } from "content-collections";

export const getChangelogs = () =>
  allChangelogs.sort((a, b) => {
    return b.published.getTime() - a.published.getTime();
  });
