import React from "react";
import { useHistory } from "react-router-dom";
import { Container } from "semantic-ui-react";
import ReadOnly from "../../components/Document/ReadOnly";

const DisplayEntry = (props) => {
  const history = useHistory();
  const value = history.location.state.content;

  return (
    <Container>
      <ReadOnly value={value} />
    </Container>
  );
};

export default DisplayEntry;
