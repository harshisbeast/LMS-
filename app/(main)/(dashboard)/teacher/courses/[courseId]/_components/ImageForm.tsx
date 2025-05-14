


"use client";

import React, { useState } from "react";
import { CldImage } from "next-cloudinary";
import { Button } from "@/components/ui/button";
import { MdOutlineCancel } from "react-icons/md";
import { FaUpload } from "react-icons/fa";
import { BiLoader } from "react-icons/bi";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Course } from "@prisma/client";
import FileUpload from "@/components/FileUpload";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import axios from "axios";

interface ImageFormProps {
  initialData: Course;
  courseId: string;
}

const formSchema = z.object({
  imageUrl: z.string().min(1, {
    message: "Image is required",
  }),
});

const ImageForm = ({ initialData, courseId }: ImageFormProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const toggleEdit = () => setIsEditing((current) => !current);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      imageUrl: initialData?.imageUrl || "",
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.patch(`/api/courses/${courseId}`, values);
      toast.success("Course Updated!");
      toggleEdit();
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="border bg-accent/50 dark:bg-accent/20 rounded-lg p-4">
      <div className="font-medium text-lg flex items-start justify-between">
        <span className="flex items-center justify-center gap-2">
          {isSubmitting && <BiLoader className="animate-spin w-5 h-5" />}
          <span>
            Course Image <span className="text-red-500"></span>
          </span>
        </span>
        <Button variant={"ghost"} onClick={toggleEdit}>
          {isEditing && (
            <>
              <MdOutlineCancel className="h-4 w-4 mr-2" />
              Cancel
            </>
          )}
          {!isEditing && !initialData.imageUrl && (
            <>
              <FaUpload className="h-4 w-4 mr-2" />
              Add Image
            </>
          )}
          {!isEditing && initialData.imageUrl && (
            <>
              <FaUpload className="h-4 w-4 mr-2" />
              Edit Image
            </>
          )}
        </Button>
      </div>
      {isEditing && (
        <div>
          <FileUpload
            onChange={(url) => {
              if (url) {
                onSubmit({ imageUrl: url });
              }
            }}
          />
          <span className="text-xs text-muted-foreground mt-4">
            16:9 aspect ratio recommended
          </span>
        </div>
      )}
      {!isEditing && initialData.imageUrl && (
        <div className="relative aspect-video mt-2">
          <CldImage
            aspectRatio="video"
            width={1600}
            height={900}
            src={initialData.imageUrl || "https://res.cloudinary.com/ddp30kyze/image/upload/v1747220520/my_uploads/dimelqh3kotcvry6cdk6.jpg"} // Fallback image if no image URL
            alt="Course Image"
            className="rounded-3xl border"
          />
        </div>
      )}
      {!isEditing && !initialData.imageUrl && (
        <div className="flex items-center justify-center h-60 bg-accent rounded-xl mt-2 cursor-not-allowed">
          <FaUpload className="h-10 w-10 text-muted-foreground" />
        </div>
      )}
    </div>
  );
};

export default ImageForm;
