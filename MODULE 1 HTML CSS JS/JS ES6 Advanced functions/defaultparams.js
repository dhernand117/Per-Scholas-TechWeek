//By setting a value to the parameter instead of getting undefined if the function is not filled we will get whatever value is declared to it
const leadSinger = (artist = "a person") => {
    console.log(`${artist} is the lead singer of Tool`);
}

leadSinger();
leadSinger("Maynard James Keenan");

const shopping = (food = "something") => console.log(`I'm going to buy ${food} from the grocery shop`);

shopping();
shopping("milk");