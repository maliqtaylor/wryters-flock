import React, { useState, useEffect } from "react";
import "./AddQuote.css";
import { useHistory } from "react-router-dom";
import axios from "axios"
function AddQuote() {
  const history = useHistory()
  const [quote, setQuote] = useState({
    content: "",
    author: "",
  })
  useEffect(() => {
    async function getQuote() {
      const response = await axios.get('https://zenquotes.io/api/random',
        {
          method: 'GET',
          mode: 'no-cors',
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          },
          withCredentials: true,
          credentials: 'same-origin'
        })
      setQuote(response.data)
      console.log(response)
    }
    getQuote()
  })
  function handleAddQuote(q) {
    quote.content = q.q
    quote.author = q.a
    history.push("/entryIndex")
  }
  return (
    <>
      <div className="AddQuote">
        Add Quotes Here
        <br />
        <br />
        <button type="submit" onClick={handleAddQuote}>
          Add Quote
        </button>
      </div>
    </>
  );
}
export default AddQuote;