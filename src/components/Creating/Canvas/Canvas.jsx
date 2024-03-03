import React, { useState, useRef, useEffect } from 'react'
import './style.scss'
import { useSelector, useDispatch } from 'react-redux'

export default function Canvas({ draggableElement }) {
	const [isOver, setIsOver] = useState(false)
	let i = 0,
		selectedCount = 0
	const [selectedElement, setSelectedElement] = useState(null)
	const [isTextEdit, setIsTextEdit] = useState()
	const elements = useSelector(state => state.content)
	const dispatch = useDispatch()
	const inputRef = useRef(null)
	const enter = () => {
		if (!isOver) setIsOver(true)
	}
	const leave = () => {
		if (isOver) setIsOver(false)
	}
	const drop = e => {
		if (draggableElement.id === 'text') {
			let target = e.target.getBoundingClientRect()
			const req = {
				type: 'addText',
				payload: {
					posX: e.clientX - target.left,
					posY: e.clientY - target.top,
				},
			}
			dispatch(req)
		}
	}

	const clickHandle = e => {
		if (selectedElement?.id !== e.target.id) {
			setSelectedElement(e.target)
		} else {
			selectedCount++
		}
		if (selectedCount === 1) {
			setIsTextEdit(true)
			selectedCount = 0
		} else {
			setIsTextEdit(false)
		}
	}
	const getTextWidth = text => {
		const span = document.createElement('span')
		span.innerHTML = text
		span.style.fontSize = '14px'
		document.body.appendChild(span)
		const rect = span.getBoundingClientRect()
		document.body.removeChild(span)
		return rect.width
	}

	useEffect(() => {
		if (isTextEdit) {
			inputRef?.current?.focus()
		}
	})
	return (
		<div
			className={isOver ? 'canvas active' : 'canvas'}
			onDragEnter={() => enter()}
			onDragLeave={() => leave()}
			onDragOver={e => e.preventDefault()}
			onDrop={e => drop(e)}
		>
			{elements && elements.length
				? elements.map(element => {
						i++
						if (element.type === 'text') {
							return (
								<div className='content' key={Math.random()}>
									{isTextEdit && selectedElement?.id == i ? (
										<input
											style={{
												left: element.posX - getTextWidth(element.text) / 2,
												top: element.posY - 7,
												color: element.color,
												fontSize: element.fontSize,
												width: getTextWidth(element.text) + 4,
											}}
											ref={inputRef}
											id={i + '-input'}
											value={element.text}
											onChange={e =>
												dispatch({
													type: 'changeText',
													payload: { text: e.target.value, id: i },
												})
											}
											onClick={e => clickHandle(e)}
										/>
									) : (
										<p
											style={{
												left: element.posX - getTextWidth(element.text) / 2,
												top: element.posY - 7,
												color: element.color,
												fontSize: element.fontSize,
											}}
											id={i}
											onClick={e => clickHandle(e)}
										>
											{element.text}
										</p>
									)}
								</div>
							)
						}
				  })
				: null}
		</div>
	)
}
