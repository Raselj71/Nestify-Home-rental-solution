import { Button, Dialog, Flex, Inset, TextField } from '@radix-ui/themes';
import { useState } from 'react';
import { LuLink } from 'react-icons/lu';

const URLModal = ({
	isOpen,
	onDismiss,
	onSubmit,
}: {
	isOpen: boolean;
	onDismiss?: () => void;
	onSubmit: (url: string) => void;
}) => {
	const [url, setUrl] = useState('');

	if (!isOpen) {
		return null;
	}

	return (
		<Dialog.Root open={isOpen} onOpenChange={onDismiss}>
			<Dialog.Content>
				<Dialog.Title>Enter URL</Dialog.Title>

				<Inset side='x' m='5'>
					<TextField.Root
						type='text'
						placeholder='Enter URL'
						value={url}
						onChange={e => setUrl(e.target.value)}
					>
						<TextField.Slot side='right'>{<LuLink />}</TextField.Slot>
					</TextField.Root>
				</Inset>

				<Flex gap='3' justify='end'>
					<Dialog.Close>
						<Button onClick={onDismiss} color='gray' variant='soft'>
							Cancel
						</Button>
					</Dialog.Close>
					<Button
						variant='surface'
						onClick={e => {
							e.preventDefault();
							onSubmit(url);
						}}
					>
						Submit
					</Button>
				</Flex>
			</Dialog.Content>
		</Dialog.Root>
	);
};

export default URLModal;
