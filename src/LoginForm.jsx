import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';



const LoginForm = ({ onSubmit }) => {
  const schema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
  });
  const navigate = useNavigate(); 

  const handleLoginSubmit = (data) => {
          console.log('Logging in with:', data);
          navigate('/'); 
        };
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  });

  return (
    <div className='d-flex justify-content-center align-items-center' style={{ height: '80vh' }}>
      
        
        <form className='form-container' onSubmit={handleSubmit(handleLoginSubmit)} style={{ display: 'flex', flexDirection: 'column' }}>
        <h2>Login</h2>
          <input className='form-control' type="email" placeholder="Email" {...register('email')} style={{ marginBottom: '10px' }} />
          {errors.email && <span>{errors.email.message}</span>}
  
          <input type="password" placeholder="Password" {...register('password')} style={{ marginBottom: '10px' }} />
          {errors.password && <span>{errors.password.message}</span>}
    
          <button type="submit">Login</button>
          <a className='text-center mt-3' href='register'>Don't have an account? SignUp!</a>
        </form>
    </div>
  );

  

  
//   const LoginForm = () => {
//     const navigate = useNavigate(); // Hook for navigation
  
//     const { register, handleSubmit } = useForm({
//       resolver: zodResolver(schema)
//     });
  
//     const handleLoginSubmit = (data) => {
//       // Your sign-in logic here
//       // After successful sign-in, navigate to the desired page
//       console.log('Logging in with:', data);
//       navigate('/dashboard'); // Navigate to the dashboard page after successful sign-in
//     };
  
//     return (
//       <div>
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit(handleLoginSubmit)}>
//           <input type="email" placeholder="Email" {...register('email')} />
//           <input type="password" placeholder="Password" {...register('password')} />
//           <button type="submit">Login</button>
//         </form>
//       </div>
//     );
//   };
};


export default LoginForm;