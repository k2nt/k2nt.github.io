---
title: "Designing with a soft pastel palette"
description: "A few notes on building a calm, low-contrast theme that stays readable."
pubDate: 2026-06-20
tags: ["design", "css"]
---

I gave this site a soft pastel feel: a warm off-white background, muted lavender
and sage accents, and a near-black text color instead of pure `#000`.

## The trick: tokens

Everything lives in CSS custom properties, so the entire look can change from one
place:

```css
:root {
  --color-bg: #fbf9f6;
  --color-accent: #9a8cc4; /* muted lavender */
  --font-serif: "Fraunces Variable", serif;
  --font-sans: "Inter Variable", sans-serif;
}
```

## Keeping it readable

Pastels are easy to overdo. Two rules helped:

1. Keep text contrast high enough to pass accessibility checks — accents are for
   links and highlights, not body text.
2. Use a serif (Fraunces) for headings and a clean sans (Inter) for body. The
   pairing feels editorial without trying too hard.

That's the whole system. Simple, and easy to live with.
