import React from 'react'
import { Comment, Header } from 'semantic-ui-react'
import moment from "moment"


const CommentSection = (props) => {

  console.log(props.comments)
  return (
    
    <Comment.Group>
      <Header as='h4' dividing>
        Comments
    </Header>


      <textarea name="content" form="cmmtform" onChange={props.handleChange} placeholder="comment here..." />
      <form onSubmit={props.handleSubmit} id='cmmtform' >
        <button type="submit">Leave A Comment</button >
      </form>

      <div>{props.comments.map(comment =>
        <>
          
          <h5> {comment.content}</h5>
          <p>by: {comment.commentor.name}</p>
          <p>
          {moment(comment.createdAt).format("LLL")}{" "}
          </p>
          {/* {props.user._id === comment.commentor._id ? */}
              <button type='submit'  
                onClick={()=> props.handleDeleteComment(comment, comment._id, props.entryID)}
              >Delete Comment</button> 
            
              <button>like</button>

        </>

      )}
      </div>

    </Comment.Group>
  )
}

export default CommentSection