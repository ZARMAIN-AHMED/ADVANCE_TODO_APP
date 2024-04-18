#! /usr/bin/env  node

import inquirer from "inquirer"


let todos : any[] = [];
let condition = true



while (condition) {
    let ans : any = await inquirer.prompt(
        [
            {
                name : "select",
                type : "list",
                message : "select an operation",
                choices : ["Add","update","view","delete","exit"],
             }
 ]);

        if (ans.select ==="Add") {
            let addtodo : any = await inquirer.prompt(
                {
                name: "todo",
               type: "input",
                message: "Add items in the list",
                validate: function (input) {
                    if(input.trim() == ""){
                        return "please enter a non-empty item."
                    }
                    return true;
                }
            }
        )

 if(addtodo.todo.trim() !== ""){       
todos.push (addtodo.todo);
todos.forEach(todo => console.log(todo) )
 }
}


if (ans.select === "update") {
    let updateTodo : any = await inquirer.prompt([
        {
            name : "todo",
            type : "list",
            message : "update items in the list",
            choices : todos.map(item => item)
     
        }    
        
]);


let addtodo : any = await inquirer.prompt(
    {
    name: "todo",
    type: "input",
    message: "Add item in the list",
    }

)


let newtodo = todos.filter(val =>val !== updateTodo.todo);
todos = [...newtodo,addtodo.todo]
todos.forEach(todo => console.log(todo) )
}
if(ans.select === "view"){
    todos.forEach(todo => console.log(todo) )

}
if(ans.select === "delete"){
    let deleteTodo : any = await inquirer.prompt([
        {
            name : "todo",
            type : "list",
            message : "select item to delete",
            choices : todos.map(item => item)
     
        }    
        
]);
let newtodo = todos.filter(val =>val !== deleteTodo.todo);
todos = [...newtodo];
todos.forEach(todo => console.log(todo) )
}
if (ans.select === "exit"){
    console.log("exitining program.....");
    condition = false;
}
}


























