import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, styled } from '@mui/material';
import Layout from './Layout'; 
import BackgroundImage from "../assets/star-wars-characters-background.jpg";

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.5)', 
      borderWidth: '3px', 
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
    <Layout>
      <Grid container spacing={2} direction="column" alignItems="center">
        <Grid item>
          <Typography variant="h4" align="center" gutterBottom style={{ marginBottom: '20px' }}>
          </Typography>
        </Grid>
        <Grid item container spacing={2} direction="row" alignItems="center" justifyContent="center">
          <Grid item xs={12} sm={5}>
            <StyledTextField
              label="Character 1"
              variant="outlined"
              fullWidth
              value={character1}
              onChange={(e) => setCharacter1(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <Typography variant="h6" align="center">VS</Typography>
          </Grid>
          <Grid item xs={12} sm={5}>
            <StyledTextField
              label="Character 2"
              variant="outlined"
              fullWidth
              value={character2}
              onChange={(e) => setCharacter2(e.target.value)}
            />
          </Grid>
        </Grid>
        <Grid item>
          {error && <Typography color="error">{error}</Typography>}
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Compare
          </Button>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default CharacterForm;
