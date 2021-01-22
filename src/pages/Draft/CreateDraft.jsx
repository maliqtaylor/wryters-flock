import React, { useEffect, useState } from "react";
import Document from "../../components/Document/Document";
import EntryData from "../../components/EntryData/EntryData";
import Modal from "../../components/Modal/Modal"
import { useHistory } from "react-router-dom";
import { useContent } from "../../components/hooks/useContent";
import { Container, Button } from "semantic-ui-react";
import './CreateDraft.css'
import * as draftAPI from "../../services/draft-api";

const CreateDraft = (props) => {
  const history = useHistory();

  const [isOpen, setIsOpen] = useState(false)

  const [content, setContent] = useContent({
    content: props.history.location.state.content,
  });

  useEffect(() => {
    (async function () {
      await draftAPI.update(props.history.location.state.draftId, content);
    })();
  });

  useEffect(() => {
    return () => {
      console.log(props);
    };
  }, []);

  let myContent = draftAPI.getOne(props.history.location.state.draftId);

  if (props.history.location.state) {
    return (
      <>
        <Container text>
          <Document value={content.content} onChange={setContent} />

          <div id='postBtn'>
            <Button color='pink' onClick={() => setIsOpen(true)}> Post </Button>
          </div>

          <Modal open={isOpen} onClose={() => setIsOpen(false)}>
            <EntryData
              draftId={props.history.location.state.draftId}
              value={myContent}
            />
          </Modal>
        </Container>
      </>
    );
  } else {
    history.push("/profile");
    return null;
  }
};

export default CreateDraft;
