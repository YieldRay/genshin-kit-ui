import handler from "./api/index.js";
import http from "node:http";
const port = Number(process.argv[2]) || 8080;
console.log(`Starting API server at http://localhost:${port}`);
http.createServer(handler).listen(port);
