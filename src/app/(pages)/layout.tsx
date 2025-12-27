import { ReactNode } from 'react';

import Header from '@/components/ui/header/header';
import Section from '@/components/ui/section/section';

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<>
			<Section>
				<Header className='bg-[url(/nomera/nomera-hero.jpg) container bg-cover bg-center px-3.75 pt-[1.85714286em] text-white' />
			</Section>

			{children}
		</>
	);
}
