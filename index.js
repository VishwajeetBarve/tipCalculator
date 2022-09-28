const billamount = document.querySelector(".billamount")
const noofpersons = document.querySelector(".numberofpeople")
const peopleerror = document.querySelector(".peopleerror")
const tippercent = document.querySelectorAll(".tippercent")
const tipamount = document.querySelector(".tipamt")
const amountperson = document.querySelector(".perperson")
const custom = document.querySelector(".custom")
const resetbtn = document.querySelector(".resetbtn")

//check if the value entered by the user was not a zero

function zerocheck(){
    if(noofpersons.value == 0){
        peopleerror.innerText = "This cant be zero"
        document.querySelector(".personsinput").style.border = "1px solid red"
    }else{
        peopleerror.innerText = ""
    
    }

}



// calculating tip only if the value are properly defined

if((billamount.value != undefined || null) && (noofpersons.value != undefined || null ) ) {


tippercent.forEach((tip=> {
    tip.addEventListener("click",function(e){
        if(e.target != tip){
            console.log("not it")
        }else{
            
          tipcalculator(e)
                  

        }
    })

}))

}


resetbtn.addEventListener("click",function(){
    reset()    
    
})

// tip calculator

function tipcalculator(e){
    if(noofpersons.value != 0){
    let tipPerPerson = ((billamount.value*e.target.innerText.slice(0,length-1)/100)/ (noofpersons.value))
    let totalPerPerson = (billamount.value/noofpersons.value) + tipPerPerson
    
    if((tipPerPerson.toFixed(2).length-1) %2 !=0){
        tipamount.innerText = "$0" +tipPerPerson.toFixed(2)
        
    }else{
        tipamount.innerText = "$" +tipPerPerson.toFixed(2)
    }
    amountperson.innerText = "$" +totalPerPerson.toFixed(2)
}
}

//custom tip calculator

function customtip(){
    
    let tipPerPerson = ((billamount.value*custom.value/100)/ (noofpersons.value))
    let totalPerPerson = (billamount.value/noofpersons.value) + tipPerPerson
    
    if((tipPerPerson.toFixed(2).length-1) %2 !=0){
        tipamount.innerText = "$0" +tipPerPerson.toFixed(2)
        
    }else{
        tipamount.innerText = "$" +tipPerPerson.toFixed(2)
    }
    amountperson.innerText = "$" +totalPerPerson.toFixed(2)
    
    
}

// reset function

function reset(){
    tipamount.innerText = "$00.00"
    amountperson.innerText = "$00.00"
    billamount.value = ""
    noofpersons.value = ""
    custom.value = "Custom"

}

