const {getTodos,createTodo}=require('./Controllers/Todo')
const router=require('express').Router();

router.get("/",(req,res)=>{
    res.send("Let's build CRUD apis");
});

// create functionality(POST)

router.post('/todos',createTodo);

router.get('/todos',getTodos);
module.exports=router;