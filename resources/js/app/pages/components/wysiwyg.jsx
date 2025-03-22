import React, { useCallback } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import DOMPurify from 'dompurify'; // Ensure this is correctly imported

const modules = {
    toolbar: [
        [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }, { 'size': [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        // [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image', 'video'],
        ['clean']
    ],
    clipboard: {
        matchVisual: false,
    }
};

const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
];

export default function Wysiwyg({ label, value, onChange, name }) {
    // Handle changes to the editor content
    const handleChange = useCallback((content, delta, source, editor) => {
        const sanitizedContent = DOMPurify.sanitize(content); // Sanitize the input content
        onChange(sanitizedContent); // Pass the sanitized content to the parent
    }, [onChange]);

    return (
        <div>
            <label>{label}</label>
            <ReactQuill
                value={value} // Controlled value from the parent
                onChange={handleChange} // Update content on change
                className='h-[550px]' // Custom height for the editor
                modules={modules} // Pass toolbar and editor configurations
                formats={formats} // Pass allowed formats
            />
        </div>
    );
}
