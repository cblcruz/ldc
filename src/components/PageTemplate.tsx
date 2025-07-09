import { Box, Container, Typography } from '@mui/material';

interface PageTemplateProps {
  title: string;
  children?: React.ReactNode;
  titleSize?: { xs: string; md: string };
}

export default function PageTemplate({ title, children, titleSize = { xs: '2.5rem', md: '3.5rem' } }: PageTemplateProps) {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      minHeight: '100vh',
      padding: '80px 24px',
      marginTop: '15px',
      position: 'relative',
      zIndex: 1,
      backgroundColor: '#121212'
    }}>
      <Container maxWidth="xl">
        <Typography variant="h1" sx={{
          fontSize: titleSize,
          fontWeight: 600,
          mb: 3,
          color: '#fff',
        }}>
          {title}
        </Typography>
        {children}
      </Container>
    </Box>
  );
} 