
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

                if(this.todosList[i].completed === false){
                    console.log("()",todoItemm);
                    
                }else{
                    console.log("[x]",todoItemm);
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
    }


};




//input
