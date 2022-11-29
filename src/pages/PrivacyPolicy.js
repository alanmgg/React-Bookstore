import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Button, Typography, Container, Divider, Rating } from '@mui/material';
import LensIcon from '@mui/icons-material/Lens';
// components
import Page from '../components/Page';
// LanguagePopover
import LanguagePopover from '../layouts/dashboard/LanguagePopover';
// Language
import { FormattedMessage } from 'react-intl';

// ----------------------------------------------------------------------

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 960,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(0, 0)
}));

const ContentStylePopover = styled('div')(({ theme }) => ({
    maxWidth: 960,
    margin: 'auto',
    justifyContent: 'right',
    padding: theme.spacing(6, 0)
}));

// ----------------------------------------------------------------------

export default function PrivacyPolicy() {
  return (
    <Page title="Privacy Policy">
      <Container>
        <ContentStylePopover sx={{ textAlign: 'right', alignItems: 'right' }}>
          <LanguagePopover />
        </ContentStylePopover>

        <ContentStyle sx={{ mb: 7 }}>
          <Typography variant="h3" sx={{ textAlign: 'center', alignItems: 'center' }} paragraph>
            <FormattedMessage id="privacy.title" defaultMessage="Privacy Policy"/>
          </Typography>

          <Divider variant="middle" sx={{ mb: 2 }} />

          <Typography sx={{ color: 'text.secondary', textAlign: 'justify', alignItems: 'justify' }} paragraph>
            <FormattedMessage id="privacy.paragraph" defaultMessage="We understand how important it is for you to know how 
            we use your personal data, and we appreciate your trust that we will do so carefully and sensibly. This Privacy 
            Notice describes the way in which Servicios Comerciales Bookbay México, S. de R.L. de C.V., and its affiliates 
            (collectively Bookbay) collect and process your personal data through Bookbay websites, devices, products, 
            services, online stores and applications that reference this Privacy Notice (collectively Services of Bookbay). 
            By using the Bookbay Services, you are consenting to the practices described in this Privacy Notice."/>
          </Typography>
          
          <Typography sx={{ color: 'text.secondary', textAlign: 'justify', alignItems: 'justify' }} paragraph>
            <FormattedMessage id="privacy.paragraphtwo" defaultMessage="If you have questions about how we collect and use your 
            personal data or about this privacy notice, please contact us. Our contact details are: 
            protecciondedatos@bookbay.store.mx"/>
          </Typography>
          
          <Typography sx={{ color: 'text.secondary', textAlign: 'justify', alignItems: 'justify' }} paragraph>
            <FormattedMessage id="privacy.paragraphthree" defaultMessage="If you have questions about your account or your orders, 
            please contact Customer Service by sending an email to the following address: primary@bookbay.store.mx."/>
          </Typography>

          <Divider variant="middle" sx={{ mb: 2 }} />

          <Typography variant="h4" sx={{ textAlign: 'left', alignItems: 'left' }} paragraph>
            <FormattedMessage id="privacy.personaldata" defaultMessage="What personal data about customers does Bookbay collect?"/>
          </Typography>

          <Typography sx={{ color: 'text.secondary', textAlign: 'justify', alignItems: 'justify' }} paragraph>
            <FormattedMessage id="privacy.personaldata.paragraph" defaultMessage="We collect your personal data in order to provide 
            and continually improve our products and services. These are the types of personal data we collect:"/>
          </Typography>
          
          <Typography sx={{ color: 'text.secondary', textAlign: 'justify', alignItems: 'justify' }} paragraph>
            <LensIcon sx={{ fontSize: 10 }} /> <FormattedMessage id="privacy.personaldata.list" defaultMessage="Data you provide to 
            us: We receive and store any data you provide to us in connection with the bookbay services. You can choose not to provide 
            certain data, however you may not be able to take advantage of many of our bookbay services."/>
          </Typography>
          
          <Typography sx={{ color: 'text.secondary', textAlign: 'justify', alignItems: 'justify' }} paragraph>
            <LensIcon sx={{ fontSize: 10 }} /> <FormattedMessage id="privacy.personaldata.listtwo" defaultMessage="Automatic Data: We
            automatically collect and store certain types of data about your use of the bookbay services, including data about your
            interaction with the content and services available through the bookbay services. As with many sites, we use cookies and
            other identifiers, where we obtain certain types of information when your browser or device accesses bookbay services and
            other content served by or on behalf of bookbay on other websites."/>
          </Typography>
          
          <Typography sx={{ color: 'text.secondary', textAlign: 'justify', alignItems: 'justify' }} paragraph>
            <LensIcon sx={{ fontSize: 10 }} /> <FormattedMessage id="privacy.personaldata.listthree" defaultMessage="Data from Other Sources:
            We may receive data about you from other sources, such as updated delivery and address information from our carriers, which we
            use to correct our records and more easily deliver your next purchase."/>
          </Typography>

          <Divider variant="middle" sx={{ mb: 2 }} />

          <Typography variant="h4" sx={{ textAlign: 'left', alignItems: 'left' }} paragraph>
            <FormattedMessage id="privacy.purposes" defaultMessage="For what purposes does Bookbay use your personal data?"/>
          </Typography>

          <Typography sx={{ color: 'text.secondary', textAlign: 'justify', alignItems: 'justify' }} paragraph>
            <FormattedMessage id="privacy.purposes.paragraph" defaultMessage="We use your personal data to operate, provide, develop and improve
            the products and services we offer to our customers. Primary purposes include:"/>
          </Typography>
          
          <Typography sx={{ color: 'text.secondary', textAlign: 'justify', alignItems: 'justify' }} paragraph>
            <LensIcon sx={{ fontSize: 10 }} /> <FormattedMessage id="privacy.purposes.list" defaultMessage="Purchase and delivery of products and
            services. We use your personal data to take and handle orders, deliver products and services, process payments, and to communicate with
            you about orders, products and services, and promotional offers."/>
          </Typography>
          
          <Typography sx={{ color: 'text.secondary', textAlign: 'justify', alignItems: 'justify' }} paragraph>
            <LensIcon sx={{ fontSize: 10 }} /> <FormattedMessage id="privacy.purposes.listtwo" defaultMessage="Provide, troubleshoot and improve the
            Bookbay Services. We use your personal data to provide functionality, analyze performance, fix errors, and improve the usability and
            effectiveness of the Bookbay Services."/>
          </Typography>
          
          <Typography sx={{ color: 'text.secondary', textAlign: 'justify', alignItems: 'justify' }} paragraph>
            <LensIcon sx={{ fontSize: 10 }} /> <FormattedMessage id="privacy.purposes.listthree" defaultMessage="Recommendations and customization. We
            use your personal data to recommend products and services that may be of interest to you, identify your preferences, and personalize your
            experience with the Bookbay Services."/>
          </Typography>
          
          <Typography sx={{ color: 'text.secondary', textAlign: 'justify', alignItems: 'justify' }} paragraph>
            <LensIcon sx={{ fontSize: 10 }} /> <FormattedMessage id="privacy.purposes.listfour" defaultMessage="Comply with our legal obligations. In some
            cases, we collect and use your personal data to comply with applicable laws."/>
          </Typography>
          
          <Typography sx={{ color: 'text.secondary', textAlign: 'justify', alignItems: 'justify' }} paragraph>
            <LensIcon sx={{ fontSize: 10 }} /> <FormattedMessage id="privacy.purposes.listfive" defaultMessage="Comply with our legal obligations. In some
            cases, we collect and use your personal data to comply with applicable laws."/>
          </Typography>
          
          <Typography sx={{ color: 'text.secondary', textAlign: 'justify', alignItems: 'justify' }} paragraph>
            <LensIcon sx={{ fontSize: 10 }} /> <FormattedMessage id="privacy.purposes.listsix" defaultMessage="Communicate with you. We use your personal
            data to communicate with you in relation to the Bookbay Services through different channels (for example, by phone, email, chat)."/>
          </Typography>
          
          <Typography sx={{ color: 'text.secondary', textAlign: 'justify', alignItems: 'justify' }} paragraph>
            <LensIcon sx={{ fontSize: 10 }} /> <FormattedMessage id="privacy.purposes.listseven" defaultMessage="Fraud Prevention and Credit Risks. We use
            personal data to prevent and detect fraud and abuse in order to protect the safety of our customers, Bookbay and others. We may also use scoring
            methods to assess and manage credit risks."/>
          </Typography>
          
          <Typography sx={{ color: 'text.secondary', textAlign: 'justify', alignItems: 'justify' }} paragraph>
            <LensIcon sx={{ fontSize: 10 }} /> <FormattedMessage id="privacy.purposes.listeight" defaultMessage="Verify your identity."/>
          </Typography>

          <Typography sx={{ color: 'text.secondary', textAlign: 'justify', alignItems: 'justify' }} paragraph>
            <FormattedMessage id="privacy.purposes.paragraphtwo" defaultMessage="Additionally, we may use your personal data for the following secondary
            purposes:"/>
          </Typography>
          
          <Typography sx={{ color: 'text.secondary', textAlign: 'justify', alignItems: 'justify' }} paragraph>
            <LensIcon sx={{ fontSize: 10 }} /> <FormattedMessage id="privacy.purposes.listnine" defaultMessage="Advertising. We use your personal data to
            display interest-based advertisements for features, products and services that may be of interest to you. We do not use personally identifiable
            data to display interest-based ads."/>
          </Typography>
          
          <Typography sx={{ color: 'text.secondary', textAlign: 'justify', alignItems: 'justify' }} paragraph>
            <LensIcon sx={{ fontSize: 10 }} /> <FormattedMessage id="privacy.purposes.listten" defaultMessage="Marketing. We use your personal data to send
            you emails or other communications about features, products and services that may be of interest to you. If you do not wish to receive emails or
            other communications from us, please adjust your Customer Communication Preferences."/>
          </Typography>

          <Divider variant="middle" sx={{ mb: 2 }} />

          <Typography variant="h4" sx={{ textAlign: 'left', alignItems: 'left' }} paragraph>
            <FormattedMessage id="privacy.cookies" defaultMessage="What about Cookies and other Identifiers?"/>
          </Typography>

          <Typography sx={{ color: 'text.secondary', textAlign: 'justify', alignItems: 'justify' }} paragraph>
            <FormattedMessage id="terms.cookies.paragraph" defaultMessage="To enable our systems to recognize your browser or device and to provide and improve
            the Bookbay Services, we use cookies and other identifiers."/>
          </Typography>

          <Divider variant="middle" sx={{ mb: 2 }} />

          <Typography variant="h4" sx={{ textAlign: 'left', alignItems: 'left' }} paragraph>
            <FormattedMessage id="privacy.share" defaultMessage="Does Bookbay share your Personal Data?"/>
          </Typography>

          <Typography sx={{ color: 'text.secondary', textAlign: 'justify', alignItems: 'justify' }} paragraph>
            <FormattedMessage id="privacy.share.paragraph" defaultMessage="The information related to our clients is a fundamental part of our business and we do
            not participate in the sale to third parties of personal data of our clients. We share customers' personal data only in the ways described below with
            Bookbay.store, Inc. and subsidiaries under the control of Bookbay.store, Inc., which are subject to this Privacy Notice or follow practices to the
            least as protective as those described in this Privacy Notice."/>
          </Typography>
          
          <Typography sx={{ color: 'text.secondary', textAlign: 'justify', alignItems: 'justify' }} paragraph>
            <LensIcon sx={{ fontSize: 10 }} /> <FormattedMessage id="privacy.share.list" defaultMessage="Third Party Service Providers: We employ other companies and
            individuals to perform services on our behalf. For example, fulfilling orders for products or services, delivering packages, sending postal mail and email,
            removing repetitive information from customer lists, analyzing data, providing marketing assistance, providing search results and links (including links
            and mailing lists). payment) process payments, transmit content, rate, assess and manage credit risk and provide customer service. These third party service
            providers have access to certain personal data necessary to perform their functions, but may not use it for other purposes."/>
          </Typography>
          
          <Typography sx={{ color: 'text.secondary', textAlign: 'justify', alignItems: 'justify' }} paragraph>
            <LensIcon sx={{ fontSize: 10 }} /> <FormattedMessage id="privacy.share.listtwo" defaultMessage="Business Transfer: As we develop our business, we may buy or
            sell other businesses or services. In such transactions, customer personal data is typically one of the transferred business assets; however, said data will
            in any case be subject to the commitments acquired in this pre-existing Privacy Notice (unless, of course, the client authorizes it otherwise). Of course,
            in the unlikely event that Bookbay.store, or most of its assets are acquired, personal data relating to customers would be one of the transferred assets.
            With your consent to this Privacy Notice, you agree to share your information in accordance with this Privacy Notice for the purposes mentioned in this paragraph."/>
          </Typography>
          
          <Typography sx={{ color: 'text.secondary', textAlign: 'justify', alignItems: 'justify' }} paragraph>
            <LensIcon sx={{ fontSize: 10 }} /> <FormattedMessage id="privacy.share.listthree" defaultMessage="Protection of Bookbay and Others: We disclose personal data and
            account data when we believe disclosure is necessary for compliance with the law, to enforce or apply the Terms of Use and other agreements, or to protect the rights,
            property, or safety of Bookbay, our users or third parties. The foregoing includes the exchange of information with other companies and organizations for protection
            against fraud and credit risk reduction."/>
          </Typography>

          <Rating name="half-rating" defaultValue={3} precision={0.5} />

          <Button to="/" size="medium" variant="contained" component={RouterLink} sx={{ mt: 2 }}>
            <FormattedMessage id="buttons.backtohome" defaultMessage="Back to home"/>
          </Button>
        </ContentStyle>
      </Container>
    </Page>
  );
}