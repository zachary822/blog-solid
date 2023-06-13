import { createQuery } from "@tanstack/solid-query";
import { fetchPosts } from "~/utils/api";
import { For, Suspense } from "solid-js";
import PostItem from "~/components/PostItem";

export default function Home() {
  const posts = createQuery(() => ["posts"], fetchPosts);

  return (
    <Suspense fallback={<span class="loading loading-spinner" />}>
      <For each={posts.data}>{(post) => <PostItem post={post} />}</For>
    </Suspense>
  );
}
