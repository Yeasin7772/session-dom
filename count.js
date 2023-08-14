const pluBtn = document.getElementById('plus-btn');
const minusBtn = document.getElementById('minus-btn');
const countDisplay = document.getElementById('count')

let pluBtnValue = 0;
 
pluBtn.addEventListener('click', function (){
    if (pluBtnValue === 10) {
        return alert('this is too much you cant more press')
    }
    pluBtnValue += 1;
    countDisplay.innerText = pluBtnValue;

})

minusBtn.addEventListener('click', function (){
    if (pluBtnValue === 0) {
        return alert('negtive value is not work')
    }
    pluBtnValue -= 1;
    countDisplay.innerText = pluBtnValue
})