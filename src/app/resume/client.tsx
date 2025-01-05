import Bio from './components/Bio';
import Work from './components/Work';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Educations from './components/Educations';
import Footer from './components/Footer';

export default function client() {
	return (
		<>
			<main className="min-h-dvh min-w-[320px] bg-white text-gray-900">
				<div className="container mx-auto max-w-screen-lg p-4 lg:p-8">
					<Bio />
				</div>
				<div className="container mx-auto max-w-screen-lg space-y-10 p-4 lg:p-8">
					<Work />
					<Projects />
					<Skills />
					<Educations />
				</div>
			</main>
			<Footer />
		</>
	);
}
