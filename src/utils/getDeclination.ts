export type Declinations = [string, string, string];

export const getDeclination = (value: number, declinations: Declinations): string => {
  const bigE = Math.abs(value) % 100;
	const lowE = bigE % 10;

	if(bigE > 10 && bigE < 20) {
    return declinations[2];
  }

	if(lowE > 1 && lowE < 5) {
    return declinations[1];
  }

	if(lowE == 1) {
    return declinations[0];
  }

	return declinations[2];
};
