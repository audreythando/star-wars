import React, { useState } from 'react';
import { CssBaseline, Grid, Container, ThemeProvider, createTheme, Box } from '@mui/material';
import CharacterForm from './components/CharacterForm';
import CharacterCard from './components/CharacterCard';
import Backdrop from './assets/background.jpg';
import ComparisonTable from './components/ComparisonTable';

const theme = createTheme({
  palette: {
    background: {
      default: '#000', 
    },
    text: {
      primary: '#fff', 
    },
  },
  typography: {
    allVariants: {
      color: '#fff', 
    },
  },
});

const App: React.FC = () => {
  const [character1, setCharacter1] = useState<any>(null);
  const [character2, setCharacter2] = useState<any>(null);

  const handleCompare = (char1: string, char2: string) => {
    setCharacter1({
      name: char1,
      height: '172',
      mass: '77',
      hair_color: 'blond',
      skin_color: 'fair',
      eye_color: 'blue',
      birth_year: '19BBY',
      gender: 'male',
    });
    setCharacter2({
      name: char2,
      height: '180',
      mass: '80',
      hair_color: 'brown',
      skin_color: 'light',
      eye_color: 'green',
      birth_year: '20BBY',
      gender: 'female',
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          backgroundImage: `url(${Backdrop})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          zIndex: 1,
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
        }}
      >
        <Container sx={{ position: 'relative', zIndex: 2 }}>
          <CharacterForm onCompare={handleCompare} />
          <Grid container spacing={4} sx={{ mt: 4, justifyContent: 'center' }}>
            {character1 && (
              <Grid item xs={12} md={6} lg={4}>
                <CharacterCard character={character1} />
              </Grid>
            )}
            {character2 && (
              <Grid item xs={12} md={6} lg={4}>
                <CharacterCard character={character2} />
              </Grid>
            )}
          </Grid>
          <Grid container spacing={4} sx={{ mt: 4, justifyContent: 'center' }}>
            {character1 && character2 && (
              <Grid item xs={12} md={12} lg={12}>
                <ComparisonTable character1={character1} character2={character2} />
              </Grid>
            )}
          </Grid>
            <Grid container spacing={4} sx={{ mt: 4, justifyContent: 'center' }}></Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default App;
