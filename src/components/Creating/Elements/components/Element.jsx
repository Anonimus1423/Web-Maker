import React from 'react'
import './style.scss'

export default function Element({ image, text, setDraggableElement }) {
	const dragHandle = e => {
		setDraggableElement(e.target)
	}
	return (
		<div
			className='element'
			draggable='true'
			onDrag={e => dragHandle(e)}
			id={text.toLowerCase()}
		>
			<img draggable='false' src={image} alt='element' />
			<p draggable='false'>{text}</p>
		</div>
	)
}
