import React, { useEffect, useState } from 'react';
// @mui
import { Grid, Container, Typography, Card, CardContent } from '@mui/material';
// components
import Page from '../components/Page';
// Api
import { getMetrics } from '../api/metricsApi';
// sections
import { AppWidgetSummary } from '../sections/@dashboard/app';
// Language
import { FormattedMessage } from 'react-intl';

// ----------------------------------------------------------------------

export default function HomeApp() {
  const [publicidad, setPublicidad] = useState("6");
  const [metricsApi, setMetricsApi] = useState(null);
  
  useEffect(() => {
    setTimeout(() => { changePublicidad(); }, 5000);
  });

  useEffect(() => {
    const sessionClient = localStorage.getItem('logClient');
    const jsonClient = JSON.parse(sessionClient);
    if (localStorage.getItem('logClient')) {
        getMetrics(jsonClient.token, loadMetricHandler, loadErrorHandler);
    } else {
        navigate('/login', { replace: true });
    }
  }, []);

    async function loadMetricHandler(response) {
        if (response.ok) {
            var metrics = await response.json();
            setMetricsApi(metrics);
            return;
        }
        if (response.status === 400) {
            const error = await response.text();
            throw new Error(error);
        } else if (response.status === 401) {
            const error = await response.json();
            ActionsNotifications.pushLoadingError(error.message);
        } else if (response.status === 404) {
        const error = await response.json();
        ActionsNotifications.pushLoadingError(error.detail);
        }
        throw new Error("Network response was not ok");
    };

    function loadErrorHandler(error) {};

  function changePublicidad (){
    if (publicidad === "6") {
        setPublicidad("20");
    } if (publicidad === "20") {
        setPublicidad("21");
    } if (publicidad === "21") {
        setPublicidad("6");
    }
  }

  return (
    <Page title="Bookbay">
      <Container maxWidth="xl">
        <Typography variant="h3" sx={{ mb: 5 }} style={{ color: '#2D61F5', fontWeight: 'bold' }}>
            <FormattedMessage id="home.title" defaultMessage="Hi, welcome back!"/>
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={12}>
            <Card>
                <CardContent>
                    <img
                        src={"https://bookbay.duckdns.org/api/v1/images/" + publicidad}
                        alt="anuncio"
                    />
                </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title={<FormattedMessage id="home.clients" defaultMessage="Clients"/>} total={metricsApi !== null ? metricsApi.clients : 0} icon={'mdi:user'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title={<FormattedMessage id="home.books" defaultMessage="Books"/>} total={metricsApi !== null ? metricsApi.books : 0} color="info" icon={'material-symbols:menu-book'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title={<FormattedMessage id="home.editorials" defaultMessage="Editorials"/>} total={metricsApi !== null ? metricsApi.editorials : 0} color="warning" icon={'material-symbols:edit-square'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title={<FormattedMessage id="home.authors" defaultMessage="Authors"/>} total={metricsApi !== null ? metricsApi.authors : 0} color="error" icon={'mdi:user-edit'} />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}