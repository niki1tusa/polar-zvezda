import { Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { FOOTER_LINKS } from '@/shared/config/footer-link-config';
import { KRISTALL_URL, PRIVACY_PAGE, SITE_CREATOR, TEL } from '@/shared/constants/global-constants';

import Section from './section/section';
import Typography from './typography/typography';

export default function Footer() {
	return (
		<div className='fixed bottom-0 w-352.5'>
			<Section className='bg-booking p-[0.714286em]'>
				<div className='container-width mt-[2.5em] mb-[1.4em] flex items-center justify-between'>
					<Link href='/'>
						<Image src='/logo/logo-small.png' alt='logo' width={96} height={85} />
					</Link>
					<Link href={KRISTALL_URL} target='_blank'>
						<Image src='/logo/footer-logo.png' alt='kristall-logo' width={262} height={66} />
					</Link>
					<ul className='flex-center gap-[1.25em] text-[1rem]'>
						{FOOTER_LINKS.map(item => (
							<li
								key={item.title}
								className='mr-[2.23809524em] font-semibold text-[#b78e7b] transition-colors hover:text-white'
							>
								<Link href={item.link}>{item.title}</Link>
							</li>
						))}
						<span className='flex-center gap-2.5'>
							<Phone size={18} className='text-icons' />
							<Link className='hover:underline' href={TEL}>
								+7 (821) 445-50-20
							</Link>
						</span>
					</ul>
				</div>
			</Section>
			<Section className='bg-[#291f1e]'>
				<div className='container-width flex flex-col'>
					<Typography className='text-[#66392a]'>
						© 2026 Гостиничный комплекс «Полярная звезда» Улица Нефтяников, 39 (Усинск)
					</Typography>
					<div className='flex w-full items-center justify-between'>
						<Link href={PRIVACY_PAGE}>Политика конфиденциальности</Link>
						<span>
							Разработка и поддержка{' '}
							<Link target='_blank' href={SITE_CREATOR} className='text-deep-red underline'>
								&ldquo;{SITE_CREATOR}&ldquo;
							</Link>
						</span>
					</div>
				</div>
			</Section>
		</div>
	);
}
