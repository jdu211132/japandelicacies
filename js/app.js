import food from './food.json' assert {type: 'json'};

const cart = [];

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


const meal = document.querySelector('.left-bar');

document.querySelectorAll('.btn1').forEach(item => {
    item.addEventListener('click', addToCard)
});

function addToCard(event) {

    
    let id = event.target.dataset.id;
    console.log(id);
    for(let i = 0; i < food.length; i++){
        if (id == food[i].id){
            let card = document.createElement('div');
            card.innerHTML +=  ` 
            <div class= "right">
                
                <div class"add">
                    <div class="imeg"><img src="./js/photo/${food[i].img}"></div>
                    <div class="text">
                        ${food[i].name}<br>
                        ${food[i].price}
                    </div><br>
                    <div class="button"> 
                        <button data-id = "${food[i].id}" class = "remove">Delete</button>
                    </div>
                </div>
            </div>
            `;
            meal.append(card);

            let remove = document.querySelectorAll('.remove');
            remove = remove[remove.length - 1];
            remove.addEventListener('click', (e) => {
                console.log(e);
                // e.target.parentNode.parentNode.remove();
                e.target.parentNode.parentNode.parentNode.remove();
            });
            break;
        }
    }
}

// function showTotalPrice(){
//     let totalPrice = 0;

//     cart.forEach((item) => {
//         console.log(item);
//         totalPrice += food[item-1].price;

//     })

//     total_price.innerHTML = "Total: $" + totalPrice;


// }

// showTotalPrice();