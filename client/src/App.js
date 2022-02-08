import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])
  
  return (
    <div className="app">
      <Sidebar />

      <Feed />

      <Widgets />
    </div>
  );
}

export default App;
