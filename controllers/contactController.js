//@des get all contact
//@route get /api/contacts
//access private

const customError = require("../errorClass/custemError");




const getContacts = (req, res) => {
  res.send("get all contacts");
};

//@des post  contact
//@route post /api/contacts
//access private

const postContacts = (req, res,next) => {
  if (!req.body.name) {
   return next(new customError('name is required' ,400))
  }

  res.send("post all contacts");
};
//@des get single contact
//@route get /api/contacts:id
//access private
const getContact = (req, res) => {
  res.send(`get single contact with id :${req.params.id}`);
};
//@des update contact
//@route put /api/contacts:id
//access private
const updateContact = (req, res) => {
  res.send(`update contacts with id :${req.params.id}`);
};
//@des delete contact
//@route delete /api/contacts:id
//access private
const delateContact = (req, res) => {
  res.send(`delete contact with id ${req.params.id}`);
};

module.exports = {
  getContacts,
  postContacts,
  getContact,
  updateContact,
  delateContact,
};
