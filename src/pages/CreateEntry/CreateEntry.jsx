import React, { useState, useEffect, useRef} from "react";
import "./CreateEntry.css";
import { useHistory } from "react-router-dom";
import { useForm } from "../../components/hooks/useForm";
import * as entryAPI from "../../services/entry-api";

function CreateEntry(props) {
  const history = useHistory();
  const [invalidEntry, setValidEntry] = useState(true);
  const formRef = useRef();

  const [state, handleChange] = useForm({
    title: "",
    description: "",
    private: Boolean,
    classification: "",
    genre: "",
    author: "",
    comments: [],
    likes: [],
    ratings: [],
  });

  async function handleCreateEntry(newEntry) {
    await entryAPI.create(newEntry);
    history.push("/entries");
  }


useEffect(() => {
  formRef.current.checkValidity() ? setValidEntry(false) : setValidEntry(true);
}, [state]);

async function handleSubmit(e) {
  e.preventDefault();
  handleCreateEntry(state);
}

return (
  <>
    <div className="AddEntry">
      <form className="col s12" ref={formRef} onSubmit={handleSubmit}>
        <div className="row">
          <div className="input-field col s12">
            <input
              name="title"
              id="title"
              type="text"
              className="active"
              value={state.title}
              onChange={handleChange}
              required
            />
            <label htmlFor="name">Title</label>
          </div>
        </div>
        <div>
          <button type="submit" className="btn red" disabled={invalidEntry}>
            Add Entry
          </button>
        </div>
      </form>
    </div>
  </>
);
}

export default CreateEntry;