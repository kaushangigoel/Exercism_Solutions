public class CarsAssemble {
    private double productionRate;
    public double productionRatePerHour(int speed) {
         this.productionRate= speed* 221; //per hour
        if(speed>=10)
            return this.productionRate*0.77;
        else if(speed >=9)
            return this.productionRate*0.80;
        else if(speed>=5)
            return this.productionRate*0.90;
        else
            return this.productionRate;
    }

    public int workingItemsPerMinute(int speed) {
        return (int)(productionRatePerHour(speed)/60);
    }
}
