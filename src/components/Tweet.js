import React from 'react'
import Button from '@mui/material/Button'

const Tweet = ({ name, tweet, tweets, setTweets }) => {
  const deleteTweet = () => {
    setTweets(tweets.filter(t => t !== tweet))
  }
  return (
    <div>
      <h2>{name}</h2>
      <h3>{tweet}</h3>

      <Button
        onClick={deleteTweet}
        style={{ marginRight: 16 }}
        variant='contained'
        color='error'>
        Delete
      </Button>
      <Button variant='contained' color='success'>
        Like
      </Button>
    </div>
  )
}

export default Tweet
