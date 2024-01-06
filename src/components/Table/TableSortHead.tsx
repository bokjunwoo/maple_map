import { useState } from 'react';
import { TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';
import { MapType } from '../../data/mapTypes';

type HeadCell = {
  id: keyof MapType;
  label: string;
  disableSorting?: boolean;
};

const headCells: HeadCell[] = [
  { id: 'map_name', label: '맵이름', disableSorting: true },
  { id: 'monster', label: '몬스터', disableSorting: true },
  { id: 'number_of_monster', label: '몬스터 젠수' },
  { id: 'monster_experience', label: '경험치' },
];

const TableSortHead = () => {
  const [orderBy, setOrderBy] = useState<keyof MapType>('id');
  const [order, setOrder] = useState<'asc' | 'desc'>('asc');

  const handleSortRequest = (property: keyof MapType) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            sortDirection={orderBy === headCell.id ? order : false}
            align={headCell.id !== 'map_name' ? 'center' : 'inherit'}
          >
            {headCell.disableSorting ? (
              headCell.label
            ) : (
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={() => handleSortRequest(headCell.id)}
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
