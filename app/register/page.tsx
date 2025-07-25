'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import axios from 'axios';

export default function Register() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            if (formData.password !== formData.confirmPassword) {
                throw new Error('Passwords do not match');
            }

            // Log the data being sent
            console.log('Sending registration data:', {
                username: formData.username,
                email: formData.email,
            });

            const response = await axios.post('http://localhost:5000/api/auth/register', {
                username: formData.username,
                email: formData.email,
                password: formData.password,
            });

            console.log('Response from server:', response.data);

            router.push('/');
        } catch (err) {
            console.error('Registration error:', err);
            if (axios.isAxiosError(err)) {
                setError(err.response?.data?.error || 'Registration failed');
            } else {
                setError(err instanceof Error ? err.message : 'Something went wrong');
            }
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50">
            <form onSubmit={handleSubmit} className="w-96 space-y-4 rounded-lg bg-white p-8 shadow-md">
                <h1 className="mb-6 text-2xl font-bold text-center text-blue-500">Register</h1>
                {error && (
                    <div className="bg-red-50 text-red-500 p-3 rounded-md mb-4">
                        {error}
                    </div>
                )}
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={handleChange}
                    className="w-full rounded border p-2 text-black"
                    required
                    disabled={loading}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    className="w-full rounded border p-2 text-black"
                    required
                    disabled={loading}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    className="w-full rounded border p-2 text-black"
                    required
                    disabled={loading}
                />
                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    onChange={handleChange}
                    className="w-full rounded border p-2 text-black"
                    required
                    disabled={loading}
                />
                <button
                    type="submit"
                    className="w-full rounded bg-blue-500 p-2 text-white hover:bg-blue-600 disabled:bg-blue-300"
                    disabled={loading}
                >
                    {loading ? 'Registering...' : 'Register'}
                </button>
                <div className="text-center text-sm text-black">
                    Already have an account?{' '}
                    <Link href="/" className="text-blue-500 hover:underline">
                        Login
                    </Link>
                </div>
            </form>
        </div>
    );
}