
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
        this.displayTodos();
    },

    //change todo
    changeTodos: function (index, changeItem){
        this.todosList[index].itemText = changeItem;
        this.displayTodos();
    },

    //remove todo
    removeTodos: function (index){
        this.todosList.splice(index, 1);
        this.displayTodos();
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

        this.displayTodos();

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
       todos.displayTodos();
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

};




//input
todos.addTodos("item 1");
console.log("---------------------------------------");
todos.addTodos("item 2");
console.log("---------------------------------------");
todos.addTodos("item 3");
console.log("---------------------------------------");
todos.addTodos("item 4");
console.log("---------------------------------------");
todos.addTodos("item 5");
console.log("---------------------------------------");
console.log("Output");


