let money = 0;

const purchaseProduct = (productName) =>{
    console.log(productName);
    const product = document.gitElementById(productName);
    console.log(product);
    const price = product.getElementsByClassName('price')[0].attributes[1].value;
    money -= price
    document.getElementById('moneyarea').textContent = money;
    document.getElementById('purchased').innerHTML += `<p>${productName}を買いました。</p>`;
    resetButtons();
}

const resetButtons = () =>{
    const product = document.getElementsByClassName('product');
    for(let i =0; i < products.length; i++){
        const product = products[i];
        const price = product.getElementsByClassName('price')[0].attributes[1].value;
        if(money >= price){
        product.getElementsByClassName('product-button'[0]).removeAttribute('disavled');
        } else {
        product.getElementsByClassName('product-button')[0].setAttribute('disabled',true);
        }
    }
}

function buttonClick(msg){
    console.log(msg);
    const result = document.getElementById(msg);
    result.style.display = "block";
}

function addMoney(added){
    money += added
    document.getElementById('moneyarea').textContent = money;
    resetButtons();
}

function alert() {
    if (parseInt(document.getElementById('moneyarea').textContent) >= 500) {
        console.log(`現在${document.getElementById('moneyarea').textContent}円です。`);
    }
}



const watcher = setInterval(alert, 1000);