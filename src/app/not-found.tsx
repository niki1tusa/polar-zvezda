import BookingBlock from '@/components/ui/booking-block';
import Footer from '@/components/ui/footer';
import Header from '@/components/ui/header/header';
import HeroBlock from '@/components/ui/hero-block';
import Section from '@/components/ui/section/section';
import Typography from '@/components/ui/typography/typography';

import { MAIL_BOOK } from '@/shared/constants/global-constants';

import NotFoundClient from '../components/ui/NotFoundClient';

export default function NotFound() {
	return (
		<>
			<Header />
			<HeroBlock title='Бронирование' />
			<BookingBlock />
			<Section className='bg-background-white'>
				<div className='container-width flex flex-col py-[3.71428571em]'>
					<Typography className='text-light-red text-[16px]'>
						<b>404</b>: Запрошенная страница с адресом <NotFoundClient /> не найдена.
					</Typography>
					<Typography className='text-muted-sec text-[18px]'>
						<span>
							Если Вы уверены, что набрали ссылку корректно, напишите, пожалуйста, об этом на:{' '}
							<span className='text-deep-red'>{MAIL_BOOK}</span>
						</span>
					</Typography>
				</div>
			</Section>
			<Footer />
		</>
	);
}
