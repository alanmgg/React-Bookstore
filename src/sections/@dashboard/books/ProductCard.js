import React, { useState, useEffect } from 'react';

import { Link as RouterLink } from 'react-router-dom';
// material
import { Box, Card, Link, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
// utils
import { fCurrency } from '../../../utils/formatNumber';
// components
import Label from '../../../components/Label';
import { ColorPreview } from '../../../components/color-utils';
// Language
import { FormattedMessage } from 'react-intl';

// ----------------------------------------------------------------------

const ProductImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

export default function ShopProductCard(props) {
    const [books, setBooks] = useState(null);

    useEffect(() => {
        if (props.product !== undefined) {
            setBooks(props.product);
        }
    }, [props]);

    return (
        <Card>
            {books !== null ? 
            <Box sx={{ pt: '100%', position: 'relative' }}>
                <Label
                    variant="filled"
                    color={(books.estado === 'N' && 'info') || 'error'}
                    sx={{
                    zIndex: 9,
                    top: 16,
                    right: 16,
                    position: 'absolute',
                    textTransform: 'uppercase',
                    }}
                >
                    {books.estado === 'N' ? <FormattedMessage id="books.new" defaultMessage="New"/> : <FormattedMessage id="books.used" defaultMessage="Used"/>}
                </Label>
                <ProductImgStyle alt={books.nombre} src={'https://bookbay.duckdns.org/api/v1/images/' + books.id_image} />
            </Box>
            : null}

            {books !== null ?
            <Stack spacing={2} sx={{ p: 3 }}>
                <Link to="#" color="inherit" underline="hover" component={RouterLink}>
                    <Typography variant="subtitle2" noWrap>
                        {books.nombre}
                    </Typography>
                </Link>

                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    Stock: {books.stock}
                    <ColorPreview colors={books.stock >= 3 ? ['#00AB55'] : ['#FFC107']} />
                    <Typography variant="subtitle1">
                        <Typography
                        component="span"
                        variant="body1"
                        sx={{
                            color: 'text.disabled',
                            textDecoration: 'line-through',
                        }}
                        >
                        {books.precio && fCurrency(books.precio + 50)}
                        </Typography>
                        &nbsp;
                        {fCurrency(books.precio)}
                    </Typography>
                </Stack>
            </Stack>
            : null}
        </Card>
    );
}
