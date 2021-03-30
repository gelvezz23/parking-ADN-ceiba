import { Days } from './../components/Days';

export const getSundayOnWeek = (sundayPosition: number) => {
  if (new Date().getDay() === 0 || new Date().getDay() === -1) {
    return Days[sundayPosition];
  } else {
    return Days[new Date().getDay() - 1];
  }
};
