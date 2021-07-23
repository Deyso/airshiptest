// 86acbd31cd7c09cf30acb66d2fbedc91daa48b86:1627018993.580874
!(function (n, r, e, t, c) {
	var i,
		o = 'Promise' in n,
		u = {
			then: function () {
				return u
			},
			catch: function (n) {
				return n(new Error('Airship SDK Error: Unsupported browser')), u
			}
		},
		s = o
			? new Promise(function (n, r) {
					i = function (e, t) {
						e ? r(e) : n(t)
					}
			  })
			: u
	;(s._async_setup = function (n) {
		if (o)
			try {
				i(null, n(c))
			} catch (n) {
				i(n)
			}
	}),
		(n[t] = s)
	var a = r.createElement('script')
	;(a.src = e), (a.async = !0), (a.id = '_uasdk'), (a.rel = t), r.head.appendChild(a)
})(window, document, 'https://aswpsdkeu.com/notify/v1/ua-sdk.min.js', 'UA', {
	vapidPublicKey: 'BEUeipTLa20gngcbHSpaZOu0E3oI7gyC3NAYoKz5tDolUg_cgZRnk-W8jaWJbZRAAiablr0KCRR892MxGyRiHO0=',
	appKey: '5RMQoVNmTZKkRQzSWsP88A',
	token: 'MTo1Uk1Rb1ZObVRaS2tSUXpTV3NQODhBOk81MjdOTDFJd0NFcUZpMHFPNzFKdmRmSmVzZGhJSGF1MGhjOVNqWXViTnc'
})
