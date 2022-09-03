import getContract from "./utils/getContract.js";

async function getTodoList() {
  const contract = getContract();
  try {
    const response = await contract.getTodos();
    const formatted = response.map((item) => {
      return {
        name: item[0],
        description: item[1],
        status: item[2],
      };
    });
    return formatted;
  } catch (error) {
    console.log("error", error);
  }
}




const upadateTodoUI = async () => {
  const data = await getTodoList();
  console.log(data, "data");
  data.forEach((item) => {
    todos.innerHTML += `   
    <li class='my-2'>${item.description}</li>`;
  });
};

upadateTodoUI();

// Update the blockchain 

async function addTodo (title, description) {
  const contract = await getContract(true)
 // console.log(contract);
  try {
 const addTheTodo = await contract.createTodo(title, description);
  console.log(addTheTodo)
  return addTheTodo
  } catch (error) {
    
  }
}
//addTodo();

//asyncfunction clicked () 
add.addEventListener("click", async function(e){
  e.preventDefault()
  const title = _title.value
  const description = _description.value;
  console.log(title, description);
 const added = await addTodo(title, description);
  console.log(added)
} )

// add new list
