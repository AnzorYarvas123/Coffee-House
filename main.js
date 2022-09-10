
const coffeForm = document.getElementById("coffee");
const customerContainer = document.querySelector(".Customer_Order");
const nameInput = coffee["name"];

const drinksInput = coffee["drinks"];
const milkInput = coffee["milk"];
const sizeInput = coffee["sizes"];





let Customer_Order = JSON.parse(localStorage.getItem("Customer_Order")) || []; 

const addCustomer = (name, drinks, milk,  sizes ) => {
  Customer_Order.push({
    name,

    drinks,
    milk,
    sizes,
   
  });

  localStorage.setItem("Customer_Order", JSON.stringify(Customer_Order)); 

  return { name, drinks, milk, sizes };
};

const createCustomerElement = ({ name,drinks, milk, sizes }) => {
 
  const customerDiv = document.createElement("div");
  const customerName = document.createElement("h2");

  const orderdrinks = document.createElement("p");
  const orderMilk = document.createElement("p");
  const orderSize = document.createElement("p");

  const delbutton = document.createElement("button");

  
  customerDiv.setAttribute("data-id",name);
  customerName.innerText = "Name: " + name;
 
  orderdrinks.innerText = "Order drinks: " + drinks;
  orderMilk.innerText = "Order milk: " + milk;
  orderSize.innerText = "Order Size: " + sizes;

  delbutton.innerText = "Delete";
  delbutton.classList.add('btn');



  customerDiv.append(customerName, orderdrinks , orderMilk, orderSize ,delbutton);
  customerContainer.appendChild(customerDiv);
  customerContainer.style.display = Customer_Order.length === 0 ? "none" : "flex";
 
 
  function delorder() {
   customerContainer.addEventListener("click", (e) => {
    if(e.target.classList.contains("btn")){
      
      
      deleteTaskWith(e.target.parentElement.getAttribute("data-id"));

      e.target.parentElement.remove();

     }
   })
   

  }
 function deleteTaskWith(orderid){

  
localStorage.removeItem("Customer_Order");
  
 }
  document.querySelector('.btn').addEventListener('click', delorder);

  
};





customerContainer.style.display = Customer_Order.length === 0 ? "none" : "flex";

Customer_Order.forEach(createCustomerElement);

coffee.onsubmit = e => {
  e.preventDefault(); 

  const newCustomer = addCustomer(
    nameInput.value,
 
    drinksInput.value,
    milkInput.value,
    sizeInput.value,

  );

  createCustomerElement(newCustomer);  
  nameInput.value = "";

  drinksInput.value = "";
  milkInput.value = "";
  sizeInput.value = "";

  

};