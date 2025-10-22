import { Permission } from "node-appwrite";
import { questionAttachment } from "../name";
import { storage } from "./config";

export default async function createStorageCollection() {
    try {
        await storage.getBucket(questionAttachment);
        console.log("Storage connected");
    } catch (error) {
        try {
            await storage.createBucket(questionAttachment, questionAttachment, [
                Permission.read("any"),
                Permission.read("users"),
                Permission.create("users"),
                Permission.update("users"),
                Permission.delete("users"),
            ],
            false,
            undefined,
            undefined,
            ["jpg", "png", "jpeg", "gif", "pdf", "doc", "docx", "xls", "xlsx", "ppt", "pptx", "txt", "zip", "rar"]
        ); 
            console.log("Storage bucket created");
            
        } catch (error) {
            console.error("Error creating storage bucket:", error);
        }
    }
}