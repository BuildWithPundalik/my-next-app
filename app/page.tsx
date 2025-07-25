'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Validation
      if (!email || !password) {
        setError("Please enter both email and password.");
        return;
      }

      // Log the data being sent
      console.log('Sending login data:', { email });

      // Make API call to Express backend
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email: email,
        password: password,
      }, {
        timeout: 10000, // 10 second timeout
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log('Response from server:', response.data);

      // If login successful, redirect to home
      if (response.status === 200) {
        // Store user data or token if needed
        if (response.data.user) {
          localStorage.setItem('user', JSON.stringify(response.data.user));
        }

        // Redirect to aboutus page (since /home doesn't exist)
        router.push('/aboutus');
      }

    } catch (err) {
      console.error('Login error:', err);
      
      if (axios.isAxiosError(err)) {
        if (err.code === 'ECONNABORTED') {
          setError('Request timeout. Please try again.');
        } else if (err.response) {
          setError(err.response.data?.error || 'Login failed');
        } else if (err.request) {
          setError('Cannot connect to server. Please check if the server is running.');
        } else {
          setError('An error occurred. Please try again.');
        }
      } else {
        setError('Something went wrong. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-blue-600 text-center">Login</h2>
        {error && <div className="mb-4 text-red-500 bg-red-50 p-3 rounded-md">{error}</div>}
        
        <div className="mb-4">
          <label className="block mb-1 text-black">Email</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            required
            disabled={loading}
          />
        </div>
        
        <div className="mb-6">
          <label className="block mb-1 text-black">Password</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            required
            disabled={loading}
          />
        </div>
        
        <div className="mb-4 text-center text-black">
          Don't have an account?{" "}
          <Link href="/register" className="text-blue-600 hover:underline">
            Register
          </Link>
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition-colors disabled:bg-blue-300"
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </main>
  );
}
