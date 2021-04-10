// giving variables values
function getAkanName () {
    let yearOfBirth = document.getElementById("year-input").value;
    let monthOfBirth = Number(document.getElementById("month-input").value);
    let dayOfBirth = Number(document.getElementById("day-input").value);
  
    let genders = document.getElementsByName("gender");

     //the gender function
     function getGender () {
        for (let gender of genders){
          if (gender.checked){
            return gender.value;
          }
        }
      }
    
      let myGenderValue = getGender();
    
      console.log(myGenderValue);

       // function validator
    function monthValidator () {
        if (monthOfBirth < 1 || monthOfBirth > 12) {
          return false;
        } else {
          return true;
        }
      }

       // validating the day
    function dayValidator () {
        if (monthOfBirth === 2 && Number(yearOfBirth)%4 === 0) {
          if (dayOfBirth > 28 || dayOfBirth < 1) {
            return false;
          } else if (monthOfBirth === 2 && dayOfBirth > 29) {
            return false;
          } else if (monthOfBirth === 2 && dayOfBirth < 1) {
            return false;
          } else {
            return true;
          }
        } else if (dayOfBirth < 1 || dayOfBirth > 31){
          return false;
        } else {
          return true;
        }
      }
       //variables validator
    let monthValid = monthValidator();
    let dayValid = dayValidator();

      //how to determine the date of birth
      let dayOfWeekNumber = Math.floor((((Number(yearOfBirth.slice(0,2))/4)-2*Number(yearOfBirth.slice(0,2))-1)+
      ((5*Number(yearOfBirth.slice(2,4))/4))+((26*(monthOfBirth+1)/10))+dayOfBirth)%7);

      //introducing the male and the female name arrays
    let maleAkanNames = [
        "KWASI", "KWADWO", "KWABENA", "KWAKU", "KWAKU", "YAW", "KOFI", "KWAME"
      ];
    
      let femaleAkanNames = [
        "AKOSUA", "ADWOA", "ABENAA", "AKUA", "YAA", "AFUA", "AMA"
      ];
  
       //making sure that the input is valid
    if (myGenderValue == "male" && monthValid && dayValid){
        switch (dayOfWeekNumber) {
  
    
  