import React, { useEffect, useState } from 'react';
// @mui
import { Grid, Container, Typography, Card, Button, CardContent } from '@mui/material';
// components
import Page from '../components/Page';
// Api
import { savePortada, updatePathImage } from '../api/booksApi'
// Notifications
import ActionsNotifications from '../components/ActionsNotifications';

export default function SaveBook() {
    const [path, setPath] = useState("https://bookbay.duckdns.org/api/v1/images/22");

    const sleep = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    );

    async function handleFileChange(file) {
        savePortada(file[0], loadPortadaHandler, loadErrorHandler);
        updatePathImage(file[0].name, loadPathHandler, loadErrorHandler);
        await sleep(1500);
        setPath("https://bookbay.duckdns.org/api/v1/images/2");
        ActionsNotifications.pushSuccess('Cover successfully uploaded');
    }

    async function loadPortadaHandler(response) {
        if (response.ok) {
            res = await response.json();
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
    }
    
    async function loadPathHandler(response) {
        if (response.ok) {
            res = await response.json();
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
    }

    function loadErrorHandler(error) {

    }

    return (
        <Page title="Bookbay | Save book">
            <Container maxWidth="xl">
                <Typography variant="h3" sx={{ mb: 5 }} style={{ color: '#2D61F5', fontWeight: 'bold' }}>
                    Hi, Welcome back
                </Typography>
  
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6} lg={4}>
                        <Card>
                            <CardContent>
                                <img
                                    src={path}
                                    alt="portada_white"
                                />

                                <Button variant="contained" component="label" sx={{ mt: 3 }} style={{ display: 'flex' }} onClick={() => setPath("https://bookbay.duckdns.org/api/v1/images/22")} onChange={(e) => handleFileChange(e.target.files)}>
                                    Upload
                                    <input hidden accept="image/*" multiple type="file" />
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
            
                    <Grid item xs={12} md={6} lg={8}>
                        <Card>
                            <CardContent>
                                
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Page>
    );
}