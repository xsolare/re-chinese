/* eslint-disable react/no-unstable-nested-components */
import type { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

interface IMarkdownProps {
  content: string;
}

const Markdown: FC<IMarkdownProps> = ({ content }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      className="markdown-body"
      components={{
        code({ className, children, ...props }) {
          return (
            <code className={className} {...props}>
              {children}
            </code>
          );
        }
      }}>
      {content}
    </ReactMarkdown>
  );
};

export default Markdown;
