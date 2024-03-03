import React, { useState } from 'react'
import Element from './components/Element'
import './style.scss'

export default function Elements({ setDraggableElement }) {
	return (
		<div className='elements'>
			<Element
				setDraggableElement={setDraggableElement}
				text='Text'
				image='img/text.png'
			/>
			<Element
				setDraggableElement={setDraggableElement}
				text='Square'
				image='img/square.png'
			/>
			<Element
				setDraggableElement={setDraggableElement}
				text='Circle'
				image='img/oval.png'
			/>
			<Element
				setDraggableElement={setDraggableElement}
				text='Image'
				image='img/image.png'
			/>
		</div>
	)
}
