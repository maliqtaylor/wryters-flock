import React from "react";
import Document from "../../components/Document/Document"
import EntryData from "../../components/EntryData/EntryData"
import { useContent } from "../../components/hooks/useContent"

const CreateDraft = (props) => {

  console.log(props.history.location.state)

  const [content, setContent] = useContent({
    content: ""
  })

  return (
    <>
      <Document
        value={content.content}
        onChange={setContent}
      />
      <EntryData
        draftId={props.history.location.state.draftId}
      />
    </>
  )
}

export default CreateDraft