import React, { ReactNode } from 'react';
import { styled } from '@mui/material/styles';
import BackgroundImage from "../assets/star-wars-characters-background.jpg";

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
    background: 'rgba(0, 0, 0, 0.3)',
    zIndex: 1,
    transition: 'opacity 0.3s ease',
    pointerEvents: 'none',
    opacity: 0,
  },
  '&:hover::before': {
    opacity: 1,
  },
});

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
      {children}
    </LayoutContainer>
  );
};

export default Layout;
