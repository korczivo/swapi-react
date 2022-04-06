import { styled } from '@mui/system';
import {
  Table,
  TableCell,
  TableRow,
} from '@mui/material';

export const ScoreTable = styled(Table)({
  background: 'rgb(0 0 0 / 25%)',
  borderRadius: 5,
  minWidth: 100,
});

export const ScoreTableRow = styled(TableRow)({
  borderBottom: 'none',
  color: '#fff',
});

export const ScoreTableCell = styled(TableCell)({
  borderBottom: 'none',
  color: '#fff',
});

