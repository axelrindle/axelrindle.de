import { faCodepen, faGithub, faStackOverflow, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './App.css'
import Button from './components/Button'
import Heading from './components/Heading'
import MobileMenu from './components/MobileMenu'

function App() {
	const buttons = (
		<>
			<Button
				text="E-Mail"
				icon={faEnvelope}
				link="mailto:mail@axelrindle.de" />
			<Button
				text="Twitter"
				icon={faTwitter}
				link="https://twitter.com/axelrindle" />
			<Button
				text="GitHub"
				icon={faGithub}
				link="https://github.com/axelrindle/" />
			<Button
				text="Codepen"
				icon={faCodepen}
				link="https://codepen.io/axelrindle" />
			<Button
				text="StackOverflow"
				icon={faStackOverflow}
				link="https://stackoverflow.com/users/5423625/axel" />
		</>
	)
	return (
		// Wrapper
		<div className="h-full flex flex-col">

			{/* Buttons on large screens */}
			<div className="lg:flex flex-wrap hidden">
				{buttons}
			</div>

			<MobileMenu buttons={buttons} />
			
			{/* Text box */}
			<div className="flex-1 flex flex-col justify-center gap-10">
				<Heading text="Axel Rindle" size="8xl" bold />
				<Heading text="Hobby Developer • Student • Dedicated to Open Source" size="4xl" />
			</div>

		</div> // End wrapper
  	);
}

export default App;
