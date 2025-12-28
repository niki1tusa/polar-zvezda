'use client';

import { CalendarDays, ChevronDownIcon } from 'lucide-react';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

import { Calendar } from './calendar';

type Props = {
	title: string;
};
export function DatePickerComponent({ title }: Props) {
	const [open, setOpen] = React.useState(false);
	const [date, setDate] = React.useState<Date | undefined>(undefined);

	return (
		<div className='flex flex-col gap-3'>
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger asChild>
					<Button variant='selectDate' id='date' className='w-48'>
						{date ? date.toLocaleDateString() : title}
						<div className='flex gap-2'>
							<CalendarDays size={20} className='text-[#5b3228]' />
							<ChevronDownIcon size={10} />
						</div>
					</Button>
				</PopoverTrigger>
				<PopoverContent className='w-auto overflow-hidden p-0' align='start'>
					<Calendar
						mode='single'
						selected={date}
						captionLayout='dropdown'
						onSelect={date => {
							setDate(date);
							setOpen(false);
						}}
					/>
				</PopoverContent>
			</Popover>
		</div>
	);
}
