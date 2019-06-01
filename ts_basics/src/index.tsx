import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';

type FormElem = React.FormEvent<HTMLFormElement>
 
interface ITodo { // ITodo = Interface Todo
    text: string,
    complete: boolean
}

    /*  
        interface ITodo2 extends ITodo {
            tags: string
        }
            // impossible with 'type' 
    */

export default function App(): JSX.Element {

    const [value, setValue] = useState<string>("")
    const [todos, setTodos] = useState<ITodo[]>([])

    const handleSubmit = (e:FormElem):void => {
        e.preventDefault()
        addTodo(value)
        setValue('')
    }

    const addTodo = (text:string) => {
        const newTodos: ITodo[] = [...todos, { 
            text, 
            complete: false 
        }]
        setTodos(newTodos)
    }

    return (
        <Fragment>
            <h1>Todo List</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={value} 
                    onChange={e => setValue(e.target.value)} 
                    required 
                />
                <button type="submit">Add Todo</button>
            </form>
            <section>
                {todos.map((todo:ITodo, index:number) => {
                    return (
                        <li key={index}>
                            {todo.text}
                        </li>
                    )
                })}
            </section>
        </Fragment>
    )
}

const root = document.getElementById('app-root')

ReactDOM.render(<App />, root)