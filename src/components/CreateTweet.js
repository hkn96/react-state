import React from 'react';
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import SendIcon from '@mui/icons-material/Send';

function CreateTweet() {
  return (
    <form>
      <TextareaAutosize
        aria-label='empty textarea'
        placeholder='Empty'
        style={{ width: 200, height: 100 }}
      />
      <br />
      <Button variant='contained' endIcon={<SendIcon />}>
        Send
      </Button>
    </form>
  );
}

export default CreateTweet;
