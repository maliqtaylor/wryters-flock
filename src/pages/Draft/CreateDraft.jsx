import React, { useEffect } from "react";
import Document from "../../components/Document/Document"
import EntryData from "../../components/EntryData/EntryData"
import { useHistory } from "react-router-dom"
import { useContent } from "../../components/hooks/useContent"
import { Container } from 'semantic-ui-react'
import * as draftAPI from "../../services/draft-api";

const CreateDraft = (props) => {
  const history = useHistory()
  console.log(props.history.location.state)

  const [content, setContent] = useContent({
    content: ""
  })

  useEffect(() => {
    (async function () {
      console.log(content)
      let test = await draftAPI.update(props.history.location.state.draftId, content)
      console.log(test);

    })();
  })

  if (props.history.location.state) {
    return (
      <>
        <Container text>
          <Document
            value={content.content}
            onChange={setContent}
          />
          <EntryData
            draftId={props.history.location.state.draftId}
          />
        </Container>
      </>
    )
  } else {
    history.push("/profile")
    return null
  }
}

export default CreateDraft