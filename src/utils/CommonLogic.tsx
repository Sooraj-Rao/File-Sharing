export const FileNameLogic = (fileName: any) => {
  console.log(fileName);
  return fileName.length > 20 ? fileName.slice(0, 20) + "..." : fileName;
};
export const FileTypeLogic = (fileType: any) => {
  return fileType.split(".").pop();
};

export const FileSizeLogic = (fileSize: any) => {
  if (fileSize > 100000) {
    return (fileSize / 1024 / 1024).toFixed(1) + " MB";
  } else if (fileSize > 1000) {
    return (fileSize / 1024).toFixed(1) + " KB";
  }else{
    return (fileSize).toFixed(1) + " KB";
  }
};


