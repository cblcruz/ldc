import PageTemplate from '../components/PageTemplate';
import { Box, TextField, Button, Typography } from '@mui/material';
import { useState } from 'react';

export default function GetStarted() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <PageTemplate title="Get Started">
      <Box
        component="form"
        action="https://formspree.io/f/mnnveadd"
        method="POST"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          maxWidth: 500,
          mx: 'auto',
          mt: 4,
          background: 'rgba(255,255,255,0.03)',
          p: 4,
          borderRadius: 2,
          boxShadow: 3,
        }}
        onSubmit={() => setSubmitted(true)}
      >
        <Typography variant="h5" sx={{ color: '#fff', mb: 2, textAlign: 'center' }}>
          Contact & Request Form
        </Typography>
        <TextField
          label="Name"
          name="name"
          required
          fullWidth
          variant="outlined"
          InputLabelProps={{ style: { color: '#bbb' } }}
          sx={{ input: { color: '#fff' }, label: { color: '#bbb' } }}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          required
          fullWidth
          variant="outlined"
          InputLabelProps={{ style: { color: '#bbb' } }}
          sx={{ input: { color: '#fff' }, label: { color: '#bbb' } }}
        />
        <TextField
          label="Company"
          name="company"
          fullWidth
          variant="outlined"
          InputLabelProps={{ style: { color: '#bbb' } }}
          sx={{ input: { color: '#fff' }, label: { color: '#bbb' } }}
        />
        <TextField
          label="Message"
          name="message"
          required
          fullWidth
          multiline
          minRows={4}
          variant="outlined"
          InputLabelProps={{ style: { color: '#bbb' } }}
          sx={{ input: { color: '#fff' }, label: { color: '#bbb' } }}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: '#7B3FE4',
            color: '#fff',
            fontWeight: 600,
            py: 1.5,
            borderRadius: 2,
            fontSize: '1.1rem',
            mt: 2,
            '&:hover': {
              backgroundColor: '#6032B2',
            },
          }}
        >
          Send Request
        </Button>
        {submitted && (
          <Typography sx={{ color: '#7B3FE4', mt: 2, textAlign: 'center' }}>
            Thank you! Your request has been sent.
          </Typography>
        )}
      </Box>
    </PageTemplate>
  );
} 