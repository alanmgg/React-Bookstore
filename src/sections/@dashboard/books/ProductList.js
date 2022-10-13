import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// material
import { Grid } from '@mui/material';
import ShopProductCard from './ProductCard';
// Api
import { getBooks } from '../../../api/booksApi';
// Notifications
import ActionsNotifications from '../../../components/ActionsNotifications';

// ----------------------------------------------------------------------

ProductList.propTypes = {
  products: PropTypes.array.isRequired
};

export default function ProductList({ products, ...other }) {
    const [productsApi, setProductsApi] = useState(null);

    useEffect(() => {
        const sessionClient = localStorage.getItem('logClient');
        const jsonClient = JSON.parse(sessionClient);
        if (localStorage.getItem('logClient')) {
            getBooks(jsonClient.token, loadBookHandler, loadErrorHandler);
        } else {
            navigate('/login', { replace: true });
        }
    }, []);

    async function loadBookHandler(response) {
        if (response.ok) {
            var books = await response.json();
            setProductsApi(books);
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

    return (
        <Grid container spacing={3} {...other}>
        {productsApi !== null ? productsApi.map(product => {
            return (
                <>
                    <Grid key={product.id_libro} item xs={12} sm={6} md={3}>
                        <ShopProductCard product={product} />
                    </Grid>
                </>
            );
        }) : null}
        </Grid>
    );
}
