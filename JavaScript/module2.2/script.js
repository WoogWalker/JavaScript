const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attempts = 3;
let userInput;
do{
userInput = prompt('Введите пароль');
if(passwords.includes(userInput)){
    alert('welcome');
    break;
}
if(userInput == null)
    break;
attempts -= 1;
alert('Неверный пароль, у вас осталось ' + attempts + ' попытки');
}while(attempts > 0);
if(userInput == null){

}else if(passwords.includes(userInput)){
    
}else{
    alert('У вас закончились попытки, аккаунт заблокирован!');
}