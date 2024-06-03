import * as React from 'react';
import { Grid, styled } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import BackgroundImage from "../assets/star-wars.jpg";
import { useState } from 'react';

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.5)', 
      borderWidth: '4px', 
    },
    '&:hover fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.8)',
    },
  },
  '& .MuiInputLabel-root': {
    color: 'white', 
  },
  '& .MuiInputBase-root': {
    color: 'white', 
  },
});

interface CharacterFormProps {
  onCompare: (character1: string, character2: string) => void;
}

const CharacterForm: React.FC<CharacterFormProps> = ({ onCompare }) => {
  const [character1, setCharacter1] = useState('');
  const [character2, setCharacter2] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!character1 || !character2) {
      setError('Both character names are required.');
    } else {
      setError('');
      onCompare(character1, character2);
    }
  };

  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        background: `url(${BackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
                py: 8,
                    '::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)', 
          zIndex: -1,
        },
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
              fontSize: 'clamp(3.5rem, 10vw, 4rem)',
              fontFamily: "'Star Wars', sans-serif",
              color: 'white'
            }}
          >
            STAR WARS
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
          >
            <Grid item container spacing={2} direction="column" alignItems="center" xs={12}>
              <StyledTextField label="Character 1" variant="outlined" value={character1} onChange={(e) => setCharacter1(e.target.value)} />
            </Grid>
            <Grid item container spacing={2} direction="column" alignItems="center" xs={12} sx={{ mt: { xs: 2, sm: 0 },  mb: { xs: 2, sm: 0 }}}>
              <Typography variant="h6" align="center" sx={{ fontFamily: "'Star Wars', sans-serif", color: 'white' }}>VS</Typography>
            </Grid>
            <Grid item container spacing={2} direction="column" alignItems="center" xs={12}>
              <StyledTextField label="Character 2" variant="outlined" value={character2} onChange={(e) => setCharacter2(e.target.value)} />
            </Grid>
          </Stack>
          <Grid item container spacing={2} direction="column" alignItems="center" xs={12}>
            <Grid item xs={12}>
              {error && <Typography color="error">{error}</Typography>}
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" onClick={handleSubmit} sx={{ width: '100%', maxWidth: '300px' }}>
                Compare
              </Button>
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}

export default CharacterForm;
