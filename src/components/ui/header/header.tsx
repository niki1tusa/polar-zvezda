'use client';
import clsx from 'clsx';
import { MenuIcon, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { HEADER_LINKS } from '@/shared/config/header-link-config';

import Section from '../section/section';

import { HeaderProps } from './header-types';

function MobileHeader() {
	return (
		<ul className='bg-booking flex max-h-[230px] w-full flex-col items-start gap-1 px-3.75 py-3 text-[1rem] font-semibold transition-all'>
			{HEADER_LINKS.map(el => (
				<li key={el.title}>
					<Link href={el.link}>{el.title.toUpperCase()}</Link>
				</li>
			))}
		</ul>
	);
}

export default function Header({ className, ...rest }: HeaderProps) {
	const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
	const handleToggleMenu = () => {
		setIsOpenMenu(!isOpenMenu);
	};
	const pathname = usePathname();
	const isHomePage = pathname === '/';
	// TODO: нужно поднять и немного margin left текст в хедере
	// TODO: не появляется картинка в section, хотя появляется в header
	return (
		<Section
			className={clsx(
				isHomePage ? 'bg-transparent' : 'bg-[url(/nomera/nomera-hero.jpg)] bg-cover bg-top',
				'fixed top-0 z-30 w-full max-w-[1410px]'
			)}
		>
			<header
				className={clsx(
					`container-width z-10 hidden w-full items-center justify-between px-3.75 pt-[1.85714286em] pb-[0.2em] sm:flex`,
					className
				)}
				{...rest}
			>
				<Link href='/' className='-mt-[25px]'>
					<Image
						width={96}
						height={85}
						src={isHomePage ? '/logo/logo-main.png' : '/logo/logo-small.png'}
						alt='logo'
					/>
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
			<Section className='z-50 flex w-full bg-[#291f1e] sm:hidden'>
				<div className='flex w-full items-center justify-between px-3.75 py-[0.92857143em]'>
					<Link href='/'>
						<Image width={51} height={45} src='/logo/logo-small.png' alt='logo' />
					</Link>
					<button
						type='button'
						onClick={handleToggleMenu}
						className='text-deep-red z-50 block sm:hidden'
					>
						{isOpenMenu ? <X size={30} /> : <MenuIcon size={30} className='font-bold' />}
					</button>
				</div>

				{isOpenMenu && <MobileHeader />}
			</Section>
		</Section>
	);
}
