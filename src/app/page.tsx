import HeroBlock from '@/components/ui/hero-block';
import Section from '@/components/ui/section/section';
import Typography from '@/components/ui/typography/typography';

export default function Home() {
	return (
		<>
			<HeroBlock title='Звёздный отель для отдыха' />
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
