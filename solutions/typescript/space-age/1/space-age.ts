const EARTH_YEAR_SECONDS = 31_557_600;

export function age(planet: string, seconds: number): number {
  switch (planet) {
    case "mercury":
      return Number((seconds / (EARTH_YEAR_SECONDS * 0.2408467)).toFixed(2));
    case "venus":
      return Number((seconds / (EARTH_YEAR_SECONDS * 0.61519726)).toFixed(2));
    case "earth":
      return Number((seconds / EARTH_YEAR_SECONDS).toFixed(2));
    case "mars":
      return Number((seconds / (EARTH_YEAR_SECONDS * 1.8808158)).toFixed(2));
    case "jupiter":
      return Number((seconds / (EARTH_YEAR_SECONDS * 11.862615)).toFixed(2));
    case "saturn":
      return Number((seconds / (EARTH_YEAR_SECONDS * 29.447498)).toFixed(2));
    case "uranus":
      return Number((seconds / (EARTH_YEAR_SECONDS * 84.016846)).toFixed(2));
    case "neptune":
      return Number((seconds / (EARTH_YEAR_SECONDS * 164.79132)).toFixed(2));
    default:
      throw new Error("Invalid planet");
  }
}
