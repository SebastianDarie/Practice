const imageCarousel = (() => {
	const img = document.querySelector('.slider')
	const prev = document.querySelector('.prev')
	const next = document.querySelector('.next')
	const circles = document.querySelectorAll('i')
	let idx = 1
	let timeout

	function previousImage() {
		idx === 1 ? (idx = 6) : idx--
		defaultCircle()

		img.classList.remove('current')

		setTimeout(() => {
			img.setAttribute('src', `img/img${idx}.jpg`)
		}, 500)

		setTimeout(() => {
			img.classList.add('current')
		}, 1000)

		activeCircle()
		imgTimeout()
	}

	function nextImage() {
		idx === 6 ? (idx = 1) : idx++
		defaultCircle()

		img.classList.remove('current')

		setTimeout(() => {
			img.setAttribute('src', `img/img${idx}.jpg`)
		}, 500)

		setTimeout(() => {
			img.classList.add('current')
		}, 1000)

		activeCircle()
		imgTimeout()
	}

	function showImgCircle(circle) {
		const circleIndex = circle.dataset.key
		idx = circleIndex
		defaultCircle()

		img.classList.remove('current')

		setTimeout(() => {
			img.setAttribute('src', `img/img${idx}.jpg`)
		}, 500)

		setTimeout(() => {
			img.classList.add('current')
		}, 1000)

		activeCircle()
		imgTimeout()
	}

	function imgTimeout() {
		clearInterval(timeout)
		timeout = setInterval(nextImage, 5000)
	}

	function defaultCircle() {
		circles.forEach((circle) => {
			circle.classList.remove('fa-dot-circle')
			circle.classList.add('fa-circle')
		})
	}

	function activeCircle() {
		const curr = document
			.querySelector('.circles')
			.querySelector(`[data-key="${idx}"]`)
		curr.classList.remove('fa-circle')
		curr.classList.add('fa-dot-circle')
	}

	prev.addEventListener('click', previousImage)
	next.addEventListener('click', nextImage)

	circles.forEach((circle) => {
		circle.addEventListener('click', function () {
			showImgCircle(this)
		})
	})

	return {
		previousImage,
		nextImage,
		imgTimeout,
		showImgCircle,
		defaultCircle,
		activeCircle,
	}
})()

imageCarousel.onload = imageCarousel.imgTimeout()
