import Bio from './_components/Bio';
import Work from './_components/Work';
import Projects from './_components/Projects';
import Skills from './_components/Skills';
import Educations from './_components/Educations';
import Footer from './_components/Footer';

export default function ResumeClient() {
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
