import { createContext,useContext } from "react";

export const TodoContext= createContext({
 todos:[{
    id: 1,
    todoMsg: 'Todo msg',
    completed: false
 }],
 addTodo:(todo)=>{},
 updateTodo: (todo,id)=>{},
 deleteTodo:(id)=>{},
 toggleComplete:()=>{}
});


export const TodoProvider= TodoContext.Provider;

export const useTodo=()=>{
    return useContext(TodoContext);
}