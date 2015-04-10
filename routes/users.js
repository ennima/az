var express = require('express');
var router = express.Router();
var fs = require('fs');
/* GET users listing. */
router.get('/', function(req, res, next) {
	/*fs.writeFile(__dirname+'/tmp/test','hey there', function(err){
		if(err){
			return console.log("-ERROR: "+err);
		}
		console.log("file saved");
	});*/
	/*var stream = fs.createWriteStream("public/articulos/testht.txt");
	stream.once('open',function(fd){
		stream.write("My first row\n");
		stream.write("second row\n");
		stream.end();
	});*/
	res.send('respond with a resource');
});

module.exports = router;
