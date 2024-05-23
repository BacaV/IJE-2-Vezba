//////////////// zadatak 1


function zadatak1(){

    let inputs = document.querySelectorAll('input[name=dest]');

    for(let i = 0; i< inputs.length; i++){
        document.querySelectorAll('input[name=dest]')[i].addEventListener('click',
            function(){
                let value = this.value;
                document.getElementById("slika").src = "/images/" + value;
            }
    )
}
}


//////////////// zadatak 2

function zadatak2(){

    let check = document.querySelector("input[name=prevoz]").checked;
    
    if(check){
        document.getElementById('polje1').style = "display:block;"
    } else {
        document.getElementById('polje1').style = "display:none;"
    }
}

//////////////// zadatak 3

function zadatak3(){

    let checkbox = document.querySelector('input[name=komentar]');

    if(checkbox.checked){
        document.querySelector('textarea[name=kom]').disabled = false ;
    } else {
        document.querySelector('textarea[name=kom]').disabled = true ;
    }
   

}