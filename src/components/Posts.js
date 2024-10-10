import React, { useEffect, useState } from 'react';

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = () => {
      const apiUrl = process.env.REACT_APP_API_URL + 'posts';
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => setPosts(data))
        .catch((error) => console.error('Error fetching posts:', error));
    };
  
    fetchPosts();
    const intervalId = setInterval(fetchPosts, 15000); // Fetch every 15 seconds
  
    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);
  
  return (
    <div>
      <h1>All Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} dangerouslySetInnerHTML={{ __html: post.title.rendered }}></li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
