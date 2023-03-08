const express=require('express');
const router=express.Router();
const userController=require('../../controllers/user.controller')


router.route('/random').get(userController.getRandomUser)
/**
   * @api {get} /random signle user info 
   * @apiDescription Get random signle user
   * @apiPermission any
   * @apiSuccess {Object} single user.
   *
      */
router.route('/all').get(userController.getAllUser)
/**
   * @api {get} /all All user information
   * @apiDescription Get all the user
   * @apiPermission any
   *
   * @apiParam  {Number{1-100}}      [limit=10]  Users per page
   *
   * @apiSuccess {Object[]} all the user.
   *
   */
router.route('/save').post(userController.postUserData)
/**
   * @api {post} /save save single user information
   * @apiDescription post single the user
   * @apiPermission any
   *
   * @apibody  {Number{1-100}}      [id=10]  
   * @apibody  {String{''}}      [name='dasd']  
   * @apibody  {String{''}}      [gender='wewetwd']  
   * @apibody  {String{''}}      [address='asfg']  
   * @apibody  {String{''}}      [photoUrl='asfg']  
   * @apibody  {Number{1-100}}      [contact=10]  

   *
      */
router.route('/update').patch(userController.updateUserData)
/**
   * @api {patch} /update update single user information
   * @apiDescription patch single the user
   * @apiPermission any
   *
   * @apibody  {Number{1-100}}      [id=10]  
   * @apibody  {String{''}}      [name='dasd']  
   * @apibody  {String{''}}      [gender='wewetwd']  
   * @apibody  {String{''}}      [address='asfg']  
   * @apibody  {String{''}}      [photoUrl='asfg']  
   * @apibody  {Number{1-100}}      [contact=10]  

   */
router.route('/bulk-update').patch(userController.updateBulkUserData)
/**
   * @api {patch} /bulk-update update users information
   * @apiDescription patch multiple users
   * @apiPermission any
   *
   *
   * @apibody  {Number{1-100}}      [id=10]  
   * @apibody  {String{''}}      [name='dasd']  
   * @apibody  {String{''}}      [gender='wewetwd']  
   * @apibody  {String{''}}      [address='asfg']  
   * @apibody  {String{''}}      [photoUrl='asfg']  
   * @apibody  {Number{1-100}}      [contact=10]  

   */
router.route('/delete').delete(userController.removeUser)
/**
   * @api {delete} /delete delete user information
   * @apiDescription delete single user
   * @apiPermission any
   *
   *
   * @apibody  {Number{1-100}}      [id=10]  

   */

module.exports=router;