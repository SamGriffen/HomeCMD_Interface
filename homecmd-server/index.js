// Require the express framework
const exp = require('express');

// Require CORS
var cors = require('cors');

// Use express
const app = exp();

// Include HTTPS functionality
const axios = require('axios');

const qs = require('querystring')

// Use CORs
app.use(cors());

// Define the port to use
const port = process.env.PORT || "8000";

const db_name = 'database/homecmd.db';


/*
 * Seed grower data and methods
 */
const seeds = require('./src/seedgrower')


// Open a database
const sqlite = require('sqlite3').verbose();
let db = new sqlite.Database(db_name, (err) => {
	if(err){
		return console.error(err.message);
	}
});

console.log(`Connected to SQLite database: ${db_name}`);

// Route for getting seed grower settings
app.get("/seeds/config", (req, res) => {
	seeds.getConfig(db).then((row)=>{res.send(row)})
})

// Route for setting seed grower settings
app.post("/seeds/config", (req, res) => {
	seeds.updateConfig(db, req.query).then((updates)=>{console.log(`Updated ${updates} rows.`)}).catch((error)=>{console.log(error)});

	console.log(`Request to: http://${seeds.ip}/update` )

	let config = {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	}

	let request = {
		timeon: req.query.time_on,
		timeoff: req.query.time_off,
		systemon: req.query.system_on
	}

	axios.post(`http://${seeds.ip}/update`, qs.stringify(request), config).then(()=>{
		console.log("Submitted Update");
	}).catch((err)=>{
		console.log(err);
	})

	res.send("Success");
})

var server = app.listen(port, () => {
	console.log(`App started on port ${port}`);
})
