const sharm = 15;
const hurgada = 25;
const taba = 6;

const x = +prompt('количество необходимых мест');
const test = Number.isInteger(x);
if(test == true && x > 0 ){
        const sharmPlaces = confirm('есть места в sharm, согласны ?');
        if(sharmPlaces == true){
            alert('Приятного путешествия в группе sahrm');
        }else if(sharmPlaces == false){
            alert('Нам очень жаль, приходите еще!');
            const hurgadaPlaces = confirm('есть места в hurgada, согласны ?');
            if(hurgadaPlaces == true){
                alert ('Приятного путешествия в группе hurgada');
            }else if(hurgadaPlaces == false){
                alert('Нам очень жаль, приходите еще!');
                const tabaPlaces = confirm('есть места в taba, согласны ?');
                if(tabaPlaces == true){
                    alert ('Приятного путешествия в группе taba');
                }else if(tabaPlaces == false){
                    alert('Извините, столько мест нет ни в одной группе!');
                }
            }
        }

}else{
    alert('Ошибка ввода');
}