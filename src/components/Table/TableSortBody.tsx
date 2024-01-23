import { TableBody } from '@mui/material';
import { MapType } from '../../data/mapTypes';
import EmptyDataRowUI from './TableUI/EmptyDataRowUI';
import { SetStateAction } from 'react';
import TableDataRow from './TableDataRow';

type TableSortBodyType = {
  data: MapType[];
  onUpdate: (updatedData: SetStateAction<MapType[]>) => void;
};

const TableSortBody = ({ data, onUpdate }: TableSortBodyType) => {
  return (
    <TableBody>
      {data.length === 0 ? (
        <EmptyDataRowUI />
      ) : (
        data.map((row) => (
          <TableDataRow
            data={data}
            item={row}
            onUpdate={onUpdate}
            key={row.map_name}
          />
        ))
      )}
    </TableBody>
  );
};

export default TableSortBody;
