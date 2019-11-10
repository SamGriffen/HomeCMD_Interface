/**
 * Defines a toggle switch
 * @type {[type]}
 */
var m = require('mithril')

module.exports = {
	view: (vnode) => {
		return m("label", {'class':'switch'}, [
		    m("input", {"type":"checkbox",checked:vnode.attrs.state, "onchange":vnode.attrs.callback}),
			m("span", {"class":"slider"})
		])
	}
}