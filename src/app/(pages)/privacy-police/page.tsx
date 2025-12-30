import type { Metadata } from 'next';

import BookingBlock from '@/components/ui/booking-block';
import HeroBlock from '@/components/ui/hero-block';
import PrivacyPolicyBlock from '@/components/ui/privacy-policy-block';

import { SITE_URL } from '@/shared/constants/global-constants';

export const metadata: Metadata = {
	metadataBase: SITE_URL,
	title: 'Политика конфеденциальности',
};

export default function Page() {
	return (
		<>
			<HeroBlock title='ПОЛИТИКА КОНФЕДЕНЦИАЛЬНОСТИ' />
			<BookingBlock />
			<PrivacyPolicyBlock />
		</>
	);
}
