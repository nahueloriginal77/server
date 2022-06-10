const nombre="nahuel calveira";
console.log(`Mi nombre es ${nombre}`)

import {servidor} from "./classes/server";
import { router } from "./router/router";
import cors  from "cors";

import bodyParser, { urlencoded } from "body-parser";
let server = new servidor();

server.app.use(bodyParser.urlencoded({
    extended:true
}));

// Credenciales de seguridad
server.app.use(cors({origin:true, credentials:true}));

server.app.use('/', router)

server.start( () => {
    console.log("servidor corriendo en " + server.port);
    
});
