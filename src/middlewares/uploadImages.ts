import multer from 'multer';

const storage = multer.memoryStorage();
export const updateImages = multer({
  storage,
});