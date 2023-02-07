import {ROLES} from "./roles.enum";
export class User{
    user="";
    name="";
    email="";
    password="";
    confirm="";
    role=ROLES.User

    constructor (userName,email,password,confirm,role){
        this.userName=userName;
        this.email=email;
        this.password=password;
        this.confirm=confirm;
        this.role=role;

    }
}