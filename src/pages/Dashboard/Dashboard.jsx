import React, { useEffect, useState } from 'react';
import './Dashboard.css'
import * as draftAPI from "../../services/draft-api";
import { useHistory, Link } from "react-router-dom";
import { Container } from "semantic-ui-react";
import { Card } from 'semantic-ui-react'

const Dashboard = () => {
  const history = useHistory()

  const [drafts, setDrafts] = useState([])


  useEffect(() => {
    (async function () {
      const drafts = await draftAPI.index()
      console.log(drafts);
      setDrafts(drafts)
    })();
  }, [])

  async function handleCreateDraft(draftTitle) {
    let draftInfo = await draftAPI.create(draftTitle);
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
    <>
      <h1>Dashboard</h1>
      <Container text>
        <Card.Group id='card-row'>
          {drafts.map((draft, i) => {
            return (
              <Card>
                <Card.Content>
                  <Card.Header>
                    <Link>
                      Draft {i + 1}
                    </Link>
                  </Card.Header>
                  <Card.Description>
                    Steve wants to add you to the group <strong>best friends</strong>
                  </Card.Description>
                </Card.Content>
              </Card>
            )
          })}
        </Card.Group>
      </Container>
      <div className='new-draft'>
        <form onSubmit={handleSubmit}>
          <button type='submit'>New Draft</button>
        </form>
      </div>
    </>
  )
}

export default Dashboard