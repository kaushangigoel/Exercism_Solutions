export class Gigasecond {
  private startDate: Date;

  constructor(date: Date) {
    this.startDate = date;
  }

  public date(): Date {
    const GIGASECOND = 1_000_000_000;
    const milliseconds = GIGASECOND * 1000;

    return new Date(this.startDate.getTime() + milliseconds);
  }
}