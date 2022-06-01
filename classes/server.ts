import  Express from "express";
import{SERVER_PORT} from "../global/enviroment";


export class servidor {
    public app:Express.Application;
    public port:number;

    public constructor (){
        this.app=Express();
        this.port=SERVER_PORT;

    }
    start (callback: Function){
        this.app.listen(this.port, callback());
    }
}