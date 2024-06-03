import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, styled } from '@mui/material';

interface ComparisonTableProps {
  character1: any;
  character2: any;
}

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
   background: 'rgba(26, 27, 61, 0.8)', 
     color: '#fff',
  borderRadius: '8px', 
    marginTop: theme.spacing(4),
  padding: '16px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  width: '100%', 
  margin: '0 auto', 
}));

const StyledTableCell = styled(TableCell)({
  color: '#FFF',
  borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
});

const StyledTableHeadCell = styled(TableCell)({
  backgroundColor: '#162447', 
  color: '#FFF', 
  fontWeight: 'bold', 
});

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  '&:nth-of-type(even)': {
    backgroundColor: 'rgba(255, 255, 255, 0.05)', 
  },
}));

const ComparisonTable: React.FC<ComparisonTableProps> = ({ character1, character2 }) => {
  const attributes = ['height', 'mass', 'hair_color', 'skin_color', 'eye_color', 'birth_year', 'gender'];

  return (
    <StyledTableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableHeadCell>Attribute</StyledTableHeadCell>
            <StyledTableHeadCell>{character1.name}</StyledTableHeadCell>
            <StyledTableHeadCell>{character2.name}</StyledTableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {attributes.map(attr => (
            <StyledTableRow key={attr}>
              <StyledTableCell>{attr.replace('_', ' ')}</StyledTableCell>
              <StyledTableCell>{character1[attr]}</StyledTableCell>
              <StyledTableCell>{character2[attr]}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};

export default ComparisonTable;
