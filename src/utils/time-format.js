import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(duration);
dayjs.extend(relativeTime);

export const getShortDateFormat = (date) => {
  return dayjs(date).format('YYYY');
};

export const getFullDateFormat = (date) => {
  return dayjs(date).format('DD MMMM YYYY');
};

export const getCommentDateFormat  = (date) => {
  return dayjs(date).format('YYYY/MM/DD HH:MM');
};

export const runtimeAdapter = (minutes) => {
  return dayjs.duration(minutes, 'm').hours() + 'h ' + dayjs.duration(minutes, 'm').minutes() + 'm';
};

// export const statisticsRuntimeAdapter = (minutes) => {
//   return {
//     hours: dayjs.duration(minutes, 'm').hours(),
//     minutes: dayjs.duration(minutes, 'm').minutes(),
//   };
// };
