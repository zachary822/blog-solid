import SolidMarkdown from "solid-markdown";
import rehypeHighlight from "rehype-highlight";
import "../styles/github-dark.css";

const Markdown: typeof SolidMarkdown = (props) => {
  return (
    <SolidMarkdown
      rehypePlugins={[rehypeHighlight]}
      {...props}
    />
  );
};

export default Markdown;
