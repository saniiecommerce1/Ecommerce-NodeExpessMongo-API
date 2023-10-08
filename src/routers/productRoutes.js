import express from 'express';
import productController from '../controller/productController.js';


const router = express.Router();

//Post info
router.post('/', productController.postData)

// Get All info
router.get('/', productController.getAll)
 

//Get by ID
//localhost:4000/api/6516b29694370c188d103a94
router.get('/:id', productController.getById)


//Update by ID
router.put('/:id', productController.updateById)



//Delete by ID
router.delete('/:id', productController.deleteById )


//OR Get by username
// router.get('/:title', productController.getByProductTitle)

//OR Update by username
// router.put('/:title', productController.updateByProductTitle)

export default router;




