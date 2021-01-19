import React, {useState, useEffect} from "react";
import { Container } from "semantic-ui-react";
import ReadOnly from "../../components/Document/ReadOnly";
import * as entriesAPI from '../../services/entry-api'

const DisplayEntry = (props) => {
  

  const location = props.location
  const value = location.state.content;
  const entryID = location.state.id_num
  console.log(entryID)

  const [comments, setComments] = useState([])

  useEffect(() => {
    (async function () {
      const entry = await entriesAPI.displayEntry(entryID)
      const comments = entry.comments
      setComments(comments)
    })();
  }, [])


  return (
    <Container>
      <ReadOnly value={value} />
      {/* <Comment value={comments} /> */}
    </Container>
    
  );
};

export default DisplayEntry;
