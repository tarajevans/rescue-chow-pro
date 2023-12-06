import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

const handler = async (req, res) => {

    

    const client = new S3Client({});

    const command = new PutObjectCommand({
        Bucket: "rescue-chow",
        Key: "AKIA5EZRI4ORZH6HBZTH",
        Body: "Hello S3!",
    });

    try {
        const response = await client.send(command);
        console.log(response);
    } catch (err) {
        console.error(err);
    }
};

export default handler;
