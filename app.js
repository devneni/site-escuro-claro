const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function () {

    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');

    let className = document.body.className;

    if (className === "light-theme") {
        this.textContent = "Escuro";
    } else {
        this.textContent = "Claro";
    }

    console.log("current class name: " + className);
});