import { useContext } from "react";
import CartContext from "../GlobalStates/cartState";

export function captializeFirstChar(phrase) {
    const phraseArr = phrase.split("");
    phraseArr.splice(0, 1, phrase[0].toUpperCase());
    return phraseArr.join("");
}

export function getProceeds(productPrice) {
    const charityCut = productPrice / 4;
    return charityCut.toFixed(2);
}

export function validateEmail(email) {
    var re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export function pluralize(name, count) {
    if (count === 1) {
        return name;
    }
    return name + "s";
}

export function idbPromise(storeName, method, object) {
    return new Promise((resolve, reject) => {
        const request = window.indexedDB.open("rescue-chow", 1);
        let db, tx, store;
        request.onupgradeneeded = function (e) {
            const db = request.result;
            db.createObjectStore("products", { keyPath: "_id" });
            db.createObjectStore("categories", { keyPath: "_id" });
            db.createObjectStore("cart", { keyPath: "_id" });
            db.createObjectStore("rescues", { keyPath: "_id" });
            db.createObjectStore("selectedRescue", { keyPath: "_id" });
            db.createObjectStore("user", { keyPath: "_id" });
        };

        request.onerror = function (e) {
            console.log("There was an error");
        };

        request.onsuccess = function (e) {
            db = request.result;
            tx = db.transaction(storeName, "readwrite");
            store = tx.objectStore(storeName);

            db.onerror = function (e) {
                console.log("error", e);
            };
            switch (method) {
                case "put":
                    store.put(object);
                    resolve(object);
                    break;
                case "get":
                    const all = store.getAll();
                    all.onsuccess = function () {
                        resolve(all.result);
                    };
                    break;
                case "delete":
                    store.delete(object._id);
                    break;
                case "deleteAll":
                    const allEntries = store.getAll();
                    if (allEntries.length) {
                        allEntries.array.forEach((element) => {
                            store.delete(element._id);
                        });
                    }
                    break;
                default:
                    console.log("No valid method");
                    break;
            }

            tx.oncomplete = function () {
                db.close();
            };
        };
    });
}
