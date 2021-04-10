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
   //male...
   case 1:
    document.getElementById('result').textContent = "Your Birthday was on a Sunday : your Akan name is " + maleAkanNames[0];
    document.getElementById('display-name').textContent = "Here is your Akan name: ";
    return false;
    break;
  case 2:
    document.getElementById('result').textContent = "Your Birthday was on a Monday: your Akan name is " + maleAkanNames[1];
    document.getElementById('display-name').textContent = "Here is your Akan name: ";
    return false;
    break;
  case 3:
    document.getElementById('result').textContent = "Your Birthday was on a Tuesday: your Akan name is " + maleAkanNames[2];
    document.getElementById('display-name').textContent = "Here is your Akan name: ";
    return false;
    break;
  case 4:
    document.getElementById('result').textContent = "Your Birthday was on a Wednesday: your Akan name is " + maleAkanNames[3];
    document.getElementById('display-name').textContent = "Here is your Akan name: ";
    return false;
    break;
  case 5:
    document.getElementById('result').textContent = "Your Birthday was on a Thursday: your Akan name is " + maleAkanNames[4];
    document.getElementById('display-name').textContent = "Here is your Akan name: ";
    return false;
    break;
  case 6:
    document.getElementById('result').textContent = "Your Birthday was on a Friday: your Akan name is " + maleAkanNames[5];
    document.getElementById('display-name').textContent = "Here is your Akan name: ";
    return false;
    break;
  case 7:
    document.getElementById('result').textContent = "Your Birthday was on a Saturday: your Akan name is " + maleAkanNames[6];
    document.getElementById('display-name').textContent = "Here is your Akan name: ";
    return false;
    break;
  case 0:
    document.getElementById('result').textContent = "Your Birthday was on a: your Akan name is " + maleAkanNames[0];
    document.getElementById('display-name').textContent = "Here is your Akan name: ";
    return false;
    break;
  default:
    alert("Akan name not found for you");
        }
         //female..

        } else if(myGenderValue == "female" && monthValid && dayValid) {
            switch (dayOfWeekNumber) {
              case 1:
                document.getElementById('result').textContent = "Your Birthday was on a Sunday: your Akan name is " + femaleAkanNames[0];
                document.getElementById('display-name').textContent = "Here is your Akan name: ";
                return false;
                break;
              case 2:
                document.getElementById('result').textContent = "Your Birthday was on a Monday: your Akan name is " + femaleAkanNames[1];
                document.getElementById('display-name').textContent = "Here is your Akan name: ";
                return false;
                alert("Kwadwo");
                break;
              case 3:
                document.getElementById('result').textContent = "Your Birthday was on a Tuesday: your Akan name is " + femaleAkanNames[2];
                document.getElementById('display-name').textContent = "Here is your Akan name: ";
                return false;
                break;
              case 4:
                document.getElementById('result').textContent = "Your Birthday was on a Wednesday: your Akan name is " + femaleAkanNames[3];
                document.getElementById('display-name').textContent = "Here is your Akan name: ";
                return false;
                break;
              case 5:
                document.getElementById('result').textContent = "Your Birthday was on a Thursday: your Akan name is " + femaleAkanNames[4];
                document.getElementById('display-name').textContent = "Here is your Akan name: ";
                return false;
                break;
              case 6:
                document.getElementById('result').textContent = "Your Birthday was on a Friday: your Akan name is " + femaleAkanNames[5];
                document.getElementById('display-name').textContent = "Here is your Akan name: ";
                return false;
                break;
              case 7:
                document.getElementById('result').textContent = "Your Birthday was on a: your Akan name is " + femaleAkanNames[6];
                document.getElementById('display-name').textContent = "Here is your Akan name: ";
                return false;
                break;
              case 0:
                document.getElementById('result').textContent = "Your Birthday was on a Sunday: your Akan name is " + femaleAkanNames[0];
                document.getElementById('display-name').textContent = "Here is your Akan name: ";
                return false;
                break;
              default:
                alert("mmh no Akan name for you");
              }
            } else{
              alert("You entered invalid month or day");
            }
               //female..

      } else if(myGenderValue == "female" && monthValid && dayValid) {
        switch (dayOfWeekNumber) {
          case 1:
            document.getElementById('result').textContent = "Your Birthday was on a Sunday: your Akan name is " + femaleAkanNames[0];
            document.getElementById('display-name').textContent = "Here is your Akan name: ";
            return false;
            break;
          case 2:
            document.getElementById('result').textContent = "Your Birthday was on a Monday: your Akan name is " + femaleAkanNames[1];
            document.getElementById('display-name').textContent = "Here is your Akan name: ";
            return false;
            alert("Kwadwo");
            break;
          case 3:
            document.getElementById('result').textContent = "Your Birthday was on a Tuesday: your Akan name is " + femaleAkanNames[2];
            document.getElementById('display-name').textContent = "Here is your Akan name: ";
            return false;
            break;
          case 4:
            document.getElementById('result').textContent = "Your Birthday was on a Wednesday: your Akan name is " + femaleAkanNames[3];
            document.getElementById('display-name').textContent = "Here is your Akan name: ";
            return false;
            break;
          case 5:
            document.getElementById('result').textContent = "Your Birthday was on a Thursday: your Akan name is " + femaleAkanNames[4];
            document.getElementById('display-name').textContent = "Here is your Akan name: ";
            return false;
            break;
          case 6:
            document.getElementById('result').textContent = "Your Birthday was on a Friday: your Akan name is " + femaleAkanNames[5];
            document.getElementById('display-name').textContent = "Here is your Akan name: ";
            return false;
            break;
          case 7:
            document.getElementById('result').textContent = "Your Birthday was on a: your Akan name is " + femaleAkanNames[6];
            document.getElementById('display-name').textContent = "Here is your Akan name: ";
            return false;
            break;
          case 0:
            document.getElementById('result').textContent = "Your Birthday was on a Sunday: your Akan name is " + femaleAkanNames[0];
            document.getElementById('display-name').textContent = "Here is your Akan name: ";
            return false;
            break;
          default:
            alert("mmh no Akan name for you");
          }
        } else{
          alert("You entered invalid month or day");
        }
    }

    
  