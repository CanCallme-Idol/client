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
import Dialog from "@mui/material/Dialog";

export default function MainPage() {
  const images = [image1, image2, image3, image4];
  const bgImages = [bgimage1, bgimage2, bgimage3, bgimage4];
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isLanding, setIsLanding] = React.useState(true);
  const [isResultPage, setIsResultPage] = React.useState(false);
  const [btnClass, setBtnClass] = React.useState("default");
  const [uploadedImage, setUploadedImage] = React.useState("");
  const [percent, setPercent] = React.useState("");
  const [agency, setAgency] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const imageVariants = {
    hidden: { y: "100%" },
    visible: { y: "0%" },
    exit: { y: "-100%" },
  };

  React.useEffect(() => {
    if (agency === "hybe") {
      setCurrentIndex(0);
    } else if (agency === "yg") {
      setCurrentIndex(1);
    } else if (agency === "sm") {
      setCurrentIndex(2);
    } else if (agency === "jyp") {
      setCurrentIndex(3);
    }
  }, [agency]);
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const isMobile = () => {
    return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      window.navigator.userAgent
    );
  };
  const MidComment = ({ isResult }: { isResult: boolean }) => {
    if (isResult) {
      if (!percent) {
        return (
          <div className="result-content">
            <h1 className="result-wrapper">
              {errorMessage === "01"
                ? "얼굴이 여러개가 보여요."
                : "얼굴이 보이지 않아요"}
            </h1>
            <h1 className="HYBE">
              <span className="result-wrapper">
                다시 시도해주세요. <br />
              </span>
            </h1>
          </div>
        );
      }
      return (
        <div className="result-content">
          <h1 className="result-wrapper">당신에 이미지에</h1>
          <h1 className="result-num">{Math.floor(Number(percent) * 100)}% </h1>
          <h1 className="HYBE">
            <span className="result-wrapper">
              적합한 소속사는
              <br />
            </span>
            <span className="result-span">{agency}</span>
            <span className="result-wrapper-end"> 입니다. </span>
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
      <Header isMobile={isMobile} />
      <Dialog open={open} onClose={handleClose}>
        <div className="box">
          <div className="popup-check">
            <div className="overlap-group">
              <img
                className="rectangle"
                alt="Rectangle"
                src="https://generation-sessions.s3.amazonaws.com/e11dbd7d8d6f68d866ab23a6b386f3b1/img/rectangle-3289.svg"
              />
              <img
                className="element"
                alt="Element"
                src="https://generation-sessions.s3.amazonaws.com/e11dbd7d8d6f68d866ab23a6b386f3b1/img/02-----.svg"
              />
              <img
                className="img"
                alt="Rectangle"
                src="https://generation-sessions.s3.amazonaws.com/e11dbd7d8d6f68d866ab23a6b386f3b1/img/rectangle-3290.svg"
              />
              <img
                className="img-googleaccount"
                alt="Img googleaccount"
                src="https://generation-sessions.s3.amazonaws.com/e11dbd7d8d6f68d866ab23a6b386f3b1/img/img-googleaccount.svg"
              />
              <img
                className="https-app"
                alt="Https app"
                src="https://generation-sessions.s3.amazonaws.com/e11dbd7d8d6f68d866ab23a6b386f3b1/img/https---app-lottiefiles-com-animation-87f4cbbd-d8e5-4e8d-8367-2a.gif"
              />
            </div>
          </div>
        </div>
      </Dialog>
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
          {isResultPage && (
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
          )}
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
              <UploadButton
                setUploadedImage={setUploadedImage}
                handleClickOpen={handleClickOpen}
                handleClose={handleClose}
                setPercent={setPercent}
                setAgency={setAgency}
                setErrorMessage={setErrorMessage}
                setIsResultPage={setIsResultPage}
              />
              <div className="text-wrapper-1">Development reference</div>
              <div className="text-wrapper-2">JoCoding Youtube</div>
              <div className="text-wrapper-2">Teachable Machine</div>
            </div>
          )}
        </div>
      </div>
      <div>
        {!isMobile() && (
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
        )}
      </div>
      <Footer />
    </div>
  );
}
