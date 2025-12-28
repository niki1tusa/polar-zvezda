'use client';

import { usePathname, useSearchParams } from 'next/navigation';

export default function NotFoundClient() {
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const q = searchParams.toString();
	const pathWithQuery = q ? `${pathname}?${q}` : pathname;

	const origin = typeof window !== 'undefined' ? window.location.origin : '';

	return <b>{origin ? `[${origin}${pathWithQuery}]` : pathWithQuery}</b>;
}
