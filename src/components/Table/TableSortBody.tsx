import { TableBody, TableRow, TableCell } from '@mui/material';
import { headCells } from '../../data/mapDatas';
import { MapType } from '../../data/mapTypes';
import EmptyDataRowUI from './TableUI/EmptyDataRowUI';
import TextFieldCellUI from './TableUI/TextFieldCellUI';
import SwitchCellUI from './TableUI/SwitchCellUI';

type TableSortBodyType = {
  data: MapType[];
};

const TableSortBody = ({ data }: TableSortBodyType) => {
  return (
    <TableBody>
      {data.length === 0 ? (
        <EmptyDataRowUI />
      ) : (
        data.map((row) => (
          <TableRow key={row.map_name}>
            {headCells.map((headCell) => (
              <TableCell
                key={headCell.id}
                align={headCell.id !== 'map_name' ? 'center' : 'inherit'}
              >
                {headCell.id === 'rune' ? (
                  <SwitchCellUI
                    checked={row.rune}
                    onChange={(value) => console.log(`New value: ${value}`)}
                  />
                ) : headCell.id === 'burning_field' ? (
                  <TextFieldCellUI
                    value={row.burning_field}
                    onChange={(value) => console.log(`New value: ${value}`)}
                  />
                ) : (
                  row[headCell.id]
                )}
              </TableCell>
            ))}
          </TableRow>
        ))
      )}
    </TableBody>
  );
};

export default TableSortBody;
