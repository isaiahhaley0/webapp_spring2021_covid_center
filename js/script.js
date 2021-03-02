function updateCountryView(){
    var ddCountry = document.getElementById("ddTravel");
    var divCountry = document.getElementById("divCountry");

    if(ddCountry.value=="Yes")
    {
        divCountry.classList.remove("invisible");
    }
    else{
        divCountry.classList.add("invisible");
    }

}


function validateForm(){
    var DoB = document.querySelector("#txtDOB");
    var divDobError = document.querySelector("#divDoBError")

    var formIsValid = true;
   
    if(DoB.value == ""){
   
        divDobError.classList.remove("invisible");
        divDobError.innerHTML = "The DOB can't be empty!"
        DoB.classList.add("hasError");
        formIsValid = false;
    }
    else {
        var DoBDate = new Date(DoB.value);
        var todayDate = new Date();
        if(DoBDate >= todayDate) {
            //Show error
            divDoBError.classList.remove("invisible");
            divDoBError.innerHTML = "DOB must be before today's date."
            DoB.classList.add("hasError");
            formIsValid = false;
             
        }
        else{
            divDoBError.classList.add("invisible");
            divDoBError.innerHTML = ""
            DoB.classList.remove("hasError");
            formIsValid = false;
        }
    }
    var ddTravel = document.querySelector("#ddTravel");
    if(ddTravel.value == "Yes")
    {
        var txtCountry = document.querySelector("#travelText");
        if(txtCountry.value == "")
        {
            document.querySelector("#divCountryError").classList.remove("invisible");
            txtCountry.classList.add("hasError");
            document.querySelector("#divCountryError").innerHTML="MUST HAVE COUNTRY";
            
            formIsValid = false;
        }
        else{
            document.querySelector("#divCountryError").classList.add("invisible");
            txtCountry.classList.remove("hasError");
            formIsValid = true;
        }
    }
    var elements = document.getElementsByTagName("input");
    var invalidChars = ['#',"!",'~','&','<','>','"','`']
    for(let i = 0; i < elements.length; i++){
        for(let j = 0; j < invalidChars.length; j++)
        {
            if(elements[i].value.indexOf(invalidChars[j])!=-1){
                elements[i].classList.add("hasError");
                formIsValid = false;
            }
        }
    }
    return formIsValid;
}