import React, { useEffect, useState } from 'react';

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = () => {
      fetch('https://llanokidbooks.com/wp-json/wp/v2/posts')
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
      <h1>Latest Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title.rendered}</li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
