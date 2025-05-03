import { Card, Flex, IconButton, Separator } from '@radix-ui/themes';
import { useCurrentEditor } from '@tiptap/react';
import { useCallback, useState } from 'react';
import {
	LuAlignCenter,
	LuAlignJustify,
	LuAlignLeft,
	LuAlignRight,
	LuBold,
	LuCode,
	LuCornerDownLeft,
	LuHeading1,
	LuHeading2,
	LuHeading3,
	LuHeading4,
	LuItalic,
	LuLink,
	LuList,
	LuListOrdered,
	LuMinus,
	LuQuote,
	LuRedo,
	LuStrikethrough,
	LuType,
	LuUnderline,
	LuUndo,
	LuUndo2,
} from 'react-icons/lu';

import { PiCode } from 'react-icons/pi';
import URLModal from './TipTapURLModal';


const Toolbar = () => {
	const { editor } = useCurrentEditor();
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = useCallback(() => {
		setIsModalOpen(true);
	}, []);

	if (!editor) {
		return null;
	}

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const handleConfirm = (url: string) => {
		closeModal();

		if (url === '') {
			editor?.chain().focus().extendMarkRange('link').unsetMark('link').run();
			return;
		}

		editor
			?.chain()
			.focus()
			.extendMarkRange('link')
			.setLink({ href: url })
			.run();
	};

	return (
		<Card>
			<Flex gap='1' wrap='wrap'>
				<IconButton
					onClick={() => editor?.chain().focus().setParagraph().run()}
					disabled={!editor?.can().chain().focus().setParagraph().run()}
					color={editor?.isActive('paragraph') ? 'gray' : undefined}
					size='2'
					variant='surface'
				>
					<LuType className='size-5 text-gray-a-12' />
				</IconButton>
				<IconButton
					onClick={() => editor?.chain().focus().toggleBold().run()}
					disabled={!editor?.can().chain().focus().toggleBold().run()}
					color={editor?.isActive('bold') ? 'gray' : undefined}
					size='2'
					variant='surface'
				>
					<LuBold className='size-5 text-gray-a-12' />
				</IconButton>
				<IconButton
					onClick={() => editor?.chain().focus().toggleItalic().run()}
					disabled={!editor?.can().chain().focus().toggleItalic().run()}
					color={editor?.isActive('italic') ? 'gray' : undefined}
					size='2'
					variant='surface'
				>
					<LuItalic className='size-5 text-gray-a-12' />
				</IconButton>
				<IconButton
					onClick={() => editor?.chain().focus().toggleStrike().run()}
					disabled={!editor?.can().chain().focus().toggleStrike().run()}
					color={editor?.isActive('strike') ? 'gray' : undefined}
					variant='surface'
					size='2'
				>
					<LuStrikethrough className='size-5 text-gray-a-12' />
				</IconButton>
				<IconButton
					variant='surface'
					size='2'
					onClick={() => editor?.chain().focus().toggleUnderline().run()}
					disabled={!editor?.can().chain().focus().toggleUnderline().run()}
					color={editor?.isActive('strike') ? 'gray' : undefined}
				>
					<LuUnderline className='size-5 text-gray-a-12' />
				</IconButton>

				<Separator orientation='vertical' size='2' mx='2' />

				<IconButton
					onClick={() =>
						editor?.chain().focus().toggleHeading({ level: 1 }).run()
					}
					disabled={
						!editor?.can().chain().focus().toggleHeading({ level: 1 }).run()
					}
					color={editor?.isActive('heading', { level: 1 }) ? 'gray' : undefined}
					size='2'
					variant='surface'
				>
					<LuHeading1 className='size-5 text-gray-a-12' />
				</IconButton>
				<IconButton
					onClick={() =>
						editor?.chain().focus().toggleHeading({ level: 2 }).run()
					}
					disabled={
						!editor?.can().chain().focus().toggleHeading({ level: 2 }).run()
					}
					color={editor?.isActive('heading', { level: 2 }) ? 'gray' : undefined}
					size='2'
					variant='surface'
				>
					<LuHeading2 className='size-5 text-gray-a-12' />
				</IconButton>
				<IconButton
					onClick={() =>
						editor?.chain().focus().toggleHeading({ level: 3 }).run()
					}
					disabled={
						!editor?.can().chain().focus().toggleHeading({ level: 3 }).run()
					}
					color={editor?.isActive('heading', { level: 3 }) ? 'gray' : undefined}
					size='2'
					variant='surface'
				>
					<LuHeading3 className='size-5 text-gray-a-12' />
				</IconButton>
				<IconButton
					onClick={() =>
						editor?.chain().focus().toggleHeading({ level: 4 }).run()
					}
					disabled={
						!editor?.can().chain().focus().toggleHeading({ level: 4 }).run()
					}
					color={editor?.isActive('heading', { level: 4 }) ? 'gray' : undefined}
					size='2'
					variant='surface'
				>
					<LuHeading4 className='size-5 text-gray-a-12' />
				</IconButton>

				<IconButton
					onClick={openModal}
					color={editor?.isActive('link') ? 'gray' : undefined}
					size='2'
					variant='surface'
				>
					<LuLink className='size-5 text-gray-a-12' />
				</IconButton>
				<URLModal
					isOpen={isModalOpen}
					onDismiss={closeModal}
					onSubmit={handleConfirm}
				/>
				<IconButton
					onClick={() => editor?.chain().focus().toggleBlockquote().run()}
					disabled={!editor?.can().chain().focus().toggleBlockquote().run()}
					color={editor?.isActive('blockquote') ? 'gray' : undefined}
					size='2'
					variant='surface'
				>
					<LuQuote className='size-5 text-gray-a-12' />
				</IconButton>
				<IconButton
					onClick={() => editor?.chain().focus().toggleCode().run()}
					disabled={!editor?.can().chain().focus().toggleCode().run()}
					color={editor?.isActive('code') ? 'gray' : undefined}
					size='2'
					variant='surface'
				>
					<PiCode className='size-5 text-gray-a-12' />
				</IconButton>

				<Separator orientation='vertical' size='2' mx='2' />

				<IconButton
					onClick={() => editor?.chain().focus().toggleBulletList().run()}
					disabled={!editor?.can().chain().focus().toggleBulletList().run()}
					color={editor?.isActive('bulletList') ? 'gray' : undefined}
					size='2'
					variant='surface'
				>
					<LuList className='size-5 text-gray-a-12' />
				</IconButton>
				<IconButton
					onClick={() => editor?.chain().focus().toggleOrderedList().run()}
					disabled={!editor?.can().chain().focus().toggleOrderedList().run()}
					color={editor?.isActive('orderedList') ? 'gray' : undefined}
					size='2'
					variant='surface'
				>
					<LuListOrdered className='size-5 text-gray-a-12' />
				</IconButton>

				<IconButton
					variant='surface'
					size='2'
					onClick={() => editor?.chain().focus().setTextAlign('left').run()}
					disabled={!editor?.can().chain().focus().setTextAlign('left').run()}
					color={editor?.isActive({ textAlign: 'left' }) ? 'gray' : undefined}
				>
					<LuAlignLeft className='size-5 text-gray-a-12' />
				</IconButton>
				<IconButton
					variant='surface'
					size='2'
					onClick={() => editor?.chain().focus().setTextAlign('center').run()}
					disabled={!editor?.can().chain().focus().setTextAlign('center').run()}
					color={editor?.isActive({ textAlign: 'center' }) ? 'gray' : undefined}
				>
					<LuAlignCenter className='size-5 text-gray-a-12' />
				</IconButton>
				<IconButton
					variant='surface'
					size='2'
					onClick={() => editor?.chain().focus().setTextAlign('right').run()}
					disabled={!editor?.can().chain().focus().setTextAlign('right').run()}
					color={editor?.isActive({ textAlign: 'right' }) ? 'gray' : undefined}
				>
					<LuAlignRight className='size-5 text-gray-a-12' />
				</IconButton>
				<IconButton
					variant='surface'
					size='2'
					onClick={() => editor?.chain().focus().setTextAlign('justify').run()}
					disabled={
						!editor?.can().chain().focus().setTextAlign('justify').run()
					}
					color={
						editor?.isActive({ textAlign: 'justify' }) ? 'gray' : undefined
					}
				>
					<LuAlignJustify className='size-5 text-gray-a-12' />
				</IconButton>
				<IconButton
					variant='surface'
					size='2'
					onClick={() => editor?.chain().focus().unsetTextAlign().run()}
				>
					<LuUndo2 className='size-5 text-gray-a-12' />
				</IconButton>

				<IconButton
					onClick={() => editor?.chain().focus().toggleCodeBlock().run()}
					disabled={!editor?.can().chain().focus().toggleCodeBlock().run()}
					color={editor?.isActive('codeBlock') ? 'gray' : undefined}
					size='2'
					variant='surface'
				>
					<LuCode className='size-5 text-gray-a-12' />
				</IconButton>

				<Separator orientation='vertical' size='2' mx='2' />

				<IconButton
					variant='surface'
					size='2'
					onClick={() => editor?.chain().focus().setHorizontalRule().run()}
				>
					<LuMinus className='size-5 text-gray-a-12' />
				</IconButton>
				<IconButton
					variant='surface'
					size='2'
					onClick={() => editor?.chain().focus().setHardBreak().run()}
				>
					<LuCornerDownLeft className='size-5 text-gray-a-12' />
				</IconButton>

				<Separator orientation='vertical' size='2' mx='2' />

				<IconButton
					variant='surface'
					size='2'
					onClick={() => editor?.chain().focus().undo().run()}
					disabled={!editor?.can().chain().focus().undo().run()}
				>
					<LuUndo className='size-5 text-gray-a-12' />
				</IconButton>
				<IconButton
					variant='surface'
					size='2'
					onClick={() => editor?.chain().focus().redo().run()}
					disabled={!editor?.can().chain().focus().redo().run()}
				>
					<LuRedo className='size-5 text-gray-a-12' />
				</IconButton>
			</Flex>
		</Card>
	);
};

export default Toolbar;
