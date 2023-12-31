const cloudinary = require('cloudinary');

cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const uploadImage = async (filePath) => {
  return await cloudinary.v2.uploader.upload(filePath, {
    folder: 'patientsAvatar',
  });
};

const deleteImage = async (publicId) => {
  return await cloudinary.v2.uploader.destroy(publicId);
};

module.exports = {
  uploadImage,
  deleteImage,
};
