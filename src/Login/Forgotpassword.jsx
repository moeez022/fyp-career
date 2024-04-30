import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ForgotPasswordForm = () => {
  const schema = z.object({
    email: z.string().email({ message: 'Invalid email format' }).nonempty('Email is required'),
  });

  const navigate = useNavigate();
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  });

  const handleForgotPasswordSubmit = async (data) => {
    console.log('Sending password recovery request for:', data.email);
    const formData = {
      email: data.email,
    };

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/user/forgot-password/', formData);
      console.log('Password recovery request successful. Response:', response.data);
      // Reset the form after successful submission
      reset();
      // Redirect to login page upon successful password recovery
      navigate('/login');
    } catch (error) {
      console.error('Error sending password recovery request:', error);
    }
  };

  return (
    <div className='d-flex justify-content-center align-items-center' style={{ height: '80vh' }}>
      <form className='form-container' onSubmit={handleSubmit(handleForgotPasswordSubmit)} style={{ display: 'flex', flexDirection: 'column' }}>
        <h2>Forgot Password?</h2>
        <input
          className='form-control'
          type="email"
          placeholder="Email"
          {...register('email', { required: true })}
          style={{ marginBottom: '10px' }}
        />
        {errors.email && <span>{errors.email.message}</span>}
        <button type="submit">Recover Password</button>
      </form>
    </div>
  );
};

export default ForgotPasswordForm;
