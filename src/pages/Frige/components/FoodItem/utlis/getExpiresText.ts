import { getDeclination } from '@utils/getDeclination';
import { ExpirationStatus } from '../types';

const ONE_DAY = 24 * 60 * 60 * 1000

export const getExpiresText = (timestamp: number) => {
  const currentTs = Date.now();
  const daysLast = Math.floor((timestamp - currentTs) / ONE_DAY);
  const declination = getDeclination(daysLast, ['день', 'дня', 'дней']);

  if (daysLast > 365) {
    return {
      text: `Истечет не скоро`,
      status: ExpirationStatus.NotExpired,
    };
  }

  if (daysLast > 62) {
    return {
      text: `Несколько месяцев`,
      status: ExpirationStatus.NotExpired,
    };
  }

  if (daysLast > 31) {
    return {
      text: `Больше месяца`,
      status: ExpirationStatus.NotExpired,
    };
  }

  if (daysLast > 0) {
    return {
      text: `Осталось ${daysLast} ${declination}`,
      status: ExpirationStatus.NotExpired,
    };
  } else if (daysLast < 0) {
    return {
      text: `Cрок истек ${Math.abs(daysLast)} ${declination} назад`,
      status: ExpirationStatus.Expired,
    };
  }

  return {
    text: `Истекает сегодня`,
    status: ExpirationStatus.OneDayLast,
  };
};
