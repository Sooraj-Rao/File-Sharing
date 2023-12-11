export const FileNameLogic = (fileName: any) => {
  return fileName.length > 20 ? fileName.slice(0, 20) + "..." : fileName;
};
export const FileTypeLogic = (filetype: any) => {
  return filetype.length > 25 ? filetype.slice(0, 25) + "..." : filetype;
};
