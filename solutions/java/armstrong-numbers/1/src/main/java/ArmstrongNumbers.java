class ArmstrongNumbers {

    boolean isArmstrongNumber(int num) {

        int sum=0;
        int original=num;
        int digits = String.valueOf(num).length();

        while (num != 0) {
            int digit = num % 10;
            sum += Math.pow(digit, digits);
            num /= 10;
        }

        if (sum == original)
            return true;
        else
            return false;

    }

}
