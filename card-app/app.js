var number
document.querySelector('.card-thanks').style.display = 'none';

function thanks(){

    if(number === undefined){
        return alert('escolha um numero')
    }

    document.querySelector('.card-thanks').style.display = 'flex';
    document.querySelector('.card').style.display = 'none';
    document.querySelector('#OnumberChosen').innerHTML = number
}

function numberFav(numberChosen){
    number = numberChosen
}