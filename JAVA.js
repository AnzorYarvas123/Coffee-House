
const coffeForm = document.getElementById("coffee");
const customerContainer = document.querySelector(".Customer_Order");
const nameInput = coffee["name"];
const sizeInput = coffee["sizes"];
const milkInput = coffee["milk"];
const drinksInput = coffee["drinks"];



let Customer_Order = JSON.parse(localStorage.getItem("Customer_Order")) || []; 

const addCustomer = (name, sizes, milk, drinks ) => {
  Customer_Order.push({
    name,
    sizes,
    milk,
    drinks,
   
  });

  localStorage.setItem("Customer_Order", JSON.stringify(Customer_Order)); 

  return { name, sizes, milk, drinks };
};

const createCustomerElement = ({ name, sizes, milk, drinks }) => {
 
  const customerDiv = document.createElement("div");
  const customerName = document.createElement("h2");
  const orderSize = document.createElement("p");
  const orderMilk = document.createElement("p");
  const orderdrinks = document.createElement("p");
  const delbutton = document.createElement("button");

  
  customerDiv.setAttribute("data-id",name);
  customerName.innerText = "Name: " + name;
  orderSize.innerText = "Order Size: " + sizes;
  orderMilk.innerText = "Order milk: " + milk;
  orderdrinks.innerText = "Order drinks: " + drinks;
  delbutton.innerText = "Delete";
  delbutton.classList.add('btn');



  customerDiv.append(customerName, orderSize, orderMilk, orderdrinks ,delbutton);
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
    sizeInput.value,
    milkInput.value,
    drinksInput.value,
  );

  createCustomerElement(newCustomer);  
  nameInput.value = "";
  sizeInput.value = "";
  milkInput.value = "";
  drinksInput.value = "";
  

};