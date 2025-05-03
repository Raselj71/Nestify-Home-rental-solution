'use server'
import { createClient } from "@/utils/supabase/ServerClient"


export const uploadImagesAndGetUrls = async (images: File[]): Promise<string[]> => {
  const uploadedUrls: string[] = [];

  const supabase = await createClient();  
  const { data: { user }, error: userError } = await supabase.auth.getUser();

  if (userError) {
    throw new Error(userError.message);
  }

  for (const image of images) {
    const fileName = `${Date.now()}-${image.name}`;
    const fullPath = `${user?.id}/${fileName}`;

    const { error: uploadError } = await supabase
      .storage
      .from('nestifybucket')
      .upload(fullPath, image);

    if (uploadError) {
      console.error('Upload error:', uploadError.message);
      continue;
    }

    const { data: publicUrlData } = supabase
      .storage
      .from('nestifybucket')
      .getPublicUrl(fullPath);

    uploadedUrls.push(publicUrlData.publicUrl);
  }

  return uploadedUrls;
};

  