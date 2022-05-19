// const togglePassword = document.getElementById('togglePassword');

// const showOrHidePassword = () => {
//   const password = document.getElementById('password');
//   if (password.type === 'password') {
//     document.getElementById ('show').style.display = 'block';
//   } else {
//     document.getElementById ('show').style.display = 'none';
//   }
// };

// togglePassword.addEventListener('change', showOrHidePassword);

const passwordForm = document.getElementById('password-form');
const passwordField = document.getElementById('password-field');

passwordForm.onsubmit = check_password;

function check_password (evt) {
  evt.preventDefault();
    var password = passwordField.value;
    console.log(password)
    if (password == 'realitycheck')
        document.getElementById ('hidden_div').style.display = 'block';
    else
        document.getElementById ('hidden_div').style.display = 'none';
}

//HTML
function fun1() {
  var checkBox = document.getElementById("test-one");
  var textOne = document.getElementById("a");
  var textTwo = document.getElementById("b");
  var textThree = document.getElementById("c");

  if (checkBox.checked == true){
    textOne.style.display = "block";
    textTwo.style.display = "none";
    textThree.style.display = "none";

  } else {
     textOne.style.display = "none";
     textTwo.style.display = "none";
     textThree.style.display = "none"; 
  }
}

function fun2() {
  var checkBox = document.getElementById("test-two");
  var textOne = document.getElementById("a");
  var textTwo = document.getElementById("b");
  var textThree = document.getElementById("c");
    if (checkBox.checked == true){
    textOne.style.display = "none";
    textTwo.style.display = "block";
    textThree.style.display = "none";
  } else {
    textOne.style.display = "none";
    textTwo.style.display = "none";
    textThree.style.display = "none";
  }
}

function fun3() {
  var checkBox = document.getElementById("test-three");
  var textOne = document.getElementById("a");
  var textTwo = document.getElementById("b");
  var textThree = document.getElementById("c");
    if (checkBox.checked == true){
    textOne.style.display = "none";
    textTwo.style.display = "none";
    textThree.style.display = "block";
  } else {
    textOne.style.display = "none";
    textTwo.style.display = "none";
    textThree.style.display = "none";
  }
}


//CSS


function fun4() {
  var checkBox = document.getElementById("test-four");
  var textFour = document.getElementById("d");
  var textFive = document.getElementById("e");
  var textSix = document.getElementById("f");
  var textSeven = document.getElementById("g");

  if (checkBox.checked == true){
    textFour.style.display = "block";
    textFive.style.display = "none";
    textSix.style.display = "none";
    textSeven.style.display = "none";

  } else {
    textFour.style.display = "none";
    textFive.style.display = "none";
    textSix.style.display = "none";
    textSeven.style.display = "none";
  }
}

function fun5() {
  var checkBox = document.getElementById("test-five");
  var textFour = document.getElementById("d");
  var textFive = document.getElementById("e");
  var textSix = document.getElementById("f");
  var textSeven = document.getElementById("g");
    if (checkBox.checked == true){
      textFour.style.display = "none";
      textFive.style.display = "block";
      textSix.style.display = "none";
      textSeven.style.display = "none";
    } else {
      textFour.style.display = "none";
      textFive.style.display = "none";
      textSix.style.display = "none";
      textSeven.style.display = "none";
    }
}

function fun6() {
  var checkBox = document.getElementById("test-six");
  var textFour = document.getElementById("d");
  var textFive = document.getElementById("e");
  var textSix = document.getElementById("f");
  var textSeven = document.getElementById("g");
    if (checkBox.checked == true){
      textFour.style.display = "none";
      textFive.style.display = "none";
      textSix.style.display = "block";
      textSeven.style.display = "none";
  } else {
    textFour.style.display = "none";
    textFive.style.display = "none";
    textSix.style.display = "none";
    textSeven.style.display = "none";  }
}

function fun7() {
  var checkBox = document.getElementById("test-seven");
  var textFour = document.getElementById("d");
  var textFive = document.getElementById("e");
  var textSix = document.getElementById("f");
  var textSeven = document.getElementById("g");
    if (checkBox.checked == true){
      textFour.style.display = "none";
      textFive.style.display = "none";
      textSix.style.display = "none";
      textSeven.style.display = "block";
    } else {
    textFour.style.display = "none";
    textFive.style.display = "none";
    textSix.style.display = "none";
    textSeven.style.display = "none";  }
}




//JAVASCRIPT
function fun8() {
  var checkBox = document.getElementById("test-eight");
  var textEight = document.getElementById("h");
  var textNine = document.getElementById("i");
  var textTen = document.getElementById("j");
  var textEleven = document.getElementById("k");
  var textTwelve = document.getElementById("l");
  var textThirteen = document.getElementById("m");

    if (checkBox.checked == true){
      textEight.style.display = "block";
      textNine.style.display = "none";
      textTen.style.display = "none";
      textEleven.style.display = "none";
      textTwelve.style.display = "none";
      textThirteen.style.display = "none";
    } else {
      textEight.style.display = "none";
      textNine.style.display = "none";
      textTen.style.display = "none";
      textEleven.style.display = "noen";
      textTwelve.style.display = "none";
      textThirteen.style.display = "none";
  }
}

function fun9() {
  var checkBox = document.getElementById("test-nine");
  var textEight = document.getElementById("h");
  var textNine = document.getElementById("i");
  var textTen = document.getElementById("j");
  var textEleven = document.getElementById("k");
  var textTwelve = document.getElementById("l");
  var textThirteen = document.getElementById("m");
    if (checkBox.checked == true){
      textEight.style.display = "none";
      textNine.style.display = "block";
      textTen.style.display = "none";
      textEleven.style.display = "none";
      textTwelve.style.display = "none";
      textThirteen.style.display = "none";
    } else {
      textEight.style.display = "none";
      textNine.style.display = "none";
      textTen.style.display = "none";
      textEleven.style.display = "none";
      textTwelve.style.display = "none";
      textThirteen.style.display = "none";
  }
}
function fun10() {
  var checkBox = document.getElementById("test-ten");
  var textEight = document.getElementById("h");
  var textNine = document.getElementById("i");
  var textTen = document.getElementById("j");
  var textEleven = document.getElementById("k");
  var textTwelve = document.getElementById("l");
  var textThirteen = document.getElementById("m");
    if (checkBox.checked == true){
      textEight.style.display = "none";
      textNine.style.display = "none";
      textTen.style.display = "block";
      textEleven.style.display = "none";
      textTwelve.style.display = "none";
      textThirteen.style.display = "none";
    } else {
      textEight.style.display = "none";
      textNine.style.display = "none";
      textTen.style.display = "none";
      textEleven.style.display = "none";
      textTwelve.style.display = "none";
      textThirteen.style.display = "none";
  }
}
function fun11() {
  var checkBox = document.getElementById("test-eleven");
  var textEight = document.getElementById("h");
  var textNine = document.getElementById("i");
  var textTen = document.getElementById("j");
  var textEleven = document.getElementById("k");
  var textTwelve = document.getElementById("l");
  var textThirteen = document.getElementById("m");
    if (checkBox.checked == true){
      textEight.style.display = "none";
      textNine.style.display = "none";
      textTen.style.display = "none";
      textEleven.style.display = "block";
      textTwelve.style.display = "none";
      textThirteen.style.display = "none";
    } else {
      textEight.style.display = "none";
      textNine.style.display = "none";
      textTen.style.display = "none";
      textEleven.style.display = "none";
      textTwelve.style.display = "none";
      textThirteen.style.display = "none";
  }
}
function fun12() {
  var checkBox = document.getElementById("test-twelve");
  var textEight = document.getElementById("h");
  var textNine = document.getElementById("i");
  var textTen = document.getElementById("j");
  var textEleven = document.getElementById("k");
  var textTwelve = document.getElementById("l");
  var textThirteen = document.getElementById("m");
    if (checkBox.checked == true){
      textEight.style.display = "none";
      textNine.style.display = "none";
      textTen.style.display = "none";
      textEleven.style.display = "none";
      textTwelve.style.display = "block";
      textThirteen.style.display = "none";
    } else {
      textEight.style.display = "none";
      textNine.style.display = "none";
      textTen.style.display = "none";
      textEleven.style.display = "none";
      textTwelve.style.display = "none";
      textThirteen.style.display = "none";
  }
}

function fun13() {
  var checkBox = document.getElementById("test-thirteen");
  var textEight = document.getElementById("h");
  var textNine = document.getElementById("i");
  var textTen = document.getElementById("j");
  var textEleven = document.getElementById("k");
  var textTwelve = document.getElementById("l");
  var textThirteen = document.getElementById("m");
    if (checkBox.checked == true){
      textEight.style.display = "none";
      textNine.style.display = "none";
      textTen.style.display = "none";
      textEleven.style.display = "none";
      textTwelve.style.display = "none";
      textThirteen.style.display = "block";
    } else {
      textEight.style.display = "none";
      textNine.style.display = "none";
      textTen.style.display = "none";
      textEleven.style.display = "none";
      textTwelve.style.display = "none";
      textThirteen.style.display = "none";
  }
}


//PYTHON

function fun14() {
  var checkBox = document.getElementById("test-fourteen");
  var textFourteen = document.getElementById("n");
  var textFifteen = document.getElementById("o");
  var textSixteen = document.getElementById("p");
  var textSeventeen = document.getElementById("q");
  var textEighteen = document.getElementById("r");
  var textNinteen = document.getElementById("s");
  var textTwenty = document.getElementById("t");
    if (checkBox.checked == true){
      textFourteen.style.display = "block";
      textFifteen.style.display = "none";
      textSixteen.style.display = "none";
      textSeventeen.style.display = "none";
      textEighteen.style.display = "none";
      textNinteen.style.display = "none";
      textTwenty.style.display = "none";
    } else {      
      textFourteen.style.display = "none";
      textFifteen.style.display = "none";
      textSixteen.style.display = "none";
      textSeventeen.style.display = "none";
      textEighteen.style.display = "none";
      textNinteen.style.display = "none";
      textTwenty.style.display = "none";
  }
}

function fun15() {
  var checkBox = document.getElementById("test-fifteen");
  var textFourteen = document.getElementById("n");
  var textFifteen = document.getElementById("o");
  var textSixteen = document.getElementById("p");
  var textSeventeen = document.getElementById("q");
  var textEighteen = document.getElementById("r");
  var textNinteen = document.getElementById("s");
  var textTwenty = document.getElementById("t");
    if (checkBox.checked == true){
      textFourteen.style.display = "none";
      textFifteen.style.display = "block";
      textSixteen.style.display = "none";
      textSeventeen.style.display = "none";
      textEighteen.style.display = "none";
      textNinteen.style.display = "none";
      textTwenty.style.display = "none";
    } else {      
      textFourteen.style.display = "none";
      textFifteen.style.display = "none";
      textSixteen.style.display = "none";
      textSeventeen.style.display = "none";
      textEighteen.style.display = "none";
      textNinteen.style.display = "none";
      textTwenty.style.display = "none";
  }
}

function fun16() {
  var checkBox = document.getElementById("test-sixteen");
  var textFourteen = document.getElementById("n");
  var textFifteen = document.getElementById("o");
  var textSixteen = document.getElementById("p");
  var textSeventeen = document.getElementById("q");
  var textEighteen = document.getElementById("r");
  var textNinteen = document.getElementById("s");
  var textTwenty = document.getElementById("t");
    if (checkBox.checked == true){
      textFourteen.style.display = "none";
      textFifteen.style.display = "none";
      textSixteen.style.display = "block";
      textSeventeen.style.display = "none";
      textEighteen.style.display = "none";
      textNinteen.style.display = "none";
      textTwenty.style.display = "none";
    } else {      
      textFourteen.style.display = "none";
      textFifteen.style.display = "none";
      textSixteen.style.display = "none";
      textSeventeen.style.display = "none";
      textEighteen.style.display = "none";
      textNinteen.style.display = "none";
      textTwenty.style.display = "none";
  }
}

function fun17() {
  var checkBox = document.getElementById("test-seventeen");
  var textFourteen = document.getElementById("n");
  var textFifteen = document.getElementById("o");
  var textSixteen = document.getElementById("p");
  var textSeventeen = document.getElementById("q");
  var textEighteen = document.getElementById("r");
  var textNinteen = document.getElementById("s");
  var textTwenty = document.getElementById("t");
    if (checkBox.checked == true){
      textFourteen.style.display = "none";
      textFifteen.style.display = "none";
      textSixteen.style.display = "none";
      textSeventeen.style.display = "block";
      textEighteen.style.display = "none";
      textNinteen.style.display = "none";
      textTwenty.style.display = "none";
    } else {      
      textFourteen.style.display = "none";
      textFifteen.style.display = "none";
      textSixteen.style.display = "none";
      textSeventeen.style.display = "none";
      textEighteen.style.display = "none";
      textNinteen.style.display = "none";
      textTwenty.style.display = "none";
  }
}

function fun18() {
  var checkBox = document.getElementById("test-eighteen");
  var textFourteen = document.getElementById("n");
  var textFifteen = document.getElementById("o");
  var textSixteen = document.getElementById("p");
  var textSeventeen = document.getElementById("q");
  var textEighteen = document.getElementById("r");
  var textNinteen = document.getElementById("s");
  var textTwenty = document.getElementById("t");
    if (checkBox.checked == true){
      textFourteen.style.display = "none";
      textFifteen.style.display = "none";
      textSixteen.style.display = "none";
      textSeventeen.style.display = "none";
      textEighteen.style.display = "block";
      textNinteen.style.display = "none";
      textTwenty.style.display = "none";
    } else {      
      textFourteen.style.display = "none";
      textFifteen.style.display = "none";
      textSixteen.style.display = "none";
      textSeventeen.style.display = "none";
      textEighteen.style.display = "none";
      textNinteen.style.display = "none";
      textTwenty.style.display = "none";
  }
}

function fun19() {
  var checkBox = document.getElementById("test-ninteen");
  var textFourteen = document.getElementById("n");
  var textFifteen = document.getElementById("o");
  var textSixteen = document.getElementById("p");
  var textSeventeen = document.getElementById("q");
  var textEighteen = document.getElementById("r");
  var textNinteen = document.getElementById("s");
  var textTwenty = document.getElementById("t");
    if (checkBox.checked == true){
      textFourteen.style.display = "none";
      textFifteen.style.display = "none";
      textSixteen.style.display = "none";
      textSeventeen.style.display = "none";
      textEighteen.style.display = "none";
      textNinteen.style.display = "block";
      textTwenty.style.display = "none";
    } else {      
      textFourteen.style.display = "none";
      textFifteen.style.display = "none";
      textSixteen.style.display = "none";
      textSeventeen.style.display = "none";
      textEighteen.style.display = "none";
      textNinteen.style.display = "none";
      textTwenty.style.display = "none";
  }
}

function fun20() {
  var checkBox = document.getElementById("test-twenty");
  var textFourteen = document.getElementById("n");
  var textFifteen = document.getElementById("o");
  var textSixteen = document.getElementById("p");
  var textSeventeen = document.getElementById("q");
  var textEighteen = document.getElementById("r");
  var textNinteen = document.getElementById("s");
  var textTwenty = document.getElementById("t");
    if (checkBox.checked == true){
      textFourteen.style.display = "none";
      textFifteen.style.display = "none";
      textSixteen.style.display = "none";
      textSeventeen.style.display = "none";
      textEighteen.style.display = "none";
      textNinteen.style.display = "none";
      textTwenty.style.display = "block";
    } else {      
      textFourteen.style.display = "none";
      textFifteen.style.display = "none";
      textSixteen.style.display = "none";
      textSeventeen.style.display = "none";
      textEighteen.style.display = "none";
      textNinteen.style.display = "none";
      textTwenty.style.display = "none";
  }
}



//C++

function fun21() {
  var checkBox = document.getElementById("test-twentyOne");
  var textTwentyOne = document.getElementById("u");
  var textTwentyTwo = document.getElementById("v");
  var textTwentyThree = document.getElementById("w");
  var textTwentyFour = document.getElementById("x");
  var textTwentyFive = document.getElementById("y");
  var textTwentySix = document.getElementById("z");
  var textTwentySeven = document.getElementById("aa");
    if (checkBox.checked == true){
      textTwentyOne.style.display = "block";
      textTwentyTwo.style.display = "none";
      textTwentyThree.style.display = "none";
      textTwentyFour.style.display = "none";
      textTwentyFive.style.display = "none";
      textTwentySix.style.display = "none";
      textTwentySeven.style.display = "none";
    } else {      
      textTwentyOne.style.display = "none";
      textTwentyTwo.style.display = "none";
      textTwentyThree.style.display = "none";
      textTwentyFour.style.display = "none";
      textTwentyFive.style.display = "none";
      textTwentySix.style.display = "none";
      textTwentySeven.style.display = "none";  
    }
}


function fun22() {
  var checkBox = document.getElementById("test-twentyTwo");
  var textTwentyOne = document.getElementById("u");
  var textTwentyTwo = document.getElementById("v");
  var textTwentyThree = document.getElementById("w");
  var textTwentyFour = document.getElementById("x");
  var textTwentyFive = document.getElementById("y");
  var textTwentySix = document.getElementById("z");
  var textTwentySeven = document.getElementById("aa");
    if (checkBox.checked == true){
      textTwentyOne.style.display = "none";
      textTwentyTwo.style.display = "block";
      textTwentyThree.style.display = "none";
      textTwentyFour.style.display = "none";
      textTwentyFive.style.display = "none";
      textTwentySix.style.display = "none";
      textTwentySeven.style.display = "none";
    } else {      
      textTwentyOne.style.display = "none";
      textTwentyTwo.style.display = "none";
      textTwentyThree.style.display = "none";
      textTwentyFour.style.display = "none";
      textTwentyFive.style.display = "none";
      textTwentySix.style.display = "none";
      textTwentySeven.style.display = "none";  
    }
}

function fun23() {
  var checkBox = document.getElementById("test-twentyThree");
  var textTwentyOne = document.getElementById("u");
  var textTwentyTwo = document.getElementById("v");
  var textTwentyThree = document.getElementById("w");
  var textTwentyFour = document.getElementById("x");
  var textTwentyFive = document.getElementById("y");
  var textTwentySix = document.getElementById("z");
  var textTwentySeven = document.getElementById("aa");
    if (checkBox.checked == true){
      textTwentyOne.style.display = "none";
      textTwentyTwo.style.display = "none";
      textTwentyThree.style.display = "block";
      textTwentyFour.style.display = "none";
      textTwentyFive.style.display = "none";
      textTwentySix.style.display = "none";
      textTwentySeven.style.display = "none";
    } else {      
      textTwentyOne.style.display = "none";
      textTwentyTwo.style.display = "none";
      textTwentyThree.style.display = "none";
      textTwentyFour.style.display = "none";
      textTwentyFive.style.display = "none";
      textTwentySix.style.display = "none";
      textTwentySeven.style.display = "none";  
    }
}

function fun24() {
  var checkBox = document.getElementById("test-twentyFour");
  var textTwentyOne = document.getElementById("u");
  var textTwentyTwo = document.getElementById("v");
  var textTwentyThree = document.getElementById("w");
  var textTwentyFour = document.getElementById("x");
  var textTwentyFive = document.getElementById("y");
  var textTwentySix = document.getElementById("z");
  var textTwentySeven = document.getElementById("aa");
    if (checkBox.checked == true){
      textTwentyOne.style.display = "none";
      textTwentyTwo.style.display = "none";
      textTwentyThree.style.display = "none";
      textTwentyFour.style.display = "block";
      textTwentyFive.style.display = "none";
      textTwentySix.style.display = "none";
      textTwentySeven.style.display = "none";
    } else {      
      textTwentyOne.style.display = "none";
      textTwentyTwo.style.display = "none";
      textTwentyThree.style.display = "none";
      textTwentyFour.style.display = "none";
      textTwentyFive.style.display = "none";
      textTwentySix.style.display = "none";
      textTwentySeven.style.display = "none";  
    }
}

function fun25() {
  var checkBox = document.getElementById("test-twentyFive");
  var textTwentyOne = document.getElementById("u");
  var textTwentyTwo = document.getElementById("v");
  var textTwentyThree = document.getElementById("w");
  var textTwentyFour = document.getElementById("x");
  var textTwentyFive = document.getElementById("y");
  var textTwentySix = document.getElementById("z");
  var textTwentySeven = document.getElementById("aa");
    if (checkBox.checked == true){
      textTwentyOne.style.display = "none";
      textTwentyTwo.style.display = "none";
      textTwentyThree.style.display = "none";
      textTwentyFour.style.display = "none";
      textTwentyFive.style.display = "block";
      textTwentySix.style.display = "none";
      textTwentySeven.style.display = "none";
    } else {      
      textTwentyOne.style.display = "none";
      textTwentyTwo.style.display = "none";
      textTwentyThree.style.display = "none";
      textTwentyFour.style.display = "none";
      textTwentyFive.style.display = "none";
      textTwentySix.style.display = "none";
      textTwentySeven.style.display = "none";  
  }
}

function fun26() {
  var checkBox = document.getElementById("test-twentySix");
  var textTwentyOne = document.getElementById("u");
  var textTwentyTwo = document.getElementById("v");
  var textTwentyThree = document.getElementById("w");
  var textTwentyFour = document.getElementById("x");
  var textTwentyFive = document.getElementById("y");
  var textTwentySix = document.getElementById("z");
  var textTwentySeven = document.getElementById("aa");
    if (checkBox.checked == true){
      textTwentyOne.style.display = "none";
      textTwentyTwo.style.display = "none";
      textTwentyThree.style.display = "none";
      textTwentyFour.style.display = "none";
      textTwentyFive.style.display = "none";
      textTwentySix.style.display = "block";
      textTwentySeven.style.display = "none";
    } else {      
      textTwentyOne.style.display = "none";
      textTwentyTwo.style.display = "none";
      textTwentyThree.style.display = "none";
      textTwentyFour.style.display = "none";
      textTwentyFive.style.display = "none";
      textTwentySix.style.display = "none";
      textTwentySeven.style.display = "none";  
    }
}

function fun27() {
  var checkBox = document.getElementById("test-twentySeven");
  var textTwentyOne = document.getElementById("u");
  var textTwentyTwo = document.getElementById("v");
  var textTwentyThree = document.getElementById("w");
  var textTwentyFour = document.getElementById("x");
  var textTwentyFive = document.getElementById("y");
  var textTwentySix = document.getElementById("z");
  var textTwentySeven = document.getElementById("aa");
    if (checkBox.checked == true){
      textTwentyOne.style.display = "none";
      textTwentyTwo.style.display = "none";
      textTwentyThree.style.display = "none";
      textTwentyFour.style.display = "none";
      textTwentyFive.style.display = "none";
      textTwentySix.style.display = "none";
      textTwentySeven.style.display = "block";
    } else {      
      textTwentyOne.style.display = "none";
      textTwentyTwo.style.display = "none";
      textTwentyThree.style.display = "none";
      textTwentyFour.style.display = "none";
      textTwentyFive.style.display = "none";
      textTwentySix.style.display = "none";
      textTwentySeven.style.display = "none";  
    }
}

//PHP
function fun28() {
  var checkBox = document.getElementById("test-twentyEight");
  var textTwentyEight = document.getElementById("bb");
  var textTwentyNine = document.getElementById("cc");
  var textThirty = document.getElementById("dd");
  var textThirtyOne = document.getElementById("ee");
  var textThirtyTwo = document.getElementById("ff");
  var textThirtyThree = document.getElementById("gg");
  var textThirtyFour = document.getElementById("hh");
    if (checkBox.checked == true){
      textTwentyEight.style.display = "block";
      textTwentyNine.style.display = "none";
      textThirty.style.display = "none";
      textThirtyOne.style.display = "none";
      textThirtyTwo.style.display = "none";
      textThirtyThree.style.display = "none";
      textThirtyFour.style.display = "none";
    } else {      
      textTwentyEight.style.display = "none";
      textTwentyNine.style.display = "none";
      textThirty.style.display = "none";
      textThirtyOne.style.display = "none";
      textThirtyTwo.style.display = "none";
      textThirtyThree.style.display = "none";
      textThirtyFour.style.display = "none";
  }
}

function fun29() {
  var checkBox = document.getElementById("test-twentyNine");
  var textTwentyEight = document.getElementById("bb");
  var textTwentyNine = document.getElementById("cc");
  var textThirty = document.getElementById("dd");
  var textThirtyOne = document.getElementById("ee");
  var textThirtyTwo = document.getElementById("ff");
  var textThirtyThree = document.getElementById("gg");
  var textThirtyFour = document.getElementById("hh");
    if (checkBox.checked == true){
      textTwentyEight.style.display = "none";
      textTwentyNine.style.display = "block";
      textThirty.style.display = "none";
      textThirtyOne.style.display = "none";
      textThirtyTwo.style.display = "none";
      textThirtyThree.style.display = "none";
      textThirtyFour.style.display = "none";
    } else {      
      textTwentyEight.style.display = "none";
      textTwentyNine.style.display = "none";
      textThirty.style.display = "none";
      textThirtyOne.style.display = "none";
      textThirtyTwo.style.display = "none";
      textThirtyThree.style.display = "none";
      textThirtyFour.style.display = "none";
  }
}

function fun30() {
  var checkBox = document.getElementById("test-Thirty");
  var textTwentyEight = document.getElementById("bb");
  var textTwentyNine = document.getElementById("cc");
  var textThirty = document.getElementById("dd");
  var textThirtyOne = document.getElementById("ee");
  var textThirtyTwo = document.getElementById("ff");
  var textThirtyThree = document.getElementById("gg");
  var textThirtyFour = document.getElementById("hh");
    if (checkBox.checked == true){
      textTwentyEight.style.display = "none";
      textTwentyNine.style.display = "none";
      textThirty.style.display = "block";
      textThirtyOne.style.display = "none";
      textThirtyTwo.style.display = "none";
      textThirtyThree.style.display = "none";
      textThirtyFour.style.display = "none";
    } else {      
      textTwentyEight.style.display = "none";
      textTwentyNine.style.display = "none";
      textThirty.style.display = "none";
      textThirtyOne.style.display = "none";
      textThirtyTwo.style.display = "none";
      textThirtyThree.style.display = "none";
      textThirtyFour.style.display = "none";
  }
}

function fun31() {
  var checkBox = document.getElementById("test-ThirtyOne");
  var textTwentyEight = document.getElementById("bb");
  var textTwentyNine = document.getElementById("cc");
  var textThirty = document.getElementById("dd");
  var textThirtyOne = document.getElementById("ee");
  var textThirtyTwo = document.getElementById("ff");
  var textThirtyThree = document.getElementById("gg");
  var textThirtyFour = document.getElementById("hh");
    if (checkBox.checked == true){
      textTwentyEight.style.display = "none";
      textTwentyNine.style.display = "none";
      textThirty.style.display = "none";
      textThirtyOne.style.display = "block";
      textThirtyTwo.style.display = "none";
      textThirtyThree.style.display = "none";
      textThirtyFour.style.display = "none";
    } else {      
      textTwentyEight.style.display = "none";
      textTwentyNine.style.display = "none";
      textThirty.style.display = "none";
      textThirtyOne.style.display = "none";
      textThirtyTwo.style.display = "none";
      textThirtyThree.style.display = "none";
      textThirtyFour.style.display = "none";
  }
}


function fun32() {
  var checkBox = document.getElementById("test-ThirtyTwo");
  var textTwentyOne = document.getElementById("u");
  var textTwentyTwo = document.getElementById("v");
  var textTwentyThree = document.getElementById("w");
  var textTwentyFour = document.getElementById("x");
  var textTwentyFive = document.getElementById("y");
  var textTwentySix = document.getElementById("z");
  var textTwentySeven = document.getElementById("aa");
    if (checkBox.checked == true){
      textTwentyOne.style.display = "none";
      textTwentyTwo.style.display = "none";
      textTwentyThree.style.display = "none";
      textTwentyFour.style.display = "none";
      textTwentyFive.style.display = "block";
      textTwentySix.style.display = "none";
      textTwentySeven.style.display = "none";
    } else {      
      textTwentyOne.style.display = "none";
      textTwentyTwo.style.display = "none";
      textTwentyThree.style.display = "none";
      textTwentyFour.style.display = "none";
      textTwentyFive.style.display = "none";
      textTwentySix.style.display = "none";
      textTwentySeven.style.display = "none";  
  }
}

function fun33() {
  var checkBox = document.getElementById("test-ThirtyThree");
  var textTwentyOne = document.getElementById("u");
  var textTwentyTwo = document.getElementById("v");
  var textTwentyThree = document.getElementById("w");
  var textTwentyFour = document.getElementById("x");
  var textTwentyFive = document.getElementById("y");
  var textTwentySix = document.getElementById("z");
  var textTwentySeven = document.getElementById("aa");
    if (checkBox.checked == true){
      textTwentyOne.style.display = "none";
      textTwentyTwo.style.display = "none";
      textTwentyThree.style.display = "none";
      textTwentyFour.style.display = "none";
      textTwentyFive.style.display = "none";
      textTwentySix.style.display = "block";
      textTwentySeven.style.display = "none";
    } else {      
      textTwentyOne.style.display = "none";
      textTwentyTwo.style.display = "none";
      textTwentyThree.style.display = "none";
      textTwentyFour.style.display = "none";
      textTwentyFive.style.display = "none";
      textTwentySix.style.display = "none";
      textTwentySeven.style.display = "none";  
  }
}

function fun34() {
  var checkBox = document.getElementById("test-ThirtyFour");
  var textTwentyOne = document.getElementById("u");
  var textTwentyTwo = document.getElementById("v");
  var textTwentyThree = document.getElementById("w");
  var textTwentyFour = document.getElementById("x");
  var textTwentyFive = document.getElementById("y");
  var textTwentySix = document.getElementById("z");
  var textTwentySeven = document.getElementById("aa");
    if (checkBox.checked == true){
      textTwentyOne.style.display = "none";
      textTwentyTwo.style.display = "none";
      textTwentyThree.style.display = "none";
      textTwentyFour.style.display = "none";
      textTwentyFive.style.display = "none";
      textTwentySix.style.display = "none";
      textTwentySeven.style.display = "block";
    } else {      
      textTwentyOne.style.display = "none";
      textTwentyTwo.style.display = "none";
      textTwentyThree.style.display = "none";
      textTwentyFour.style.display = "none";
      textTwentyFive.style.display = "none";
      textTwentySix.style.display = "none";
      textTwentySeven.style.display = "none";  
  }
}