'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import axios from 'axios';

export default function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [fieldErrors, setFieldErrors] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const router = useRouter();

    const validateField = (name: string, value: string) => {
        let errorMessage = '';

        switch (name) {
            case 'name':
                if (!value.trim()) {
                    errorMessage = 'Name is required';
                } else if (value.trim().length < 2) {
                    errorMessage = 'Name must be at least 2 characters long';
                } else if (!/^[a-zA-Z\s'-]+$/.test(value.trim())) {
                    errorMessage = 'Name can only contain letters, spaces, hyphens, and apostrophes';
                }
                break;

            case 'email':
                if (!value.trim()) {
                    errorMessage = 'Email is required';
                } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
                    errorMessage = 'Please enter a valid email address';
                }
                break;

            case 'password':
                if (!value) {
                    errorMessage = 'Password is required';
                } else if (value.length < 6) {
                    errorMessage = 'Password must be at least 6 characters long';
                }
                break;

            case 'confirmPassword':
                if (!value) {
                    errorMessage = 'Please confirm your password';
                } else if (value !== formData.password) {
                    errorMessage = 'Passwords do not match';
                }
                break;
        }

        return errorMessage;
    };

    const validateForm = () => {
        const errors = {
            name: validateField('name', formData.name),
            email: validateField('email', formData.email),
            password: validateField('password', formData.password),
            confirmPassword: validateField('confirmPassword', formData.confirmPassword)
        };

        setFieldErrors(errors);

        // Check if any field has errors
        const hasErrors = Object.values(errors).some(error => error !== '');
        if (hasErrors) {
            throw new Error('Please fix the validation errors');
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        setLoading(true);

        try {
            // Validate form data before sending to backend
            validateForm();

            // Sanitize and prepare data for sending
            const sanitizedData = {
                name: formData.name.trim(),
                email: formData.email.trim().toLowerCase(),
                password: formData.password,
            };

            // Log the data being sent (excluding password for security)
            console.log('Sending registration data:', {
                name: sanitizedData.name,
                email: sanitizedData.email,
            });

            const response = await axios.post('http://localhost:5000/api/auth/register', sanitizedData, {
                timeout: 10000, // 10 second timeout
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            console.log('Response from server:', response.data);

            // Show success message
            setSuccess('Registration successful! Redirecting to login page...');
            
            // Show success alert
            alert('Registration successful! You will be redirected to the login page.');

            // Add a small delay to show the success message before redirecting
            setTimeout(() => {
                router.push('/');
            }, 2000);
        } catch (err) {
            console.error('Registration error:', err);
            
            if (axios.isAxiosError(err)) {
                if (err.code === 'ECONNABORTED') {
                    setError('Request timeout. Please try again.');
                } else if (err.response) {
                    const errorMessage = err.response.data?.error || err.response.data?.message || 'Registration failed';
                    setError(errorMessage);
                    console.error('Server response error:', err.response.data);
                } else if (err.request) {
                    setError('Cannot connect to server. Please check if the server is running on port 5000.');
                    console.error('Network error - no response received:', err.request);
                } else {
                    setError('Network error occurred. Please try again.');
                    console.error('Request setup error:', err.message);
                }
            } else {
                const errorMessage = err instanceof Error ? err.message : 'Something went wrong';
                setError(errorMessage);
                console.error('Non-Axios error:', err);
            }
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        
        // Clear general error when user starts typing
        if (error) {
            setError('');
        }
        
        // Update form data
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Real-time validation for the current field
        const fieldError = validateField(name, value);
        setFieldErrors(prev => ({
            ...prev,
            [name]: fieldError
        }));

        // Also validate confirm password when password changes
        if (name === 'password' && formData.confirmPassword) {
            const confirmPasswordError = validateField('confirmPassword', formData.confirmPassword);
            setFieldErrors(prev => ({
                ...prev,
                confirmPassword: confirmPasswordError
            }));
        }
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
                {success && (
                    <div className="bg-green-50 text-green-600 p-3 rounded-md mb-4">
                        {success}
                    </div>
                )}
                <div>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        placeholder="Full Name"
                        onChange={handleChange}
                        className={`w-full rounded border p-2 text-black ${
                            fieldErrors.name ? 'border-red-500' : 'border-gray-300'
                        }`}
                        required
                        disabled={loading}
                    />
                    {fieldErrors.name && (
                        <p className="text-red-500 text-sm mt-1">{fieldErrors.name}</p>
                    )}
                </div>
                <div>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        placeholder="Email"
                        onChange={handleChange}
                        className={`w-full rounded border p-2 text-black ${
                            fieldErrors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                        required
                        disabled={loading}
                    />
                    {fieldErrors.email && (
                        <p className="text-red-500 text-sm mt-1">{fieldErrors.email}</p>
                    )}
                </div>
                <div>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        placeholder="Password (min 8 chars, include A-Z, a-z, 0-9)"
                        onChange={handleChange}
                        className={`w-full rounded border p-2 text-black ${
                            fieldErrors.password ? 'border-red-500' : 'border-gray-300'
                        }`}
                        required
                        disabled={loading}
                    />
                    {fieldErrors.password && (
                        <p className="text-red-500 text-sm mt-1">{fieldErrors.password}</p>
                    )}
                </div>
                <div>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        placeholder="Confirm Password"
                        onChange={handleChange}
                        className={`w-full rounded border p-2 text-black ${
                            fieldErrors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                        }`}
                        required
                        disabled={loading}
                    />
                    {fieldErrors.confirmPassword && (
                        <p className="text-red-500 text-sm mt-1">{fieldErrors.confirmPassword}</p>
                    )}
                </div>
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