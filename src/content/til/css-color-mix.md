---
title: "CSS color-mix() for instant tints"
description: "Blend a color with transparent or white right in CSS — no preprocessor."
pubDate: 2026-06-26
tags: ["css"]
---

You can mix two colors directly in CSS, which is great for translucent surfaces:

```css
.header {
  background: color-mix(in srgb, var(--color-bg) 85%, transparent);
  backdrop-filter: blur(8px);
}
```

This gives a frosted, semi-transparent header without hardcoding an `rgba()`
value — and it automatically tracks whatever `--color-bg` is, including in dark
mode.
