import { TableRow, TableCell } from '@mui/material';

const EmptyDataRowUI = () => (
  <TableRow>
    <TableCell colSpan={6}>
      <span>선택된 맵 데이터가 없습니다</span>
    </TableCell>
  </TableRow>
);

export default EmptyDataRowUI;
