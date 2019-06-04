interface UserInterface {
    name: string;
    mail: string;
    age: number;
}

class User implements UserInterface {
    name: string;
    mail: string;
    age: number

    // public / private / protected

    constructor(name:string, mail:string, age:number){
        this.name = name;
        this.mail = mail;
        this.age = age;

        console.log(`User: ${this.name} - ${this.mail}`)
    }

    showUserInfo(){
        console.log(this.name, this.mail, this.age)
    }

    register(){
        console.log(`${this.name} is registered`)
    }
}

let mateusz = new User ('Mateusz Iwańczuk', 'test@test.com', 34)

console.log(mateusz.age) // if private -> error: Property 'age' is private and only accessible within class 'User'
mateusz.showUserInfo();


class Member extends User {
    id: number;

    constructor(id:number, name:string, mail:string, age:number){
        super(name, mail, age);
        this.id = id;
    }

    register(){
        super.register()
    }
}

let janusz: User = new Member(1, 'Janusz Nowak', 'janusz@test.pl', 55);
janusz.register();