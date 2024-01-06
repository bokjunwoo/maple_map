import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { AraneRiverMapData } from '../data/mapDatas';
import TableSortHead from './Table/TableSortHead';

export default function MapTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableSortHead />
        <TableBody>
          {AraneRiverMapData.소멸의여로.map((row) => (
            <TableRow
              hover
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.map_name}
              </TableCell>
              <TableCell align="center">{row.monster}</TableCell>
              <TableCell align="center">{row.number_of_monster}</TableCell>
              <TableCell align="center">{row.monster_experience}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
