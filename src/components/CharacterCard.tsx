// CharacterCard.tsx
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

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

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">{character.name}</Typography>
        <Typography color="textSecondary">Height: {character.height} cm</Typography>
        <Typography color="textSecondary">Mass: {character.mass} kg</Typography>
        <Typography color="textSecondary">Hair Color: {character.hair_color}</Typography>
        <Typography color="textSecondary">Skin Color: {character.skin_color}</Typography>
        <Typography color="textSecondary">Eye Color: {character.eye_color}</Typography>
        <Typography color="textSecondary">Birth Year: {character.birth_year}</Typography>
        <Typography color="textSecondary">Gender: {character.gender}</Typography>
      </CardContent>
    </Card>
  );
};

export default CharacterCard;
