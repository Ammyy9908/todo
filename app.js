const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const deleteTodo = document.querySelector('.delete');
const search = document.querySelector('.search');



const genTemplate = (todo)=>
{
      const html =`<li class="list-group-item d-flex justify-content-between align-items-center">
      <span>${todo}</span>
      <i class="far fa-trash-alt delete"></i>
</li>`;
list.innerHTML+=html;
}

addForm.addEventListener('submit',(e)=>
{
e.preventDefault();
const todo = addForm.add.value.trim();

if(todo.length>0)
{
      genTemplate(todo);
      console.log(todo);
      addForm.reset();
}
else
{
      console.log('Field Required');
}

});

list.addEventListener('click',(e)=>{
if(e.target.classList.contains('delete'))
{
      e.target.parentElement.remove();
}
});

//filter the todos

const filterTodo = (key)=>
{
Array.from(list.children)
.filter((todo)=>{
console.log(todo.textContent);
return !todo.textContent.includes(key);
}).forEach((todo)=>{
todo.classList.add('filtered');
});


Array.from(list.children)
.filter((todo)=>{
console.log(todo.textContent);
return todo.textContent.includes(key);
}).forEach((todo)=>{
todo.classList.remove('filtered');
});
}

//Searching by adding keyup event

search.addEventListener('keyup',()=>{
console.log('working!');
const searchkey = search.search.value.trim();
filterTodo(searchkey);


});