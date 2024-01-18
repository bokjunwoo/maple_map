import { Box } from '@mui/material';

const calculateHolySymbolPercentage = (level: number) => {
  // 공식: (20 + 스킬 레벨×0.5)%. 소수점은 버린다.
  const basePercentage = 20;
  const additionalPercentage = Math.floor(level * 0.5);
  const totalPercentage = basePercentage + additionalPercentage;

  return totalPercentage;
};

const HolySymbolTooltip = () => {
  const maxLevel = 30;
  const tooltipContent: React.ReactNode[] = [];

  for (let level = 1; level <= maxLevel; level++) {
    const totalPercentage = calculateHolySymbolPercentage(level);

    switch (level) {
      case 1:
        tooltipContent.push(
          <div key={level}>
            {level} 레벨 : {totalPercentage}%
          </div>
        );
        break;
      case 30:
        tooltipContent.push(
          <div key={level}>
            {level} 레벨 : {totalPercentage}%
          </div>
        );
        break;
      default:
        if (level % 2 === 0) {
          tooltipContent.push(
            <div key={`${level}-${level + 1}`}>
              {level} ~ {level + 1} 레벨 : {totalPercentage}%
            </div>
          );
        }
    }
  }

  return <Box sx={{ p: 0.5 }}>{tooltipContent}</Box>;
};

export default HolySymbolTooltip;
