import React, { useEffect, useState } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, Card, CardActions, CardContent } from '@mui/material';
// components
import Page from '../components/Page';
// sections
import { AppWidgetSummary } from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

var dataPublic = '6';

export default function HomeApp() {
  const theme = useTheme();

  const [publicidad, setPublicidad] = useState("6");
  
  useEffect(() => {
    setTimeout(() => {  changePublicidad(); }, 15000);
  });

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
          Hi, Welcome back
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
            <AppWidgetSummary title="Weekly Sales" total={714000} icon={'ant-design:android-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="New Users" total={1352831} color="info" icon={'ant-design:apple-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Item Orders" total={1723315} color="warning" icon={'ant-design:windows-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Bug Reports" total={234} color="error" icon={'ant-design:bug-filled'} />
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