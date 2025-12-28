import type { Metadata } from 'next';

import BookingBlock from '@/components/ui/booking-block';
import HeroBlock from '@/components/ui/hero-block';
import Section from '@/components/ui/section/section';
import Typography from '@/components/ui/typography/typography';

export const metadata: Metadata = {
	title: 'Номера',
};

export default function Page() {
	return (
		<>
			{/* hero */}
			<HeroBlock title='ЗВЕЗДНОЕ РАЗМЕЩЕНИЕ'>
				Одноместные, двухместные, четырехместные номера, а также номера <br />
				&quot;Полулюкс&quot; и &quot;Люкс&quot;
			</HeroBlock>

			{/* бронирование номеров */}
			<BookingBlock />
			{/* example */}
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
