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
              We design and implement smarter observability, log management, and cybersecurity solutions. From architecture to activation, we help you get the most out of tools like Cribl, Splunk, and many others—faster, cleaner, and with confidence.
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

          {/* Features Section */}
          <Typography variant="h2" sx={{
            fontSize: { xs: '2rem', md: '2.5rem' },
            textAlign: 'center',
            mb: 8,
            color: '#fff',
          }}>
            End-to-End Observability Made Possible
          </Typography>

          <Box sx={{ 
            width: '100vw',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
            <Container maxWidth="xl" sx={{ 
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
              position: 'relative',
            }}>
              <Box sx={{ 
                width: '100%',
                maxWidth: '1600px',
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: 4,
                alignItems: 'stretch',
                justifyContent: 'center',
                mx: 'auto',
                px: 3,
              }}>
                {[
                  {
                    title: 'Architecture & Integration',
                    description: 'We help you plan, design, and implement observability from the ground up—covering everything from infrastructure to applications and security layers.',
                    icon: '/arch_icon.png'
                  },
                  {
                    title: 'Analytics & Enrichment',
                    description: 'Build smarter detections with custom logic, AI insights, and threat intelligence. We optimize your pipelines to deliver real outcomes, not just more data.',
                    icon: '/chart_icon.png'
                  },
                  {
                    title: 'Unified Workflows',
                    description: 'We bring your telemetry together—logs, metrics, traces, and more—into one cohesive flow across tools like Cribl, Splunk, and Dynatrace.',
                    icon: '/workflow_icon.png'
                  }
                ].map((feature, index) => (
                  <Box
                    key={index}
                    sx={{
                      flex: 1,
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      borderRadius: '16px',
                      padding: '40px',
                      position: 'relative',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      }
                    }}
                  >
                    <Typography variant="h3" sx={{
                      fontSize: '2rem',
                      mb: 3,
                      color: '#fff',
                      fontWeight: 500,
                    }}>
                      {feature.title}
                    </Typography>

                    <Box sx={{
                      display: 'flex',
                      gap: 3,
                      alignItems: 'flex-start'
                    }}>
                      <Box sx={{
                        flexShrink: 0,
                        width: '100px',
                        height: '100px',
                        '& img': {
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain'
                        }
                      }}>
                        <img src={feature.icon} alt={`${feature.title} Icon`} />
                      </Box>
                      
                      <Typography sx={{
                        color: 'rgba(255, 255, 255, 0.7)',
                        lineHeight: 1.6,
                        fontSize: '1.1rem',
                        flex: 1,
                      }}>
                        {feature.description}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Container>
          </Box>

          {/* Who We Serve Section */}
          <Box sx={{ 
            mt: 15, 
            mb: 15, 
            width: '100%',
            maxWidth: '1200px',
            px: 3
          }}>
            <Typography variant="h2" sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              textAlign: 'center',
              mb: 4,
              color: '#fff'
            }}>
              Tailored Solutions for Federal and Private Sectors
            </Typography>
            
            <Typography variant="h6" sx={{
              textAlign: 'center',
              mb: 8,
              color: 'rgba(255, 255, 255, 0.8)',
              maxWidth: '800px',
              mx: 'auto'
            }}>
              From federal agencies to private enterprises, LDC Observability delivers customized log management, 
              analytics, and cybersecurity solutions. We deploy and optimize tools like Cribl, Splunk, and 
              Dynatrace to meet your unique needs.
            </Typography>

            <Box sx={{ 
              maxWidth: '1200px', 
              px: 3,
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: 4
            }}>
              {/* Federal Box */}
              <Box sx={{
                flex: 1,
                p: 4,
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 2,
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.1)',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  background: 'rgba(255,255,255,0.06)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
                }
              }}>
                <Typography variant="h1" sx={{ mb: 2 }}>🛡️</Typography>
                <Typography variant="h5" sx={{ mb: 2 }}>Federal Agencies</Typography>
                <Typography color="text.secondary" sx={{ mb: 4 }}>
                  Secure, compliant solutions tailored for government requirements. 
                  Enhanced security protocols and regulatory compliance built-in.
                </Typography>
                <Button
                  component="a"
                  href="/apply/federal"
                  variant="contained"
                  sx={{
                    mt: 'auto',
                    backgroundColor: '#7B3FE4',
                    color: '#FFFFFF',
                    px: 4,
                    py: 1.5,
                    fontSize: '1rem',
                    textTransform: 'none',
                    borderRadius: '8px',
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                      backgroundColor: '#6032B2',
                      transform: 'translateY(-2px)',
                    }
                  }}
                >
                  Apply Now
                </Button>
              </Box>

              {/* Private Box */}
              <Box sx={{
                flex: 1,
                p: 4,
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 2,
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.1)',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  background: 'rgba(255,255,255,0.06)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
                }
              }}>
                <Typography variant="h1" sx={{ mb: 2 }}>🏢</Typography>
                <Typography variant="h5" sx={{ mb: 2 }}>Private Enterprises</Typography>
                <Typography color="text.secondary" sx={{ mb: 4 }}>
                  Scalable, efficient solutions for businesses of all sizes. 
                  Optimize performance and maximize operational insights.
                </Typography>
                <Button
                  component="a"
                  href="/apply/private"
                  variant="contained"
                  sx={{
                    mt: 'auto',
                    backgroundColor: '#7B3FE4',
                    color: '#FFFFFF',
                    px: 4,
                    py: 1.5,
                    fontSize: '1rem',
                    textTransform: 'none',
                    borderRadius: '8px',
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                      backgroundColor: '#6032B2',
                      transform: 'translateY(-2px)',
                    }
                  }}
                >
                  Apply Now
                </Button>
              </Box>
            </Box>
          </Box>

          {/* Final CTA Section */}
          <Box sx={{
            mt: 10,
            mb: 15,
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
              Let's build observability that works for you. Contact us for consulting, 
              installations, optimizations, or custom use case development.
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