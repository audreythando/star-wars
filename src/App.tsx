import React, { useState } from "react";
import {
  CssBaseline,
  Grid,
  Container,
  ThemeProvider,
  createTheme,
  Box,
  Typography,
} from "@mui/material";
import CharacterForm from "./components/CharacterForm";
import CharacterCard from "./components/CharacterCard";
import Backdrop from "./assets/background.jpg";
import ComparisonTable from "./components/ComparisonTable";
import { getCharacterByName } from "./services/swapiService";

const theme = createTheme({
  palette: {
    background: {
      default: "#000",
    },
    text: {
      primary: "#fff",
    },
  },
  typography: {
    allVariants: {
      color: "#fff",
    },
  },
});

const getImagePath = (name: string) => {
  const normalizedName = name
    .toLowerCase()
    .replace(/\s+/g, "_")
    .replace(/[^a-z0-9_]/g, "");
  return `/assets/images/${normalizedName}.jpg`;
};

const App: React.FC = () => {
  const [character1, setCharacter1] = useState<any>(null);
  const [character2, setCharacter2] = useState<any>(null);
  const [error, setError] = useState<string>("");

  const handleCompare = async (char1: string, char2: string) => {
    try {
      const characterData1 = await getCharacterByName(char1);
      const characterData2 = await getCharacterByName(char2);

      setCharacter1(characterData1);
      setCharacter2(characterData2);
      setError("");
    } catch (err) {
      setError(
        "Error fetching character data. Please check the character names and try again."
      );
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          backgroundImage: `url(${Backdrop})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          zIndex: 1,
          "::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: -1,
          },
        }}
      >
        <Container sx={{ position: "relative", zIndex: 2 }}>
          <CharacterForm onCompare={handleCompare} />
          {error && (
            <Typography color="error" align="center" sx={{ mt: 2 }}>
              {error}
            </Typography>
          )}
          <Grid container spacing={4} sx={{ mt: 4, justifyContent: "center" }}>
            {character1 && (
              <Grid item xs={12} md={6} lg={4}>
                <CharacterCard
                  character={character1}
                  image={getImagePath(character1.name)}
                />
              </Grid>
            )}
            {character2 && (
              <Grid item xs={12} md={6} lg={4}>
                <CharacterCard
                  character={character2}
                  image={getImagePath(character2.name)}
                />
              </Grid>
            )}
          </Grid>
          <Grid container spacing={4} sx={{ mt: 4, justifyContent: "center" }}>
            {character1 && character2 && (
              <Grid item xs={12} md={12} lg={12}>
                <ComparisonTable
                  character1={character1}
                  character2={character2}
                />
              </Grid>
            )}
          </Grid>
          <Grid
            container
            spacing={4}
            sx={{ mt: 4, justifyContent: "center" }}
          ></Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default App;
