import React from "react";
import { useHistory } from "react-router-dom";
import { Container } from "semantic-ui-react";
import ReadOnly from "../../components/Document/ReadOnly";
import CommentSection from "../../components/Comments/Comments"


const DisplayEntry = (props) => {

  const history = useHistory();
  console.log(props.user)
  const value = history.location.state.content;

  return (
    <Container>
      <ReadOnly value={value} />
      <CommentSection />
    </Container>
  );
};

export default DisplayEntry;
