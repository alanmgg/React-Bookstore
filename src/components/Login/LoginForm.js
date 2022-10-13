import * as Yup from 'yup';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Link, Stack, IconButton, InputAdornment } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import Iconify from '../Iconify';
import { FormProvider, RHFTextField, RHFCheckbox } from '../hook-form';
// Api
import { postAuth } from '../../api/authApi'
import { getClienteByEmail } from '../../api/clientsApi'
// Notifications
import ActionsNotifications from '../ActionsNotifications';

// ----------------------------------------------------------------------

var token = ""

export default function LoginForm() {
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    token = ""

    if (localStorage.getItem('logClient')) {
      navigate('/dashboard', { replace: true });
    }
  }, []);

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email address'),
    password: Yup.string(),
  });

  const defaultValues = {
    email: '',
    password: '',
    remember: true,
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async () => {
    if (form.username !== '' && form.password !== '') {
      postAuth(form.email, form.password, loadAuthHandler, loadErrorHandler);
    } else {
      ActionsNotifications.pushInfo('Fill in the fields correctly.');
    }
  };

  async function loadAuthHandler(response) {
    if (response.ok) {
        token = await response.json();
        console.log(token);
        getClienteByEmail(form.email, form.password, token, loadClientHandler, loadErrorHandler);
        return;
    }
    if (response.status === 400) {
        const error = await response.text();
        throw new Error(error);
    }
    throw new Error("Network response was not ok");
  }
  
  async function loadClientHandler(response) {
    if (response.ok) {
        var logClient = await response.json();
        var objToken = { "token": token };
        var finalResult = Object.assign(logClient, objToken);

        console.log(finalResult);
        localStorage.setItem('logClient', JSON.stringify(finalResult));
        ActionsNotifications.pushSuccess('Logging in ...');
        navigate('/dashboard', { replace: true });
        return;
    }
    if (response.status === 400) {
        const error = await response.text();
        throw new Error(error);
    }
    throw new Error("Network response was not ok");
  }

  function loadErrorHandler(error) {
    ActionsNotifications.pushLoadingError('Wrong username or password');
  }

  function fillFields(type, data) {
    switch (type) {
      case 'email':
        setForm({ ...form, email: data });
        break;
    case 'password':
        setForm({ ...form, password: data });
        break;
      default:
        break;
    }
  }

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <RHFTextField name="email" label="Email address" value={form.email !== '' ? form.email : ''} onChange={(e) => fillFields('email', e.target.value)} />

        <RHFTextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          value={form.password !== '' ? form.password : ''}
          onChange={(e) => fillFields('password', e.target.value)}
          InputProps={{
            endAdornment: ( 
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <RHFCheckbox name="remember" label="Remember me" />
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
        Login
      </LoadingButton>
    </FormProvider>
  );
}
