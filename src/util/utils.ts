import { HandleCouponValueChangeParams } from './Tutils';

export const numberAndDotRegex = /^\d*(\.\d{0,2})?$/;

export const handleSelectCouponValueChange = ({
  event,
  currentValue,
  setExpIncrease,
  setValue,
}: HandleCouponValueChangeParams): void => {
  const updatedValue = Number(event.target.value);

  if (currentValue !== updatedValue) {
    setExpIncrease(
      (prevExpIncrease) => prevExpIncrease - currentValue + updatedValue
    );
  }

  setValue(event.target.value);
};
