import {type ChangeEvent, type FC, type JSX, useEffect, useState} from "react";
import mammoth from "mammoth";
import * as pdfjsLib from 'pdfjs-dist';
import type {TUser} from "../../utilities/globalTypes.ts";
import styles from './ResumeUploader.module.css';
import pdfjsWorker from 'pdfjs-dist/legacy/build/pdf.worker?worker';

// Set the worker
pdfjsLib.GlobalWorkerOptions.workerPort = new pdfjsWorker();


const ResumeUploader: FC<{ user: TUser, getTrancript: (transcript: string) => void}> = ({user, getTrancript}): JSX.Element => {

    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [extractedTranscript, setExtractedTranscript] = useState<string >('');

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const file = event.target.files?.[0];
        if (!file) {
            return
        }
        setSelectedFile(file);
    }

    useEffect(() => {
        if (extractedTranscript != ''){
            getTrancript(extractedTranscript);
        }
    }, [extractedTranscript])

    const handleSubmit = async () => {
        if (!selectedFile) return;

        const fileExtension = selectedFile.name.split('.').pop()?.toLowerCase();

        try {
            if (fileExtension === 'txt') {
                const reader = new FileReader();
                reader.onload = (e) => {
                    const result = e.target?.result;
                    if (typeof result === 'string') {
                        console.log('TXT content:', result);
                        setExtractedTranscript(result);
                    }
                };
                reader.readAsText(selectedFile);
            }

            else if (fileExtension === 'docx') {
                const arrayBuffer = await selectedFile.arrayBuffer();
                const { value } = await mammoth.extractRawText({ arrayBuffer });
                console.log('DOCX content:', value);
                setExtractedTranscript(value);
            }

            else if (fileExtension === 'pdf') {
                const arrayBuffer = await selectedFile.arrayBuffer();
                const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;

                let fullText = '';
                for (let i = 1; i <= pdf.numPages; i++) {
                    const page = await pdf.getPage(i);
                    const content = await page.getTextContent();
                    const strings = content.items.map((item) =>
                        'str' in item ? item.str : ''
                    );
                    fullText += strings.join(' ') + '\n';
                    setExtractedTranscript(fullText);
                }
                console.log('PDF content:', fullText);
            }

            else {
                console.warn('Unsupported file type.');
            }
        } catch (error) {
            console.error('Error reading file:', error);
        }
    };

    return (
        <div className={styles.container}>
            {user && (
                <form>
                    <h2>We only accept PDF, DOCX and TXT formats</h2>
                    <label className={styles.label}>Upload File (Max 3MB)</label>
                    <input
                        type='file'
                        accept=".pdf,.docx,.txt"
                        onChange={handleFileChange}
                        className={styles.input}
                    />

                    <button type='button' onClick={handleSubmit} className={styles.button}>
                        Submit
                    </button>

                    {selectedFile && (
                        <p className={styles.selectedFile}>Selected: {selectedFile.name}</p>
                    )}
                </form>
            )}
        </div>
    );

}

export default ResumeUploader