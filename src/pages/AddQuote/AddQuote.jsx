import React, { useState, useEffect } from "react";
import { Button, Card } from "semantic-ui-react";
import "./AddQuote.css";
import axios from "axios";

function AddQuote(props) {
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const apiUrl =
    "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";

  const [quote, setQuote] = useState({
    formData: {
      quoteText: "",
      quoteAuthor: "",
    },
  });
  useEffect(() => {
    async function getQuote() {
      const response = await axios.get(proxyUrl + apiUrl);
      setQuote(response.data);
      console.log(response.data);
    }
    getQuote();
  }, []);

  return (
    <Card id="AddQuote">
      <div class="card">
        <div class="content">
          <div class="header">{quote.quoteText}</div>
          <br/>
          <div class="description">- {quote.quoteAuthor}</div>
        </div>
          <br/>
        <form>
          <Button compact color="pink" type="submit" class="ui bottom attached button">
            <i class="add icon"></i>
            Get Another Quote
          </Button>
        </form>
      </div>
    </Card>
  );
}
export default AddQuote;

