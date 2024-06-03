import React from 'react';
import { Card, CardContent, Typography, styled } from '@mui/material';

interface CharacterCardProps {
  character: {
    name: string;
  };
  image: string;
}

const StyledCard = styled(Card)(({ theme }) => ({
  background: 'rgba(26, 27, 61, 0.8)',
  color: '#fff',
  borderRadius: '15px',
  textAlign: 'center',
  padding: theme.spacing(2),
  maxWidth: 300,
  margin: '0 auto',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  '&:hover': {
    background: '#162447',
    transform: 'scale(1.05)',
    transition: 'transform 0.2s ease-in-out',
  },
}));

const ImageWrapper = styled('div')({
  width: '100%',
  paddingTop: '100%',
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '15px', 
  marginBottom: '16px',
});

const CharacterImage = styled('img')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const CharacterCard: React.FC<CharacterCardProps> = ({ character, image }) => {
  return (
    <StyledCard>
      <CardContent>
        <ImageWrapper>
          <CharacterImage src={image} alt={character.name} />
        </ImageWrapper>
        <Typography variant="h6" component="h2">{character.name}</Typography>
      </CardContent>
    </StyledCard>
  );
};

export default CharacterCard;
