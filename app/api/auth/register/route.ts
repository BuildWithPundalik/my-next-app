import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { username, email, password } = body

    // Basic validation
    if (!username || !email || !password) {
      return NextResponse.json(
        { error: 'Username, email and password are required' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      )
    }

    // Password validation
    if (password.length < 6) {
      return NextResponse.json(
        { error: 'Password must be at least 6 characters long' },
        { status: 400 }
      )
    }

    // Mock registration logic (replace with real registration)
    // For now, we'll accept any valid registration
    const user = {
      id: Date.now().toString(),
      username: username,
      email: email,
      role: 'user',
      createdAt: new Date().toISOString()
    }

    return NextResponse.json(
      { 
        message: 'Registration successful',
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
          role: user.role
        }
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('Registration API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
