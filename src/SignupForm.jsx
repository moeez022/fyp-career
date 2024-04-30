import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  password: z.string().min(6).refine((value) => /^(?=.*[0-9!@#$%^&*])(?=.*[a-zA-Z]).{6,}$/.test(value), {
    message: 'Password must be at least 6 characters long and contain at least one numeric value or special character',
  }),
  confirmPassword: z.string().min(6),
}).refine(({ password, confirmPassword }) => password === confirmPassword, {
  message: 'Passwords do not match',
});

const SignupForm = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  });

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
      <div style={{ width: '300px' }}>
        <h2>Sign Up</h2>
        <form className='form-control' onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column' }}>
          <input type="text" placeholder="Name" {...register('name')} style={{ marginBottom: '10px' }} />
          {errors.name && <span>{errors.name.message}</span>}
  
          <input type="email" placeholder="Email" {...register('email')} style={{ marginBottom: '10px' }} />
          {errors.email && <span>{errors.email.message}</span>}
  
          <input type="password" placeholder="Password" {...register('password')} style={{ marginBottom: '10px' }} />
          {errors.password && <span>{errors.password.message}</span>}
  
          <input type="password" placeholder="Confirm Password" {...register('confirmPassword')} style={{ marginBottom: '10px' }} />
          {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
  
          <button type="submit">Sign Up</button>
          <a href='login'>Already have an account? Login!</a>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
