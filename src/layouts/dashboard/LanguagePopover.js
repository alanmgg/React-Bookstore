import React, { useRef, useState, useContext, useEffect } from 'react';
// material
import { alpha } from '@mui/material/styles';
import { Box, MenuItem, Stack, IconButton } from '@mui/material';
// components
import MenuPopover from '../../components/MenuPopover';

import { langContext } from './../../context/langContext';

// ----------------------------------------------------------------------

const LANGS_EN = [
  {
    value: 'en',
    label: 'English',
    icon: 'https://cdn-icons-png.flaticon.com/512/4060/4060239.png',
  },
  {
    value: 'es',
    label: 'Spanish',
    icon: 'https://cdn-icons-png.flaticon.com/512/321/321260.png',
  },
];

const LANGS_ES = [
  {
    value: 'en',
    label: 'Inglés',
    icon: 'https://cdn-icons-png.flaticon.com/512/4060/4060239.png',
  },
  {
    value: 'es',
    label: 'Español',
    icon: 'https://cdn-icons-png.flaticon.com/512/321/321260.png',
  },
];

// ----------------------------------------------------------------------

export default function LanguagePopover() {
  const lang = useContext(langContext);

  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [optionState, setOptionState] = useState('en');

  useEffect(() => {
    const langStorage = localStorage.getItem('lang');

    if (langStorage !== null && langStorage !== undefined) {
      if (langStorage === 'es-MX') {
        setOptionState('es');
      } else {
        setOptionState('en');
      }
    }
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = (data) => {
    if (data === 0 && optionState === 'en') {
      setOptionState('es');
      lang.setLanguage('es-MX');
    } else if (data === 0 && optionState === 'es') {
      setOptionState('en');
      lang.setLanguage('en-US');
    }
    setOpen(false);
  };

  return (
    <>
      <IconButton
        ref={anchorRef}
        onClick={handleOpen}
        sx={{
          padding: 0,
          width: 40,
          height: 40,
          ...(open && {
            bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.focusOpacity),
          }),
        }}
      >
        <img src={optionState === 'en' ? LANGS_EN[0].icon : LANGS_EN[1].icon} alt={optionState === 'en' ? LANGS_EN[0].label : LANGS_EN[1].label} />
      </IconButton>

      <MenuPopover
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        sx={{
          mt: 1.5,
          ml: 0.75,
          width: 180,
          '& .MuiMenuItem-root': { px: 1, typography: 'body2', borderRadius: 0.75 },
        }}
      >
        <Stack spacing={0.75}>
          {optionState === 'en' ? LANGS_EN.map((option) => (
            <MenuItem key={option.value} selected={optionState === 'en' ? option.value === LANGS_EN[0].value : option.value === LANGS_EN[1].value} onClick={(e) => handleClose(e.target.value)}>
              <Box component="img" alt={option.label} src={option.icon} sx={{ width: 28, mr: 2 }} />

              {option.label}
            </MenuItem>
          )) : 
          LANGS_ES.map((option) => (
            <MenuItem key={option.value} selected={optionState === 'en' ? option.value === LANGS_ES[0].value : option.value === LANGS_ES[1].value} onClick={(e) => handleClose(e.target.value)}>
              <Box component="img" alt={option.label} src={option.icon} sx={{ width: 28, mr: 2 }} />

              {option.label}
            </MenuItem>
          ))}
        </Stack>
      </MenuPopover>
    </>
  );
}
