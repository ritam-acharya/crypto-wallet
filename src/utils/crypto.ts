import type { EncryptedData } from "../types/type";

const encoder = new TextEncoder();
const decoder = new TextDecoder();

export async function generateKey(password: string, salt: Uint8Array): Promise<CryptoKey> {
    const keyMaterial = await crypto.subtle.importKey(
        "raw",
        encoder.encode(password),
        { name: "PBKDF2" },
        false,
        ["deriveKey"]
    );

    return crypto.subtle.deriveKey(
        {
            name: "PBKDF2",
            salt: salt as BufferSource,
            iterations: 310000,
            hash: 'SHA-256'
        },
        keyMaterial,
        { name: "AES-GCM", length: 256 },
        false,
        ["encrypt", "decrypt"]
    );
}


export async function encryptData(data: unknown, password: string): Promise<EncryptedData> {
    const salt = crypto.getRandomValues(new Uint8Array(16));
    const iv = crypto.getRandomValues(new Uint8Array(12));

    const key = await generateKey(password, salt);
    const encodedData = encoder.encode(JSON.stringify(data));
    const cipherText = await crypto.subtle.encrypt(
        { name: "AES-GCM", iv },
        key,
        encodedData
    );

    return {
        cipherText: arrayBufferToBase64(cipherText),
        salt: arrayBufferToBase64(salt),
        iv: arrayBufferToBase64(iv)
    }
}


export async function decryptData(password: string, encryptedData: EncryptedData) {
    const salt = base64ToArrayBuffer(encryptedData.salt);
    const iv = base64ToArrayBuffer(encryptedData.iv);
    const cipherText = base64ToArrayBuffer(encryptedData.cipherText);

    const key = await generateKey(password, new Uint8Array(salt));
    const decrypt = await crypto.subtle.decrypt(
        { name: 'AES-GCM', iv: new Uint8Array(iv) },
        key,
        cipherText
    );

    return JSON.parse(decoder.decode(decrypt));
}


function base64ToArrayBuffer(data: string) {
    const binary = atob(data);
    const bytes = new Uint8Array(binary.length);
    for(let i=0; i<bytes.length; i++) {
        bytes[i] = binary.charCodeAt(i);
    }
    return bytes
}


function arrayBufferToBase64(data: ArrayBuffer | Uint8Array) {
    const bytes = data instanceof Uint8Array ? data : new Uint8Array(data);
    let binary = "";
    bytes.forEach(val => (binary += String.fromCharCode(val)));
    return btoa(binary);
}