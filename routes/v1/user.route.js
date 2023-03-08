const express=require('express');
const router=express.Router();
const userController=require('../../controllers/user.controller')
router.route('/random').get(userController.getRandomUser)
router.route('/all').get(userController.getAllUser)
router.route('/save').post(userController.postUserData)
router.route('/update').patch(userController.updateUserData)
router.route('/bulk-update').patch(userController.updateBulkUserData)
router.route('/delete').delete(userController.removeUser)


module.exports=router;