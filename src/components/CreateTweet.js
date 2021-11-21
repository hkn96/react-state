import React, { useState } from 'react'
import Button from '@mui/material/Button'
import TextareaAutosize from '@mui/material/TextareaAutosize'
import SendIcon from '@mui/icons-material/Send'

function CreateTweet() {
  const [textInput, setTextInput] = useState('')

  const userInputHandler = e => {
    setTextInput(e.target.value)
  }
  return (
    <form>
      <TextareaAutosize
        onChange={userInputHandler}
        placeholder='Empty'
        style={{ width: 200, height: 100 }}
        value={textInput}
      />
      <br />
      <Button variant='contained' endIcon={<SendIcon />}>
        Send
      </Button>
    </form>
  )
}

export default CreateTweet
