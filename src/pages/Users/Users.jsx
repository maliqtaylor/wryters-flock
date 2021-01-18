import React from 'react';
import * as draftAPI from "../../services/draft-api";
import { useHistory } from "react-router-dom";

const Users = () => {
  const history = useHistory()

  async function handleCreateDraft(newEntry) {
    let draftInfo = await draftAPI.create(newEntry);
    console.log(draftInfo)
    history.push('/draft')
  }

  async function handleSubmit(e) {
    e.preventDefault();
    handleCreateDraft();
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type='submit'>New Draft</button>
    </form>
  )
}

export default Users