/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
var numberDaySelected = 0;
var dailyRate = 35;

const MondayButton = document.getElementById('monday');
const TuesdayButton = document.getElementById('tuesday');
const WednesdayButton = document.getElementById('wednesday');
const ThursdayButton = document.getElementById('thursday');
const FridayButton = document.getElementById('friday');

const FullButton = document.getElementById('full');
const HalfButton = document.getElementById('half');
const ClearButton = document.getElementById('clear-button');



/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function OnMondayButtonClicked() {
    if (MondayButton.classList.contains("clicked")){
        numberDaySelected=numberDaySelected;
    } else {
        numberDaySelected=numberDaySelected+1;
        console.log(numberDaySelected);
    }
    MondayButton.classList.add("clicked");
    ReCalculate();
}
MondayButton.onclick = OnMondayButtonClicked;

function OnTuesdayButtonClicked() {
    if (TuesdayButton.classList.contains("clicked")){
        numberDaySelected=numberDaySelected;
    } else {
        numberDaySelected=numberDaySelected+1;
        console.log(numberDaySelected);
    }
    TuesdayButton.classList.add("clicked");
    ReCalculate();
}
TuesdayButton.onclick = OnTuesdayButtonClicked;

function OnWednesdayButtonClicked() {
    if (WednesdayButton.classList.contains("clicked")){
        numberDaySelected=numberDaySelected;
    } else {
        numberDaySelected=numberDaySelected+1;
    }
    WednesdayButton.classList.add("clicked");
    ReCalculate();
}
WednesdayButton.onclick = OnWednesdayButtonClicked;

function OnThursdayButtonClicked() {
    if (ThursdayButton.classList.contains("clicked")){
        numberDaySelected=numberDaySelected;
    } else {
        numberDaySelected=numberDaySelected+1;
    }
    ThursdayButton.classList.add("clicked");
    ReCalculate();
}
ThursdayButton.onclick = OnThursdayButtonClicked;

function OnFridayButtonClicked() {
    if (FridayButton.classList.contains("clicked")){
        numberDaySelected=numberDaySelected;
    } else {
        numberDaySelected=numberDaySelected+1;
    }
    FridayButton.classList.add("clicked");
    ReCalculate();
}
FridayButton.onclick = OnFridayButtonClicked;


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function OnClearButtonClicked() {
    MondayButton.classList.remove("clicked");
    TuesdayButton.classList.remove("clicked");
    WednesdayButton.classList.remove("clicked");
    ThursdayButton.classList.remove("clicked");
    FridayButton.classList.remove("clicked");
    HalfButton.classList.remove("clicked");
    FullButton.classList.add("clicked");
    numberDaySelected = 0;
    dailyRate = 35;
    ReCalculate();
}
ClearButton.onclick = OnClearButtonClicked;


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function OnHalfButtonClicked() {
    FullButton.classList.remove("clicked");
    HalfButton.classList.add("clicked");
    dailyRate=20;
    ReCalculate();
}
HalfButton.onclick = OnHalfButtonClicked;



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function OnFullButtonClicked() {
    HalfButton.classList.remove("clicked");
    FullButton.classList.add("clicked");
    dailyRate=35;
    ReCalculate();
}
FullButton.onclick = OnFullButtonClicked;



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

const calculatedCost = document.getElementById('calculated-cost');
function ReCalculate() {
    const cost=numberDaySelected*dailyRate;
    calculatedCost.innerHTML= cost.toFixed(2);
}

