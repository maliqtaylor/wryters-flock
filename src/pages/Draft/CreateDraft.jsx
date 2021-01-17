import React, { useState, useEffect, useRef } from "react";
import Document from "../../components/Document/Document"
import { useContent } from "../../components/hooks/useContent"
import { useHistory } from "react-router-dom";

const CreateDraft = () =>{

  const [content, setContent] = useContent({
    content: ""
  })

  return (
    <>
      <Document
        value={content.content}
        onChange={setContent}
      />
    </>
  )
}

export default CreateDraft