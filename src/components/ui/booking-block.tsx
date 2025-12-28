import { Button } from './button';
import { DatePickerComponent } from './date-picker';
import Section from './section/section';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select';
import Typography from './typography/typography';

// TODO: сделать так чтобы нельзя было выбирать дни которые уже прошли, но можно было выбирать будущие дни
// TODO: сдедать так чтобы selectContent не ломал верстку
// TODO: почему не применяеться мой класс select booking
export default function BookingBlock() {
	return (
		<Section className='bg-booking'>
			<div className='container-width grid grid-cols-[12fr_4fr] py-[1.85714286em]'>
				<Typography size='lg' weight='bold' className='uppercase'>
					Бронирование <br /> номеров
				</Typography>
				<div className='flex items-center gap-10'>
					<DatePickerComponent title='Дата заезда' />
					<DatePickerComponent title='Дата выезда' />
					<Select>
						<SelectTrigger className='select-booking w-[180px]'>
							<SelectValue placeholder='Гости' />
						</SelectTrigger>
						<SelectContent position='popper' side='bottom' align='start'>
							<SelectItem value='1'>1</SelectItem>
							<SelectItem value='2'>2</SelectItem>
							<SelectItem value='3'>3</SelectItem>
							<SelectItem value='4'>4</SelectItem>
							<SelectItem value='5'>5</SelectItem>
							<SelectItem value='6'>6</SelectItem>
						</SelectContent>
					</Select>
					{/* TODO: почему мою кнопку не увеличивает padding  */}
					<Button variant='red' className='py-[0.7em] text-[0.875rem]'>
						Найти номер
					</Button>
				</div>
			</div>
		</Section>
	);
}
