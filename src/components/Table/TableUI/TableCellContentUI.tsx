import { SelectChangeEvent } from '@mui/material';
import { HeadCell, MapType } from '../../../data/mapTypes';
import SelectCellUI from './SelectCellUI';
import SwitchCellUI from './SwitchCellUI';
import { calculateReward } from '../../../util/utils';

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
    case 'half_hour_maximum_monster_experience':
      return calculateReward(item.monster_experience, item.number_of_monster);
    // case 'half_hour_number_of_monster':
    //   return expCalculation(item);
    case 'half_hour_net_meso':
      return calculateReward(item.monster_money, item.number_of_monster);
    default:
      return item[headCell.id];
  }
};

export default TableCellContentUI;
