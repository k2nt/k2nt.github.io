import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";
import { SITE } from "../config";

export async function GET(context: APIContext) {
  const blog = await getCollection("blog", ({ data }) => !data.draft);
  const til = await getCollection("til", ({ data }) => !data.draft);

  const items = [
    ...blog.map((post) => ({ post, section: "blog" })),
    ...til.map((post) => ({ post, section: "til" })),
  ]
    .sort(
      (a, b) =>
        b.post.data.pubDate.valueOf() - a.post.data.pubDate.valueOf(),
    )
    .map(({ post, section }) => ({
      title: post.data.title,
      description: post.data.description ?? "",
      pubDate: post.data.pubDate,
      link: `/${section}/${post.id}/`,
    }));

  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site ?? SITE.url,
    items,
  });
}
