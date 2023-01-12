import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { Grid, Container, Typography, Card, Button, CardContent, TextField, Select, MenuItem, Skeleton, Box } from '@mui/material';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import PhotoCameraRoundedIcon from '@mui/icons-material/PhotoCameraRounded';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import Page from '../components/Page';
// Api
import { savePortada, savePortadaBooks, updatePathImage, createPathImage, createLibro  } from '../api/booksApi';
// Notifications
import ActionsNotifications from '../components/ActionsNotifications';
// Language
import { FormattedMessage } from 'react-intl';

export default function SaveBook() {
    const navigate = useNavigate();

    const [path, setPath] = useState(null);
    const [picture, setPicture] = useState(null);
    const [formBook, setFormBook] = useState({ nameBook: '', isbn10: 0, isbn13: 0, year: 0, pages: 0, price: 0, stock: 0, state: 'N', resenia: '' });
    const [formAuthor, setFormAuthor] = useState({ nameAuthor: '', apPaterno: '', apMaterno: '', countryAuthor: '' });
    const [formEditorial, setFormEditorial] = useState({ nameEditorial: '', countryEditorial: '' });
    const [formCategory, setFormCategory] = useState({ type: '' });
    const [formPath, setFormPath] = useState({ path: '' });
    const [token, setToken] = useState("");

    useEffect(() => {
        if (token === "") {
            var objectJson = JSON.parse(localStorage.getItem('logClient'));
            setToken(objectJson.token);
        }
    }, []);

    const sleep = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    );

    async function handleFileChange(file) {
        savePortada(file[0], loadPortadaHandler, loadErrorHandler);
        updatePathImage(file[0].name, loadPathHandler, loadErrorHandler);
        setPicture(file[0]);
        setFormPath({ ...formPath, path: "/images/books/" + file[0].name });
        await sleep(1000);
        setPath("https://bookbay.duckdns.org/api/v1/images/2");
    }

    async function submitData() {
        savePortadaBooks(picture, loadPortadaBookHandler, loadErrorHandler);
        createPathImage(formPath, loadPathHandler, loadErrorHandler);
        await sleep(1000);
        createLibro(token, formBook, formAuthor, formEditorial, formCategory, formPath, loadBookHandler, loadErrorHandler);
    }

    async function loadPortadaHandler(response) {
        if (response.ok) {
            var res = await response.json();
            ActionsNotifications.pushSuccess('Cover successfully uploaded');
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
    
    async function loadPortadaBookHandler(response) {
        if (response.ok) {
            var res = await response.json();
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
            var res = await response.json();
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

    async function loadBookHandler(response) {
        if (response.ok) {
            var res = await response.json();
            ActionsNotifications.pushSuccess('Book created successfully');
            setPath(null);
            setPicture(null);
            setFormBook({ nameBook: '', isbn10: 0, isbn13: 0, year: 0, pages: 0, price: 0, stock: 0, state: 'N', resenia: '' });
            setFormAuthor({ nameAuthor: '', apPaterno: '', apMaterno: '', countryAuthor: '' });
            setFormEditorial({ nameEditorial: '', countryEditorial: '' });
            setFormCategory({ type: '' });
            setFormPath({ path: '' });
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

    function fillFields(type, data) {
        switch (type) {
          case 'nameBook':
            setFormBook({ ...formBook, nameBook: data });
            break;
          case 'isbn10':
            setFormBook({ ...formBook, isbn10: parseInt(data, 10) });
            break;
          case 'isbn13':
            setFormBook({ ...formBook, isbn13: parseInt(data, 10) });
            break;
          case 'year':
            setFormBook({ ...formBook, year: parseInt(data, 10) });
            break;
          case 'pages':
            setFormBook({ ...formBook, pages: parseInt(data, 10) });
            break;
          case 'price':
            setFormBook({ ...formBook, price: parseInt(data, 10) });
            break;
          case 'stock':
            setFormBook({ ...formBook, stock: parseInt(data, 10) });
            break;
          case 'state':
            setFormBook({ ...formBook, state: data });
            break;
          case 'resenia':
            setFormBook({ ...formBook, resenia: data });
            break;
          case 'nameAuthor':
            setFormAuthor({ ...formAuthor, nameAuthor: data });
            break;
          case 'apPaterno':
            setFormAuthor({ ...formAuthor, apPaterno: data });
            break;
          case 'apMaterno':
            setFormAuthor({ ...formAuthor, apMaterno: data });
            break;
          case 'countryAuthor':
            setFormAuthor({ ...formAuthor, countryAuthor: data });
            break;
          case 'nameEditorial':
            setFormEditorial({ ...formEditorial, nameEditorial: data });
            break;
          case 'countryEditorial':
            setFormEditorial({ ...formEditorial, countryEditorial: data });
            break;
          case 'type':
            setFormCategory({ ...formCategory, type: data });
            break;
          default:
            break;
        }
      }

    return (
        <Page title="Bookbay | Save book">
            <Container maxWidth="xl">
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6} lg={10}>
                        <Typography variant="h3" sx={{ mb: 3 }} style={{ color: '#2D61F5', fontWeight: 'bold' }}>
                            <FormattedMessage id="newbook.title" defaultMessage="New book"/>
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

                                <Button variant="contained" color="secondary" component="label" endIcon={<PhotoCameraRoundedIcon />} sx={{ mt: 3 }} style={{ display: 'flex' }} onClick={() => setPath(null)} onChange={(e) => handleFileChange(e.target.files)}>
                                    <FormattedMessage id="buttons.upload" defaultMessage="Upload"/>
                                    <input hidden accept="image/*" multiple type="file" />
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
            
                    <Grid item xs={12} md={6} lg={8}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" sx={{ mb: 2 }} style={{ color: '#2D61F5', fontWeight: 'bold' }}>
                                    <FormattedMessage id="newbook.book" defaultMessage="Book"/>
                                </Typography>

                                <TextField fullWidth label={<FormattedMessage id="textfield.namebook" defaultMessage="Name of the book"/>} color="secondary" sx={{ mb: 2 }} value={formBook.nameBook !== '' ? formBook.nameBook : ''} onChange={(e) => fillFields('nameBook', e.target.value)}/>
                                <TextField label="ISBN-10" color="secondary" type="number" sx={{ mb: 2, mr: 3 }} value={formBook.isbn10 !== 0 ? formBook.isbn10 : ''} onChange={(e) => fillFields('isbn10', e.target.value)}/>
                                <TextField label="ISBN-13" color="secondary" type="number" sx={{ mb: 2, mr: 3 }} value={formBook.isbn13 !== 0 ? formBook.isbn13 : ''} onChange={(e) => fillFields('isbn13', e.target.value)}/>
                                <TextField label={<FormattedMessage id="textfield.year" defaultMessage="Year"/>} color="secondary" type="number" sx={{ mb: 2 }} value={formBook.year !== 0 ? formBook.year : ''} onChange={(e) => fillFields('year', e.target.value)}/>
                                <TextField label={<FormattedMessage id="textfield.pages" defaultMessage="Number of pages"/>} color="secondary" type="number" sx={{ mb: 2, mr: 3 }} value={formBook.pages !== 0 ? formBook.pages : ''} onChange={(e) => fillFields('pages', e.target.value)}/>
                                <TextField label={<FormattedMessage id="textfield.price" defaultMessage="Price"/>} color="secondary" type="number" sx={{ mb: 2, mr: 3 }} value={formBook.price !== 0 ? formBook.price : ''} onChange={(e) => fillFields('price', e.target.value)}/>
                                <TextField label="Stock" color="secondary" type="number" sx={{ mb: 2 }} value={formBook.stock !== 0 ? formBook.stock : ''} onChange={(e) => fillFields('stock', e.target.value)}/>
                                <Select fullWidth label="State" color="secondary" sx={{ mb: 2 }} value={formBook.state !== '' ? formBook.state : 'N'} onChange={(e) => fillFields('state', e.target.value)}>
                                    <MenuItem value={'N'}><FormattedMessage id="textfield.new" defaultMessage="New"/></MenuItem>
                                    <MenuItem value={'U'}><FormattedMessage id="textfield.used" defaultMessage="Used"/></MenuItem>
                                </Select>
                                <TextField fullWidth label={<FormattedMessage id="textfield.bookreview" defaultMessage="Book review"/>} color="secondary" multiline rows={6} sx={{ mb: 2 }} value={formBook.resenia !== '' ? formBook.resenia : ''} onChange={(e) => fillFields('resenia', e.target.value)}/>

                                <Typography variant="h6" sx={{ mb: 2 }} style={{ color: '#2D61F5', fontWeight: 'bold' }}>
                                    <FormattedMessage id="newbook.author" defaultMessage="Author"/>
                                </Typography>

                                <TextField label={<FormattedMessage id="textfield.names" defaultMessage="Names"/>} color="secondary" sx={{ mb: 2, mr: 3 }} value={formAuthor.nameAuthor !== '' ? formAuthor.nameAuthor : ''} onChange={(e) => fillFields('nameAuthor', e.target.value)}/>
                                <TextField label={<FormattedMessage id="textfield.last" defaultMessage="Last name"/>} color="secondary" sx={{ mb: 2, mr: 3 }} value={formAuthor.apPaterno !== '' ? formAuthor.apPaterno : ''} onChange={(e) => fillFields('apPaterno', e.target.value)}/>
                                <TextField label={<FormattedMessage id="textfield.mothers" defaultMessage="Mother's last name (optional)"/>} color="secondary" sx={{ mb: 2 }} value={formAuthor.apMaterno !== '' ? formAuthor.apMaterno : ''} onChange={(e) => fillFields('apMaterno', e.target.value)}/>
                                <TextField fullWidth label={<FormattedMessage id="textfield.country" defaultMessage="Country"/>} color="secondary" sx={{ mb: 2 }} value={formAuthor.countryAuthor !== '' ? formAuthor.countryAuthor : ''} onChange={(e) => fillFields('countryAuthor', e.target.value)}/>

                                <Typography variant="h6" sx={{ mb: 2 }} style={{ color: '#2D61F5', fontWeight: 'bold' }}>
                                    <FormattedMessage id="newbook.publisher" defaultMessage="Publisher"/>
                                </Typography>

                                <TextField fullWidth label={<FormattedMessage id="textfield.namepublisher" defaultMessage="Publisher's name"/>} color="secondary" sx={{ mb: 2 }} value={formEditorial.nameEditorial !== '' ? formEditorial.nameEditorial : ''} onChange={(e) => fillFields('nameEditorial', e.target.value)}/>
                                <TextField fullWidth label={<FormattedMessage id="textfield.country" defaultMessage="Country"/>} color="secondary" sx={{ mb: 2 }} value={formEditorial.countryEditorial !== '' ? formEditorial.countryEditorial : ''} onChange={(e) => fillFields('countryEditorial', e.target.value)}/>

                                <Typography variant="h6" sx={{ mb: 2 }} style={{ color: '#2D61F5', fontWeight: 'bold' }}>
                                    <FormattedMessage id="newbook.category" defaultMessage="Category"/>
                                </Typography>

                                <TextField fullWidth label={<FormattedMessage id="textfield.type" defaultMessage="Type"/>} color="secondary" sx={{ mb: 2 }} value={formCategory.type !== '' ? formCategory.type : ''} onChange={(e) => fillFields('type', e.target.value)}/>
                                
                                <Button variant="contained" color="secondary" component="label" endIcon={<SendRoundedIcon />} sx={{ mt: 3 }} style={{ display: 'flex' }} onClick={() => submitData()}>
                                    <FormattedMessage id="buttons.save" defaultMessage="Save"/>
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Page>
    );
}