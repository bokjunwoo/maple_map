import { TableBody, TableRow, TableCell } from '@mui/material';
import { headCells } from '../../data/mapDatas';
import { MapType } from '../../data/mapTypes';

type TableSortBodyType = {
  data: MapType[];
};

const TableSortBody = ({ data }: TableSortBodyType) => {
  return (
    <TableBody>
      {data.map((row) => (
        <TableRow key={row.id}>
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              align={headCell.id !== 'map_name' ? 'center' : 'inherit'}
            >
              {row[headCell.id]}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  );
};

export default TableSortBody;
