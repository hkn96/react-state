import Tweet from './components/Tweet';
import Typography from '@mui/material/Typography';
import CreateTweet from './components/CreateTweet';
import './App.css';

function App() {
  const name = 'hakan';
  const message = 'i want to sleep';
  return (
    <div className='App'>
      <Typography variant='h2' component='h2'>
        Tweet
      </Typography>
      <CreateTweet />
      <Tweet name={name} message={message} />
    </div>
  );
}

export default App;
