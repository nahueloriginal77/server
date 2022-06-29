import { Router, Request, Response } from "express";
import { socie } from "../socie";
export interface socio{
    nombree:string;
    apellido:string;
    nick:string;
    edad:number;
}
export const router = Router();

router.get(`/socies`,(req: Request, res: Response )=> {
let ficha:socie={Nombre: "" ,Apellido:"", nick:"", edad:0 };

socies.array.forEach(socie => {
    if (socie.nick === req.params.nick){
        ficha = socie;
    }
    
});
   res.json({
    ok:true,
    socie: ficha,
   })
},

)