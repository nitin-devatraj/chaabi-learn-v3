import React, { useRef, useState } from "react";
import styles from "./FileInput.module.scss";

const FileInput = ({ accept, supportingText, iconSource }) => {
  const fileInputRef = useRef(null);
  const [selectedFileName, setSelectedFileName] = useState(null);
  const [isDraggingOver, setIsDraggingOver] = useState(false);

  const handleFileInputChange = (event) => {
    const files = event.target.files;
    // Handle the uploaded files here
    const selectedFile = files[0];
    setSelectedFileName(selectedFile.name);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDraggingOver(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    setIsDraggingOver(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDraggingOver(false);
    const files = event.dataTransfer.files;
    // Handle the dropped files here
    const selectedFile = files[0];
    setSelectedFileName(selectedFile.name);
  };

  const openFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div
      className={`${styles.fileInputContainer} ${
        isDraggingOver ? styles.dragging : ""
      }`}
      onClick={openFileInput}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className={styles.content}>
        <div className={styles.iconContainer}>
          <img src={iconSource} alt="#" />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.text}>
            {selectedFileName ? (
              <span>{selectedFileName}</span>
            ) : (
              <>
                <span>Click to upload</span> or drag and drop
              </>
            )}
          </div>
          <div className={styles.supportingText}>{supportingText}</div>
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept={accept}
          className={styles.hiddenInput}
          onChange={handleFileInputChange}
        />
      </div>
    </div>
  );
};

export default FileInput;
