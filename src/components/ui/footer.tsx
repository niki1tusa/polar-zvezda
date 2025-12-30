import { Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { FOOTER_LINKS } from '@/shared/config/footer-link-config';
import { KRISTALL_URL, PRIVACY_PAGE, SITE_CREATOR, TEL } from '@/shared/constants/global-constants';

import Section from './section/section';

export default function Footer() {
	return (
		<div className='bg-booking max-w-352.5'>
			<Section className='mt-[2.5em] mb-[1.4em] p-[0.714286em]'>
				<div className='container-width -mt-5 flex flex-col items-center gap-2.5 sm:flex-row sm:justify-between sm:gap-0'>
					<Link href='/'>
						<Image src='/logo/logo-small.png' alt='logo' width={96} height={85} />
					</Link>
					<Link href={KRISTALL_URL} target='_blank'>
						<Image src='/logo/footer-logo.png' alt='kristall-logo' width={262} height={66} />
					</Link>
					<ul className='flex flex-col items-center justify-center gap-[1.25em] text-[1rem] sm:flex-row'>
						{FOOTER_LINKS.map(item => (
							<li
								key={item.title}
								className='mr-[2.23809524em] font-semibold text-[#b78e7b] transition-colors hover:text-white'
							>
								<Link href={item.link}>{item.title}</Link>
							</li>
						))}
						<li className='flex-center mr-12 gap-2.5 sm:mr-0'>
							<Phone size={18} className='text-icons' />
							<Link className='hover:underline' href={TEL}>
								+7 (821) 445-50-20
							</Link>
						</li>
					</ul>
				</div>
			</Section>
			<Section className='bg-[#291f1e] text-[0.875rem] font-normal'>
				<div className='container-width flex flex-col py-[1.5em]'>
					<span className='leading-[1.4] text-[#66392a]'>
						{/* TODO: text size */}
						© 2026 Гостиничный комплекс «Полярная звезда» <br /> Улица Нефтяников, 39 (Усинск)
					</span>
					<div className='flex w-full items-center justify-between'>
						<Link href={PRIVACY_PAGE} className='text-deep-red'>
							Политика конфиденциальности
						</Link>
						<div>
							<span className='text-[#66392a]'>Разработка и поддержка</span>{' '}
							<Link target='_blank' href={SITE_CREATOR} className='text-deep-red underline'>
								&ldquo;{SITE_CREATOR}&ldquo;
							</Link>
						</div>
					</div>
				</div>
			</Section>
		</div>
	);
}
