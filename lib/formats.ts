export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
  }).format(price)
}

export const getPublicIdFromCloudinaryURL = (url: string | null | undefined) => {
  if (!url) return "https://res.cloudinary.com/ddp30kyze/image/upload/v1747220520/my_uploads/dimelqh3kotcvry6cdk6.jpg"; // Return the default image URL if no URL provided
  
  // Split the URL using '/' as the delimiter
  const parts = url.split("/");

  // Find the index of 'upload' in the array
  const uploadIndex = parts.indexOf("upload");

  // If 'upload' is not found or it's the last element, return the default image URL
  if (uploadIndex === -1 || uploadIndex === parts.length - 1) {
    return "https://res.cloudinary.com/ddp30kyze/image/upload/v1747220520/my_uploads/dimelqh3kotcvry6cdk6.jpg";
  }

  // Get everything after 'upload' up to the extension
  const publicId = parts.slice(uploadIndex + 1).join("/").split(".")[0];

  return publicId;
}
