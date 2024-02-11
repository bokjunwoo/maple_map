import { Box, SelectChangeEvent } from '@mui/material';
import { HeadCell, MapType } from '../../../data/mapTypes';
import SelectCellUI from './SelectCellUI';
import SwitchCellUI from './SwitchCellUI';
import {
  calculateNumberOfMonsters,
  calculateReward,
  sumArrayOrNumber,
} from '../../../util/utils';
import { HALF_HOUR } from '../../../constants/constants';

type TableCellContentUIType = {
  headCell: HeadCell;
  item: MapType;
  handleSwitchChange: (value: boolean) => void;
  handleSelectChange: (event: SelectChangeEvent<number>) => void;
};

const TableCellContentUI = ({
  headCell,
  item,
  handleSwitchChange,
  handleSelectChange,
}: TableCellContentUIType) => {
  switch (headCell.id) {
    case 'rune':
      return <SwitchCellUI checked={item.rune} onChange={handleSwitchChange} />;
    case 'burning_field':
      return (
        <SelectCellUI
          value={item.burning_field}
          onChange={handleSelectChange}
        />
      );
    case 'number_of_monster':
      return <Box>{sumArrayOrNumber(item.number_of_monster)}</Box>;
    case 'half_hour_maximum_monster_experience':
      return (
        <Box>
          {calculateReward(
            item.monster_experience,
            item.number_of_monster,
            HALF_HOUR
          ).toLocaleString()}
        </Box>
      );
    case 'half_hour_number_of_monster':
      return (
        <Box>
          {calculateNumberOfMonsters(
            item.number_of_monster,
            HALF_HOUR
          ).toLocaleString()}
        </Box>
      );

    case 'half_hour_net_meso':
      return (
        <Box>
          {calculateReward(
            item.monster_money,
            item.number_of_monster,
            HALF_HOUR
          ).toLocaleString()}
        </Box>
      );

    default:
      return <Box>{item[headCell.id]}</Box>;
  }
};

export default TableCellContentUI;
