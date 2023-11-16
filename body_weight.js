
function bmi(){
    let weight = document.getElementById("weight1").value;
    let height = document.getElementById("height1").value;
    let bmi = weight/(height**2);
    if (bmi<18){
       result = "underWeight";
    }else if (bmi<25){
        result = "normal"
    }else if (bmi<30){
        result = "overWeight";
    }else{
        result= "Obese";
    }
document.getElementById("enter").innerHTML="Tình trạng hiện tại của bạn : " + result;
}


