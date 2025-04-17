import { Flex, Heading, Text } from '@radix-ui/themes';
import type { FC, ReactNode } from 'react';

type PageHeaderProps = {
	title: string;
	subTitle?: string;
	icon?: ReactNode;
};

const PageHeader: FC<PageHeaderProps> = ({ title, subTitle, icon }) => {
	return (
		<Flex direction='column' align='start' gap='2'>
			<Heading size='4' className='flex items-center gap-2'>
				{icon && icon}
				{title}
			</Heading>
			{subTitle && (
				<Text size='3' color='gray' mb='5'>
					{subTitle}
				</Text>
			)}
		</Flex>
	);
};

export default PageHeader;
