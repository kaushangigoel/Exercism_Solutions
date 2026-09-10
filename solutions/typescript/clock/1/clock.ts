export class Clock {
  private hr: number = 0;
  private min: number = 0;
  
  constructor(hour: number, minute?: number | undefined) {
    this.hr = hour;
    this.min = minute ?? 0;

    //convert min to hours
    this.hr += Math.floor(this.min/60);
      this.min %= 60;

    // If minutes are negative, fix them
  if (this.min < 0) {
    this.min += 60;
  }
  this.hr = this.hr % 24;

  // If hour is negative, bring it back into 0-23
  if (this.hr < 0) 
    this.hr += 24;
  }

  public toString(): string {
    return (this.hr.toString().padStart(2,'0')+ ":" +this.min.toString().padStart(2,'0'));
  }

  public plus(minutes: number): Clock {
      return(new Clock(this.hr, this.min+minutes));
  }

  public minus(minutes: number): Clock {
    return(new Clock(this.hr, this.min-minutes));
  }

  public equals(other: Clock): boolean {
    return this.hr === other.hr && this.min === other.min;
  }
}
