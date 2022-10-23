import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [posts, setPosts] = useState([])
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    const dataFunction = async() => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts")
      const dataJson = await res.json();
      const fetchData = dataJson.slice(0, 4);
      setPosts(fetchData);
      setLoadingData(false)
    }

    dataFunction();
  }, [])
  return (
    <div className="App">
     {loadingData ? <div>loading...</div> : (
      <ul data-testid="posts" >
        {posts.map((post, i) => (
          <li key={i}>
            <h5>{post.title}</h5>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
     )}
    </div>
  );
}

export default App;
