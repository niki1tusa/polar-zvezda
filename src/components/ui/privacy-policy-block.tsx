import Link from 'next/link';

import Section from '@/components/ui/section/section';

import { PRIVACY_POLICY } from '@/shared/config/privacy-config';
import { PRIVACY_PAGE } from '@/shared/constants/global-constants';

export default function PrivacyPolicyBlock() {
	return (
		<Section className='text-muted-sec text-[18px]'>
			<div className='container-width flex flex-col items-start pt-[3.71428571em]'>
				<h1 className='mb-[0.59090909090909em] text-[30px]'>Политика конфиденциальности</h1>
				<p>
					Настоящая Политика конфиденциальности персональных данных (далее – Политика
					конфиденциальности) действует в отношении всей информации, которую гостинично-ресторанный
					комплекс «Полярная звезда», расположенный на доменном имени{' '}
					<Link href='http://polar-zvezda.ru/' className='text-red'>
						http://polar-zvezda.ru/
					</Link>
					, может получить о Пользователе во время использования сайта гостинично-ресторанного
					комплекса «Полярная звезда», программ и продуктов гостинично-ресторанного комплекса
					«Полярная звезда».
				</p>
			</div>

			<ul className='container-width flex flex-col items-start pb-[3.71428571em] text-[18px]'>
				{PRIVACY_POLICY.map(item => (
					<li key={item.id} className='pt-[0.5em]'>
						<span className='font-bold'>
							{item.id}. {item.title}
						</span>
						<ul className='flex flex-col items-start gap-[0.5em] pt-[0.5em]'>
							{item.clauses.map(el => (
								<li key={el.id}>
									{el.id}. {el.text}
								</li>
							))}
						</ul>
					</li>
				))}
				<li>
					9.3 Действующая Политика конфиденциальности размещена на странице по адресу{' '}
					<Link href={PRIVACY_PAGE} className='text-red'>
						http://polar-zvezda.ru/privacy-police/
					</Link>
				</li>
			</ul>
		</Section>
	);
}
