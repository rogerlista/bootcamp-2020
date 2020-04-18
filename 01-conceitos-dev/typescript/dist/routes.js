"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function helloWorld(request, response) {
    return response.json({ message: 'Hello GoStack' });
}
exports.helloWorld = helloWorld;
