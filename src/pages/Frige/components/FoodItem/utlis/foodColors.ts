const MAX_INT = parseInt('0xFFFFFF', 16);
const MIN_INT = parseInt('0x100000', 16);

export const getColor = (foodType: string): string => {
  let entropy: number = 1;

  for (let i = 0; i < foodType.length; i += 1) {
    // Для поддержки юникода
    if (Number.MAX_SAFE_INTEGER - entropy < 65546) {
      break;
    }

    entropy *= foodType.charCodeAt(i);
  }

  const randomValue = Math.floor(Math.abs(Math.sin(entropy) * Number.MAX_SAFE_INTEGER));
  return `#${(randomValue % (MAX_INT - MIN_INT) + MIN_INT).toString(16)}`;
};
