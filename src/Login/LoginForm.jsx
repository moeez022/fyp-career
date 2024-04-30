import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const schema = z.object({
  email: z.string().email('Invalid email format').nonempty('Email is required'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

const LoginForm = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const [showPassword, setShowPassword] = useState(false);
  const handleLoginSubmit = async (data) => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/user/login/', data);
      console.log('Login Response:', response); // Log full response object
      reset();
      navigate('Homepage');
    } catch (error) {
      console.error('Login Error:', error);
      if (error.response) {
        console.error('Response Data:', error.response.data); // Log error response data
        console.error('Response Status:', error.response.status); // Log error response status
      }
      alert('An error occurred. Please try again later.'); // Generic error alert
    }
  };
  

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='d-flex justify-content-center align-items-center' style={{ height: '80vh' }}>
      <form className='form-container' onSubmit={handleSubmit(handleLoginSubmit)} style={{ display: 'flex', flexDirection: 'column' }}>
        <h2>Login</h2>
        <input
          className='form-control'
          type="email"
          placeholder="Email"
          {...register('email')}
          style={{ marginBottom: '10px' }}
        />
        {errors.email && <span>{errors.email.message}</span>}

        <div style={{ position: 'relative' }}>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            {...register('password')}
            style={{ marginBottom: '10px' }}
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              cursor: 'pointer',
              border: 'none',
              background: 'none',
              outline: 'none',
            }}
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>

        {errors.password && <span>{errors.password.message}</span>}

        <button type="submit">Login</button>

        <Link className='text-center mt-3' to='/forgot-password'>Forgot Password?</Link>

        <p className='text-center mt-3'>Don't have an account? <Link to='/register'>Sign Up!</Link></p>
      </form>
    </div>
  );
};

export default LoginForm;
