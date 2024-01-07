import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import { AraneRiverMapData, headCells } from '../data/mapDatas';
import TableSortHead from './Table/TableSortHead';
import { MapType } from '../data/mapTypes';
import { useState } from 'react';
import TableSortBody from './Table/TableSortBody';

export default function MapTable() {
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

  const sortedData = AraneRiverMapData.소멸의여로.slice().sort((a, b) => {
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
        <TableSortBody data={sortedData} />
      </Table>
    </TableContainer>
  );
}
