import React from 'react';
import { Typography, styled } from '@mui/material';
import BackgroundImage from "../assets/star-wars-characters-background.jpg"

const LayoutContainer = styled('div')({
  position: 'relative',
  minHeight: '100vh',
  background: `url(${BackgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.2)', 
    zIndex: 1,
    transition: 'opacity 0.3s ease',
    pointerEvents: 'none',
    opacity: 0,
  },
  '&:hover::before': {
    opacity: 1,
  },
});

const Title = styled(Typography)({
  color: 'white',
  fontWeight: 'bold',
  fontSize: '3rem', 
  fontFamily: "'Star Wars', sans-serif", 
});

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <Title variant="h1" align="center" gutterBottom>
        Star Wars Character Showdown
      </Title>
      {children}
    </LayoutContainer>
  );
};

export default Layout;
