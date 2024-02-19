import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import formidable, { errors as formidableErrors } from "formidable";
import { PassThrough } from "node:stream";
import fs from "fs";

export const config = {
    api: {
        bodyParser: false,
    },
};

const handler = async (req, res) => {
    if (req.method === "POST") {
        var options = {
            filename: function (name, ext, part, form) {
                const { originalFilename, mimetype, filepath } = part;
                return originalFilename;
            },

            // fileWriteStreamHandler: uploadStream.bind(undefined, req),
        };

        const form = formidable(options);

        let file;

        let files;
        let fields;
        try {
            [fields, files] = await form.parse(req);
        } catch (err) {
            // example to check for a very specific error
            if (err.code === formidableErrors.maxFieldsExceeded) {
            }
            console.error(err);
            res.writeHead(err.httpCode || 400, {
                "Content-Type": "text/plain",
            });
            res.end(String(err));
            return;
        }
        file = fs.readFileSync(files.file[0].filepath);

        const client = new S3Client({
            region: "us-east-1",
            credentials: {
                accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
            },
        });

        const command = new PutObjectCommand({
            Bucket: "rescue-chow-pro",
            Key: files.file[0].originalFilename,
            Body: file,
        });

        try {
            const response = await client.send(command);
            console.log(response);
        } catch (err) {
            console.error(err);
            res.json({ error: "File did not save to aws." }, { status: 400 });
        }

        fs.unlinkSync(files.file[0].filepath, (err) => {
            console.log("Error deleting file - Error message: " + err);
        });

        console.log("Past delete");

        res.json({ fileName: files.file[0].newFilename }, { status: 200 });
    }
};

export default handler;
