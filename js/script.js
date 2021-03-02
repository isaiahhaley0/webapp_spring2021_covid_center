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

 
   
    if(DoB.value == ""){
   
        divDobError.classList.remove("invisible");
        divDobError.innerHTML = "The DOB can't be empty!"
        DoB.classList.add("hasError");
   
    }
    else {
        var DoBDate = new Date(DoB.value);
        var todayDate = new Date();
        if(DoBDate >= todayDate) {
            //Show error
            divDoBError.classList.remove("invisible");
            divDoBError.innerHTML = "DOB must be before today's date."
            DoB.classList.add("hasError");
             
        }
        else{
            divDoBError.classList.add("invisible");
            divDoBError.innerHTML = ""
            DoB.classList.remove("hasError");
        }
    }
}