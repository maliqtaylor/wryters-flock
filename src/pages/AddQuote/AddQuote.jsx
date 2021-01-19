import React, { useState, useEffect } from "react";
import "./AddQuote.css";
import { useHistory } from "react-router-dom";
import axios from "axios"

function AddQuote() {
  const history = useHistory()

  const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
  const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json'
  
  const [quote, setQuote] = useState({
    quoteText: "",
    quoteAuthor: "",
  })
  useEffect(() => {
    async function getQuote() {
      const response = await axios.get(proxyUrl+apiUrl)
      setQuote(response.data)
      console.log(response.data)
    } getQuote()
  }, [])
  
  
  // function handleAddQuote(q) {
  //   console.log( q)
  //   quote.content = q.q
  //   quote.author = q.q
  // }

  // function getNewQuote(){
  //   getQuote()
  // }

  return (
    <>
      <div className="AddQuote">
        Add Quotes Here
        <br />
        <br />
        {/* <button type="submit" onClick={getNewQuote}>
          Add Quote
        </button> */}
        <p>Quote: {quote.quoteText}</p>
        <p>Author: {quote.quoteAuthor}</p>
      </div>
    </>
  );
}
export default AddQuote;