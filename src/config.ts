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
  { label: "Email", href: "mailto:khai.tnguyen@outlook.com" },
  { label: "GitHub", href: "https://github.com/k2nt" },
  { label: "Codeforces", href: "https://codeforces.com/profile/k2nt" },
];

// Short intro shown on the home page. Each string is a paragraph.
export const ABOUT: string[] = [
  "I am a software engineer by trade. I like computers, math, and tinkering with things.",
  "I am an avid reader. When I am not reading technical papers, I tend toward history and philosophy. I am an Arsenal fan, have two dogs I love dearly, and like to run. I am currently working on learning French, picking up skateboarding, and running a full marathon.",
  "I write here to think out loud and keep a record of things worth remembering.",
];
