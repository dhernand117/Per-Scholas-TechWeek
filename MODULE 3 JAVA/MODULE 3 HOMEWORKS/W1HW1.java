import java.util.Calendar;
import java.util.Date;

public class W1HW1 {
	static boolean getUp(int currentHour)
	{
	    if(currentHour < 6 || currentHour > 22)	return true;
	    else return false;
	};
	public static void main(String[] args) {

Date dt = new Date();
Calendar calendar = Calendar.getInstance();
calendar.setTime(dt);
int hours = calendar.get(Calendar.HOUR_OF_DAY);

boolean flag = getUp(hours);
if(flag)
	System.out.println("Hour now is: "+ hours + " boolean returned is: " + flag + " so don't wake up");
else
	System.out.println("Hours now is: "+ hours + " boolean returned is: " + flag + " so time to wake up");

	}

}