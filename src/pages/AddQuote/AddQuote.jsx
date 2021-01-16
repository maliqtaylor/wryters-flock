import React, { useState, useEffect, useRef } from "react";
import "./AddQuote.css";
import { useHistory } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import * as quoteAPI from "../../services/quote-api";

function AddQuote(props) {
  const history = useHistory();
  const [invalidForm, setValidForm] = useState(true);
  const formRef = useRef();

  const [state, handleChange] = useForm({
      content: '',
      author: ''
  })

async function handleAddQuote(newQuote){
    await quoteAPI.create(newQuote)
    history.push('/entryIndex') 
}
useEffect(()=> {
    formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true)
  }, [state])

  async function handleSubmit(e) {
    e.preventDefault()
    handleAddQuote(state)
  }
return (
    <>
    <div className="AddQuote">
        Search Quotes Here
    </div>
    </>
)

}
