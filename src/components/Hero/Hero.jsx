import { Box, Container, Typography, Button } from '@mui/material';
import frame from '../../assets/frame.png';
import button1 from '../../assets/Button-1.svg';
import button2 from '../../assets/Button.svg';
import icon from '../../assets/Icon.png';

function Hero() {
  return (
    <Box sx={{
      background: 'linear-gradient(180deg, #ffffff 0%, rgba(31, 63, 167, 0.1) 100%)'
    }}>

      <Container
        maxWidth="lg"
        sx={{
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',

        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 6, md: 9 },
            width: '100%',
          }}
        >
          {/* LEFT CONTENT */}
          <Box
            sx={{
              textAlign: { xs: 'center', md: 'left' },
              maxWidth: 550,
            }}
          >
            {/* Badge */}
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                backgroundColor: '#EEF2FF',
                px: 2,
                py: 0.8,
                borderRadius: 20,
                mb: 3,
              }}
            >
              <Box
                component="img"
                src={icon}
                alt="Logo"
                sx={{
                  cursor: 'pointer',
                  objectFit: 'contain',
                  height: 20,
                }}
              />
              <Typography variant="body2" sx={{
                fontSize: '13px'
              }}>
                Ready to explore iPrescribe?
              </Typography>
              <Typography variant="body2" color="primary" sx={{ fontWeight: 300 }}>
                Join Waitlist →
              </Typography>
            </Box>

            {/* Heading */}
            <Typography
              component="h1"
              sx={{
                fontWeight: 600,
                mb: 2,
                fontSize: {
                  xs: '2rem',
                  sm: '2.5rem',
                  md: '3rem',
                },
              }}
            >
              Your Bridge
              <br />
              Between Care & Convenience
            </Typography>

            {/* Description */}
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: 4 }}
            >
              Schedule consultations, send or receive e-prescriptions, and manage
              medications from one secure platform.
            </Typography>

            {/* Store Buttons */}
            <Box
              sx={{
                display: 'flex',
                gap: 2,
                flexWrap: 'wrap',
                justifyContent: { xs: 'center', md: 'flex-start' },
              }}
            >


              <Box
                component="img"
                src={button1}
                alt="Logo"
                sx={{

                  cursor: 'pointer',
                }}
              />

              <Box
                component="img"
                src={button2}
                alt="Logo"
                sx={{

                  cursor: 'pointer',
                }}
              />


            </Box>
          </Box>

          {/* RIGHT IMAGE */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Box
              component="img"
              src={frame}
              alt="App screen"
              sx={{
                width: '100%',

                height: {
                  xs: 350,
                  sm: 450,
                  md: 601
                  ,
                },
                objectFit: 'cover',
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Hero;
