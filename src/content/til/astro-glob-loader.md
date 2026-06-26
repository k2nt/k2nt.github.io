---
title: "Astro content collections use the glob loader"
description: "In Astro 5, collections load from the filesystem with a glob() loader."
pubDate: 2026-06-25
tags: ["astro"]
---

In Astro 5, content collections are defined with a `loader` instead of relying on
a magic folder:

```ts
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({ title: z.string(), pubDate: z.coerce.date() }),
});
```

The entry's slug is now `post.id` (not `post.slug`), and you render the body with
`const { Content } = await render(post)`.
