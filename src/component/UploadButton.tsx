import axios from "axios";
import React from "react";

export default function UploadButton({
  setUploadedImage,
  handleClickOpen,
  handleClose,
  setPercent,
  setAgency,
  setIsResultPage,
}: any) {
  const [btnClass, setBtnClass] = React.useState("default");
  const inputRef = React.useRef<HTMLInputElement>(null);
  const handleButtonClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      console.log(file);
      var reader = new FileReader();

      reader.onloadend = function () {
        setUploadedImage(reader.result);
      };

      if (file) {
        reader.readAsDataURL(file);
      } else {
        setUploadedImage(null);
      }
      const formData = new FormData();

      formData.append("file", file);
      handleClickOpen();
      axios
        .post("http://127.0.0.1:8000/api/face", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response.data);
          setPercent(response.data.percentage);
          setAgency(response.data.company);
          handleClose();
          setIsResultPage(true);
        })
        .catch((error) => {
          console.error("There was an error!", error);
          handleClose();
        });
    }
  };
  return (
    <div
      className={`button ${btnClass}`}
      onMouseEnter={() => {
        setBtnClass("hover");
      }}
      onMouseLeave={() => {
        setBtnClass("default");
      }}
      color="primary"
      onClick={handleButtonClick}
    >
      <input
        type="file"
        ref={inputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <div className="START">사진 업로드</div>
    </div>
  );
}
