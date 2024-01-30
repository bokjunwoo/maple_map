import {
  TableCell,
  SelectChangeEvent,
  TableRow,
  IconButton,
} from '@mui/material';
import { headCells } from '../../data/mapDatas';
import { MapType } from '../../data/mapTypes';
import SelectCellUI from './TableUI/SelectCellUI';
import SwitchCellUI from './TableUI/SwitchCellUI';
import { SetStateAction, useState } from 'react';
import { symbolsColor } from '../../data/colorDatas';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MapDetailCollapseUI from './TableCollapse';

type TableDataRowType = {
  data: MapType[];
  item: MapType;
  onUpdate: (updatedData: SetStateAction<MapType[]>) => void;
};

const TableDataRow = ({ data, item, onUpdate }: TableDataRowType) => {
  const [open, setOpen] = useState(false);

  const handleSwitchChange = (value: boolean) => {
    const updatedData = data.map((map) =>
      map.map_name === item.map_name ? { ...map, rune: value } : map
    );
    onUpdate(updatedData);
  };
  const handleSelectChange = (event: SelectChangeEvent<number>) => {
    const updatedData = data.map((map) =>
      map.map_name === item.map_name
        ? { ...map, burning_field: Number(event.target.value) }
        : map
    );
    onUpdate(updatedData);
  };

  const backgroundColor = symbolsColor[item.map_key].bgColor;

  return (
    <>
      <TableRow sx={{ bgcolor: backgroundColor }}>
        <TableCell>
          <IconButton onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>

        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.id !== 'map_key' ? 'center' : 'inherit'}
          >
            {headCell.id === 'rune' ? (
              <SwitchCellUI checked={item.rune} onChange={handleSwitchChange} />
            ) : headCell.id === 'burning_field' ? (
              <SelectCellUI
                value={item.burning_field}
                onChange={handleSelectChange}
              />
            ) : (
              item[headCell.id]
            )}
          </TableCell>
        ))}
      </TableRow>
      <MapDetailCollapseUI open={open} mapInfo={item} />
    </>
  );
};

export default TableDataRow;
