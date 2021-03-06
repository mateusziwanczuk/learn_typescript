import axios from 'axios'

export const add = (x:number, y:number):number => {
    return x + y;
}

export interface IAdd {
    (x: number, y:number): number
}

export const addWithInterface: IAdd = (x, y) => {
    return x + y
}

export const createUser = (userName: string, userAge: number) => {
    return {
        name: userName,
        age: userAge,
    }
}

export const checkValue = (x: any) => x

export const fetchUser = () => {
    axios
        .get('https://jsonplaceholder.typicode.com/users/1')
        .then(res => res.data)
        .catch(err => console.log(err))
}