import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();

const classesControllers = new ClassesController();
const connectionsController = new ConnectionsController();

routes.post('/classes', classesControllers.create);
routes.get('/classes', classesControllers.index);

routes.post('/connections', connectionsController.create);
routes.get('/connections', connectionsController.index);

// // http://localhost:3333/users?page=2&sort=desc
// routes.get('/users', (request, response) => {
//     const users = [
//         {
//             name: "John"
//         }, {
//             name: "Mary"
//         }
//     ];

//     const data = request.query;

//     const sort = data.sort;
//     const page = data.page;

//     console.log(sort);
//     console.log(page);

//     return response.json(users);
// });



// // http://localhost:3333/users/2
// routes.delete('/users/:id', (request, response) => {
//     console.log(request.params.id);

//     return response.json({ status: true })
// })


export default routes;