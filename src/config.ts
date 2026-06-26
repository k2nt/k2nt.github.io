// Central place to edit site-wide metadata and navigation.
// Change values here rather than hunting through components.

export const SITE = {
  title: "Khai Nguyen",
  description: "Personal site, blog, and things I learn along the way.",
  author: "Khai Nguyen",
  url: "https://k2nt.github.io",
  // Short tagline shown on the home page.
  tagline: "Software, writing, and notes to my future self.",
} as const;

export const NAV: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "TIL", href: "/til" },
];

// Links shown in the footer / bottom bar.
// Leave `href` empty ("") to hide a row until you're ready to add it.
export const SOCIAL: { label: string; href: string }[] = [
  { label: "GitHub", href: "https://github.com/k2nt" },
  { label: "Email", href: "mailto:khai.tnguyen@outlook.com" },
];

// Short intro shown on the home page. Each string is a paragraph.
export const ABOUT: string[] = [
  "Hi, I'm Khai — a software engineer who likes building simple, durable things and writing about what I learn along the way.",
  "This site is my corner of the internet: longer-form posts in the blog, quick notes in TIL, and the occasional experiment.",
];
