import React from 'react';
import Button from '@mui/material/Button';

const Tweet = ({ name, message }) => {
  return (
    <div>
      <h2>{name}</h2>
      <h3>{message}</h3>
      <Button variant='contained' color='success'>
        Like
      </Button>
      <Button style={{ marginLeft: 16 }} variant='contained' color='error'>
        Delete
      </Button>
    </div>
  );
};

export default Tweet;
