//*This component will render the header title of our app
function Header() {
  return (
    <div>
      <header className="header">React to do list</header>
    </div>
  );
}

//*This component will render a greeting message depending on the hour of the day to our user
class Greeting extends React.Component {
  render() {
    //*declaring our variable to set the value of an object Date https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
    const date = new Date();
    //*using the prototype getHours that returns the hour for the specified date, according to local time.
    //*https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getHours
    const hours = date.getHours();
    //*declaring a variable time of day to use on our if else
    let timeOfDay;
    //*depending on the hour of the day our if else loop will return morning, afternoon and night depending on the hour of the day
    if (hours < 12) {
      timeOfDay =
        "morning the current time is:" +
        new Date().toLocaleTimeString("en-US", {
          hour12: false,
          hour: "numeric",
          minute: "numeric",
        });
    } else if (hours >= 12 && hours < 17) {
      timeOfDay =
        "afternoon the current time is:" +
        new Date().toLocaleTimeString("en-US", {
          hour12: false,
          hour: "numeric",
          minute: "numeric",
        });
    } else {
      timeOfDay =
        "night the current time is:" +
        new Date().toLocaleTimeString("en-US", {
          hour12: false,
          hour: "numeric",
          minute: "numeric",
        });
    }
    //*the result of the above will be returned as an H1 with the format Good + the time of the day
    return <h1 className="greeting">Good {timeOfDay} !!</h1>;
  }
}
