document.querySelector('#app').innerHTML = `${Math.random()}`
document.querySelector('#regist').addEventListener('click', () => {
	UA.then(sdk => {
		sdk.register().then(k => console.log(k,'THIS IS REGISTER'))
	})
})
if ('serviceWorker' in navigator) {
	navigator.serviceWorker
		.register('./push-worker.js')
		.then(reg => {
			console.log('service worker registered', reg)
		})
		.catch(err => console.log('service worker not registered', err))
}
