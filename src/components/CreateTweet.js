import Button from '@mui/material/Button'
import TextareaAutosize from '@mui/material/TextareaAutosize'
import SendIcon from '@mui/icons-material/Send'
import { v4 as uuidv4 } from 'uuid'

function CreateTweet({ textInput, setTextInput, tweets, setTweets }) {
  const userInputHandler = e => {
    setTextInput(e.target.value)
  }

  const submitTweetHandler = e => {
    e.preventDefault()
    setTweets([...tweets, { message: textInput, id: uuidv4() }])
    setTextInput('')
  }

  return (
    <div>
      <form>
        <TextareaAutosize
          onChange={userInputHandler}
          placeholder='Empty'
          style={{ width: 200, height: 100 }}
          value={textInput}
        />
        <br />
        <Button
          onClick={submitTweetHandler}
          variant='contained'
          endIcon={<SendIcon />}>
          Send
        </Button>
      </form>
    </div>
  )
}

export default CreateTweet
