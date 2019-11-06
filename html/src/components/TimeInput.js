var m = require('mithril')

/**
 * Formats a 24 hour string for an input value
 * @param  {String} num 24 hour number, as stored in the DB
 * @return {String}     24 hour time, hh:mm
 */
function timeFormat(num){
	let str = pad(num, 4);
	return str.slice(0, 2) + ":" + str.slice(2)
}

/**
 * Pads a number with leading zeroes
 * @param  {String} num The number to pad out
 * @param  {int} 	len Total desired string length
 * @return {String}     Zero padded string
 */
function pad(num, len){
	return ('0'.repeat(len) + num).substr(-1*len, len);
}

/**
 * Converts 24 hour time string into a 12 hour time string
 * @param  {String} string 24 hour time in the form hhmm
 * @return {String}        12 hour time in the form HH:mm
 */
function time24to12(string){
	let time = parseInt(string);
	let hours = Math.floor(time / 100);
	let minutes = time % 100;
	let am = hours < 12;
	hours = (hours > 12 ? hours - 12 : hours);
	return `${pad(hours, 2)}:${pad(minutes, 2)} ${am ? 'AM' : 'PM'}`
}

module.exports = {
	view: (vnode) => {
		return m("div", {"class":"time-field "+vnode.attrs.state}, [
		    m("i", {"class":`mdi mdi-${vnode.attrs.icon}`}),
		    m("label", {"for":"time"+vnode.attrs.state},
		      time24to12(vnode.attrs.time)
		  ),
		  ,
		  m("input", {"class":"time-"+vnode.attrs.state,"id":"time"+vnode.attrs.state,"type":"time","value":timeFormat(vnode.attrs.time), "onchange":vnode.attrs.callback})
		])
	}
}