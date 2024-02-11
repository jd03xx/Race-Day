// Generate Race Number for runners
let raceNumber_Reg = Math.floor(Math.random() * 1000) + 1;
const min = 1000;
const max = 5000;
let raceNumber_earlyReg = Math.floor(Math.random() * (max - min) + min);
//console.log(raceNumber_earlyReg);
//console.log(raceNumber_Reg);

//Runners Age
let runnersAge = 18;

// Registration
let registeredEarly = false;

// Start Times
const startTime_earlyAdults = "9:30 am";
const startTime_adults = "11:00 am";
const startTime_youth = "12:30 pm";

if (runnersAge > 18 && registeredEarly == true) {
  let raceNumer = raceNumber_earlyReg;
  console.log(
    `Your start time is at ${startTime_earlyAdults}. Your Race Number is: ${raceNumer}`
  );
} else if(runnersAge > 18 && registeredEarly == false) {
    let raceNumer = raceNumber_Reg;
    console.log(`Your start time is at ${startTime_adults}. Your Race Number is: ${raceNumer}.`);
} else if(runnersAge < 18) {
    let raceNumer = raceNumber_Reg;
    console.log(`Your start time is at ${startTime_youth}. Your Race Number is: ${raceNumer}.`)
} else {
    console.log(`Please see Registration Table.`);
}
