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
    var DoB = document.querySelector("#dob");
    if(DoB.value == "")
    {
        /*show an error*/
    }



    var DobDate = new Date(Dob.value);
    var todayDate = new Date();
