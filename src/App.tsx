import React, { useState } from 'react';
import CharacterForm from './components/CharacterForm';
import Layout from './components/Layout';

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
    <Layout>
      <CharacterForm onCompare={handleCompare} />
    </Layout>
  );
};

export default App;
