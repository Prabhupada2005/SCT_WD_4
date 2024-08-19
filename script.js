const item = document.querySelector("#item")
const todoBox = document.querySelector("#to-do-box")

item.addEventListener(
    "keyup",
    function(event){
        if(event.key == "Enter"){
            addToDo(this.value)
            this.value = ""
        }
    }
)

// Function to show the textbox
function showTextbox() {
    document.getElementById('item').style.display = 'block';
    // document.getElementsByClassName('box').style.display = 'block';
    
}
// Set a timeout to call the function after 3 seconds
setTimeout(showTextbox, 2500);

const addToDo = (item) =>{
    const listItem = document.createElement("li");
    listItem.innerHTML = `
    ${item}
    <i class="fas fa-times"></i>
    `;
    listItem.addEventListener(
        "click",
        function(){
            this.classList.toggle("done")
        }
    )
    listItem.querySelector("i").addEventListener(
        "click",
        function() {
            listItem.remove()
        }
    )
    todoBox.appendChild(listItem)
}