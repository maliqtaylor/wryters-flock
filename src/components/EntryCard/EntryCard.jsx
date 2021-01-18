import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'semantic-ui-react'

function EntryCard({ user, entry }) {
  console.log(entry)
  return (
    <>
      <Container>
        {entry.content ?
          <p>{entry.content.content}</p>
          :
          <p>NA</p>}
      </Container>
    </>
  )
}

export default EntryCard
