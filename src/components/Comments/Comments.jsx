import React from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'



const CommentSection = (props) => {
  console.log(props.newComment)
  console.log(props.comments)
  
 return (
  <Comment.Group>
    <Header as='h4' dividing>
      Comments
    </Header>


    <form onSubmit={props.handleSubmit} >
      <labe>Comment Here</labe>
      <input placeholder="..." name="content" onChange={props.handleChange}/>
      <button type="submit">Leave A Comment</button >
    </form>

  
    {props.comments.map((comment => {
    <Comment>
      <Comment.Avatar />
      <Comment.Content>
        <Comment.Author as='a'>{comment.commentor}r</Comment.Author>
        <Comment.Text>{comment.content}</Comment.Text>
      </Comment.Content>
    </Comment>
    }))
    }
  
    </Comment.Group>
  )
}

export default CommentSection