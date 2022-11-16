

// we will create an array of JS objects with the properties of our elephants

// we use const here cause the variable doesn't change after

// we have 4 items inside the array, each item is an object with 6 properties. An id, title, color, age, image and alt description.
function redc(e) {
  window.location = "/search";
  busca()
}
document.getElementById("btn-submit").addEventListener("click", (ev) => {
  ev.preventDefault();
  if (filename == "/search") {
  }
  else {
    redc(event)
  }
})



// open cart modal
const cart = document.querySelector('#cart');
const cartModalOverlay = document.querySelector('.cart-modal-overlay');

cart.addEventListener('click', () => {
  if (cartModalOverlay.style.transform === 'translateX(-200%)'){
    cartModalOverlay.style.transform = 'translateX(0)';
  } else {
    cartModalOverlay.style.transform = 'translateX(-200%)';
  }
})
// end of open cart modal

// close cart modal
const closeBtn = document.querySelector ('#close-btn');

closeBtn.addEventListener('click', () => {
  cartModalOverlay.style.transform = 'translateX(-200%)';
});

cartModalOverlay.addEventListener('click', (e) => {
  if (e.target.classList.contains('cart-modal-overlay')){
    cartModalOverlay.style.transform = 'translateX(-200%)'
  }
})
// end of close cart modal

// add products to cart
const addToCart = document.getElementsByClassName('add-to-cart');
const productRow = document.getElementsByClassName('product-row');

for (var i = 0; i < addToCart.length; i++) {
  button = addToCart[i];
  button.addEventListener('click', addToCartClicked)
}

function addToCartClicked (event) {
  button = event.target;
  var cartItem = button.parentElement;   
  var price = cartItem.getElementsByClassName('product-price')[0].innerText;
  var imageSrc = cartItem.getElementsByClassName('product-image')[0].src;
  var name = cartItem.getElementsByClassName('product-name')[0].innerText;
  var id = cartItem.getElementsByClassName('idget')[0].innerText;
  addItemToCart (price, imageSrc,id,name);
  updateCartPrice()
}

function addItemToCart (price, imageSrc,id,name) {
  var productRow = document.createElement('div');
  productRow.classList.add('product-row');
  var productRows = document.getElementsByClassName('product-rows')[0];
  var cartImage = document.getElementsByClassName('cart-image');
  
  for (var i = 0; i < cartImage.length; i++){
    if (cartImage[i].src == imageSrc){
      alert ('This item has already been added to the cart')
      return;
    }
  }
  
  var cartRowItems = `
  <div class="product-row">
        <img class="cart-image" src="${imageSrc}" alt="">
        <span class="cart-name" style="color: white;margin-right: 15px">${name}</span>
        <span class="cart-price">${price}</span>
        <span style="display:none" class="idfromcart" id="${id}">${id}</span>
        <input class="product-quantity" type="number" value="1">
        <button class="remove-btn">Remove</button>
        </div>
        
      `
  productRow.innerHTML = cartRowItems;
  productRows.append(productRow);
  productRow.getElementsByClassName('remove-btn')[0].addEventListener('click', removeItem)
  productRow.getElementsByClassName('product-quantity')[0].addEventListener('change', changeQuantity)
  updateCartPrice()
}
// end of add products to cart

// Remove products from cart
const removeBtn = document.getElementsByClassName('remove-btn');
for (var i = 0; i < removeBtn.length; i++) {
  button = removeBtn[i]
  button.addEventListener('click', removeItem)
}

function removeItem (event) {
  btnClicked = event.target
  btnClicked.parentElement.parentElement.remove()
  updateCartPrice()
}

// update quantity input
var quantityInput = document.getElementsByClassName('product-quantity')[0];

for (var i = 0; i < quantityInput; i++){
  input = quantityInput[i]
  input.addEventListener('change', changeQuantity)
}

function changeQuantity(event) {
  var input = event.target
  if (isNaN(input.value) || input.value <= 0){
    input.value = 1
  }
  updateCartPrice()
}
// end of update quantity input

// update total price
function updateCartPrice() {
  var total = 0
  for (var i = 0; i < productRow.length; i += 2) {
    cartRow = productRow[i]
  var priceElement = cartRow.getElementsByClassName('cart-price')[0]
  var quantityElement = cartRow.getElementsByClassName('product-quantity')[0]
  var price = parseFloat(priceElement.innerText.replace('$', ''))
  var quantity = quantityElement.value
  total = total + (price * quantity )
    
  }
  document.getElementsByClassName('total-price')[0].innerText =  '$' + total

document.getElementsByClassName('cart-quantity')[0].textContent = i /= 2
}
// end of update total price

// purchase items
const purchaseBtn = document.querySelector('.purchase-btn');

const closeCartModal = document.querySelector('.cart-modal');

purchaseBtn.addEventListener('click', purchaseBtnClicked)

function purchaseBtnClicked () {

  if (confirm("Finalizar compra?")==true) {

    const c = document.querySelectorAll('.idfromcart');
    console.log()
    for (const v of c) {
      const ic = document.querySelectorAll('.idfromcart').length
      console.log(ic)
        if (c.length > 1) {
          let cont= 0;
          var idc = [document.querySelectorAll('.idfromcart')[0].id, document.querySelectorAll('.idfromcart')[cont+1].id];

          let d = new Date()
          var mySqlTimestamp = new Date(
            d.getFullYear(),
            d.getMonth(),
            d.getDate(),
            d.getHours(),
            (d.getMinutes() + 30), // add 30 minutes
            d.getSeconds(),
            d.getMilliseconds()
          ).toISOString().slice(0, 19).replace('T', ' ')

          
        }
        else {
               let idc= document.querySelectorAll('.idfromcart')[0].id

               
       console.log(idc)
        }
  
        
        
      }
    
      const dados = {
        iditens: [idc],
        data: mySqlTimestamp
      }
      console.log(dados.id)
      fetch("/api/cart", {
        method: "POST",
        body: JSON.stringify(dados),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(res => res.json())
        .then(data => {
          if (data.status == "error") {
            success.style.display = "none"
            error.style.display = "block"
            error.innerText = data.error
          } else {
            console.log("funcionou")
          }
        })

        const dados2 = {
          data: mySqlTimestamp
        }
        console.log(dados.id)
        fetch("/api/cartcompra", {
          method: "POST",
          body: JSON.stringify(dados2),
          headers: {
            "Content-Type": "application/json"
          }
        }).then(res => res.json())
          .then(data => {
            if (data.status == "error") {
              success.style.display = "none"
              error.style.display = "block"
              error.innerText = data.error
            } else {
              console.log("funcionou")
              window.location.href = "/payment"
            }
          })

    
    




//     // window.location.href = "/payment"
//     cartModalOverlay.style.transform= 'translateX(-100%)'
//  var cartItems = document.getElementsByClassName('product-rows')[0]
//  while (cartItems.hasChildNodes()) {
//    cartItems.removeChild(cartItems.firstChild)
//   }
  
  
   
 }
  updateCartPrice()
}
// end of purchase items

//alert user if cart is empty
