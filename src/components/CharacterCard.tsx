import React from 'react';
import { Card, CardContent, Typography, styled } from '@mui/material';

interface CharacterCardProps {
  character: {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
  };
}

const StyledCard = styled(Card)(({ theme }) => ({
  background: '#1a2b4d', // Dark blue background
  color: '#fff', // White text color
  borderRadius: '15px', // Rounded corners
  textAlign: 'center', // Center align text
  padding: theme.spacing(2),
  maxWidth: 300,
  margin: '0 auto', // Center the card horizontally
  '&:hover': {
    transform: 'scale(1.05)',
    transition: 'transform 0.2s ease-in-out',
  },
}));

const AvatarCircle = styled('div')({
  width: '100px',
  height: '100px',
  borderRadius: '50%',
  overflow: 'hidden',
  margin: '0 auto 16px',
  border: '2px solid #fff', // White border around avatar
});

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <StyledCard>
      <CardContent>
        <AvatarCircle>
          <img src={`https://via.placeholder.com/100`} alt={character.name} style={{ width: '100%' }} />
        </AvatarCircle>
        <Typography variant="h6" component="h2">{character.name}</Typography>
        <Typography variant="body2" color="textSecondary">Height: {character.height} cm</Typography>
        <Typography variant="body2" color="textSecondary">Mass: {character.mass} kg</Typography>
        <Typography variant="body2" color="textSecondary">Hair Color: {character.hair_color}</Typography>
        <Typography variant="body2" color="textSecondary">Skin Color: {character.skin_color}</Typography>
        <Typography variant="body2" color="textSecondary">Eye Color: {character.eye_color}</Typography>
        <Typography variant="body2" color="textSecondary">Birth Year: {character.birth_year}</Typography>
        <Typography variant="body2" color="textSecondary">Gender: {character.gender}</Typography>
      </CardContent>
    </StyledCard>
  );
};

export default CharacterCard;
