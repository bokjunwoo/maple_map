import {
  HandleCouponValueInputChangeParams,
  HandleCouponValueSelectChangeParams,
} from './Tutils';

export const numberAndDotRegex = /^\d*(\.\d{0,2})?$/;

export const numberRegex = /^[0-9]*$/;

export const handleSelectValueChange = ({
  event,
  currentValue,
  setExpIncrease,
  setValue,
}: HandleCouponValueSelectChangeParams): void => {
  const updatedValue = Number(event.target.value);

  if (currentValue !== updatedValue) {
    setExpIncrease(
      (prevExpIncrease) => prevExpIncrease - currentValue + updatedValue
    );
  }

  setValue(event.target.value);
};

export const handleInputValueChange = ({
  event,
  currentValue,
  setExpIncrease,
  setValue,
}: HandleCouponValueInputChangeParams): void => {
  const updatedValue = Number(event.target.value);

  if (currentValue !== updatedValue) {
    setExpIncrease(
      (prevExpIncrease) => prevExpIncrease - currentValue + updatedValue
    );
  }

  setValue(event.target.value);
};
