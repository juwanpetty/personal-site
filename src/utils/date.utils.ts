import { siteConfig } from "@/config/site";

export const formatDate = (date: Date, options?: Intl.DateTimeFormatOptions) =>
  new Intl.DateTimeFormat(
    siteConfig.locale,
    options ?? {
      year: "numeric",
      month: "long",
      day: "numeric",
    },
  ).format(date);
