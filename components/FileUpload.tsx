

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
import { Button } from "@/components/ui/button";
import { FaUpload } from "react-icons/fa";

interface FileUploadProps {
  onChange: (url: string | undefined) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onChange }) => {
  const handleUpload = (result: CldUploadWidgetResults) => {
    const info = result.info;

    if (
      result &&
      result.event === "success" &&
      info &&
      typeof info === "object" &&
      "secure_url" in info
    ) {
      const url = (info as { secure_url: string }).secure_url;
      onChange(url);
      console.log("Upload successful:", url);
    } else if (result && result.event === "error") {
      console.error("Upload error:", result.info);
      onChange(undefined);
    }
  };

  return (
    <CldUploadWidget
      uploadPreset="godisgreat"
      onUpload={handleUpload}
      options={{
        sources: ["local", "url", "camera"],
        maxFiles: 1,
        folder: "my_uploads",
        clientAllowedFormats: ["jpg", "jpeg", "png", "webp", "gif"],
        maxFileSize: 10485760, // 10MB
      }}
    >
      {({ open }) => (
        <Button
          type="button"
          variant="secondary"
          onClick={() => open()}
          className="flex items-center gap-2"
        >
          <FaUpload className="w-4 h-4" />
          Upload Image
        </Button>
      )}
    </CldUploadWidget>
  );
};

export default FileUpload;
