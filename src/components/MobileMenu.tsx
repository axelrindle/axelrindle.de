import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ReactNode, useCallback, useEffect, useState } from 'react'
import { update as updateTweens, Tween, Easing } from '@tweenjs/tween.js'

export interface Props {
	buttons?: ReactNode
}

export default function MobileMenu(props: Props) {
	const [isOpen, setOpen] = useState<boolean>(false)
	const [buttonRotation, setButtonRotation] = useState<number>(0)
	const [shouldAnimate, setAnimate] = useState<boolean>(false)

	const animate = useCallback(() => {
		if (! shouldAnimate) return

		requestAnimationFrame(animate)
		updateTweens()
	}, [shouldAnimate])

	useEffect(() => {
		if (shouldAnimate) {
			animate()
		}
	}, [animate, shouldAnimate])
	
	useEffect(() => {
		new Tween({ buttonRotation })
			.to({ buttonRotation: isOpen ? 90 : 0 })
			.easing(Easing.Elastic.Out)
			.onUpdate(data => setButtonRotation(data.buttonRotation))
			.onComplete(() => setAnimate(false))
			.start()
	
		setAnimate(true)
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isOpen])

	return (
		<>
			{/* Button */}
			<button
				className="
					lg:hidden
					absolute bottom-4 right-4 z-20
					rounded-full w-14 h-14
					bg-blue-400
				"
				style={{
					// https://codepen.io/sdthornton/pen/wBZdXq (.card-2)
					boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
				}}
				onClick={() => setOpen(!isOpen)}
			>
				<FontAwesomeIcon
					icon={isOpen ? faClose : faBars}
					transform={{
						rotate: buttonRotation
					}}
				/>
			</button>

			{/* Container */}
			<div
				className={`
					absolute left-0 right-0 top-0 bottom-0 z-10
					bg-white
					flex flex-col justify-center gap-6
					${!isOpen && '-translate-x-full'}
					lg:hidden p-10
				`}
				style={{
					transition: 'transform .25s ease-out',
				}}
			>
				{props.buttons}
			</div>
		</>
	)
}
