import React, { useState } from 'react'
import Elements from './Elements/Elements'
import Canvas from './Canvas/Canvas'
import './style.scss'

export default function Creating() {
	const [draggableElement, setDraggableElement] = useState()
	return (
		<div className='crafting'>
			<Elements setDraggableElement={setDraggableElement} />
			<Canvas draggableElement={draggableElement} />
		</div>
	)
}
