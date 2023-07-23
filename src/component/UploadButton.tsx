import React from "react";

export default function UploadButton() {
  const [btnClass, setBtnClass] = React.useState("default");
  const inputRef = React.useRef<HTMLInputElement>(null);
  const handleButtonClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      console.log(file);
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
