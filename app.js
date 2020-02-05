const express= require('express');
const app= express();
const bodyParser=require("body-parser");

const camps = [
		{name: 'uno', image: "https://images.unsplash.com/photo-1475483768296-6163e08872a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
		{name: 'dos', image: "https://images.unsplash.com/photo-1497906539264-eb74442e37a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
		{name: 'tres', image: "https://images.unsplash.com/photo-1492648272180-61e45a8d98a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"}
];

app.use(bodyParser.urlencoded({extended:true}));


app.set('view engine','ejs');
app.get('/', function(req,res){
	res.render("landing");
})

app.get('/campgrounds', function(req,res){
	
	res.render('campgrounds',{camps:camps})
});

app.post('/campgrounds', function(req,res){
	let name= req.body.name;
	let image= req.body.image;
	let newCampground ={name:name , image:image}
	camps.push(newCampground);
	res.redirect('/campgrounds')

});
app.get('/campgrounds/new', function(req,res){
	res.render('new')

});
app.get('*', function(req, res){
	res.send('Sorry, something went wrong!');

})

app.listen(3000, function(){
	console.log("server is up");
})
