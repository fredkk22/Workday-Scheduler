// Declare Variables
var currentDay = $("#currentDay");
var hour1 = $(".hour1").text("9:00 AM");
var hour2 = $(".hour2").text("10:00 AM");
var hour3 = $(".hour3").text("11:00 AM");
var hour4 = $(".hour4").text("12:00 PM");
var hour5 = $(".hour5").text("1:00 PM");
var hour6 = $(".hour6").text("2:00 PM");
var hour7 = $(".hour7").text("3:00 PM");
var hour8 = $(".hour8").text("4:00 PM");
var hour9 = $(".hour9").text("5:00 PM");
var past = $(".past");
var present = $(".present");
var future = $(".future");
var everyInput = $(".allinputs");
var allInputs = [$("#input1"), $("#input2"), $("#input3"), $("#input4"), $("#input5"), $("#input6"), $("#input7"), $("#input8"), $("#input9")];
var allHours = [hour1.text(), hour2.text(), hour3.text(), hour4.text(), hour5.text(), hour6.text(), hour7.text(), hour8.text(), hour9.text()];
var allSaves = ["#saveinput1", "#saveinput2", "#saveinput3", "#saveinput4", "#saveinput5", "#saveinput6", "#saveinput7", "#saveinput8", "#saveinput9"]
var allSched = [[], [], [], [], [], [], [], [], []]
var allTimes = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]

// Display current date
currentDay.text(moment().format("dddd, MMMM Do"))

// Initially enable all the time blocks
everyInput.attr("disabled", false);

// Function for coloring in an disabling blocks based on current time
function allHourBlocks() {
    // For Loop
    for (var i = 0; i < allHours.length; i++) {
        if (moment(allHours[i], "LT").format("HH") < moment().format("HH")) {
            allInputs[i].addClass("past");
            allInputs[i].attr("disabled", true);
        } else if (moment(allHours[i], "LT").format("HH") === moment().format("HH")) {
            allInputs[i].addClass("present");
            allInputs[i].attr("disabled", false);
        } else if (moment(allHours[i], "LT").format("HH") > moment().format("HH")) {
            allInputs[i].addClass("future");
            allInputs[i].attr("disabled", false);
        }

        if (moment().format("HH") > 17 || moment().format("HH") < 9) {
            currentDay.text("Good work today! Please go home.");
        }
    }
};

// Function for storing and rendering the schedule
function renderSched() {
    // For Loop
    for (i = 0; i < allInputs.length; i++) {
        var schedGet = JSON.parse(localStorage.getItem(allTimes[i]));
        allInputs[i].val(schedGet);
    }
}

// Clicking one of the buttons next to the schedule saves the scheduled plan for that specific row
$(".container").on("click", function (event) {
    event.preventDefault();
    var element = event.target;
    // For Loop
    for (var i = 0; i < allSched.length; i++) {
        if (element.matches(allSaves[i])) {
            allSched[i].push(allInputs[i].val());
            localStorage.setItem(allTimes[i], JSON.stringify(allSched[i]));
        }
    }
});

// Render schedule when refreshing the page and keep all the time blocks colored
renderSched();
allHourBlocks();