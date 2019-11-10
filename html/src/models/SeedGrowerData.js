var m = require('mithril')

var SeedGrowerData = {
	data: {
		id: 0,
		config_name: "",
		system_on: 0,
		time_on: 0,
		time_off: 0
	},
	// Method called when new data is obtained
	update: () => {
		// POST the new data to the server
		m.request({
			method: "POST",
			url: "http://192.168.1.10:8000/seeds/config",
			params: {
				id:				SeedGrowerData.data.id,
				config_name: 	SeedGrowerData.data.config_name,
				system_on: 		SeedGrowerData.data.system_on,
				time_on:		SeedGrowerData.data.time_on,
				time_off:		SeedGrowerData.data.time_off
			}
		})
		.then((res) => {
			console.log(res)
		})
	},
	load: ()=>{
		m.request({
			method: "GET",
			url: "http://192.168.1.10:8000/seeds/config"
		})
		.then((data)=>{
			SeedGrowerData.data = data
		})
	}
}

module.exports = SeedGrowerData