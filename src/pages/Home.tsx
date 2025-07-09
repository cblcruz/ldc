import { Box, Container, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import DataFlowAnimation from '../components/DataFlowAnimation';

export default function Home() {
  return (
    <>
      {/* Background Animation */}
      <Box sx={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,
        opacity: 0.8
      }}>
        <DataFlowAnimation />
      </Box>

      {/* Main content wrapper */}
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        minHeight: '100vh',
        padding: '80px 24px',
        marginTop: '60px',
        position: 'relative',
        zIndex: 1
      }}>
        <Container maxWidth={false} sx={{ 
          mt: 0,
          pt: 0,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          background: 'transparent',
        }}>
          {/* Hero Section */}
          <Box sx={{ 
            textAlign: 'center',
            maxWidth: '800px',
            mt: 8,
            mb: 6
          }}>
            <Typography variant="h1" sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 600,
              mb: 3,
              color: '#fff',
            }}>
              Clarity, Speed, and Security<br/>
              Delivered by Experts
            </Typography>
            
            <Typography variant="h2" sx={{
              fontSize: { xs: '1.2rem', md: '1.4rem' },
              color: 'rgba(255, 255, 255, 0.8)',
              mb: 6,
              lineHeight: 1.5,
            }}>
              ERROR We design and implement smarter observability, log management, and cybersecurity solutions. From architecture to activation, we help you get the most out of tools like Cribl, Splunk, and many others—faster, cleaner, and with confidence.
            </Typography>

            {/* CTA Buttons */}
            <Box sx={{ 
              display: 'flex', 
              gap: 2, 
              justifyContent: 'center', 
              mb: 15 
            }}>
              <Button
                component={RouterLink}
                to="/get-started"
                variant="contained"
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: 'rgba(255, 255, 255, 0.7)',
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  textTransform: 'none',
                  borderRadius: '8px',
                  transition: 'all 0.2s ease-in-out',
                  '&:hover': {
                    backgroundColor: '#7B3FE4',
                    color: '#FFFFFF',
                    transform: 'translateY(-2px)',
                  }
                }}
              >
                Work With Us
              </Button>
              <Button
                component={RouterLink}
                to="/solutions"
                variant="contained"
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: 'rgba(255, 255, 255, 0.7)',
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  textTransform: 'none',
                  borderRadius: '8px',
                  transition: 'all 0.2s ease-in-out',
                  '&:hover': {
                    backgroundColor: '#7B3FE4',
                    color: '#FFFFFF',
                    transform: 'translateY(-2px)',
                  }
                }}
              >
                See Our Solutions
              </Button>
            </Box>
          </Box>

          {/* Why Choose LDC Observability Solutions? */}
          <Box sx={{
            mt: 10,
            mb: 10,
            textAlign: 'center',
            width: '100%',
            maxWidth: '900px',
            mx: 'auto',
            px: 3
          }}>
            <Typography variant="h2" sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              mb: 4,
              color: '#fff'
            }}>
              Why Choose LDC Observability Solutions?
            </Typography>
            <Typography variant="h6" sx={{
              color: 'rgba(255, 255, 255, 0.85)',
              mb: 4
            }}>
              We combine deep technical expertise with a client-first approach to deliver observability, log management, and cybersecurity solutions that truly fit your needs. Our team has a proven track record with both private enterprises and federal agencies, ensuring secure, scalable, and meaningful results.
            </Typography>
            <Box sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: 4,
              justifyContent: 'center',
              mb: 2
            }}>
              <Box sx={{ flex: 1 }}>
                <Typography variant="h5" sx={{ color: '#7B3FE4', mb: 1 }}>Expert Guidance</Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.7)' }}>
                  Decades of experience in observability, security, and data engineering.
                </Typography>
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography variant="h5" sx={{ color: '#7B3FE4', mb: 1 }}>Tailored Solutions</Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.7)' }}>
                  Every engagement is customized to your business, compliance, and technical needs.
                </Typography>
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography variant="h5" sx={{ color: '#7B3FE4', mb: 1 }}>Trusted Tools</Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.7)' }}>
                  We deploy and optimize industry-leading platforms like Cribl, Splunk, and more.
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Final CTA Section */}
          <Box sx={{
            mt: 10,
            mb: 10,
            textAlign: 'center',
            width: '100%',
            maxWidth: '800px',
            px: 3
          }}>
            <Typography variant="h2" sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              mb: 3,
              color: '#fff'
            }}>
              Ready to See Everything?
            </Typography>
            
            <Typography variant="h6" sx={{
              mb: 6,
              color: 'rgba(255, 255, 255, 0.8)'
            }}>
              We conceptualize, design, deploy, and validate observability solutions that are meaningful to you and your organization—reducing clutter and delivering greater results with less effort.
            </Typography>

            <Button
              variant="contained"
              href="/contact"
              sx={{
                backgroundColor: '#7B3FE4',
                color: '#FFFFFF',
                px: 6,
                py: 2,
                fontSize: '1.1rem',
                textTransform: 'none',
                borderRadius: '8px',
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  backgroundColor: '#6032B2',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 20px rgba(123, 63, 228, 0.3)',
                }
              }}
            >
              Contact Us Now
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
} 