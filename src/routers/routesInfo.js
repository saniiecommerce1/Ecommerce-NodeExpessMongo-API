import express from 'express';
import usersController from '../controller/usersController.js';


const router = express.Router();

//Post info
router.post('/users', usersController.postData)

// Get All info
router.get('/users', usersController.getAll)
 

//Get by ID
//localhost:4000/api/6516b29694370c188d103a94
router.get('/users/:id', usersController.getById)


//Update by ID
router.put('/users/:id', usersController.updateById)



//Delete by ID
router.delete('/users/:id', usersController.deleteById )


//OR Get by name
// router.get('/users/:name', usersController.getByName)

//OR Update by name
// router.put('/users/:name', usersController.updateByName)

export default router;

