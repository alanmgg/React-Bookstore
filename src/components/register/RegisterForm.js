import * as Yup from 'yup';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Stack, IconButton, InputAdornment } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import Iconify from '../Iconify';
import { FormProvider, RHFTextField } from '../hook-form';
// Language
import { FormattedMessage } from 'react-intl';

// ----------------------------------------------------------------------

export default function RegisterForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ username: '', apPaterno: '', apMaterno: '', email: '', phone: '', direction: '', password: '', role: 'user' });

  const RegisterSchema = Yup.object().shape({
    username: Yup.string(),
    apMaterno: Yup.string(),
    apPaterno: Yup.string(),
    email: Yup.string().email('Email must be a valid email address'),
    phone: Yup.string(),
    direction: Yup.string(),
    password: Yup.string(),
  });

  const defaultValues = {
    username: '',
    apPaterno: '',
    apMaterno: '',
    email: '',
    phone: '',
    direction: '',
    password: '',
  };

  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async () => {
    // navigate('/dashboard', { replace: true });
    console.log(form);
  };

  function fillFields(type, data) {
    switch (type) {
      case 'username':
        console.log('Imprimo hola');
        setForm({ ...form, username: data });
        break;
    case 'apPaterno':
        setForm({ ...form, apPaterno: data });
        break;
    case 'apMaterno':
        setForm({ ...form, apMaterno: data });
        break;
    case 'email':
        setForm({ ...form, email: data });
        break;
    case 'phone':
        setForm({ ...form, phone: data });
        break;
    case 'direction':
        setForm({ ...form, direction: data });
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
        <RHFTextField name="username" label={<FormattedMessage id="textfield.names" defaultMessage="Names"/>} style={{ zIndex: 10 }} value={form.username !== '' ? form.username : ''} onChange={(e) => fillFields('username', e.target.value)}/>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <RHFTextField name="apPaterno" label={<FormattedMessage id="textfield.last" defaultMessage="Last name"/>}  value={form.apPaterno !== '' ? form.apPaterno : ''} onChange={(e) => fillFields('apPaterno', e.target.value)}/>
            <RHFTextField name="apMaterno" label={<FormattedMessage id="textfield.mothers" defaultMessage="Mother's last name (optional)"/>} value={form.apMaterno !== '' ? form.apMaterno : ''} onChange={(e) => fillFields('apMaterno', e.target.value)}/>
        </Stack>
        
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <RHFTextField name="email" label={<FormattedMessage id="textfield.email" defaultMessage="Email address"/>}  value={form.email !== '' ? form.email : ''} onChange={(e) => fillFields('email', e.target.value)}/>
            <RHFTextField name="phone" label={<FormattedMessage id="textfield.phone" defaultMessage="Phone number"/>}  value={form.phone !== '' ? form.phone : ''} onChange={(e) => fillFields('phone', e.target.value)}/>
        </Stack>

        <RHFTextField name="direction" label={<FormattedMessage id="textfield.direction" defaultMessage="Direction"/>} value={form.direction !== '' ? form.direction : ''} onChange={(e) => fillFields('direction', e.target.value)}/>

        <RHFTextField
          name="password"
          label={<FormattedMessage id="textfield.password" defaultMessage="Password"/>}
          type={showPassword ? 'text' : 'password'}
          value={form.password !== '' ? form.password : ''} 
          onChange={(e) => fillFields('password', e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end" onClick={() => setShowPassword(!showPassword)}>
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
          <FormattedMessage id="register.button" defaultMessage="Register"/>
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}
