import React from "react";
import Document from "../../components/Document/Document"
import { useContent } from "../../components/hooks/useContent"

const CreateDraft = (props) =>{

  const [content, setContent] = useContent({
    content: ""
  })

  return (
    <>
      <Document
        value={content.content}
        onChange={setContent}
      />
    </>
  )
}

export default CreateDraft