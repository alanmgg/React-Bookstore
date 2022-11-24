import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Button, Typography, Container, Divider, Rating } from '@mui/material';
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

export default function TermsofServices() {
  return (
    <Page title="Terms of Services">
      <Container>
        <ContentStylePopover sx={{ textAlign: 'right', alignItems: 'right' }}>
          <LanguagePopover />
        </ContentStylePopover>

        <ContentStyle sx={{ mb: 7 }}>
          <Typography variant="h3" sx={{ textAlign: 'center', alignItems: 'center' }} paragraph>
            <FormattedMessage id="terms.title" defaultMessage="Terms of services"/>
          </Typography>

          <Divider variant="middle" sx={{ mb: 2 }} />

          <Typography sx={{ color: 'text.secondary', textAlign: 'justify', alignItems: 'justify' }} paragraph>
            <FormattedMessage id="terms.paragraph" defaultMessage="Welcome to Bookbay.store. Commercial Services 
            Bookbay México, S. de R.L. de C.V. and/or its affiliates (Bookbay) offer you website features and 
            other products and services when you visit or shop at Bookbay.store, use Bookbay's products or services, 
            use Bookbay's mobile applications, or use software placed on Bookbay. made available by Bookbay in connection 
            with the foregoing (collectively, the Bookbay Services). Bookbay provides the Bookbay Services to you under 
            the following conditions."/>
          </Typography>
          
          <Typography sx={{ color: 'text.secondary', textAlign: 'justify', alignItems: 'justify' }} paragraph>
            <FormattedMessage id="terms.paragraphtwo" defaultMessage="By using the Bookbay Services, you agree to these 
            terms. We ask you to read them carefully. We offer a wide range of Bookbay Services and sometimes additional 
            conditions may apply. Each time you use any Bookbay Service (for example, Your Profile, Gift Cards, or Bookbay 
            mobile applications) you will also be subject to the particular guidelines, terms and conditions applicable to 
            said Bookbay Service (the General Conditions of services). The General Conditions of the Services will prevail 
            over the Conditions of Use in case of discrepancy between both."/>
          </Typography>

          <Divider variant="middle" sx={{ mb: 2 }} />

          <Typography variant="h4" sx={{ textAlign: 'left', alignItems: 'left' }} paragraph>
            <FormattedMessage id="terms.privacy" defaultMessage="Privacy"/>
          </Typography>

          <Typography sx={{ color: 'text.secondary', textAlign: 'justify', alignItems: 'justify' }} paragraph>
            <FormattedMessage id="terms.privacy.paragraph" defaultMessage="Please review our Privacy Notice, which also governs 
            your use of the Bookbay Services, so that you are aware of our practices."/>
          </Typography>

          <Divider variant="middle" sx={{ mb: 2 }} />

          <Typography variant="h4" sx={{ textAlign: 'left', alignItems: 'left' }} paragraph>
            <FormattedMessage id="terms.electronic" defaultMessage="Electronic communications"/>
          </Typography>

          <Typography sx={{ color: 'text.secondary', textAlign: 'justify', alignItems: 'justify' }} paragraph>
            <FormattedMessage id="terms.electronic.paragraph" defaultMessage="Whenever you use a Bookbay Service or send us email, 
            text messages and other communications from any device, you are communicating with us electronically. You agree to 
            receive communications from us electronically in a variety of ways, including through the following types of data messages: 
            email, text messages, push notifications from our app, or through notices and messages placed on this website or through 
            other websites. Bookbay services, such as our Message Center. You agree that all contracts, notices, messages, and other 
            notices and communications that we send to you by electronic means satisfy any legal requirement in written form and have full 
            legal effect and validity."/>
          </Typography>

          <Divider variant="middle" sx={{ mb: 2 }} />

          <Typography variant="h4" sx={{ textAlign: 'left', alignItems: 'left' }} paragraph>
            <FormattedMessage id="terms.copyright" defaultMessage="Copyright"/>
          </Typography>

          <Typography sx={{ color: 'text.secondary', textAlign: 'justify', alignItems: 'justify' }} paragraph>
            <FormattedMessage id="terms.copyright.paragraph" defaultMessage="All content hosted on or made available through any of the Bookbay 
            Services, such as text, graphics, logos, button icons, images, audio clips, digital downloads, and data compilations are the 
            property of Bookbay or its content providers and is protected by intellectual property laws. All content hosted or made available 
            through any Bookbay Service is the exclusive property of Bookbay and is protected by copyright law."/>
          </Typography>

          <Divider variant="middle" sx={{ mb: 2 }} />

          <Typography variant="h4" sx={{ textAlign: 'left', alignItems: 'left' }} paragraph>
            <FormattedMessage id="terms.brands" defaultMessage="Brands"/>
          </Typography>

          <Typography sx={{ color: 'text.secondary', textAlign: 'justify', alignItems: 'justify' }} paragraph>
            <FormattedMessage id="terms.brands.paragraph" defaultMessage="Additionally, graphics, logos, page headers, button icons, scripts, 
            and service names included in or available through the Bookbay Services are trademarks or represent the trade dress of Bookbay in the 
            United States of Mexico. and other countries. Bookbay's trademarks or trade dress may not be used in connection with any product or 
            service that is not Bookbay's, or in any manner that is likely to cause confusion among users or that disparages or discredits Bookbay. 
            All other trademarks not owned by Bookbay that are included in or available through the Bookbay Services are the property of their respective 
            owners, who may or may not be affiliated with or in any way connected with Bookbay, or sponsored by Bookbay."/>
          </Typography>

          <Divider variant="middle" sx={{ mb: 2 }} />

          <Typography variant="h4" sx={{ textAlign: 'left', alignItems: 'left' }} paragraph>
            <FormattedMessage id="terms.patents" defaultMessage="Patents"/>
          </Typography>

          <Typography sx={{ color: 'text.secondary', textAlign: 'justify', alignItems: 'justify' }} paragraph>
            <FormattedMessage id="terms.patents.paragraph" defaultMessage="Various patents belonging to Bookbay are applicable to the Bookbay Services 
            as well as the functions and services accessible through them. Furthermore, different parts of the Bookbay Services operate under different 
            licenses under one or more patents."/>
          </Typography>

          <Divider variant="middle" sx={{ mb: 2 }} />

          <Typography variant="h4" sx={{ textAlign: 'left', alignItems: 'left' }} paragraph>
            <FormattedMessage id="terms.license" defaultMessage="License and access"/>
          </Typography>

          <Typography sx={{ color: 'text.secondary', textAlign: 'justify', alignItems: 'justify' }} paragraph>
            <FormattedMessage id="terms.license.paragraph" defaultMessage="Subject to your compliance with these Terms of Use and the applicable General 
            Terms and Conditions of Services and payment of the applicable price, if applicable, Bookbay or its content providers grant you a 
            non-exclusive, non-transferable, non-transferable, limited license to sub-licensable, access and use, to the Bookbay Services for personal, 
            non-commercial purposes. This license does not include any right to resell or commercial use of any of the Bookbay Services or their content; 
            any right to compile or use any list of products, descriptions or prices; any right to make any derivative use of the Bookbay Services or its 
            content; to download or copy any account information for the benefit of another business; nor the use of search and data extraction tools or 
            robots or similar. Bookbay and its licensors, suppliers, publishers, rights holders or other content providers reserve any rights that are 
            not expressly included in these Terms of Use or in the General Conditions of Services. The Bookbay Services or any part thereof may not be 
            reproduced, duplicated, copied, sold, resold or otherwise exploited for any commercial purpose, in each case without our prior written consent. 
            You may also not post or use placement techniques to insert any trademark, logo, or other copyrighted information (including images, text, page 
            layouts, or formats) of Bookbay without appropriate prior written consent. The use of meta tags (meta tags) or any other hidden text using 
            Bookbay's names or marks is not permitted without our prior written consent. You may not misuse the Bookbay Services. You are only permitted 
            to use the Bookbay Services in a lawful manner. Any breach by you of these Terms of Use or the General Conditions of Services will result 
            in the termination of the licenses granted by Bookbay."/>
          </Typography>

          <Divider variant="middle" sx={{ mb: 2 }} />

          <Typography variant="h4" sx={{ textAlign: 'left', alignItems: 'left' }} paragraph>
            <FormattedMessage id="terms.account" defaultMessage="Your account"/>
          </Typography>

          <Typography sx={{ color: 'text.secondary', textAlign: 'justify', alignItems: 'justify' }} paragraph>
            <FormattedMessage id="terms.account.paragraph" defaultMessage="You may be required to create and access your own Bookbay account and have a 
            valid payment method associated with your account to use certain Bookbay Services. In the event of a problem with your selected payment method, 
            we may charge any other valid payment method associated with your account. When you use the Bookbay Services, you are responsible for maintaining 
            the confidentiality of your account details and password, as well as for restricting access to your computer and other devices, and you assume 
            responsibility for any activities carried out under your account or using your password."/>
          </Typography>
          
          <Typography sx={{ color: 'text.secondary', textAlign: 'justify', alignItems: 'justify' }} paragraph>
            <FormattedMessage id="terms.account.paragraphtwo" defaultMessage="Bookbay markets products for minors, but sells them to adults, who can purchase 
            them with a credit card or other authorized payment method. If you are under 18 years of age, you may use the Bookbay Services only with the 
            participation and involvement of a parent or guardian."/>
          </Typography>
          
          <Typography sx={{ color: 'text.secondary', textAlign: 'justify', alignItems: 'justify' }} paragraph>
            <FormattedMessage id="terms.account.paragraphthree" defaultMessage="Bookbay reserves the right to terminate accounts, remove or edit content, cancel 
            orders in case of violation of these Conditions of Use, General Conditions of Services or any policy, terms and conditions of Bookbay, third party 
            rights or commission of a crime or any conduct that damages Bookbay's reputation or the customer experience."/>
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
