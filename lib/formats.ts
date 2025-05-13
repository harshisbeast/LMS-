export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
  }).format(price)
}

export const getPublicIdFromCloudinaryURL = (url: string | null | undefined) => {
  if (!url) return 'default_course_image'; // Return a default image id if no URL provided
  
  // Split the URL using '/' as the delimiter
  const parts = url.split('/');

  // Find the index of 'upload' in the array
  const uploadIndex = parts.indexOf('courses_images');

  // If 'upload' is not found or it's the last element, return null
  if (uploadIndex === -1 || uploadIndex === parts.length - 1) {
    return 'default_course_image';
  }

  // Get everything after 'upload' up to the extension
  const publicId = parts.slice(uploadIndex).join('/').split('.')[0];

  return publicId;
}