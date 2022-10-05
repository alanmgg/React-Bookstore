import { useRef, useState } from 'react';
// material
import { alpha } from '@mui/material/styles';
import { Box, MenuItem, Stack, IconButton } from '@mui/material';
// components
import MenuPopover from '../../components/MenuPopover';

// ----------------------------------------------------------------------

const LANGS = [
  {
    value: 'en',
    label: 'English',
    icon: 'https://img.icons8.com/color/344/usa.png',
  },
  {
    value: 'es',
    label: 'Spanish',
    icon: 'https://img.icons8.com/color/344/spain-2.png',
  },
];

// ----------------------------------------------------------------------

export default function LanguagePopover() {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [optionState, setOptionState] = useState('en');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = (data) => {
    if (data === 0 && optionState === 'en') {
      setOptionState('es');
    } else if (data === 0 && optionState === 'es') {
      setOptionState('en');
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
        <img src={optionState === 'en' ? LANGS[0].icon : LANGS[1].icon} alt={optionState === 'en' ? LANGS[0].label : LANGS[1].label} />
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
          {LANGS.map((option) => (
            <MenuItem key={option.value} selected={optionState === 'en' ? option.value === LANGS[0].value : option.value === LANGS[1].value} onClick={(e) => handleClose(e.target.value)}>
              <Box component="img" alt={option.label} src={option.icon} sx={{ width: 28, mr: 2 }} />

              {option.label}
            </MenuItem>
          ))}
        </Stack>
      </MenuPopover>
    </>
  );
}
