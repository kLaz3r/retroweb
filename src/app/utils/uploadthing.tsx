import { generateUploadButton } from "@uploadthing/react";
import type { OurFileRouter } from "../api/uploadthing/core";

export const UploadButton = generateUploadButton<OurFileRouter>();
