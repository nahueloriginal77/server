const nombre="nahuel calveira";
console.log(`Mi nombre es ${nombre}`)

import {Servidor} from "./classes/server";
import { router } from "./routes/router";
import cors from "cors";

let server = new Servidor();

// Credenciales de seguridad
server.app.use(cors({origin:true, credentials:true}));

server.app.use('/', router)

server.start( () => {
    console.log("servidor corriendo en " + server.port);
    
});
