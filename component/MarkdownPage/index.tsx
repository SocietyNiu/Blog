import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Prism } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import 'github-markdown-css'

interface CodeBlockProps {
  language: string
  value: string
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language, value }) => {
  return (
    <Prism style={dracula} language={language}>
      {value}
    </Prism>
  )
}

interface MarkdownPageProps {
  markdownContent?: string
}

const MarkdownPage: React.FC<MarkdownPageProps> = ({ markdownContent }) => {
  return (
    <div className="markdown-body">
      <ReactMarkdown
        components={{
          code: ({ node, className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || '')
            return match ? (
              <CodeBlock language={match[1]} value={String(children).trim()} />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          }
        }}
      >
        {markdownContent}
      </ReactMarkdown>
    </div>
  )
}

export default MarkdownPage
