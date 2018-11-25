const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function(login) {
  if(login.length >= 4 && login.length <= 16){
    //console.log('Принято! Логин от 4 до 16 символов');
    return true;
  }else if(login.length < 4 || login.length > 16){
    //console.log('Ошибка! Логин должен быть от 4 до 16 символов');
    return false;   
  }
};

const isLoginUnique = function(allLogins, login) {
    if(allLogins.includes(login)){
        return false;
    }else{
        return true;
    }
};

const addLogin = function(login) {
   let firstStep = isLoginValid(login);
   if(firstStep == true){
    console.log('Принято! Логин от 4 до 16 символов');
    let secondStep = isLoginUnique(logins, login);
    if(secondStep == true){
        logins.push(login);
        console.log('Логин успешно добавлен!');
        return true;
    }else if(secondStep == false){
        console.log('Такой логин уже используется!');
        return false;
    }
    return true;
   }else if(firstStep != true){
    console.log('Ошибка! Логин должен быть от 4 до 16 символов');
    return false;
   }
};

    //  Вызовы функции для проверки

 addLogin('Ajax'); // 'Логин успешно добавлен!'
 addLogin('robotGoogles'); // 'Такой логин уже используется!'
 addLogin('Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
 addLogin('jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'