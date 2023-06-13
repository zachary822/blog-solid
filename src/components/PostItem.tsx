import { Component } from "solid-js";
import Markdown from "./Markdown";
import { Post } from "~/utils/api";

interface PostItemProps {
  post: Post;
}

const PostItem: Component<PostItemProps> = ({ post }) => {
  return (
    <article class="prose bg-base-200 rounded-2xl shadow-md p-2 mb-4">
      <h1>{post.title}</h1>
      <Markdown>{post.body}</Markdown>
    </article>
  );
};

export default PostItem;
