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
// Display current date
currentDay.text(moment().format("dddd, MMMM Do"))
// Initially enable all the time blocks
everyInput.prop("disabled", false);
// Clicking one of the buttons next to the schedule saves the scheduled plan for that specific row
$(".container").on("click", function (event) {
    event.preventDefault();
    var element = event.target;

    if (element.matches("#saveinput1")) {
        var sched1 = [];
        allInputs[0].val();
        sched1.push(allInputs[0].val());
        localStorage.setItem("9AM", JSON.stringify(sched1));
    } else if (element.matches("#saveinput2")) {
        var sched2 = [];
        allInputs[1].val();
        sched2.push(allInputs[1].val());
        localStorage.setItem("10AM", JSON.stringify(sched2));
    } else if (element.matches("#saveinput3")) {
        var sched3 = [];
        allInputs[2].val();
        sched3.push(allInputs[2].val());
        localStorage.setItem("11AM", JSON.stringify(sched3));
    } else if (element.matches("#saveinput4")) {
        var sched4 = [];
        allInputs[3].val();
        sched4.push(allInputs[3].val());
        localStorage.setItem("12PM", JSON.stringify(sched4));
    } else if (element.matches("#saveinput5")) {
        var sched5 = [];
        allInputs[4].val();
        sched5.push(allInputs[4].val());
        localStorage.setItem("1PM", JSON.stringify(sched5));
    } else if (element.matches("#saveinput6")) {
        var sched6 = [];
        allInputs[5].val();
        sched6.push(allInputs[5].val());
        localStorage.setItem("2PM", JSON.stringify(sched6));
    } else if (element.matches("#saveinput7")) {
        var sched7 = [];
        allInputs[6].val();
        sched7.push(allInputs[6].val());
        localStorage.setItem("3PM", JSON.stringify(sched7));
    } else if (element.matches("#saveinput8")) {
        var sched8 = [];
        allInputs[7].val();
        sched8.push(allInputs[7].val());
        localStorage.setItem("4PM", JSON.stringify(sched8));
    } else if (element.matches("#saveinput9")) {
        var sched9 = [];
        allInputs[8].val();
        sched9.push(allInputs[8].val());
        localStorage.setItem("5PM", JSON.stringify(sched9));
    }
});
// Function for coloring in an disabling blocks based on current time
function allHourBlocks() {
for (var i = 0; i < allHours.length; i++) {
    if (moment(allHours[i], "LT").format("HH") < moment().format("HH")) {
        allInputs[i].removeClass("future");
        allInputs[i].removeClass("present");
        allInputs[i].prop("disabled", true);
    } else if (moment(allHours[i], "LT").format("HH") === moment().format("HH")) {
        allInputs[i].removeClass("future");
        allInputs[i].removeClass("past");
        allInputs[i].prop("disabled", false);
    } else if (moment(allHours[i], "LT").format("HH") > moment().format("HH")) {
        allInputs[i].removeClass("past");
        allInputs[i].removeClass("present");
        allInputs[i].prop("disabled", false);
    }

    if (moment().format("HH") > 17 || moment().format("HH") < 9) {
        everyInput.addClass("future");
        allInputs[i].prop("disabled", false);
    }
}
};
// Function for storing and rendering the schedule
function renderSched() {
    var storedSched1 = JSON.parse(localStorage.getItem("9AM"));
    allInputs[0].val(storedSched1);
    var storedSched2 = JSON.parse(localStorage.getItem("10AM"));
    allInputs[1].val(storedSched2);
    var storedSched3 = JSON.parse(localStorage.getItem("11AM"));
    allInputs[2].val(storedSched3);
    var storedSched4 = JSON.parse(localStorage.getItem("12PM"));
    allInputs[3].val(storedSched4);
    var storedSched5 = JSON.parse(localStorage.getItem("1PM"));
    allInputs[4].val(storedSched5);
    var storedSched6 = JSON.parse(localStorage.getItem("2PM"));
    allInputs[5].val(storedSched6);
    var storedSched7 = JSON.parse(localStorage.getItem("3PM"));
    allInputs[6].val(storedSched7);
    var storedSched8 = JSON.parse(localStorage.getItem("4PM"));
    allInputs[7].val(storedSched8);
    var storedSched9 = JSON.parse(localStorage.getItem("5PM"));
    allInputs[8].val(storedSched9);
}
// Render schedule when refreshing the page and keep all the time blocks colored
renderSched();
allHourBlocks();