let money = 0;

function buttonClick(msg){
    console.log(msg);
    const result = document.getElementById(msg);
    result.style.display = "block";
}

function addMoney(added){
    money += added
    document.getElementById('moneyarea').textContent = money;
}

const alert = () => {
    if (parseInt(document.getElementById('moneyarea').textContent) >= 500){
        console.log(`現在${document.getElementById('moneyarea').textContent}円です。`);
    }
}

const watcher = setInterval(alert, 1000);