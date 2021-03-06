
// Require express and create an instance of it
var mongoose =require('mongoose') ;
var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));


/* 

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://noor:Noor1990@cluster0-1jcfj.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
}); */
const uri = "mongodb+srv://noor:Noor1990@cluster0-1jcfj.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(uri).then(
    ()=>{console.log("connected")},
    err =>{console.log("err",err);}
  );


  const movieSchema = mongoose.Schema({
      title:String,
      year:Number,
      rating:Number,
      
  });
  const Movie = mongoose.model('Movie',movieSchema);
 var movie =new Movie({title:'the trip',year:2002, rating:7});
 
movie.save(); 
















// on the request to root (localhost:3000/)
app.get('/', function (req, res) {
    res.render('index');
});
/* req.params: {"status":"200", "message":"OK"}; */
app.get('/test',function(req, res) {
    res.send({status:200,message:"OK"});
});

app.get('/time',function(req, res) {
    var time=new Date();
    res.send({status:200,message:time.getHours()+" :"
    + time.getSeconds()+" "
});
});

app.get('/hello',function(req, res) {

    res.send({status:200,message:"hello "});
});
/* app.get(/.*fly$/, function (req, res) {
    res.send('/.*fly$/')
  });
 */
  app.get('/hello/:id', function (req, res, next) {

      
      res.send({status:200,message:"hello,"+req.params.id})
  });

  app.get('/search', function (req, res) {
    const s=req.query.s;
      if  (!s) {  res.send({status:500, error:true, message:"you have to provide a search"})
          
        }
        else{
            res.send({status:200,message:"OK", data:s})
        }
      
});

const movies = [
    { title: 'Jaws', year: 1975, rating: 8 },
    { title: 'Avatar', year: 2009, rating: 7.8 },
   
    { title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 },
    { title: 'Brazil', year: 1985, rating: 8 }
]

app.get('/movie/create/', function (req, res, next) {

      
    res.send({status:200,message:"hello,"+req.params.id})
});



app.get('/movie/read/', function (req, res, next) {

     
    res.send({status:200,data:movies})
});

app.get('/movie/read/by_date', function (req, res, next) {

   
movies.sort(function (a, b) {
    return a.year>b.year;
});
/* document.write('<pre>' + JSON.stringify(data, 0, 4) + '</pre>'); */
   
/* movies.sort(function(a, b) {
    return a.year > b.year;
});
console.log(movies); */
/* movies.sort(); */


    res.send({status:200,data:movies.sort(function (a, b) {
        return a.year-b.year;
    })})
});

app.get('/movie/read/by_rating', function (req, res, next) {

   
   /*  movies.sort(function (a, b) {
        return a.year>b.year;
    }); */
    /* document.write('<pre>' + JSON.stringify(data, 0, 4) + '</pre>'); */
       
    /* movies.sort(function(a, b) {
        return a.year > b.year;
    });
    console.log(movies); */
    /* movies.sort(); */
    
    
        res.send({status:200,data:movies.sort(function (a, b) {
            return b.rating-a.rating;
        })})
    });
    

    app.get('/movie/read/by_title', function (req, res, next) {

   
        /*  movies.sort(function (a, b) {
             return a.year>b.year;
         }); */
         /* document.write('<pre>' + JSON.stringify(data, 0, 4) + '</pre>'); */
            
         /* movies.sort(function(a, b) {
             return a.year > b.year;
         });
         console.log(movies); */
         /* movies.sort(); */
         
         
             res.send({status:200,data:movies.sort(function (a, b) {
                 return a.name-b.name;
             })})
         });


         app.get('/movie/read/id/:i', function (req, res, next) {
    const Id=req.params.i
   
  if(Id>movies.length){
    res.send({status:404, error:true, message:'the movie '+Id+ ' does not exist'});
  }
/*   else if(!Id){
    res.send("enter a movie id to search for");

} */
          else {
                res.send({status:200, data:movies[Id]});
          }


            
        });
        

app.get('/movie/add',function (req, res, next) {
    var query = require('url').parse(req.url,true).query;
const title=query.title;
const year=query.year;
const rating=query.rating;
var movie;
if (!title || !year || year>9999 ||year<1000 || isNaN(year) ){
res.send({status:403, error:true, message:'you cannot create a movie without providing a title and a year'})

}
if (title && year && rating){
movie={title:title,
year:year,
rating:rating
}
movies.push(movie);
res.send({data:movies})
}
if (title && year && !rating){

    movie={title:title,
        year:year,
        rating:4
        }
        movies.push(movie);
        res.send({data:movies})
}





});


app.get('/movie/delete/:id', function (req, res, next) {

    var id=req.params.id;
    console.log(id)
    if (id<movies.length){

      movies.splice(id,1);
      res.send({data:movies})
    }

      else{
    res.send({status:404, error:true, message:'the movie '+id+ ' does not exist'})


}
});


app.get('/movie/update/', function (req, res, next) {

    var query = require('url').parse(req.url,true).query;
    const title=query.title;
    const year=query.year;
    const rating=query.rating;
    const id=query.id;
    
if (title && !rating){
    movies[id].title=title;
    res.send({data:movies})
}

if (rating){
    movies[id].rating=rating;
    res.send({data:movies})
}
if (year){
    movies[id].year=year;
    res.send({data:movies})
}

if (title && rating){
    movies[id].title=title;
    movies[id].rating=rating;
    res.send({data:movies})
}
});

/* 
app.get('/movie/delete/', function (req, res, next) {

      
    res.send({status:200,message:"hello,"+req.params.id})
}); */
/* 
// On localhost:3000/welcome
app.get('/welcome', function (req, res) {
    res.send('<b>Hello</b> welcome to my http server made with express');
});

// Change the 404 message modifing the middleware
app.use(function(req, res, next) {
    res.status(404).send("Sorry, that route doesn't exist. Have a nice day :)");
});
 */
// start the server in the port 3000 !
app.listen(3000, function () {
    console.log('Example app listening on port 3000.');
});
/* mongodb+srv://noor:Noor@1990@cluster0-1jcfj.mongodb.net/test?retryWrites=true&w=majority */