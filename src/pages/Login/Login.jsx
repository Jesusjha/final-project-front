import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { MainSign, Button, TextAccount, TextColor, TitleSign, CenterArticle, Logo, Input, Label,
} from '../../ui/index';
import logoSM from '../../assets/images/Logo-sign.png';

import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import { signInWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, } from 'firebase/auth';
import auth from '../../utils/firebase/firebaseConfig';

import { useDispatch, useSelector } from 'react-redux';
import { getAuthUser, userSignedIn } from '../../features/auth/authSlice';
import { useAddUserMutation, useGetSingleUserQuery, useGetUsersQuery } from '../../features/api/apiSlice';




const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authUser = useSelector(getAuthUser);
  const [uid, setUid] = useState(''); 
  // const { data: dbUser, isLoading, isSuccess, isFetching, isError, error } = useGetSingleUserQuery(3)
  const users = useGetUsersQuery();
  
  // set variables for react-hook-form
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });


const onSubmit = async (data) => {
  const { email, password } = data;
  try {
    await signInWithEmailAndPassword(auth, email, password);
    
    auth.onAuthStateChanged((user) => {    
      if (user) {
          const { accessToken, email, uid } = user;
          const userObj = {
            token: accessToken,
            email: email,
            uid: uid,
          }
          dispatch(userSignedIn(userObj))
          
          console.log(authUser)
          console.log('user is logged in')
      }
    });
    // navigate('/dashboard')
  } catch (error) {
      console.log(error);
      // TODO:  create global Error handling state
    }
  };

  return (
    <MainSign>
      <Logo sign src={logoSM} />
      <form className="registration__form" id="loginForm" onSubmit={handleSubmit(onSubmit)}>
        <TitleSign>Hello again!</TitleSign>
        <CenterArticle loginLab>
          <Label htmlFor="email">
            Email:</Label>
            <Input
              className="signup__input"
              name="email"
              // label="Email:"
              type="email"
              {...register('email', {
                required: 'Email is required',
              })}
            />
          <ErrorMessage errors={errors} name="email" as="p" />
          {/* </CenterArticle>
        <CenterArticle loginLab> */}
          <Label passPos htmlFor="password">
            Password:
            </Label>
            <Input
              className="signup__input"
              name="password"
              label="Password:"
              type="password"
              {...register('password', {
                required: 'Password is required',
              })}
            />
          <ErrorMessage errors={errors} name="password" as="p" />
        </CenterArticle>
        <TextColor className="forgotPass">Forgot your password?</TextColor>
      </form>
      <article>
        <Button type="submit" form="loginForm">Sign in</Button>
        <TextAccount register>
          Don't have an account?{' '}
          <TextColor as={Link} to="/registration">
            Register
          </TextColor>{' '}
        </TextAccount>
      </article>
    </MainSign>
  );
};

export default Login;
