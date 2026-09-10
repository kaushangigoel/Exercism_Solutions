  const MIN_IN_DAY=24 * 60;

export class Clock {
  private time: number =0;
  
  constructor(hour: number, minute?: number | undefined) {
    let total_min= hour * 60 + (minute??0);
    
    let time = total_min % MIN_IN_DAY;
    this.time = time<0 ? time+ MIN_IN_DAY : time;
  }
    
  public toString(): string {
    return (Math.floor(this.time/60).toString().padStart(2,'0')+ ":" + 
            (this.time%60).toString().padStart(2,'0'));
  }

  public plus(minutes: number): Clock {
      return(new Clock(0, this.time+minutes));
  }

  public minus(minutes: number): Clock {
    return(new Clock(0, this.time-minutes));
  }

  public equals(other: Clock): boolean {
    return this.time == other.time;
  }
}
