import express from 'express';
import usersController from '../controller/userController.js';


const router = express.Router();

//Post info
router.post('/', usersController.postData)

// Get All info
router.get('/', usersController.getAll)
 

//Get by ID
//localhost:4000/api/6516b29694370c188d103a94
router.get('/:id', usersController.getById)


//Update by ID
router.put('/:id', usersController.updateById)



//Delete by ID
router.delete('/:id', usersController.deleteById )


//OR Get by username
// router.get('/:userName', usersController.getByUserName)

//OR Update by username
// router.put('/:userName', usersController.updateBUserName)

export default router;

