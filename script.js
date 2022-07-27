var currentDay = $("#currentDay");
var input1 = $("#input1");
var input2 = $("#input2");
var input3 = $("#input3");
var input4 = $("#input4");
var input5 = $("#input5");
var input6 = $("#input6");
var input7 = $("#input7");
var input8 = $("#input8");
var input9 = $("#input9");
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
var allInputs = [input1, input2, input3, input4, input5, input6, input7, input8, input9];
var allHours = [hour1.text(), hour2.text(), hour3.text(), hour4.text(), hour5.text(), hour6.text(), hour7.text(), hour8.text(), hour9.text()];
var everyInput = $(".allinputs");

currentDay.text(moment().format("dddd, MMMM Do"))

everyInput.prop("disabled", false);

function inputToggle1() {
    if (input1.prop("disabled")) {
        input1.prop("disabled", false);
    } else if (!input1.prop("disabled")) {
        input1.prop("disabled", true);
    }
}
function inputToggle2() {
    if (input2.prop("disabled")) {
        input2.prop("disabled", false);
    } else if (!input2.prop("disabled")) {
        input2.prop("disabled", true);
    }
}
function inputToggle3() {
    if (input3.prop("disabled")) {
        input3.prop("disabled", false);
    } else if (!input3.prop("disabled")) {
        input3.prop("disabled", true);
    }
}
function inputToggle4() {
    if (input4.prop("disabled")) {
        input4.prop("disabled", false);
    } else if (!input4.prop("disabled")) {
        input4.prop("disabled", true);
    }

}
function inputToggle5() {
    if (input5.prop("disabled")) {
        input5.prop("disabled", false);
    } else if (!input5.prop("disabled")) {
        input5.prop("disabled", true);
    }

}
function inputToggle6() {
    if (input6.prop("disabled")) {
        input6.prop("disabled", false);
    } else if (!input6.prop("disabled")) {
        input6.prop("disabled", true);
    }

}
function inputToggle7() {
    if (input7.prop("disabled")) {
        input7.prop("disabled", false);
    } else if (!input7.prop("disabled")) {
        input7.prop("disabled", true);
    }

}
function inputToggle8() {
    if (input8.prop("disabled")) {
        input8.prop("disabled", false);
    } else if (!input8.prop("disabled")) {
        input8.prop("disabled", true);
    }

}
function inputToggle9() {
    if (input9.prop("disabled")) {
        input9.prop("disabled", false);
    } else if (!input9.prop("disabled")) {
        input9.prop("disabled", true);
    }

}

$(".container").on("click", function (event) {
    event.preventDefault();
    var element = event.target;

    if (element.matches(".disableinput1")) {
        inputToggle1();
    } else if (element.matches(".disableinput2")) {
        inputToggle2();
    } else if (element.matches(".disableinput3")) {
        inputToggle3();
    } else if (element.matches(".disableinput4")) {
        inputToggle4();
    } else if (element.matches(".disableinput5")) {
        inputToggle5();
    } else if (element.matches(".disableinput6")) {
        inputToggle6();
    } else if (element.matches(".disableinput7")) {
        inputToggle7();
    } else if (element.matches(".disableinput8")) {
        inputToggle8();
    } else if (element.matches(".disableinput9")) {
        inputToggle9();
    }
});

for (var i = 0; i < allHours.length; i++) {
    if (moment(allHours[i], "LT").format("HH") < moment().format("HH")) {
        allInputs[i].removeClass("future");
        allInputs[i].removeClass("present");
    } else if (moment(allHours[i], "LT").format("HH") === moment().format("HH")) {
        allInputs[i].removeClass("future");
        allInputs[i].removeClass("past");
    } else if (moment(allHours[i], "LT").format("HH") > moment().format("HH")) {
        allInputs[i].removeClass("past");
        allInputs[i].removeClass("present");
    }

    if (moment().format("HH") > 17 || moment().format("HH") < 9) {
        everyInput.addClass("future");
    }
};