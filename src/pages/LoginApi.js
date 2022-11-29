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
import LoginForm from '../components/login/LoginForm';
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

export default function Login() {
  const smUp = useResponsive('up', 'sm');

  const mdUp = useResponsive('up', 'md');

  return (
    <Page title="Login">
      <RootStyle>
        <HeaderStyle>
          <Logo />

          {smUp && (
            <Typography variant="body2" sx={{ mt: { md: -2 } }}>
              <FormattedMessage id="login.dontAccount" defaultMessage="Don’t have an account?"/> {''}
              <Link variant="subtitle2" component={RouterLink} to="/register" sx={{ pr: 5 }}>
                <FormattedMessage id="login.getStarted" defaultMessage="Get started"/>
              </Link>

              <LanguagePopover />
            </Typography>
          )}
        </HeaderStyle>

        {mdUp && (
          <SectionStyle>
            <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
              <FormattedMessage id="login.title" defaultMessage="Hi, welcome back"/>
            </Typography>
            <img src="/static/illustrations/login.png" alt="login" />
          </SectionStyle>
        )}

        <Container maxWidth="sm">
          <ContentStyle>
            <Typography variant="h4" gutterBottom>
              <FormattedMessage id="login.subtitle" defaultMessage="Sign in to Bookbay"/>
            </Typography>

            <Typography sx={{ color: 'text.secondary', mb: 5 }}>
              <FormattedMessage id="login.enterDetails" defaultMessage="Enter your details below"/>
            </Typography>

            <LoginForm />

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
              <Typography variant="body2" align="center" sx={{ mt: 3 }}>
                <FormattedMessage id="login.dontAccount" defaultMessage="Don’t have an account?"/>{' '}
                <Link variant="subtitle2" component={RouterLink} to="/register">
                  <FormattedMessage id="login.getStarted" defaultMessage="Get started"/>
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