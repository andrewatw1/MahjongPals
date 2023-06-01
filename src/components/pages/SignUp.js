import React, { useRef } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import './SignUp.css';
import { useAuth } from '../contexts/AuthContext'

function SignUp() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }

        try {
            setError('')
            await signup(emailRef.current.value, passwordRef.current.value)
        } catch {
            setError('Failed to create an account')
        }

        signup(emailRef.current.value, passwordRef.current.value)
    }

    return (
    <>
    <Card>
        <Card.Body>
            <h2 className='text-center mb-4'>Sign Up</h2>
            <Form>
                <Form.Group className='shift' id='email'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' ref={emailRef} required />
                </Form.Group>
                <Form.Group className='shift' id='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='email' ref={passwordRef} required />
                </Form.Group>
                <Form.Group className='shift'id='password-confirm'>
                    <Form.Label>Password Confirmation</Form.Label>
                    <Form.Control type='email' ref={passwordConfirmRef} required />
                </Form.Group>
                <Button className='btn--signup' type='submit'>
                    Sign Up
                </Button>
            </Form>
        </Card.Body>
    </Card>
    <div className='w-100 text-center mt-2'>
        Already have an account? Log In
    </div>
    </>
  )
}

export default SignUp