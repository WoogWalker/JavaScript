const adminLogin = 'admin';
const adminPas = 'm4ngo1zh4ackz0r';
const textCancled = 'Отменено пользователем!';
const textAccess = 'Доступ запрещен!';
const textAllowed = 'Добра пожаловать!';
const textLogin = 'Введите логин';
const textPassword = 'Введите пароль';

const queryLogIn = prompt(textLogin);
if (queryLogIn == null){
    alert(textCancled);
}else if(queryLogIn !== adminLogin){
  alert(textAccess);
}else if(queryLogIn === adminLogin){
   const queryPassword = prompt(textPassword);
  if(queryPassword == null){
    alert(textCancled);
  }else if(queryPassword !== adminPas){
    alert(textAccess)
  }else if(queryPassword === adminPas){
    alert(textAllowed);
  }
}