import {type FC, type JSX, useState} from "react";
import type { TUser } from "../../utilities/globalTypes.ts";
import ResumeUploader from "./ResumeUploader.tsx";
import styles from "./ ScreenResume.module.css";
import axios from "axios";

const BaseUrl = import.meta.env.VITE_BACKEND_URL;

const user: TUser = {
    uid: "20r325ur29-w2",
    username: "john doe",
    email: "john@gmail.com",
    phone: "1234567890",
};


const ScreenResume: FC = (): JSX.Element => {
    const [previewTranscript, setPreviewTranscript] = useState<string | null>(null);
    const [isloading, setIsloading] = useState<boolean>(false);


    const getTrancript = (transcript: string) => {
        setPreviewTranscript(transcript);
    }

    const handleUpload = async () => {
        try{
            setIsloading(true);

            const response = await axios.post(`${BaseUrl}/ai/upload`, {previewTranscript})

            console.log(response)
            await new Promise((resolve) => setTimeout(resolve, 1000));

            console.log('Uploaded file');

        }catch(e){
            console.log(e);
        }finally {
            setIsloading(false);
            console.log('final')
        }

    }

    return (
        <div className={styles.screenContainer}>
            <h1 className={styles.heading}>Resume Screener</h1>
            <ResumeUploader user={user} getTrancript={getTrancript} />

            <div>
                <h1>preview transcript</h1>
                {previewTranscript && !isloading &&(
                    <div>
                        <button onClick={handleUpload}>Upload</button>
                    </div>
                )}
                {isloading && <p>Uploading...</p>}

                {previewTranscript ? (
                    <p>{previewTranscript}</p>
                ):(
                    <p>Upload your transcript</p>
                )
                }
            </div>
        </div>
    );
};

export default ScreenResume;
