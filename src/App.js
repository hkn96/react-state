import TweetList from './components/TweetList'
import Typography from '@mui/material/Typography'
import CreateTweet from './components/CreateTweet'
import './App.css'
import { useState } from 'react'

function App() {
  //STATE
  const [textInput, setTextInput] = useState('')
  const [tweets, setTweets] = useState([])
  const [name, setName] = useState('hakan')

  return (
    <div className='App'>
      <Typography
        style={{
          background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
          border: 0,
          borderRadius: 3,
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
          color: 'white',
          height: 64,
          padding: '0 30px',
        }}
        variant='h2'
        component='h2'>
        Tweet
      </Typography>
      <br />
      <CreateTweet
        textInput={textInput}
        setTextInput={setTextInput}
        tweets={tweets}
        setTweets={setTweets}
      />
      <TweetList name={name} tweets={tweets} setTweets={setTweets} />
    </div>
  )
}

export default App
