import { Box } from '@mui/material';

const calculateSolJanusTooltipPercentage = (level: number) => {
  // 공식: (10 + 스킬 레벨×2)%. 단, 1레벨 10%, 10레벨 37%, 20레벨 67%, 30레벨 100%.
  let relativeLevel = 0;
  let basePercentage = 10;

  if (level < 10) {
    relativeLevel = level;
    basePercentage = 8;
  }

  if (level >= 10 && level < 20) {
    relativeLevel = level - 10;
    basePercentage = 37;
  }

  if (level >= 20 && level < 30) {
    relativeLevel = level - 20;
    basePercentage = 67;
  }

  if (level === 30) {
    return 100;
  }

  const additionalPercentage = Math.floor(relativeLevel * 2);

  const totalPercentage = basePercentage + additionalPercentage;

  return totalPercentage;
};

const SolJanusTooltip = () => {
  const maxLevel = 30;
  const tooltipContent: React.ReactNode[] = [];

  for (let level = 1; level <= maxLevel; level++) {
    const totalPercentage = calculateSolJanusTooltipPercentage(level);

    tooltipContent.push(
      <div key={level}>
        {level} 레벨 : {totalPercentage}%
      </div>
    );
  }

  return <Box sx={{ p: 0.5 }}>{tooltipContent}</Box>;
};

export default SolJanusTooltip;
