import { Box, SelectChangeEvent } from '@mui/material';
import { HeadCell, MapType } from '../../../data/mapTypes';
import SelectCellUI from './SelectCellUI';
import SwitchCellUI from './SwitchCellUI';
import {
  calculateMonsterExpReward,
  calculateMonsterMesoReward,
  calculateNumberOfMonsters,
  sumArrayOrNumber,
} from '../../../util/utils';
import { HALF_HOUR } from '../../../constants/constants';
import { useGlobalState } from '../../../context/GlobalStateProvider';

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
  const { level, expRate } = useGlobalState();

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
          {calculateMonsterExpReward({
            expOfMonster: item.monster_experience,
            numberOfMonsters: item.number_of_monster,
            time: HALF_HOUR,
            expRate,
            playerLevel: level,
            monsterLevel: item.monster_level,
          }).toLocaleString()}
        </Box>
      );
    case 'half_hour_number_of_monster':
      return (
        <Box>
          {calculateNumberOfMonsters({
            numberOfMonsters: item.number_of_monster,
            time: HALF_HOUR,
          }).toLocaleString()}
        </Box>
      );

    case 'half_hour_net_meso':
      return (
        <Box>
          {calculateMonsterMesoReward({
            mesoOfMonster: item.monster_money,
            numberOfMonsters: item.number_of_monster,
            time: HALF_HOUR,
          }).toLocaleString()}
        </Box>
      );

    default:
      return <Box>{item[headCell.id]}</Box>;
  }
};

export default TableCellContentUI;
