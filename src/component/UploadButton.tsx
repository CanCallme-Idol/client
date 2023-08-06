import axios from "axios";
import React from "react";

export default function UploadButton({
  setUploadedImage,
  handleClickOpen,
  handleClose,
  setPercent,
  setAgency,
  setErrorMessage,
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
      // console.log(file);
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
        .post(process.env.REACT_APP_FACE_API_URL + "/api/face", formData, {
        // .post("https://a5cfe4794aa9.ngrok.app/api/face", formData, {
          // headers: {
          //   "Content-Type" : "multipart/form-data",
          //   "ngrok-skip-browser-warning" : "69420",
          //   "Access-Control-Allow-Origin" : "https://2980-1-241-85-168.ngrok-free.app",
          //   "Access-Control-Allow-Headers" : "*",
          // },
        })
        .then((response) => {
          // console.log(response.data);
          setPercent(response.data.percentage);
          setAgency(response.data.company);
          setErrorMessage(response.data?.errorMessage[0]);
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
