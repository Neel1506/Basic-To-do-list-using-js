var myinput = document.getElementById("myinput");

myinput.addEventListener("keypress",function(event){
  if(event.key === "Enter"){
    // Prevent page reload
    event.preventDefault();
     addItem(this.value);
    this.value = "";
  }
})

const addItem = (data) =>{
   var tablebody = document.getElementById("tablebody");
   var createditem = document.createElement("tr");

   createditem.innerHTML = `
   <td>${data}</td>
   <td><i class="fa-solid fa-trash" id="remove"></i></td>
   `

   createditem.querySelector("i").addEventListener("click", function(e) {
    createditem.remove();
    removeData(data);
  });

    tablebody.appendChild(createditem);
}
