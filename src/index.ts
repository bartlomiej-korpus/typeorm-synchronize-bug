import "reflect-metadata";
import {createConnections} from "typeorm";

createConnections().then(async connections => {
}).catch(error => console.log(error));
