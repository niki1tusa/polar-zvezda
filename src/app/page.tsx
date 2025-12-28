import Header from '@/components/ui/header/header';
import Section from '@/components/ui/section/section';
import Typography from '@/components/ui/typography/typography';

export default function Home() {
	return (
		<>
			<Section className='bg-[url(/nomera/nomera-hero.jpg)]'>
				{/* header */}
				<Section>
					<Header className='container-width px-3.75 pt-[1.85714286em] text-white' />
				</Section>
				{/* hero */}
				<Section className='pt-[9em]'>
					<Typography weight='bold' size='xl'>
						Home page
					</Typography>
				</Section>
			</Section>
			<Section fullScreen className='pt-[9em]'>
				<Typography weight='bold' size='xl'>
					first block after hero section
				</Typography>
			</Section>
			<Section fullScreen className='pt-[9em]'>
				<Typography weight='bold' size='xl'>
					second block
				</Typography>
			</Section>
		</>
	);
}
