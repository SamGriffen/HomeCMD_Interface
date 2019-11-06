/**
 * Methods for managing the seedgrower
 */

exports.ip = "192.168.1.11"; // IP Address of the server

// Method for getting current config data from the database
exports.getConfig = (db) => {
	return new Promise((res, rej) =>{
		// Define SQL for getting config setting
		sql = 	`SELECT id,
						config_name,
						system_on,
						time_on,
						time_off
				 FROM 	seed_grower
				 WHERE	selected = 1;
				`;

		db.get(sql, [], (err, row)=>{
			if(err){
				rej("Data not found");
			}
			res(row);
		})
	})
}

// Method for updating data
exports.updateConfig = (db, data) => {
	return new Promise((res, rej) => {
		// Define SQL for updating data
		sql = 	`UPDATE seed_grower
				 SET 	config_name = '${data.config_name}',
				 		system_on = ${data.system_on},
						time_on = '${data.time_on}',
						time_off = '${data.time_off}'
				 WHERE id = ${data.id}
				`;

		db.run(sql, [], (err, row)=>{
			if(err){
				rej("Data not updated");
			}
			res(this.changes);
		})
	})
}