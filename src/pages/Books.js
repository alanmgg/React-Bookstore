import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// material
import { Container, Stack, Typography, Button, Grid } from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
// components
import Page from '../components/Page';
import { ProductSort, ProductCartWidget, ProductFilterSidebar } from '../sections/@dashboard/products';
import { ProductList } from '../sections/@dashboard/books';
// mock
import PRODUCTS from '../_mock/products';

// ----------------------------------------------------------------------

export default function EcommerceShop() {
  const navigate = useNavigate();

  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  return (
    <Page title="Bookbay | Books">
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={10}>
            <Typography variant="h3" sx={{ mb: 3 }} style={{ color: '#2D61F5', fontWeight: 'bold' }}>
              Books
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={6} lg={2}>
            <Button variant="contained" color="secondary" component="label" endIcon={<ArrowForwardRoundedIcon />} style={{ display: 'flex' }} 
            onClick={() => navigate('/books/save', { replace: true })}>
              New book
            </Button>
          </Grid>
        </Grid>

        <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}>
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            <ProductFilterSidebar
              isOpenFilter={openFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            />
            <ProductSort />
          </Stack>
        </Stack>

        <ProductList products={PRODUCTS} />
        <ProductCartWidget />
      </Container>
    </Page>
  );
}
