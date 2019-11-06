/*
 * Component loads in a bar to display selected times
 */
var m = require('mithril')

// TODO: Currently this CANNOT run over midnight, styles will break

module.exports = {
	view: (vnode) => (
		<>
			<div class="time-display" style={`background-color: ${vnode.attrs.off < vnode.attrs.on ? '#d7a3c9' : '#203e6d'}`}>
				<div class="bar" style={`width: ${Math.abs(vnode.attrs.off - vnode.attrs.on)/24}%; left: ${Math.min(vnode.attrs.on, vnode.attrs.off)/24}%; background-color: ${vnode.attrs.off > vnode.attrs.on ? '#d7a3c9' : '#203e6d'}`}/>
			</div>
		</>
	)
}