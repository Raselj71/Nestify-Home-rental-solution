'use client';

import { Callout, Flex, Text } from '@radix-ui/themes';
import TipTapLink from '@tiptap/extension-link';
import Placeholder from '@tiptap/extension-placeholder';
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';
import { EditorProvider } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { type Control, Controller } from 'react-hook-form';
import { PiInfoDuotone } from 'react-icons/pi';


import { cn } from '@/lib/utils';
import Toolbar from '@/utils/TiptapToolbar';

type LabeledTextEditorProps = {
	label: string;
	control: Control<any>;
	name: string;
	required?: boolean;
	placeholder: string;
	size?: '2' | '3';
	className?: string;
	error?: {
		message?: string;
	};
};

const TextEditor = ({
	value,
	onChange,
	placeholder,
	size,
}: {
	value: string;
	onChange: (value: string) => void;
	placeholder?: string;
	size: '2' | '3';
}) => {
	const extensions = [
		StarterKit.configure({
			bulletList: {
				keepMarks: true,
				keepAttributes: false, // TODO: Marks are not preserved with attrs.
			},
			orderedList: {
				keepMarks: true,
				keepAttributes: false,
			},
		}),
		Underline.configure(),
		TextAlign.configure({
			types: ['heading', 'paragraph'],
		}),
		TipTapLink.configure({
			protocols: ['ftp', 'mailto'],
		}),
		Placeholder.configure({
			placeholder: placeholder || 'Enter text...',
			emptyEditorClass: 'is-editor-empty',
		}),
	];

	return (
		<EditorProvider
			slotBefore={<Toolbar />}
			extensions={extensions}
			content={value}
			onUpdate={({ editor }) => {
				onChange(editor.getHTML());
			}}
			editorProps={{
				attributes: {
					class: `py-2 px-3 prose dark:prose-invert bg-surface  ${
						size === '2' ? 'prose-sm lg:prose-sm' : 'prose-sm xl:prose-base'
					} w-full min-h-[150px] container border focus-visible:outline-hidden focus-visible:ring-1 rounded-3 border-gray-a-5 ring-accent-8 `,
				},
			}}
		/>
	);
};

const LabeledTextEditor = ({
	label,
	control,
	name,
	size = '2',
	required = false,
	placeholder,
	error,
	className,
}: LabeledTextEditorProps) => {
	return (
		<label className={cn(className)}>
			<Text as='label' size='2' mb='2' weight='bold'>
				{label}
				{required && <span className='text-red-9'> *</span>}
			</Text>
			<Controller
				name={name}
				control={control}
				render={({ field }) => (
					<Flex
						direction='column'
						justify='center'
						gap='1'
						onClick={event => {
							event.preventDefault();
							event.stopPropagation();
						}}
					>
						<TextEditor
							size={size}
							value={field.value}
							onChange={field.onChange}
							placeholder={placeholder}
						/>
					</Flex>
				)}
			/>
			{error && (
				<Callout.Root variant='soft' size='1' mt='2' color='red'>
					<Callout.Icon>
						<PiInfoDuotone />
					</Callout.Icon>
					<Callout.Text>{error.message}</Callout.Text>
				</Callout.Root>
			)}
		</label>
	);
};

export default LabeledTextEditor;
