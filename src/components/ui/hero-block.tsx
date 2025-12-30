'use client';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

import Typography from './typography/typography';

type Props = {
	title: string;
	children?: ReactNode;
};
export default function HeroBlock({ title, children }: Props) {
	const pathname = usePathname();
	const isHomePage = pathname === '/';
	return (
		<div
			className={clsx(
				isHomePage ? 'bg-[url(/home/home-hero.jpg)]' : 'bg-[url(/nomera/nomera-hero.jpg)]',
				'bg-cover pt-[9em] pb-[2em] text-white'
			)}
		>
			<div className='container-width relative mx-auto flex flex-col'>
				<Typography weight='bold' className='mb-[0.59090909090909em] text-[2.8125rem] uppercase'>
					{title}
				</Typography>
				<Typography asChild className='text-muted text-[1.125rem]'>
					<p>{children ? children : ' '}</p>
				</Typography>
			</div>
		</div>
	);
}
