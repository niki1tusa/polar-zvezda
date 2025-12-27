import Image from 'next/image';
import Link from 'next/link';

import { HEADER_LINKS } from '@/shared/config/header-link-config';

import { headerVariants } from './header-config';
import { HeaderProps } from './header-types';
import { cn } from '@/lib/utils';

export default function Header({ position, className, ...rest }: HeaderProps) {
	const styleProps = cn(headerVariants({ position }), className);
	return (
		<header className={`${styleProps}`} {...rest}>
			<Link href='/'>
				<Image width={96} height={85} src='/logo/logo-small.png' alt='logo' />
			</Link>
			<ul className='flex-center gap-[1.25em] text-[1rem] font-semibold'>
				{HEADER_LINKS.map(el => (
					<li key={el.title}>
						<Link href={el.link}>{el.title.toUpperCase()}</Link>
					</li>
				))}
			</ul>
		</header>
	);
}
