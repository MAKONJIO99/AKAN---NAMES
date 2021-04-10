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
    
  