import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import "./navbar.css"
import { Typography } from '@mui/material';

export default function ColorTabs() {
  return (
    <Box>
        <Typography variant='h6' align="left">
            Hello
        </Typography>
        <Typography variant='h2'>
            Hello
        </Typography>
        <Typography variant='body1'>
            Hello
        </Typography>
        <Typography variant='body2' color='textDisabled'>
            Hello
        </Typography>
        <Typography variant='subtitle1' gutterBottom>
            Hello
        </Typography>
        <Typography variant='subtitle2'>
            Hello
        </Typography>
        <Typography variant='paragraph' color='error'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Typography>


    </Box>
  );
}
