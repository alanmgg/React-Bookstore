import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// @mui
import { Grid, Container, Typography, Card, Button, CardContent, TextField, Select, MenuItem, Skeleton, Box } from '@mui/material';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import Page from '../components/Page';
// Api
import { getBook } from '../api/booksApi';
// Notifications
import ActionsNotifications from '../components/ActionsNotifications';
// Language
import { FormattedMessage } from 'react-intl';

export default function SaveBook() {
    const navigate = useNavigate();
    const { bookId } = useParams();

    const [path, setPath] = useState(null);
    const [formBook, setFormBook] = useState({ nameBook: '', isbn10: 0, isbn13: 0, year: 0, pages: 0, price: 0, stock: 0, state: 'N', resenia: '',
    nameAuthor: '', apPaterno: '', apMaterno: '', countryAuthor: '', nameEditorial: '', countryEditorial: '', type: '' });
    const [token, setToken] = useState("");

    useEffect(() => {
        if (token === "") {
            var objectJson = JSON.parse(localStorage.getItem('logClient'));
            setToken(objectJson.token);
        }
    }, []);
    
    useEffect(() => {
        if (token !== "") {
            getBook(token, bookId, loadBookHandler, loadErrorHandler);
        }
    }, [token]);

    async function loadBookHandler(response) {
        if (response.ok) {
            var res = await response.json();
            setPath("https://bookbay.duckdns.org/api/v1/images/" + res.image);
            setFormBook(res);
            ActionsNotifications.pushSuccess('Successful data collection');
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
        <Page title="Bookbay | See book">
            <Container maxWidth="xl">
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6} lg={10}>
                        <Typography variant="h3" sx={{ mb: 3 }} style={{ color: '#2D61F5', fontWeight: 'bold' }}>
                            <FormattedMessage id="seebook.title" defaultMessage="Book data"/>
                        </Typography>
                    </Grid>
                    
                    <Grid item xs={12} md={6} lg={2}>
                        <Button variant="contained" color="secondary" component="label" startIcon={<ArrowBackRoundedIcon />} style={{ display: 'flex' }} 
                        onClick={() => navigate('/books', { replace: true })}>
                            <FormattedMessage id="buttons.back" defaultMessage="Back"/>
                        </Button>
                    </Grid>
                </Grid>
  
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6} lg={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" sx={{ mb: 2 }} style={{ color: '#2D61F5', fontWeight: 'bold' }}>
                                    <FormattedMessage id="newbook.cover" defaultMessage="Book cover"/>
                                </Typography>

                                {path !== null ? <img src={path} alt="cover"/>
                                :
                                <Box sx={{ width: 325 }}>
                                    <Skeleton height={50}/>
                                    <Skeleton animation="wave" height={50}/>
                                    <Skeleton animation="wave" height={50}/>
                                    <Skeleton animation={false} height={50}/>
                                </Box>}
                            </CardContent>
                        </Card>
                    </Grid>
            
                    <Grid item xs={12} md={6} lg={8}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" sx={{ mb: 2 }} style={{ color: '#2D61F5', fontWeight: 'bold' }}>
                                    <FormattedMessage id="newbook.book" defaultMessage="Book"/>
                                </Typography>

                                <TextField fullWidth disabled label={<FormattedMessage id="textfield.namebook" defaultMessage="Name of the book"/>} color="secondary" sx={{ mb: 2 }} value={formBook.nameBook !== '' ? formBook.nameBook : ''} />
                                <TextField disabled label="ISBN-10" color="secondary" type="number" sx={{ mb: 2, mr: 3 }} value={formBook.isbn10 !== 0 ? formBook.isbn10 : ''} />
                                <TextField disabled label="ISBN-13" color="secondary" type="number" sx={{ mb: 2, mr: 3 }} value={formBook.isbn13 !== 0 ? formBook.isbn13 : ''} />
                                <TextField disabled label={<FormattedMessage id="textfield.year" defaultMessage="Year"/>} color="secondary" type="number" sx={{ mb: 2 }} value={formBook.year !== 0 ? formBook.year : ''} />
                                <TextField disabled label={<FormattedMessage id="textfield.pages" defaultMessage="Number of pages"/>} color="secondary" type="number" sx={{ mb: 2, mr: 3 }} value={formBook.pages !== 0 ? formBook.pages : ''} />
                                <TextField disabled label={<FormattedMessage id="textfield.price" defaultMessage="Price"/>} color="secondary" type="number" sx={{ mb: 2, mr: 3 }} value={formBook.price !== 0 ? formBook.price : ''} />
                                <TextField disabled label="Stock" color="secondary" type="number" sx={{ mb: 2 }} value={formBook.stock !== 0 ? formBook.stock : ''} />
                                <Select fullWidth disabled label="State" color="secondary" sx={{ mb: 2 }} value={formBook.state !== '' ? formBook.state : 'N'}>
                                    <MenuItem value={'N'}><FormattedMessage id="textfield.new" defaultMessage="New"/></MenuItem>
                                    <MenuItem value={'U'}><FormattedMessage id="textfield.used" defaultMessage="Used"/></MenuItem>
                                </Select>
                                <TextField fullWidth disabled label={<FormattedMessage id="textfield.bookreview" defaultMessage="Book review"/>} color="secondary" multiline rows={6} sx={{ mb: 2 }} value={formBook.resenia !== '' ? formBook.resenia : ''} />

                                <Typography variant="h6" sx={{ mb: 2 }} style={{ color: '#2D61F5', fontWeight: 'bold' }}>
                                    <FormattedMessage id="newbook.author" defaultMessage="Author"/>
                                </Typography>

                                <TextField disabled label={<FormattedMessage id="textfield.names" defaultMessage="Names"/>} color="secondary" sx={{ mb: 2, mr: 3 }} value={formBook.nameAuthor !== '' ? formBook.nameAuthor : ''} />
                                <TextField disabled label={<FormattedMessage id="textfield.last" defaultMessage="Last name"/>} color="secondary" sx={{ mb: 2, mr: 3 }} value={formBook.apPaterno !== '' ? formBook.apPaterno : ''} />
                                <TextField disabled label={<FormattedMessage id="textfield.mothers" defaultMessage="Mother's last name (optional)"/>} color="secondary" sx={{ mb: 2 }} value={formBook.apMaterno !== '' ? formBook.apMaterno : ''} />
                                <TextField fullWidth disabled label={<FormattedMessage id="textfield.country" defaultMessage="Country"/>} color="secondary" sx={{ mb: 2 }} value={formBook.countryAuthor !== '' ? formBook.countryAuthor : ''} />

                                <Typography variant="h6" sx={{ mb: 2 }} style={{ color: '#2D61F5', fontWeight: 'bold' }}>
                                    <FormattedMessage id="newbook.publisher" defaultMessage="Publisher"/>
                                </Typography>

                                <TextField fullWidth disabled label={<FormattedMessage id="textfield.namepublisher" defaultMessage="Publisher's name"/>} color="secondary" sx={{ mb: 2 }} value={formBook.nameEditorial !== '' ? formBook.nameEditorial : ''} />
                                <TextField fullWidth disabled label={<FormattedMessage id="textfield.country" defaultMessage="Country"/>} color="secondary" sx={{ mb: 2 }} value={formBook.countryEditorial !== '' ? formBook.countryEditorial : ''} />

                                <Typography variant="h6" sx={{ mb: 2 }} style={{ color: '#2D61F5', fontWeight: 'bold' }}>
                                    <FormattedMessage id="newbook.category" defaultMessage="Category"/>
                                </Typography>

                                <TextField fullWidth disabled label={<FormattedMessage id="textfield.type" defaultMessage="Type"/>} color="secondary" sx={{ mb: 2 }} value={formBook.type !== '' ? formBook.type : ''} />
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Page>
    );
}