import food from './food.json' assert {type: 'json'};

let container = document.querySelector(".right-bar");

for(let i=0; i < food.length; i++) {
    let user = ` 
    <div class= "right">
        
        <div class"add">
            <div class="imeg"><img src="./js/photo/${food[i].img}"></div>
            <div class="text">
                ${food[i].name}<br>
                ${food[i].price}
            </div><br>
            <div class="button"> 
                <button data-id = "${food[i].id}" class = "btn1">Buy</button>
            </div>
        </div>
    </div>
    `;
    container.innerHTML += user; 
}


const meal = document.querySelector('.container-cart');

document.querySelectorAll('.btn1').forEach(item => {
    item.addEventListener('click', addToCard);
});

function addToCard(event) {

    
    let id = event.target.dataset.id;

    
    for(let i = 0; i < food.length; i++){
        if (id == food[i].id){
            let card = document.createElement('div');
            card.innerHTML +=  ` 
            <div class= "cartt">
                
                <div class"add">
                    <img  class = "foto" src="./js/photo/${food[i].img}">
                    <div class="text">
                        ${food[i].name}<br>
                        <span class="cena">${food[i].price}</span>
                        
                    </div><br>
                    <div class="button"> 
                        <button data-id = "${food[i].id}" class = "remove">DELETE</button>
                    </div>
                </div>
            </div>
            `;
            meal.append(card);

            let remove = document.querySelectorAll('.remove');
            remove = remove[remove.length - 1];
            remove.addEventListener('click', (e) => {
                e.target.parentNode.parentNode.parentNode.remove();
                showTotal()
            });
            break;
            
        }
        
    }
    showTotal()
}



function showTotal() {
    let totalPrice = 0;
    let htmltotal = document.querySelector(".total_price");
    let cena = document.querySelectorAll(".cena");
    
    for (let i = 0, len = cena.length;i < len; i++) {
        console.log(cena[i].innerHTML);
        totalPrice += parseFloat(cena[i].innerHTML);
    }
    htmltotal.innerHTML = "Total: $" + totalPrice;
}

