var m = require('mithril')

var Switch = require('../components/Switch')
var TimeInput = require('../components/TimeInput')
var TimeDisplay = require('../components/TimeDisplay')
var SeedGrowerData = require('../models/SeedGrowerData')

// Handle a time input event
function timeInput(ev) {
	time = ev.srcElement.value.slice(0,2) + ev.srcElement.value.slice(3) // Format the time string

	if(ev.srcElement.className == "time-on")SeedGrowerData.data.time_on = time;
	if(ev.srcElement.className == "time-off")SeedGrowerData.data.time_off = time;

	SeedGrowerData.update();
}

// Handle a state toggle event
function toggleState(ev){
	SeedGrowerData.data.system_on = !SeedGrowerData.data.system_on;

	SeedGrowerData.update();
}

module.exports = {
	oninit: () => {
		SeedGrowerData.load()
	},
	view: () => (
		<div class="widget">
			<div class="title-block">
				<h2>Grow Lights</h2>
				<Switch state={SeedGrowerData.data.system_on} callback={toggleState} />
			</div>
			<div>
				<TimeInput icon='brightness-5' time={SeedGrowerData.data.time_on} state="on" callback={timeInput}/>
				<TimeInput icon='moon-waning-crescent' time={SeedGrowerData.data.time_off} state="off" callback={timeInput}/>
			</div>
			<TimeDisplay on={parseInt(SeedGrowerData.data.time_on)} off={parseInt(SeedGrowerData.data.time_off)}/>
		</div>
	)
}