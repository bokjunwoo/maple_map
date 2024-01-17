import {
  TableBody,
  TableRow,
  TableCell,
  Switch,
  TextField,
} from '@mui/material';
import { headCells } from '../../data/mapDatas';
import { MapType } from '../../data/mapTypes';

type TableSortBodyType = {
  data: MapType[];
};

const TableSortBody = ({ data }: TableSortBodyType) => {
  return (
    <TableBody>
      {data.length === 0 ? (
        <TableRow>
          <TableCell colSpan={6}>
            <span>선택된 맵 데이터가 없습니다</span>
          </TableCell>
        </TableRow>
      ) : (
        data.map((row) => (
          <TableRow key={row.map_name}>
            {headCells.map((headCell) => (
              <TableCell
                key={headCell.id}
                align={headCell.id !== 'map_name' ? 'center' : 'inherit'}
              >
                {headCell.id === 'rune' ? (
                  <Switch />
                ) : headCell.id === 'burning_field' ? (
                  <TextField
                    type="text"
                    variant="outlined"
                    size="small"
                    value={row.burning_field + 10}
                    style={{ textAlign: 'center' }}
                    inputProps={{
                      sx: {
                        width: '22px',
                        height: '22px',
                        p: 1,
                        textAlign: 'center',
                        m: 0,
                      },
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
