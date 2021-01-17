import React from 'react';
import * as draftAPI from "../../services/draft-api";
import { Link } from "react-router-dom";

const Users = () => {

  async function handleCreateDraft(newEntry) {
    let draftInfo = await draftAPI.create(newEntry);
    console.log(draftInfo)
  }

  async function handleSubmit(e) {
    e.preventDefault();
    handleCreateDraft();
  }

  return (
    <form onSubmit={handleSubmit}>
      <Link
        to={{
          pathname: "/draft",
          state: { mssg: 'hi' }
        }}>
        <button type='submit'>New Draft</button>
      </Link>
    </form>
  )
}

export default Users