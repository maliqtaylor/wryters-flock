import React from 'react';
import * as draftAPI from "../../services/draft-api";
import { useHistory } from "react-router-dom";
import { Carousel } from 'react-material-ui-carousel'
import { Container } from "semantic-ui-react";
import Item from '../../components/Item/Item'

const Profile = () => {
  const history = useHistory()


  async function handleCreateDraft(newEntry) {
    let draftInfo = await draftAPI.create(newEntry);
    history.push({
      pathname: '/draft',
      state: { draftId: draftInfo._id }
    })
  }

  async function handleSubmit(e) {
    e.preventDefault();
    handleCreateDraft();
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <button type='submit'>New Draft</button>
      </form>

    </Container>
  )
}

export default Profile