'use client'
import {
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  markdownShortcutPlugin,
  MDXEditor,
  type MDXEditorMethods,
} from '@mdxeditor/editor'


import {FC} from 'react'

interface EditorProps {
  editorRef?: React.MutableRefObject<MDXEditorMethods | null>
}


// Only import this to the next file
const Editor: FC<EditorProps> = ({ editorRef }) => {
  return (
    <MDXEditor
    className="dark-theme dark-editor"
    contentEditableClassName="twindprose"
    markdown=''
    placeholder="What's on your mind today? Start typing here..."
      plugins={[
        // Example Plugin Usage
        headingsPlugin(),
        listsPlugin(),
        quotePlugin(),
        thematicBreakPlugin(),
        markdownShortcutPlugin()
      ]}
      ref={editorRef}
    />
  )
}

export default Editor