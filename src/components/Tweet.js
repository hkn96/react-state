import React from 'react';
import Button from '@mui/material/Button';

const Tweet = ({ name, message }) => {
  return (
    <div>
      <h2>{name}</h2>
      <h3>{message}</h3>

      <Button style={{ marginRight: 16 }} variant='contained' color='error'>
        Delete
      </Button>
      <Button variant='contained' color='success'>
        Like
      </Button>
    </div>
  );
};

export default Tweet;
