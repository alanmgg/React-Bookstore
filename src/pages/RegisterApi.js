import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Card, Link, Container, Typography } from '@mui/material';
// hooks
import useResponsive from '../hooks/useResponsive';
// components
import Page from '../components/Page';
import Logo from '../components/Logo';
// sections
import RegisterForm from '../components/register/RegisterForm';
// LanguagePopover
import LanguagePopover from '../layouts/dashboard/LanguagePopover';
// Language
import { FormattedMessage } from 'react-intl';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const HeaderStyle = styled('header')(({ theme }) => ({
  top: 0,
  zIndex: 9,
  lineHeight: 0,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  padding: theme.spacing(3),
  justifyContent: 'space-between',
  [theme.breakpoints.up('md')]: {
    alignItems: 'flex-start',
    padding: theme.spacing(7, 5, 0, 7),
  },
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 464,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2, 0, 2, 2),
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function Register() {
  const smUp = useResponsive('up', 'sm');

  const mdUp = useResponsive('up', 'md');

  return (
    <Page title="Register">
      <RootStyle>
        <HeaderStyle>
          <Logo />
          {smUp && (
            <Typography variant="body2" sx={{ mt: { md: -2 } }}>
                <FormattedMessage id="register.alreadyAccount" defaultMessage="Already have an account? "/>
              <Link variant="subtitle2" component={RouterLink} to="/login" sx={{ pr: 5 }}>
               <FormattedMessage id="register.login" defaultMessage="Login"/>
              </Link>
              
              <LanguagePopover />
            </Typography>
          )}
        </HeaderStyle>

        {mdUp && (
          <SectionStyle>
            <Typography variant="h3" sx={{ px: 5, mt: 0, mb: 5 }}>
                <FormattedMessage id="register.title" defaultMessage="Join to the community!"/>
            </Typography>
            <img alt="register" src="/static/illustrations/register.png" />
          </SectionStyle>
        )}

        <Container>
          <ContentStyle>
            <Typography variant="h4" gutterBottom>
              <FormattedMessage id="register.subtitle" defaultMessage="Create a new account"/>
            </Typography>

            <Typography sx={{ color: 'text.secondary', mb: 5 }}>
              <FormattedMessage id="register.free" defaultMessage="It's totally free"/>
            </Typography>

            <RegisterForm />

            <Typography variant="body2" align="center" sx={{ color: 'text.secondary', mt: 3 }}>
              <FormattedMessage id="register.privacy" defaultMessage="By registering you agree to the "/>
              <Link underline="always" color="text.primary" href="/terms-of-services">
                <FormattedMessage id="register.terms" defaultMessage="Terms of services "/>
              </Link>
                <FormattedMessage id="register.and" defaultMessage=" and "/>
              <Link underline="always" color="text.primary" href="/privacy-policy">
                <FormattedMessage id="register.policy" defaultMessage="Privacy Policy "/>
              </Link>
              .
            </Typography>          

            {!smUp && (
              <>
                <Typography variant="body2" sx={{ mt: 3, textAlign: 'center' }}>
                  Already have an account?{' '}
                  <Link variant="subtitle2" to="/login" component={RouterLink}>
                    Login
                  </Link>

                </Typography>

                <Typography variant="body2" sx={{ mt: 2, textAlign: 'center' }}>
                  <LanguagePopover />
                </Typography>
              </>
            )}

          </ContentStyle>
        </Container>
      </RootStyle>
    </Page>
  );
}
