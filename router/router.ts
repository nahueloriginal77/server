import { Router, Request, Response } from "express";
import {socie} from "../classes/socie" ;
import {socio} from "../model/socie.model";

export const router = Router();


router.get('/socies', (req: Request, res: Response) => {
    let socies : Array<socio> = [
        {nombre: "johnny",
        apellido:"evans",
        nick:"johnnyRac",
        edad:22,
        }
    ]

  
res.json({
        ok: true,
        mensaje: socies
    });

});

router.post("/registro",(req:Request,res:Response) =>{
    let nombre: string;
    let apellido: string;
    
    //validou el campo del nombre
    if (req.body.nombre && req.body.nombre !== ""){
        nombre=req.body.nombre;
    }
   else{
    res.json({
        ok: true,
        mensaje: "todo ok!"
       })
   
   
 
}
})
router.post("/registro",(req:Request,res:Response) =>{
    const nombre=req.body.nombre;
    res.json({
        ok:true,
        mensaje:`bienvenido ${nombre}`
    })})








