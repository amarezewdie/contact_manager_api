const express=require('express');
const {getContacts, postContacts, getContact, updateContact, delateContact}=require('../controllers/contactController');

const router=express.Router();

router.route('/').get(getContacts).post(postContacts);

router.route('/:id').get(getContact).put(updateContact).delete(delateContact);
module.exports=router;