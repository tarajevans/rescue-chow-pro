import {
    ListObjectsV2Command,
    PutObjectCommand,
    S3Client,
} from "@aws-sdk/client-s3";
import { useEffect, useState } from "react";

const NewProduct = () => {
    const [file, setFile] = useState(null);
    const [fileList, setFileList] = useState();
    const [price, setPrice] = useState(0);
    const [isCharitable, setIsCharitable] = useState(false);
    const [prodName, setProdName] = useState("")
    const [description, setDescription] = useState("")
    const [isActive, setIsActive] = useState(false)
    const [category, setCategory] = useState("")

    const saveFile = async () => {
        const client = new S3Client({
            region: "us-east-2",
            credentials: {
                accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
            },
        });

        const command = new PutObjectCommand({
            Bucket: "rescue-chow",
            Key: file[0].name,
            Body: file[0],
        });

        try {
            const response = await client.send(command);
            console.log(response);
        } catch (err) {
            console.error(err);
        }
    };

    const getFileList = async () => {
        const s3Client = new S3Client({
            region: "us-east-2",
            credentials: {
                accessKeyId: "AKIA5EZRI4ORZH6HBZTH",
                secretAccessKey: "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",
            },
        });

        const listObjectsCommand = new ListObjectsV2Command({
            Bucket: "rescue-chow",
        });

        const listObjectsResult = await s3Client.send(listObjectsCommand);
        console.log(listObjectsResult.Contents);

        const images = listObjectsResult.Contents.map(({ Key }) => Key);

        console.log(images);
    };

    getFileList();

    return (
        <div>
            <div className="py-1">
                <div className="py-1">
                    <span className="p-1">Product Name:</span>
                    <span>
                        <input
                            className="border-2 border-slate-300 rounded px-1"
                            type="text"
                            defaultValue="Product Name"
                            onChange={(e) => {setProdName(e.target.value)}}
                        />
                    </span>
                </div>

                <div className="py-1">
                    <span className="p-1">Product Description:</span>
                    <span>
                        <input
                            className="border-2 border-slate-300 rounded px-1"
                            type="text"
                            defaultValue="Description"
                            onChange={(e) => {setDescription(e.target.value)}}
                        />
                    </span>
                </div>

                <div className="py-1">
                    <span className="p-1">isActive:</span>
                    <span>
                        <input
                            className="border-2 border-slate-300 rounded px-1"
                            type="text"
                            defaultValue="Active"
                            onChange={(e) => {setIsActive(e.target.value)}}
                        />
                    </span>
                </div>

                <div className="py-1">
                    <span className="p-1">isCharitable:</span>
                    <span>
                        <input
                            className="border-2 border-slate-300 rounded px-1"
                            type="text"
                            defaultValue={isCharitable.toString()}
                            onChange={(e) => {setIsCharitable(e.target.value)}}
                        />
                    </span>
                </div>

                <div className="py-1">
                    <span className="p-1">Category:</span>
                    <span>
                        <input
                            className="border-2 border-slate-300 rounded px-1"
                            type="text"
                            defaultValue="Category"
                            onChange={(e) => {setCategory(e.target.value)}}
                        />
                    </span>
                </div>

                <div className="py-1">
                    <span className="p-1">Price: $</span>
                    <span>
                        <input
                            className="w-20 border-2 border-slate-300 rounded px-1"
                            type="number"
                            defaultValue="0"
                            step="0.01"
                            onChange={(e) => {
                                setPrice(e.target.value);
                            }}
                        />
                    </span>
                </div>

                <div className="flex flex-row">
                    <div>
                        <input
                            type="file"
                            accept=".jpg, .png"
                            onChange={(e) => {
                                setFile(e.target.files);
                            }}
                        />
                    </div>
                    <div>
                        <input
                            className="p-1 rounded border-2 bg-slate-100"
                            type="button"
                            value="Upload"
                            onClick={saveFile}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewProduct;
