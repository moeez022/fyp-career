import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const schema = z.object({
  firstName: z.string().min(2).max(50).nonempty('First name is required'),
  lastName: z.string().min(2).max(50).nonempty('Last name is required'),
  email: z.string().email('Invalid email format').nonempty('Email is required'),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters long')
    .refine(
      (value) => /^(?=.*[0-9!@#$%^&*])(?=.*[a-zA-Z]).{6,}$/.test(value),
      'Password must contain at least one numeric value or special character'
    ),
  confirmPassword: z.string().min(6).nonempty('Confirm password is required'),
}).refine(({ password, confirmPassword }) => password === confirmPassword, {
  message: 'Passwords do not match',
});

const SignupForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log('Form data:', data);

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/user/register/', {
        name: `${data.firstName} ${data.lastName}`,
        email: data.email,
        password: data.password,
        password2: data.confirmPassword,
        tc: true,
      });
      console.log('Response:', response.data);
      reset();
      navigate('/login'); // Navigate to the login page after successful signup
    } catch (error) {
      console.error('Error:', error);
      alert('Signup failed. Please check your inputs and try again.');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
      <div style={{ width: '300px' }}>
        <h2>Sign Up</h2>
        <form className='form-control' onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column' }}>
          <input name='firstName' type="text" placeholder="First Name" {...register('firstName')} style={{ marginBottom: '10px' }} />
          {errors.firstName && <span>{errors.firstName.message}</span>}

          <input name='lastName' type="text" placeholder="Last Name" {...register('lastName')} style={{ marginBottom: '10px' }} />
          {errors.lastName && <span>{errors.lastName.message}</span>}

          <input name='email' type="email" placeholder="Email" {...register('email')} style={{ marginBottom: '10px' }} />
          {errors.email && <span>{errors.email.message}</span>}

          <input name='password' type="password" placeholder="Password" {...register('password')} style={{ marginBottom: '10px' }} />
          {errors.password && <span>{errors.password.message}</span>}

          <input name='confirmPassword' type="password" placeholder="Confirm Password" {...register('confirmPassword')} style={{ marginBottom: '10px' }} />
          {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}

          <button type="submit">Sign Up</button>
          <a href='/login'>Already have an account? Login!</a>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
