import React from "react";
import Document from "../../components/Document/Document"
import EntryData from "../../components/EntryData/EntryData"
import { useHistory } from "react-router-dom"
import { useContent } from "../../components/hooks/useContent"

const CreateDraft = (props) => {
  const history = useHistory()
  console.log(props.history.location.state)

  const [content, setContent] = useContent({
    content: ""
  })

  if (props.history.location.state ) {               
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
  } else { 
    history.push("/profile")
    return null
  }
}

export default CreateDraft