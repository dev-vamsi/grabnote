import EmojiPicker from 'emoji-picker-react';
import { ListItemProps } from '../types/listitem';
import { useEffect, useRef, useState } from 'react';

export default function ListItem(props: ListItemProps) {
    const { itemText, emojiURL = '' } = props;
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [_emojiURL, setEmojiURL] = useState(
        emojiURL ||
            'https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f680.png'
    );
    const emojiPickerRef = useRef<any>(null);
    const emojiRef = useRef<any>(null);

    useEffect(() => {
        const handleDOMClick = (e: any) => {
            if (emojiRef.current && emojiRef.current.contains(e.target)) return;
            if (
                !(
                    emojiPickerRef.current &&
                    emojiPickerRef.current.contains(e.target)
                )
            ) {
                setShowEmojiPicker(false);
            }
        };
        document.addEventListener('click', handleDOMClick);

        return () => {
            document.removeEventListener('click', handleDOMClick);
        };
    }, []);

    const handleEmojiSelect = (_: any, emojiObject: any) => {
        setEmojiURL(emojiObject.target.src);
        setShowEmojiPicker(false);
    };

    return (
        <>
            <li className='flex gap-2 items-center cursor-default my-1 py-2 pl-2 pr-4 max-w-full hover:bg-gray-200 rounded-md'>
                <span
                    onClick={() => {
                        setShowEmojiPicker((prev) => !prev);
                    }}
                    ref={emojiRef}
                >
                    <img
                        src={_emojiURL}
                        alt='notes-emoji'
                        width={20}
                        height={20}
                    />
                </span>
                {itemText}
            </li>
            {showEmojiPicker && (
                <div className='absolute' ref={emojiPickerRef}>
                    <EmojiPicker
                        className='max-w-[300px]'
                        onEmojiClick={handleEmojiSelect}
                    />
                </div>
            )}
        </>
    );
}
