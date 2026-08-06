const EARTH_YEAR_SECONDS = 31_557_600;

export function age(planet: string, seconds: number): number {
  const orbit_period: Record<string, number>={
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
};
return Number((seconds/(EARTH_YEAR_SECONDS*orbit_period[planet])).toFixed(2));
  
}
