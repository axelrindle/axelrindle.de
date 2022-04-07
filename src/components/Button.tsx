import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './Button.css'

export interface Props {
	text: string
	icon: IconDefinition
	link?: string
}

export default function Button(props: Props) {
	return (
		<a
			className="
				p-4 relative hoverable

				border-2 border-blue-400 text-blue-400
				transition-colors
				lg:bg-transparent lg:text-white

				grid grid-cols-3 items-center
				lg:flex lg:justify-center lg:items-center lg:gap-6

				lg:w-auto lg:flex-1
				lg:py-6 lg:px-10
				lg:cursor-pointer
				lg:border-b-2 lg:border-r-2 lg:border-t-0 lg:border-l-0
				lg:border-white lg:last:border-r-0
			"
			href={props.link}
		>
			<FontAwesomeIcon icon={props.icon} className="justify-self-center text-2xl" />
			<span className="text-left underline col-span-2">
				{props.text}
			</span>
		</a>
	)
}
