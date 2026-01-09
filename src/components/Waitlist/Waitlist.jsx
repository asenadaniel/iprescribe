import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  Snackbar,
  Alert
} from '@mui/material';
import { useState } from 'react';
import logo1 from '../../assets/logo1.svg';
import social1 from '../../assets/Light/Light/SocialIcons-1.svg';
import social2 from '../../assets/Light/Light/Social Icons-2.svg';
import social3 from '../../assets/Light/Light/Social Icons.svg';

function Waitlist() {
  const [email, setEmail] = useState('');
  const [toast, setToast] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const handleSubmit = () => {
    if (!email || !email.includes('@')) {
      setToast({
        open: true,
        message: 'Please enter a valid email address',
        severity: 'error',
      });
      return;
    }

    // Simulate success
    setToast({
      open: true,
      message: 'You have successfully joined the waitlist!',
      severity: 'success',
    });

    setEmail('');
  };

  const handleClose = () => {
    setToast((prev) => ({ ...prev, open: false }));
  };

  return (
    <>
      {/* WAITLIST SECTION */}
      <Box
        sx={{
          backgroundColor: '#2A3F87',
          py: { xs: 6, md: 8 },
          color: '#fff',
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h4"
            sx={{ fontWeight: 600, textAlign: 'center', mb: 1 }}
          >
            Join Our Waitlist
          </Typography>

          <Typography
            sx={{
              textAlign: 'center',
              opacity: 0.9,
              mb: 4,
              fontSize: { xs: '14px', md: '16px' },
            }}
          >
            Be the first one to know about discounts, offers and events weekly
            in your mailbox. Unsubscribe whenever you like with one click.
          </Typography>

          {/* INPUT + BUTTON */}
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box
              sx={{
                display: 'flex',
                width: '100%',
                maxWidth: 520,
                backgroundColor: 'rgba(255,255,255,0.15)',
                borderRadius: 50,
                p: 0.5,
              }}
            >
              <TextField
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                InputProps={{
                  sx: {
                    color: '#fff',
                    '& fieldset': { border: 'none' },
                  },
                }}
              />

              <Button
                onClick={handleSubmit}
                variant="contained"
                sx={{
                  borderRadius: 50,
                  px: 4,
                  backgroundColor: '#fff',
                  color: '#2A3F87',
                  fontWeight: 500,
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: '#f0f0f0',
                  },
                }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Container>

        {/* FOOTER */}
        <Box
          sx={{
            borderTop: '1px solid rgba(255,255,255,0.15)',
            mt: 6,
            pt: 3,
          }}
        >
          <Container
            maxWidth="lg"
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: { xs: 'column', md: 'row' },
              gap: 2,
            }}
          >
            {/* Logo */}
            <Box
              component="img"
              src={logo1}
              alt="Logo"
              sx={{

                cursor: 'pointer',
              }}
            />
            {/* Copyright */}
            <Typography sx={{ fontSize: 14, opacity: 0.8 }}>
              © 2025. All Rights Reserved
            </Typography>

            {/* Social Icons */}
            <Box sx={{ display: 'flex', gap: 1 }}>

              <Box
                component="img"
                src={social1}
                alt="Logo"
                sx={{
                  backgroundColor: '#fff',
                  borderRadius: '50%',
                  p: 2,
                  cursor: 'pointer',
                }}
              />
              <Box
                component="img"
                src={social2}
                alt="Logo"
                sx={{
                  backgroundColor: '#fff',
                  borderRadius: '50%',
                  p: 2,
                  cursor: 'pointer',
                }}
              />
              <Box
                component="img"
                src={social3}
                alt="Logo"
                sx={{
                  backgroundColor: '#fff',
                  borderRadius: '50%',
                  p: 2,
                  cursor: 'pointer',
                }}
              />
            </Box>
          </Container>
        </Box>
      </Box>

      {/* TOAST */}
      <Snackbar
        open={toast.open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={handleClose}
          severity={toast.severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {toast.message}
        </Alert>
      </Snackbar>
    </>
  );
}



export default Waitlist;
