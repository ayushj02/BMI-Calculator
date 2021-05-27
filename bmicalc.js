console.log("Connected To JS Server");

let butn = document.getElementById('btn');

butn.addEventListener('click', function(){
    let weight = document.getElementById('weight-input').value;
    let height = document.getElementById('height-input').value;
    console.log(weight);
    let finalbmi = (weight/(height*height)*10000);
    document.getElementById('bmi-output').value = finalbmi;
    
    if(finalbmi >= 18){
        console.log('You Are Healthy');
    }
})