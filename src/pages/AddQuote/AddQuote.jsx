import React, { useState, useEffect } from "react";
import "./AddQuote.css";
import { useHistory } from "react-router-dom";
// import { useForm } from "../../hooks/useForm";
import * as quoteAPI from "../../services/quote-api";

function AddQuote() {
  const history = useHistory();
//   const formRef = useRef();

  const [state, handleChange] = useState({
      content: '',
      author: ''
  })

async function handleAddQuote(newQuote){
    await quoteAPI.getQuote(newQuote)
    history.push('/entryIndex') 
}
useEffect(()=> {
    console.log('useEffect runs')
    

},
    
  async function handleSubmit(e) {
    e.preventDefault()
    handleAddQuote(state)

  })

return (
    <>
    <div className="AddQuote">
        Search Quotes Here
        <br/><br/>
        <button type="submit" onClick={handleChange}>Add Quote</button>
    </div>
    </>
)

}

export default AddQuote;