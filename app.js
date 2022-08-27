const REQUIRED = "REQUIRED";
const VALID = "VALID";
const MAILVALID = "MAILVALID";
const NULL = "NULL";
const EMPTY = "EMPTY";
const LENGTH = "LENGTH";
//check methods validate
function valiDate(value, myIdval) {
    if (myIdval === REQUIRED) {
        return value.trim().length > 0;
    }
    if (myIdval === VALID) {
        return value.trim().length !== 10;
    }
    if (myIdval === MAILVALID) {
        return value.trim().length <= 0;
    }
    if (myIdval === NULL) {
        return value != null;
    }
    if (myIdval === LENGTH) {
        return value.length != 0;
    }
    if (myIdval === EMPTY) {
        return value == "";
    }
}
function createData() {
    // All forms value define
    const enterFname = document.getElementById("fname").value;
    const enterLname = document.getElementById("lname").value;
    const enterEmail = document.getElementById("email").value;
    const enterNumb = document.getElementById("number").value;
    const enterGender = document.querySelector('input[name="gender"]:checked');
    // const enterCheck = document.querySelectorAll('input[name="sin_mar"]');
    const entrAddress = document.getElementById("address").value;
    //condition to run line by line form validation check
    if (!valiDate(enterFname, REQUIRED)) { // first name validation
        throw new Error("InValid Input: First Name Wrong!");
    }
    if (!valiDate(enterLname, REQUIRED)) { // last name validation
        throw new Error("InValid Input: Last Name Wrong!");
    }
    /* 	email RegEx was define.
            / / start to seraching, ^ global seraching, \w serch word, + matchingwaord @, [a-zA-Z] any character lowercase and uppercase, ? mathcing one time, $ end is string
      */
    var filter = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]$/;
    if (!valiDate(enterEmail, REQUIRED) || filter.test(enterEmail, MAILVALID)) { // email validation and check RegEx
        throw new Error("InValid Input: Email Wrong!");
    }
    if (!valiDate(enterNumb, REQUIRED) || enterNumb.trim().length !== 10) { // number validation
        number.focus();
        throw new Error("InValid Input: Mobile Number Wrong! its 10 digits");
    }
    if (enterGender !== null) { // gender validation
        enterGender;
    } else {
        throw new Error("Please check Gender!");
    }
    if (!valiDate(entrAddress, REQUIRED)) { // address validation
        throw new Error("Please Enter Your Address!");
    }
    // return to form value
    return {
        enterFirstName: enterFname,
        enterLastname: enterLname,
        enterEmail: enterEmail,
        enterNumber: enterNumb,
        enterGender: enterGender,
        entrAddress: entrAddress,
    };
}
function formSubmit(event) {
    event.preventDefault();
    // conditon check and execute if any error catch call
    try {
        const userData = createData();
        console.log(userData);
    } catch (error) {
        swal({
            icon: "info",
            title: error.message,
        });
    }
}
function connectForm(formId, formSubmitHandler) {// connect to form
    const formData = document.getElementById(formId);
    formData.addEventListener("submit", formSubmitHandler);
}
connectForm("form", formSubmit);