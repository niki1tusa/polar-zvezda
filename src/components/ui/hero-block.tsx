import { ReactNode } from 'react';

import Typography from './typography/typography';

type Props = {
	title: string;
	children?: ReactNode;
};
export default function HeroBlock({ title, children }: Props) {
	return (
		<div className='bg-[url(/nomera/nomera-hero.jpg)] bg-cover pt-[9em] pb-[2em] text-white'>
			<div className='container-width relative mx-auto flex flex-col'>
				<Typography weight='bold' className='mb-[0.59090909090909em] text-[2.8125rem] uppercase'>
					{title}
				</Typography>
				<Typography asChild className='text-muted text-[1.125rem]'>
					<div>{children}</div>
				</Typography>
			</div>
		</div>
	);
}
