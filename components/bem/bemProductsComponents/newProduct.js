import {
    ListObjectsV2Command,
    PutObjectCommand,
    S3Client,
} from "@aws-sdk/client-s3";
import { useEffect, useState } from "react";

const client = new S3Client({
    region: "us-east-1",
    credentials: {
        accessKeyId: "AKIATEDBIIEOWFWVCQVR",
        secretAccessKey: "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",
    },
});
const NewProduct = ({productRefetch}) => {
    const [file, setFile] = useState(null);
    // const [fileList, setFileList] = useState();
    const [price, setPrice] = useState(0);
    const [isCharitable, setIsCharitable] = useState(false);
    const [prodName, setProdName] = useState("");
    const [description, setDescription] = useState("");
    const [isActive, setIsActive] = useState(false);
    const [category, setCategory] = useState("63ecf30086889827d9c1c785");

    // Error States
    const [prodNameError, setProdNameError] = useState(null);
    const [prodDescriptionError, setProdDescriptionError] = useState(null);
    const [prodPricError, setProdPriceError] = useState(null);
    const [prodFileError, setProdFileError] = useState(null);

    const [errors, setErrors] = useState(false);

    const saveFile = async () => {
        const command = new PutObjectCommand({
            Bucket: "rescue-chow-pro",
            Key: file[0].name,
            Body: file[0],
        });

        try {
            const response = await client.send(command);
            console.log(response);
        } catch (err) {
            console.error("The Error Is: " + err);
        }
    };

    const saveNewProduct = async () => {
        console.log(category)
        let prodObj = {
            name: prodName,
            description: description,
            image: file[0].name,
            price: price,
            category: category,
            isCharitable: isCharitable,
            isActive: isActive,
        };

        saveFile();

        const response = await fetch("/api/data/products",{
            method:"POST",
            body:JSON.stringify(prodObj)

        });

        const respData = response.json();

        console.log(respData)

        productRefetch();

    };

    useEffect(() => {
        if (prodName.length <= 0) {
            console.log(prodName.length);
            setProdNameError("Product Name Required");
        } else {
            setProdNameError(null);
        }

        if (description.length <= 0) {
            setProdDescriptionError("Product Description Required");
        } else {
            setProdDescriptionError(null);
        }

        if (price <= 0) {
            setProdPriceError("Product Price Required");
        } else {
            setProdPriceError(null);
        }

        if (!file) {
            setProdFileError("Product Image File Required");
        } else {
            setProdFileError(null);
        }
    }, [file, description, prodName, price]);

    useEffect(() => {
        if (
            !prodFileError &&
            !prodDescriptionError &&
            !prodNameError &&
            !prodPricError
        ) {
            console.log("NO ERROR YEAH");
            setErrors(false);
        }

        if (
            prodFileError ||
            prodDescriptionError ||
            prodNameError ||
            prodPricError
        ) {
            console.log("Found Error");
            setErrors(true);
        }
    }, [prodDescriptionError, prodFileError, prodNameError, prodPricError]);

    return (
        <div>
            <div className="py-1">
                <div className="py-1 px-1">
                    <span className="p-1">Product Name:</span>
                    <span>
                        <input
                            className="border-2 border-red-200 rounded-xl px-1"
                            type="text"
                            placeholder="Product Name"
                            onChange={(e) => {
                                setProdName(e.target.value);
                            }}
                        />
                    </span>
                    <span>
                        {prodNameError && (
                            <span className="px-1 text-red-400 font-bold">
                                {" "}
                                {prodNameError}
                            </span>
                        )}
                    </span>
                </div>

                <div className="py-1 px-1">
                    <span className="p-1">Product Description:</span>
                    <span>
                        <input
                            className="border-2 border-red-200 rounded-xl px-1"
                            type="text"
                            placeholder="Description"
                            onChange={(e) => {
                                setDescription(e.target.value);
                            }}
                        />
                    </span>
                    <span>
                        {prodDescriptionError && (
                            <span className="px-1 text-red-400 font-bold">
                                {" "}
                                {prodDescriptionError}
                            </span>
                        )}
                    </span>
                </div>

                <div className="py-1">
                    <span>
                        <label>
                            <span className="px-2">isActive:</span>
                            <select
                                className="border-2 border-red-200 rounded-xl "
                                value={isActive}
                                onChange={(e) => setIsActive(e.target.value)}
                            >
                                <option value={true}>
                                    Yes - Start Selling
                                </option>
                                <option value={false}>
                                    No - Do Not show to customers
                                </option>
                            </select>
                        </label>
                    </span>
                </div>

                <div className="py-1">
                    {/* <span className="p-1">isCharitable:</span> */}
                    <span>
                        <label>
                            <span className="px-2">isCharitable:</span>
                            <select
                                className="border-2 border-red-200 rounded-xl "
                                value={isCharitable}
                                onChange={(e) =>
                                    setIsCharitable(e.target.value)
                                }
                            >
                                <option value={true}>
                                    Yes - Donate to animals
                                </option>
                                <option value={false}>
                                    No - Don't donate to animals
                                </option>
                            </select>
                        </label>
                    </span>
                </div>

                <div className="py-1">
                    {/* <span className="p-1">Category:</span> */}
                    <span>
                        <label>
                            <span className="px-2">Category:</span>
                            <select
                                className="border-2 border-red-200 rounded-xl "
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                <option value="63ecf30086889827d9c1c785">
                                    Dog Treats
                                </option>
                                <option value="63ecf30086889827d9c1c784">
                                    Cat Treats
                                </option>
                                <option value="63ecf30086889827d9c1c786">
                                    Merchandise
                                </option>
                            </select>
                        </label>
                    </span>
                </div>

                <div className="py-1 px-1">
                    <span className="p-1">Price: $</span>
                    <span>
                        <input
                            className="w-20 border-2 border-red-200 rounded-xl px-1"
                            type="number"
                            defaultValue="0.00"
                            step="0.01"
                            onChange={(e) => {
                                setPrice(e.target.value);
                            }}
                        />
                    </span>
                    <span>
                        {prodPricError && (
                            <span className="px-1 text-red-400 font-bold">
                                {" "}
                                {prodPricError}
                            </span>
                        )}
                    </span>
                </div>

                <div className="flex flex-row">
                    <div className="px-1">
                        <label>
                            <span className="px-1">Prod Picture:</span>
                            <input
                                type="file"
                                accept=".jpg, .png"
                                onChange={(e) => {
                                    setFile(e.target.files);
                                }}
                                className="border-2 border-red-200 rounded-xl file:text-red-700 file:rounded-xl file:border-red-200 "
                            />
                        </label>
                    </div>
                    <span>
                        {prodFileError && (
                            <span className="px-1 text-red-400 font-bold">
                                {" "}
                                {prodFileError}
                            </span>
                        )}
                    </span>
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
            <div className="px-2 pb-2">
                <input
                    type="button"
                    value="Create New Product"
                    onClick={saveNewProduct}
                    className="border-2 border-red-200 bg-green-200 rounded-xl px-3"
                    disabled={errors}
                />
            </div>
        </div>
    );
};

export default NewProduct;
