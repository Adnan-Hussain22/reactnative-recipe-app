import { TimeScale } from "src/typings/time";

const hourToSec = (hour: number) => hour * 60 * 60;

const minToSec = (min: number) => min * 60;

export const convertToSec = (scale: TimeScale, time: number) => {
  if (scale === TimeScale.HOUR) {
    return hourToSec(time);
  }
  if (scale === TimeScale.MIN) {
    return minToSec(time);
  }
};
