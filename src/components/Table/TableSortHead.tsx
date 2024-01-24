import { TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';
import { MapType } from '../../data/mapTypes';
import { headCells } from '../../data/mapDatas';

type TableSortHeadType = {
  orderBy: keyof MapType;
  order: 'desc' | 'asc';
  handleChange: (property: keyof MapType) => void;
};

const TableSortHead = ({ orderBy, order, handleChange }: TableSortHeadType) => {
  return (
    <TableHead>
      <TableRow>
        <TableCell />
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            sortDirection={orderBy === headCell.id ? order : false}
            align={headCell.id !== 'map_key' ? 'center' : 'inherit'}
          >
            {headCell.disableSorting ? (
              headCell.label
            ) : (
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={() => handleChange(headCell.id)}
              >
                {headCell.label}
              </TableSortLabel>
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableSortHead;
