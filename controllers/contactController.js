const getContacts = (req, res) => {
  res.send("get all contacts");
};

const postContacts=(req,res)=>{
    res.send('post all contacts');
 console.log(req.body);

    
}

const getContact=(req,res)=>{
    res.send(`get single contact with id :${req.params.id}`);
}
const updateContact=(req,res)=>{
    res.send(`update contacts with id :${req.params.id}`);
}
const delateContact=(req,res)=>{
    res.send(`delete contact with id ${req.params.id}`)
}

module.exports={getContacts,postContacts,getContact,updateContact,delateContact};