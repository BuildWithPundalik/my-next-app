import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password } = body

    // Basic validation
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      )
    }

    // Mock authentication logic (replace with real authentication)
    // For now, we'll accept any email/password combination
    if (email && password) {
      // Mock user object
      const user = {
        id: '1',
        email: email,
        name: 'Test User',
        role: 'user'
      }

      return NextResponse.json(
        { 
          message: 'Login successful',
          user: user
        },
        { status: 200 }
      )
    } else {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      )
    }

  } catch (error) {
    console.error('Login API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
