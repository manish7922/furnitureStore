var express = require("express");
var app = express();
app.use(express.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept,Authorization"
  );
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  next();
});
const port = process.env.PORT || 2410;
app.listen(port, () => console.log(`Node APP Listening on ${port}!`));

const {products,loginData}=require("./data")

app.get("/products",function(req,res){
   let category=req.query.category;
    let arr=products;
    if(category){
        arr=arr.filter((n)=>n.category===category)
    }
    console.log(arr);
    res.send(arr);
})


app.post("/login",function(req,res){
    let email=req.body.email;
    let password=req.body.password;

    let login=loginData.find((n)=>n.email===email || n.password===password)

    console.log(login);

    res.send(login)
})


app.post("/products",function(req,res){
    let body=req.body;
    products.push(body);

    let obj={...body}
    res.send(obj)
})


app.get("/products/:prodCode",function(req,res){
    let prodCode=req.params.prodCode;

    let arr=products.find((n)=>n.prodCode===prodCode);
    res.send(arr)
})

app.put("/products/:prodCode",function(req,res){
    let prodCode=req.params.prodCode;
    console.log(prodCode);
    let body=req.body;
    let index=products.findIndex((n)=>n.prodCode===prodCode);
    if(index>=0){
        let updateProducts={prodCode:prodCode,...body}
        products[index]=updateProducts;
        console.log(updateProducts);
        res.send(updateProducts)
    }else{
        res.status(404).send("data not found");
    }

})


app.delete("/products/:prodCode",function(req,res){
    let prodCode=req.params.prodCode;
    console.log(prodCode);
    let index=products.findIndex((n)=>n.prodCode===prodCode);
    if(index>=0){
        let deleteData=products.splice(index,1);
        res.send(deleteData);
    }else{
        res.status(404).send("data not found");
    }
})


