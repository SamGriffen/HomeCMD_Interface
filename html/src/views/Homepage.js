var m = require('mithril')

var SeedGrower = require('./SeedGrower')

module.exports = {
	view: () => (
		<>
			<h1 id="main-title">HomeCMD</h1>
			<div id="widgets">
				<SeedGrower />
			</div>
		</>
	)
}