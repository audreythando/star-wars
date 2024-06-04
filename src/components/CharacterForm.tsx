import * as React from "react";
import { useEffect, useState } from "react";
import {
  Grid,
  Typography,
  Button,
  Box,
  Container,
  Stack,
  Select,
} from "@mui/material";
import BackgroundImage from "../assets/star-wars.jpg";
import { getCharacters } from "../services/swapiService";

interface CharacterFormProps {
  onCompare: (character1: string, character2: string) => void;
}

const CharacterForm: React.FC<CharacterFormProps> = ({ onCompare }) => {
  const [character1, setCharacter1] = useState("");
  const [character2, setCharacter2] = useState("");
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const allCharacters = await getCharacters();
        setCharacters(allCharacters);
      } catch (err) {
        console.error("Error fetching characters:", err);
      }
    };

    fetchCharacters();
  }, []);

  const handleSubmit = () => {
    if (!character1 || !character2) {
      setError("Both character names are required.");
    } else {
      setError("");
      onCompare(character1, character2);
    }
  };

  const getFilteredCharacters = (selectedCharacter: string) => {
    return characters.filter(
      (character: any) => character.name !== selectedCharacter
    );
  };

  return (
    <Box
      id="hero"
      sx={{
        width: "100%",
        background: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        py: 8,
        position: "relative",
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
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={2} sx={{ width: { xs: "100%", sm: "70%" } }}>
          <Typography
            variant="h1"
            sx={{
              textAlign: "center",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              fontFamily: "'Star Wars', sans-serif",
              color: "white",
            }}
          >
            STAR WARS SHOWDOWN
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignSelf="center"
            spacing={1}
            sx={{ pt: 2, width: { xs: "100%", sm: "auto" } }}
          >
            <Grid
              item
              container
              spacing={2}
              direction="column"
              alignItems="center"
              xs={12}
            >
              <Select
                native
                value={character1}
                onChange={(e) => setCharacter1(e.target.value)}
                sx={{
                  width: { xs: "120px", sm: "auto" },
                  minWidth: { xs: "120px", sm: "initial" },
                  color: "white",
                  border: "2px solid white",
                  option: {
                    backgroundColor: "white",
                    color: "#162447",
                  },
                }}
              >
                <option value="">Select</option>
                {getFilteredCharacters(character2).map((character: any) => (
                  <option key={character.name} value={character.name}>
                    {character.name}
                  </option>
                ))}
              </Select>
            </Grid>
            <Grid
              item
              container
              spacing={2}
              direction="column"
              alignItems="center"
              xs={12}
              sx={{ mt: { xs: 2, sm: 0 }, mb: { xs: 2, sm: 0 } }}
            >
              <Typography
                variant="h6"
                align="center"
                sx={{
                  fontFamily: "'Star Wars', sans-serif",
                  color: "white",
                  mx: 2,
                }}
              >
                VS
              </Typography>
            </Grid>
            <Grid
              item
              container
              spacing={2}
              direction="column"
              alignItems="center"
              xs={12}
            >
              <Select
                native
                value={character2}
                onChange={(e) => setCharacter2(e.target.value)}
                sx={{
                  width: { xs: "120px", sm: "auto" },
                  minWidth: { xs: "120px", sm: "initial" },
                  border: "2px solid white",
                  color: "white",
                  option: {
                    backgroundColor: "white",
                    color: "#162447",
                  },
                }}
              >
                <option value="">Select</option>
                {getFilteredCharacters(character1).map((character: any) => (
                  <option key={character.name} value={character.name}>
                    {character.name}
                  </option>
                ))}
              </Select>
            </Grid>
          </Stack>
          <Grid
            item
            container
            spacing={2}
            direction="column"
            alignItems="center"
            xs={12}
          >
            <Grid item xs={12}>
              {error && <Typography color="error">{error}</Typography>}
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                onClick={handleSubmit}
                sx={{
                  width: "100%",
                  maxWidth: "300px",
                  backgroundColor: "rgba(26, 27, 61, 0.8)",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "#162447",
                  },
                }}
              >
                Compare
              </Button>
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};

export default CharacterForm;
