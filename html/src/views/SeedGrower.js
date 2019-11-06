var m = require('mithril')

var TimeInput = require('../components/TimeInput')
var TimeDisplay = require('../components/TimeDisplay')
var SeedGrowerData = require('../models/SeedGrowerData')

function timeInput(ev) {
	SeedGrowerData.update(ev.srcElement.className, ev.srcElement.value)
}

function timeInterval(start, stop){

}

module.exports = {
	oninit: () => {
		SeedGrowerData.load()
	},
	onupdate: () =>{
		console.log("Update")
	},
	view: () => (
		<div class="widget">
			<h2>Grow Lights</h2>
			<div>
				<TimeInput icon='brightness-5' time={SeedGrowerData.data.time_on} state="on" callback={timeInput}/>
				<TimeInput icon='moon-waning-crescent' time={SeedGrowerData.data.time_off} state="off" callback={timeInput}/>
			</div>
			<TimeDisplay on={parseInt(SeedGrowerData.data.time_on)} off={parseInt(SeedGrowerData.data.time_off)}/>
		</div>
	)
}