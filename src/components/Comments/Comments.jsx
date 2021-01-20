import React from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'



const CommentSection = (props) => {
  
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

    
    
   <div>{props.comments.map(comment => 
        <>
          <p>{comment.content}</p>
         <p>{comment.commentor.name}</p>
          <p>at-{comment.createdAt}</p>
        </>  

    )}
    </div> 
  
  </Comment.Group>
  )
}

export default CommentSection