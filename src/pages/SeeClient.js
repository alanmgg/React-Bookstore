import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { Grid, Container, Typography, Card, Button, CardContent, TextField, Skeleton, Box, Avatar } from '@mui/material';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
// Language
import { FormattedMessage } from 'react-intl';
import Page from '../components/Page';

export default function SaveBook() {
    const navigate = useNavigate();

    const [path, setPath] = useState(null);
    const [clientApi, setClientApi] = useState(null);

    useEffect(() => {
        const sessionClient = localStorage.getItem('logClient');
        const jsonClient = JSON.parse(sessionClient);
        if (localStorage.getItem('logClient')) {
            setClientApi(jsonClient);
            setPath("https://bookbay.duckdns.org/api/v1/images/" + jsonClient.id_image);
        } else {
            navigate('/login', { replace: true });
        }
        // eslint-disable-next-line
    }, []);

    return (
        <Page title="Bookbay | See client">
            <Container maxWidth="xl">
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6} lg={10}>
                        <Typography variant="h3" sx={{ mb: 3 }} style={{ color: '#2D61F5', fontWeight: 'bold' }}>
                            <FormattedMessage id="profile.title" defaultMessage="Profile"/>
                        </Typography>
                    </Grid>
                    
                    <Grid item xs={12} md={6} lg={2}>
                        <Button variant="contained" color="secondary" component="label" startIcon={<ArrowBackRoundedIcon />} style={{ display: 'flex' }} 
                        onClick={() => navigate('/', { replace: true })}>
                            <FormattedMessage id="buttons.back" defaultMessage="Back"/>
                        </Button>
                    </Grid>
                </Grid>
  
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6} lg={4}>
                        <Card>
                            <CardContent>
                                {path !== null ? <Avatar src={path} sx={{ width: 300, height: 300, display: 'flex', alignItems: 'center', margin: 'auto' }} /> :
                                <Box>
                                    <Skeleton variant="circular" width={300} height={300} sx={{ display: 'flex', alignItems: 'center', margin: 'auto' }}>
                                        <Avatar />
                                    </Skeleton>
                                </Box>}
                            </CardContent>
                        </Card>
                    </Grid>
            
                    <Grid item xs={12} md={6} lg={8}>
                        <Card>
                            <CardContent>
                                <TextField disabled label={<FormattedMessage id="textfield.names" defaultMessage="Names"/>} color="secondary" sx={{ mb: 2, mr: 3 }} value={clientApi !== null ? clientApi.nombre : ''} />
                                <TextField disabled label={<FormattedMessage id="textfield.last" defaultMessage="Last name"/>} color="secondary" sx={{ mb: 2, mr: 3 }} value={clientApi !== null ? clientApi.ap_paterno : ''} />
                                <TextField disabled label={<FormattedMessage id="textfield.mothers" defaultMessage="Mother's last name (optional)"/>} color="secondary" sx={{ mb: 2 }} value={clientApi !== null ? clientApi.ap_materno : ''} />

                                <TextField fullWidth disabled label={<FormattedMessage id="textfield.direction" defaultMessage="Direction"/>} color="secondary" sx={{ mb: 2 }} value={clientApi !== null ? clientApi.direccion : ''} />
                                <TextField fullWidth disabled label={<FormattedMessage id="textfield.email" defaultMessage="Email address"/>} color="secondary" sx={{ mb: 2 }} value={clientApi !== null ? clientApi.email : ''} />

                                <TextField fullWidth disabled label={<FormattedMessage id="textfield.role" defaultMessage="Role"/>} color="secondary" sx={{ mb: 2 }} value={clientApi !== null ? clientApi.role : ''} />
                                <TextField fullWidth disabled label={<FormattedMessage id="textfield.phone" defaultMessage="Phone number"/>} color="secondary" sx={{ mb: 2 }} value={clientApi !== null ? clientApi.telefono : ''} />
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Page>
    );
}