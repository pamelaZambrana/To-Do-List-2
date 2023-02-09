import React from 'react';
//Material UI components

import { Typography, Link } from '@mui/material';
const CopyRight = () => {

    return (
        <Typography variant='body2' color="GrayText" align='center'>
            { "CopyRight (C)"}
            <Link color="inherit" href='https://imaginaformacion.com' target="_blank">
                Imagina Formación
            </Link>
            { " " }
            { new Date().getFullYear() }
        </Typography>
    );
}

export default CopyRight;
