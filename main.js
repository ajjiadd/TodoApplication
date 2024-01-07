
//here is the function method

var todos = {

    todosList: [],

    //display todos
    displayTodos: function (){
        if(this.todosList.length === 0){
            console.log("No item added!");
        }else{

             for(var i = 0; i < this.todosList.length; i++){
                var todoItemm = this.todosList[i].itemText;

                if(this.todosList[i].completed === true){
                    
                    console.log("[x]",todoItemm);
                    
                }else{
                    console.log("()",todoItemm);
                }
             }

             // console.log("Todo:", this.todosList);

        };
        
    },

    //add todo
    addTodos: function (item){
        var obj = {
            itemText: item,
            completed: false,
       }
       
       this.todosList.push(obj);
        views.displayTodos();
    },

    //change todo
    changeTodos: function (index, changeItem){
        this.todosList[index].itemText = changeItem;
        views.displayTodos();
    },

    //remove todo
    removeTodos: function (index){
        this.todosList.splice(index, 1);
        views.displayTodos();
    },

    //check list are completed or not
    toggleTodo: function(index){
        var todo = this.todosList[index];
         todo.completed = !todo.completed;
    },

    //completed to uncompleted and revarse!!
    toggleTodoAll: function(){
        //debugger;
        var completedTodos = 0;
        var totalTodos = this.todosList.length;

        for(var i = 0; i < totalTodos; i++){
            if(this.todosList[i].completed === true){
                completedTodos++;
            };
            
        };

        if(completedTodos === totalTodos){
            for(var i=0;i<totalTodos;i++) {
                this.todosList[i].completed = false;
            };
        
        }else{
            for(var i=0;i<totalTodos;i++) {
                this.todosList[i].completed = true;
            };
        };

        views.displayTodos();

    },

};


//for display button
/*
var displayTodos = document.getElementById("displayTodos");
    
    displayTodos.addEventListener('click', function(){
        todos.displayTodos();
    });
//for toggle All button
var ToggleAll = document.getElementById("ToggleAll");
    ToggleAll.addEventListener('click', function(){
        todos.toggleTodoAll();
    });
*/


var handlers = {

    displaytodos: function(){
        //for display button
        /*
        var displayTodos = document.getElementById("displayTodos");
            
        displayTodos.addEventListener('click', function(){
            todos.displayTodos();
        });
        */
       views.displayTodos();
    },

    toggleAll: function (){
        //for toggle All button
        /*
        var ToggleAll = document.getElementById("ToggleAll");
        ToggleAll.addEventListener('click', function(){
            todos.toggleTodoAll();
        });
        */
       todos.toggleTodoAll();


    },

    addTodos: function (){
        var inputValue = document.getElementById("inputTodo");
        todos.addTodos(inputValue.value);
        inputValue.value = "";
    },

    changeTodos: function (){
        var indexNumbr = document.getElementById("indexNumbr").value;
        var editText = document.getElementById("editText").value;
        todos.changeTodos(indexNumbr, editText);
    },

    toggleTodo: function(){
        var toggleIndex = document.getElementById("toggleIndex");
        todos.toggleTodo(toggleIndex.value);
    },

    removeTodos: function(){
        var removeIndex = document.getElementById("removeIndex").value;
        todos.removeTodos(removeIndex);
    },

    dltfromList: function(){
        var ul = document.querySelector("ul");
        ul.addEventListener("click", function(evt){  
            if (evt.target.id ==="delete"){
                var li = evt.target.parentNode;
                ul.removeChild(li);
             }

        });

    },

};

var views = {

    displayTodos: function(){
        debugger;
        var todosUl = document.querySelector("ul");
        todosUl.innerHTML = "";
        for(var i=0;i<todos.todosList.length;i++){
            var todoLi = document.createElement("li");
            var todo = todos.todosList[i];
            if(todos.todosList.length === 0){
                console.log("No item added!");
            }else{
                if(todos.todosList[i].completed === true){
                    
                    // console.log("[x]",todoItemm);
                    todoLi.textContent = "[x] " + todo.itemText;
                    
                    
                }else{
                    // console.log("()",todoItemm);
                    todoLi.textContent = "[] " + todo.itemText;
                }
            }
            todoLi.id = i;
            todoLi.appendChild(this.createBtn());
            todosUl.appendChild(todoLi);
        }
    },

    createBtn: function(){
        var dltBtn = document.createElement("button");
        // dltBtn.setAttribute("id", "delete");
        dltBtn.id = "delete";
        dltBtn.textContent = "Delete";
        return dltBtn;
    },


};



//input
handlers.dltfromList();
console.log("Output");


