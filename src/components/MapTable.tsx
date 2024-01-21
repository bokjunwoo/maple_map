import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import { headCells } from '../data/mapDatas';
import TableSortHead from './Table/TableSortHead';
import { MapType } from '../data/mapTypes';
import { SetStateAction, useState } from 'react';
import TableSortBody from './Table/TableSortBody';

type MapTableType = {
  data: MapType[];
  onUpdate: (updatedData: SetStateAction<MapType[]>) => void;
};

const MapTable = ({ data, onUpdate }: MapTableType) => {
  const [orderBy, setOrderBy] = useState<keyof MapType>('id');
  const [order, setOrder] = useState<'asc' | 'desc'>('desc');

  const handleSortRequest = (property: keyof MapType) => {
    if (headCells.find((cell) => cell.id === property && cell.disableSorting)) {
      return;
    }

    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const sortedData = data.slice().sort((a, b) => {
    const aValue = a[orderBy];
    const bValue = b[orderBy];
    if (order === 'desc') {
      return aValue < bValue ? -1 : 1;
    } else {
      return bValue < aValue ? -1 : 1;
    }
  });

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableSortHead
          orderBy={orderBy}
          order={order}
          handleChange={handleSortRequest}
        />
        <TableSortBody
          data={order === 'asc' ? sortedData : data}
          onUpdate={onUpdate}
        />
      </Table>
    </TableContainer>
  );
};

export default MapTable;
