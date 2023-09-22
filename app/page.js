"use client"
import { useEffect, useState } from 'react';
import TopBar from "@/components/TopBar";
import Head from 'next/head';

export default function Home() {

  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const payload = {
      registration_number: e.target.username.value,
      password: e.target.password.value,
    };

    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Set the content type to JSON
        },
        body: JSON.stringify(payload), // Serialize the payload to JSON string
      });


      if (response.ok) {
        const data = await response.json();
        // Assuming your backend returns a token
        const token = data.token;
        // Store the token securely (e.g., in a cookie or local storage)
        // Redirect to a protected route or perform other actions
      } else {
        const data = await response.json();
        setMessage(data.msg || 'Authentication failed');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred');
    }
  };


  return (
    <div className="main">
      <form onSubmit={handleSubmit} className="login-div form login">
        <h1>Login</h1>
        <input type="text" id='username' placeholder="username" />
        <input type="password" id='password' placeholder="password" />
        <button type='submit'>Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  )
}
