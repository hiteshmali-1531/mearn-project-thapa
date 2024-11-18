const express = require('express');
const router = express.Router();
const {getAllUsers,getAllContacts,deleteUserById,getUserById,editUserById,deleteContactById} = require('../controllerrs/admin-controller');
const authMiddleware = require('../middlewares/auth-middleware');
const adminMiddleware = require('../middlewares/admin-middleware');

router.route('/users').get(authMiddleware,adminMiddleware,getAllUsers);
router.route('/users/:id').get(authMiddleware,adminMiddleware,getUserById);
router.route('/users/update/:id').patch(authMiddleware,adminMiddleware,editUserById);
router.route('/users/delete/:id').delete(authMiddleware,adminMiddleware, deleteUserById);
router.route('/contacts').get(authMiddleware,adminMiddleware,getAllContacts);
router.route('/contacts/delete/:id').delete(authMiddleware,adminMiddleware, deleteContactById);

module.exports = router;