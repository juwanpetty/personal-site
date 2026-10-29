export type NavItem = {
  label: string;
  href: string;
  enabled?: boolean;
};

export type NavGroup = {
  label: string;
  items: NavItem[];
};

export const topNav = [
  { label: "Blog", href: "/blog" },
  { label: "Videos", href: "/videos", enabled: false },
  { label: "Shop", href: "/shop", enabled: false },
] satisfies NavItem[];

export const sidebarNav = [
  {
    label: "Library",
    items: [
      { label: "Reading", href: "/reading" },
      { label: "Watching", href: "/watching" },
      { label: "Playing", href: "/playing" },
    ],
  },
  {
    label: "About",
    items: [
      { label: "Changelog", href: "/changelog" },
      { label: "Colophon", href: "/colophon" },
      { label: "Uses", href: "/uses", enabled: false },
    ],
  },
] satisfies NavGroup[];

export const footerNav = [
  { label: "RSS", href: "/rss.xml" },
  { label: "Links", href: "/links" },
] satisfies NavItem[];

export const isEnabled = (item: NavItem) => item.enabled !== false;
