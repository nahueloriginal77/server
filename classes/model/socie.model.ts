import { Router, Request, Response } from "express";
import { socie } from "../socie";

export const router = Router();

router.get(`/socies`,(req: Request, res: Response )=> {
let ficha:socie={nombre: "" ,apellido:"", nick: "", edad:0 };

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