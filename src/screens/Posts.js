import React, { useState, useEffect } from 'react';
import { db } from '../firebase'; // Firebase setup
import { collection, getDocs, addDoc } from 'firebase/firestore';
import '../App.css'; // Import your app.css file here

function Posts() {
  const [posts, setPosts] = useState([]); // State to store posts
  const [message, setMessage] = useState(''); // State to store new message input

  // Fetch posts from Firestore (only once or after new post is added)
  const fetchPosts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'posts'));
      const postsData = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      console.log("Fetched posts:", postsData);
      setPosts(postsData); // Set the posts data to state
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  // Fetch posts when the component mounts or when a new post is added
  useEffect(() => {
    fetchPosts(); // Fetch posts when the component mounts or when the posts state changes
  }, [posts]); // Dependency array: this will rerun the effect whenever 'posts' changes

  // Handle new message submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (message.trim() === '') {
      console.error('Message is empty, cannot submit.');
      return;
    }

    try {
      console.log('Attempting to add post:', message);
      
      // Add post to Firestore
      const postRef = await addDoc(collection(db, 'posts'), { 
        message: message,
      });

      console.log('Post added with ID:', postRef.id);

      // Clear message input
      setMessage(''); // Clear the input field after submitting

      // Fetch posts after new post is added
      fetchPosts();

    } catch (error) {
      console.error('Error adding post:', error);
    }
  };

  return (
    <div className="container">
      <header>
        <h1>WHAT IS THE EFFECT OF KBA ON YOU?</h1>
      </header>

      {/* Form to create a post */}
      <form onSubmit={handleSubmit}>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write your message"
          required
        />
        <button type="submit">Post</button>
      </form>

      {/* Display the list of posts */}
      <h2>All Posts</h2>
      {posts.length === 0 ? (
        <p>No posts yet!</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <p>{post.message}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Posts;
