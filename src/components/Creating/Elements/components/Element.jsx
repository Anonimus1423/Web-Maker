import React from 'react'

export default function Element({ image, text }) {
	console.log(image, text)
	return (
		<div>
			<img src={image} alt='element' />
			<p>{text}</p>
		</div>
	)
}
