// Supported by Tailwind
export type FontSize = 'xs'|'sm'|'base'|'lg'|'xl'|'2xl'|'3xl'|'4xl'|'5xl'|'6xl'|'7xl'|'8xl'|'9xl'

export interface Props {
	text: string
	bold?: boolean
	size?: FontSize
}

export default function Heading(props: Props) {
	return (
		<p className={`text-center text-${props.size || 'base'} ${props.bold ? 'font-bold' : ''}`}>
			{props.text}
		</p>
	)
}
