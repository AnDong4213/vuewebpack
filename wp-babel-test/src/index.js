function resolveAfter2Seconds() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve('resolve')
		}, 1000)
	})
}
let asyncCall = async function() {
	try {
		var result = await resolveAfter2Seconds()
		console.log(result);
		return 'HR'
	} catch (err) {
		throw new Error(err)
	}
}
asyncCall().then(res => {
	console.log(res)
})


/*import {haha} from './test.js'
haha('99')

var name = "Bob", time = "today";
console.log(`Hello ${name}, how are you ${time}?`)*/










