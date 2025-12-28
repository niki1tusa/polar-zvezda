import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

import { HEADER_LINKS } from '@/shared/config/header-link-config';

import Section from '../section/section';

import { headerVariants } from './header-config';
import { HeaderProps } from './header-types';
import { cn } from '@/lib/utils';

export default function Header({ position, className, ...rest }: HeaderProps) {
	const styleProps = cn(headerVariants({ position }), className);
	// TODO: нужно поднять текст в хедере
	return (
		<Section>
			<header
				className={`${styleProps} container-width bg-[url(/nomera/nomera-hero.jpg)] bg-cover bg-top px-3.75 pt-[1.85714286em] pb-[0.2em]`}
				{...rest}
			>
				<Link href='/'>
					<Image width={96} height={85} src='/logo/logo-small.png' alt='logo' />
				</Link>
				<ul className='flex-center gap-[1.25em] text-[1rem] font-semibold'>
					{HEADER_LINKS.map((el, i) => (
						<li
							key={el.title}
							className={clsx(
								'inline-block',
								HEADER_LINKS.length - 1 === i ? 'm-0' : 'mr-[2.23809524em]'
							)}
						>
							<Link href={el.link}>{el.title.toUpperCase()}</Link>
						</li>
					))}
				</ul>
			</header>
		</Section>
	);
}
