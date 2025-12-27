import type { Metadata } from 'next';

import Section from '@/components/ui/section/section';
import Typography from '@/components/ui/typography/typography';

export const metadata: Metadata = {
	title: 'Номера',
};

export default function Page() {
	return (
		<>
			{/* hero */}
			<Section className='bg-[url(/nomera/nomera-hero.jpg)] pt-[9em] text-white'>
				<div className='container'>
					<Typography weight='bold' size='xl'>
						Home page
					</Typography>
				</div>
			</Section>
			<Section fullScreen className='bg-red-500'>
				<Typography weight='bold' size='xl'>
					first block after hero section
				</Typography>
			</Section>
			<Section fullScreen className='bg-blue-500'>
				<Typography weight='bold' size='xl'>
					second block
				</Typography>
			</Section>
		</>
	);
}
