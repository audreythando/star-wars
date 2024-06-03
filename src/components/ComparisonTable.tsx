import * as React from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  styled,
} from "@mui/material";

interface ComparisonTableProps {
  character1: any;
  character2: any;
}

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  background: "rgba(26, 27, 61, 0.8)",
  color: "#fff",
  borderRadius: "8px",
  marginTop: theme.spacing(4),
  padding: "16px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  width: "100%",
  margin: "0 auto",
}));

const StyledTableCell = styled(TableCell)({
  color: "#FFF",
  borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
});

const StyledTableHeadCell = styled(TableCell)({
  backgroundColor: "#162447",
  color: "#FFF",
  fontWeight: "bold",
});

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  "&:nth-of-type(even)": {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
  },
}));

const WinnerBox = styled(Box)(({ theme }) => ({
  border: "2px solid white",
  borderRadius: "8px",
  width: "80%",
  maxWidth: "600px",
  padding: theme.spacing(2),
  marginTop: theme.spacing(4),
  textAlign: "center",
  backgroundColor: "rgba(26, 27, 61, 0.8)",
  transition: "background-color 0.3s, transform 0.3s",
  "&:hover": {
    backgroundColor: "rgba(26, 27, 61, 1)",
    transform: "scale(1.05)",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    padding: theme.spacing(1),
  },
}));

const ComparisonTable: React.FC<ComparisonTableProps> = ({
  character1,
  character2,
}) => {
  const attributes = [
    "height",
    "mass",
    "hair_color",
    "skin_color",
    "eye_color",
    "birth_year",
    "gender",
  ];

  const compareAttributes = (attr: string, value1: any, value2: any) => {
    if (attr === "height" || attr === "mass") {
      const num1 = parseInt(value1, 10);
      const num2 = parseInt(value2, 10);
      if (num1 > num2) return character1.name;
      if (num1 < num2) return character2.name;
    } else if (attr === "birth_year") {
      const num1 = parseFloat(value1.replace("BBY", ""));
      const num2 = parseFloat(value2.replace("BBY", ""));
      if (num1 < num2) return character1.name;
      if (num1 > num2) return character2.name;
    }
    return "Draw";
  };

  const getWinner = (results: string[]) => {
    const count1 = results.filter(
      (winner) => winner === character1.name
    ).length;
    const count2 = results.filter(
      (winner) => winner === character2.name
    ).length;
    if (count1 > count2) return character1.name;
    if (count2 > count1) return character2.name;
    return "It's a draw";
  };

  const results = attributes.map((attr) =>
    compareAttributes(attr, character1[attr], character2[attr])
  );

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <StyledTableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableHeadCell>Attribute</StyledTableHeadCell>
              <StyledTableHeadCell>{character1.name}</StyledTableHeadCell>
              <StyledTableHeadCell>{character2.name}</StyledTableHeadCell>
              <StyledTableHeadCell>Winner</StyledTableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {attributes.map((attr, index) => (
              <StyledTableRow key={attr}>
                <StyledTableCell>{attr.replace("_", " ")}</StyledTableCell>
                <StyledTableCell>{character1[attr]}</StyledTableCell>
                <StyledTableCell>{character2[attr]}</StyledTableCell>
                <StyledTableCell>{results[index]}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>
      <WinnerBox>
        <Typography variant="h5">
          Overall Winner: {getWinner(results)}
        </Typography>
      </WinnerBox>
    </Box>
  );
};

export default ComparisonTable;
