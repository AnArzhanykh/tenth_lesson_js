const btnChangeThemeRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body')


bodyRef.className = localStorage.getItem('theme') 
btnChangeThemeRef.checked = localStorage.getItem('check');

btnChangeThemeRef.addEventListener('change', changeTheme);

function changeTheme(){
    
    if(btnChangeThemeRef.checked === true) {

        bodyRef.classList.add('dark-theme');
        bodyRef.classList.remove('light-theme');

        localStorage.setItem('theme', 'dark-theme');
        localStorage.setItem('check', true);
    }

    if(btnChangeThemeRef.checked === false){

        bodyRef.classList.add('light-theme');
        bodyRef.classList.remove('dark-theme');

        localStorage.setItem('theme', 'light-theme');
        localStorage.setItem('check', '');
    }

}