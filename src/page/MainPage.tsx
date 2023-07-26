import React from "react";
import image1 from "../images/trim_hybe.png";
import image2 from "../images/trim_yg.png";
import image3 from "../images/trim_sm.png";
import image4 from "../images/trim_jyp.png";
import bgimage1 from "../images/bg+title.png";
import bgimage2 from "../images/bg+title (1).png";
import bgimage3 from "../images/bg+title (2).png";
import bgimage4 from "../images/bg+title (3).png";
import { ReactComponent as BtnIcon } from "../images/button.svg";
import crystalImage from "../images/crystal.png";
import Header from "../component/Header";
import Footer from "../component/Footer";
import MoveAnimation from "../component/MoveAnimation";
import UploadButton from "../component/UploadButton";
import { Button } from "@mui/material";
export default function MainPage() {
  const images = [image1, image2, image3, image4];
  const bgImages = [bgimage1, bgimage2, bgimage3, bgimage4];
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isLanding, setIsLanding] = React.useState(true);
  const [btnClass, setBtnClass] = React.useState("default");
  const [uploadedImage, setUploadedImage] = React.useState("");

  const imageVariants = {
    hidden: { y: "100%" },
    visible: { y: "0%" },
    exit: { y: "-100%" },
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const MidComment = ({ isResult }: { isResult: boolean }) => {
    if (isResult) {
      return (
        <div className="result-content">
          <h1 className="result-wrapper">당신에 이미지에</h1>
          <h1 className="result-num">78% </h1>
          <h1 className="HYBE">
            <span className="result-wrapper">
              적합한 소속사는
              <br />
            </span>
            <span className="result-span">HYBE</span>
            <span className="result-wrapper"> 입니다. </span>
          </h1>
        </div>
      );
    }
    return (
      <div className="content">
        <h1 className="crys-text-wrapper">
          당신에 이미지에 <br />
          가장 적합한 <br />
          소속사를 찾아드립니다.
        </h1>
        <div className="crys-text-wrapper-bottom">
          지금 사진 한장으로 확인해보세요!
        </div>
      </div>
    );
  };
  return (
    <div className="main">
      <Header />
      <div className="ai-body">
        <div className="flex-box-center">
          <div className="background">
            <img
              src={crystalImage}
              className="background-image"
              alt="background"
            />
            {uploadedImage && (
              <img
                src={uploadedImage}
                className="foreground-image"
                alt="foreground"
              />
            )}

            {isLanding ? (
              <Button
                onClick={() => {
                  handleNext();
                }}
                sx={{ zIndex: "999", height: "40px", width: "40px" }}
              >
                <BtnIcon />
              </Button>
            ) : (
              <MidComment isResult={!!uploadedImage} />
            )}
          </div>
          {isLanding ? (
            <>
              <div
                className={`button ${btnClass}`}
                onMouseEnter={() => {
                  setBtnClass("hover");
                }}
                onMouseLeave={() => {
                  setBtnClass("default");
                }}
                color="primary"
                onClick={() => {
                  setIsLanding(false);
                }}
              >
                <div className="START">START</div>
              </div>
              <MoveAnimation
                images={bgImages}
                idx={currentIndex}
                imageVariants={imageVariants}
                imgStyle={{
                  bottom: "10vh",
                  height: "90vh",
                  width: "100vw",
                  zIndex: "2",
                }}
                side={true}
              />
            </>
          ) : (
            <div>
              <UploadButton setUploadedImage={setUploadedImage} />
              <div className="text-wrapper-1">Development reference</div>
              <div className="text-wrapper-2">JoCoding Youtube</div>
              <div className="text-wrapper-2">Teachable Machine</div>
            </div>
          )}
        </div>
      </div>
      <div>
        <MoveAnimation
          images={images}
          idx={currentIndex}
          imageVariants={imageVariants}
          imgStyle={{
            right: "5vw",
            bottom: "10vh",
            height: "80vh",
            width: "90vw",
            zIndex: "7",
          }}
        />
      </div>
      <Footer />
    </div>
  );
}
