const express= require('express');
const app= express();
const bodyParser=require("body-parser");
const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost/veggie_tasty")
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');
//schema setup
var recipeSchema = new mongoose.Schema({
	name:String,
	image:String
})
 var recipe= mongoose.model("recipe", recipeSchema);



app.get('/', function(req,res){
	res.render("landing");
})

app.get('/recipes', function(req,res){
	recipe.find({}, function(err, allrecipes){
		if(err){
			console.log(err);
		}else {
			res.render("recipes",{recipes:allrecipes});
		}
	});
	
});

app.post('/recipes', function(req,res){
	let name= req.body.name;
	let image= req.body.image;
	let newrecipe ={name:name , image:image}
	recipe.create(newrecipe, function(err, newlyCreated){
	if(err){
		console.log(err);
	}else{
		res.redirect('/recipes');
		
	}
	});
	
});
app.get('/recipes/new', function(req,res){
	res.render('new')

});
app.get('*', function(req, res){
	res.send('Sorry, something went wrong!');

})

app.listen(3000, function(){
	console.log("server is up");
})
