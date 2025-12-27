import { VariantProps } from 'class-variance-authority';
import { ComponentProps } from 'react';

import { headerVariants } from './header-config';

type HeaderVariantsProps = VariantProps<typeof headerVariants>;
export type HeaderProps = {
	className?: string;
} & HeaderVariantsProps &
	ComponentProps<'header'>;
