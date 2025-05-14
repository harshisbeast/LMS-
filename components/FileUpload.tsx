

// // "use client"

// import React from "react";
// import { FaUpload } from "react-icons/fa6";
// import { CldUploadWidget, CldUploadWidgetResults } from "next-cloudinary";

// interface FileUploadProps {
//   onChange: (url?: string) => void;
// }

// const FileUpload = ({onChange}: FileUploadProps) => {
//   const handleUpload = (result: CldUploadWidgetResults) => {
//     const info = result.info as object;

//     if("secure_url" in info && "public_id" in info) {
//       const url = info.secure_url as string;
//       // const public_id = info.public_id as string;
//       onChange(url);
//     }
//   }

//   return (
//     <CldUploadWidget
//       uploadPreset="scnqv8gr"
//       options={{ sources: ["local", "url", "unsplash"] }}
//       onUpload={handleUpload}
//     >
//       {({ open }) => {
//         return (
//           <button
//             className="mt-4 p-4 border rounded-xl bg-background border-dotted dark:border-solid min-h-[200px] flex items-center justify-center cursor-pointer w-full hover:bg-accent/50 duration-300 transition-all" 
//             onClick={() => open()}
//           >
//             <FaUpload className="text-4xl text-muted-foreground" />
//           </button>
//         );
//       }}
//     </CldUploadWidget>
//   );
// };

// export default FileUpload;

"use client";

import React from "react";
import { CldUploadWidget, CldUploadWidgetResults } from "next-cloudinary";
import { Button } from "@/components/ui/button"; // Adjust this path if needed
import { FaUpload } from "react-icons/fa"; // Assuming you use react-icons for the upload button icon

interface FileUploadProps {
  onChange: (url: string | undefined) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onChange }) => {
  const handleUpload = (result: CldUploadWidgetResults) => {
    if (
      result &&
      result.event === "success" &&
      result.info &&
      "secure_url" in result.info
    ) {
      const url = result.info.secure_url as string;
      onChange(url); // Send the uploaded image URL to the parent component
      console.log("Upload successful:", url); // Log the upload success with the URL
    } else if (result && result.event === "error") {
      console.error("Upload error:", result.info); // Log upload error
      onChange(undefined); // Call onChange with undefined to indicate upload failure
    }
  };

  return (
    <CldUploadWidget
      uploadPreset="godisgreat" // Correct preset name
      onUpload={handleUpload} // Handle upload success or error
      options={{
        sources: ["local", "url", "camera"], // Enable uploading from local file system, URL, or camera
        maxFiles: 1, // Limit the user to upload one file at a time
        folder: "my_uploads", // The folder you want the file to go into
        resource_type: "image", // Ensure only images are uploaded
        clientAllowedFormats: ["jpg", "jpeg", "png", "webp", "gif"], // Allowed formats
        maxFileSize: 10485760, // Set max file size to 10MB
      }}
    >
      {({ open }) => (
        <Button
          type="button"
          variant="secondary"
          onClick={() => open()} // Open the upload widget when the button is clicked
          className="flex items-center gap-2"
        >
          <FaUpload className="w-4 h-4" /> {/* Upload icon */}
          Upload Image
        </Button>
      )}
    </CldUploadWidget>
  );
};

export default FileUpload;
