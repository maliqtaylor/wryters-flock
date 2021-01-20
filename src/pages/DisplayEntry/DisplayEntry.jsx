import React, {useState, useEffect} from "react";
import { Container } from "semantic-ui-react";
import * as entriesAPI from '../../services/entry-api'
import ReadOnly from "../../components/Document/ReadOnly";
import CommentSection from "../../components/Comments/Comments"
import {useForm} from "../../components/hooks/useForm"
import * as commentAPI from "../../services/comments"

const DisplayEntry = (props) => {
  
  const location = props.location
  const value = location.state.content;
  const entryID = location.state.id_num
 
  const [comments, setComments] = useState([])

  const [newComment, handleChange] = useForm({
    content: ""
  })

  useEffect(() => {
    (async function () {
      const entry = await entriesAPI.displayEntry(entryID)
      const comments = entry.comments
      setComments([...comments])
    })();
  }, [])



  async function handleAddComment(comment, entryID){
    console.log(props.user)
    const current_comment = await commentAPI.createComment(comment, entryID)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    handleAddComment(newComment, entryID)
  }

  // async function handleDeleteComments(entryID){
  //   const entry_current = await entriesAPI.displayEntry(entryID)
  //   console.log(entry_current)
  //   console.log(comments)
  // }

  return (
    <Container>
      <ReadOnly value={value} />
      <CommentSection comments={comments} 
        handleSubmit={handleSubmit}
        newComment={newComment}
        handleChange={handleChange}
        commentor="Commentor"
        // handleDeleteComments={handleDeleteComments} 
        />
    </Container>  
  )
};


export default DisplayEntry;
