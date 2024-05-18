#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let todoList: string[]= [];
let conditions = true
console.log(chalk.greenBright.italic("Welcome to TODO LIST.."))


let main = async () => {
    while (conditions) {
        let choices = await inquirer.prompt([
            {
                name:"choice",
                type:"list",
                message:(chalk.whiteBright.bold("select a option")),
                choices:["add task" ,"delete task", "update task","view todo-list", "exit"],
            }
        ]);
        if(choices.choice === "add task"){
            await addTask()
        }
        else if(choices.choice === "delete task"){
            await deleteTask()
        }
        else if(choices.choice === "update task"){
            await updateTask()
        }
        else if(choices.choice === "view todo-list"){
            await viewtodoList()
        }
        else if(choices.choice === "exit"){
            conditions = false;
            console.log(chalk.greenBright.italic("exit  successfully"));
        }
    }


}
// add task
let addTask= async () => {
    let newTask = await inquirer.prompt([
        {
            name:"task",
            type:"input",
            message:"enter your new task?"
        }
    ]);
    todoList.push(newTask.task)
    console.log(chalk.greenBright(" Task added in successfully" , newTask.task));
}

// view todo-list

let viewtodoList =  () => {
    console.log(chalk.bold.bgCyanBright("\n your Todo-List : \n"));
    todoList.forEach((task, index) => {
        console.log(`${index}: ${task}`)
    })
    }
//delete task
let deleteTask = async () => {
    await viewtodoList()
    let taskIndex = await inquirer.prompt([
        {
            name:"index",
            type:"number",
            message:(chalk.whiteBright.bold("Enter the index number of the task you want to delete ?")),
        }
    ]);
    let deletedtask = todoList.splice(taskIndex.index, 1);
    console.log(chalk.redBright.italic(`\n ${deletedtask} this task has been deleted in todo list`));
}
// update 
let updateTask= async () => {
    await viewtodoList()
    let update_task = await inquirer.prompt([
        {
            name:"index",
            type:"number",
            message:(chalk.whiteBright.bold("Enter the index.no of the task you want to update ? ")),
        },
           {
                name: "new_task",
                type:"input",
                message:(chalk.whiteBright.bold("Now enter new task name ?")),
           }
            
    ]);
    todoList[update_task.index] = update_task.new_task
    console.log(chalk.greenBright.italic(`\n Task at index.no ${update_task.index} updated successfully ... check in view todo list`))
}
main();


























