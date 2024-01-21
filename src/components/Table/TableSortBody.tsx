import { TableBody, TableRow, TableCell } from '@mui/material';
import { headCells } from '../../data/mapDatas';
import { MapType } from '../../data/mapTypes';
import EmptyDataRowUI from './TableUI/EmptyDataRowUI';
import TextFieldCellUI from './TableUI/TextFieldCellUI';
import SwitchCellUI from './TableUI/SwitchCellUI';
import { SetStateAction } from 'react';

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
          <TableRow key={row.map_name}>
            {headCells.map((headCell) => (
              <TableCell
                key={headCell.id}
                align={headCell.id !== 'map_name' ? 'center' : 'inherit'}
              >
                {headCell.id === 'rune' ? (
                  <SwitchCellUI
                    checked={row.rune}
                    onChange={(value) => {
                      const updatedData = data.map((map) =>
                        map.map_name === row.map_name
                          ? { ...map, rune: value }
                          : map
                      );
                      onUpdate(updatedData);
                    }}
                  />
                ) : headCell.id === 'burning_field' ? (
                  <TextFieldCellUI
                    value={row.burning_field}
                    onChange={(value) => {
                      const updatedData = data.map((map) =>
                        map.map_name === row.map_name
                          ? { ...map, burning_field: value }
                          : map
                      );
                      onUpdate(updatedData);
                    }}
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
