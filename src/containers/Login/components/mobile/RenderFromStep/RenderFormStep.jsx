import { useState } from "react";

import { useForm } from "react-hook-form";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Button from "@mui/material/Button";

import UserName from "../../../../../components/FormFields/UserName";
import Password from "../../../../../components/FormFields/Password";
import Label from "../../../../../components/Label/Label";
import SuccessContent from "../../../../../components/SuccessContent/SuccessContent";
import RenderStepImages from "./RenderStepImages/RenderStepImages";

import { postData } from "../../../../../services/httpRequest";

import useMultistepForm from "../../../../../services/hooks/useMultistepForm";

import { buttonStyle, labelStyles } from "../../../../../helpers/styles";
import "./RenderFormStep.css";
import { SESSION_API_URL, SITE_KEY } from "../../../../../constants";

export default function RenderFormStep() {
  const [isInOwnAccount, setIsInAccount] = useState(false);
  const [isLoginFailedMessage, setIsLoginFailedMessage] = useState(null);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const {
    step,
    isFirstStep,
    isLastStep,
    back,
    next,
    currentStepIndex,
    stepsCount,
  } = useMultistepForm([
    <div>
      <Label name={"Username"} styles={labelStyles} labelId={"username"} />
      <UserName control={control} errors={errors} deviceSize={"mobileSize"} />
    </div>,
    <div>
      <Label name={"My password"} styles={labelStyles} labelId={"password"} />
      <Password control={control} errors={errors} deviceSize={"mobileSize"} />
    </div>,
  ]);

  const onSubmit = async (data) => {

    if (!isLastStep) {
      next();
      return;
    }

    data.site_key = SITE_KEY;

    try {
      const responce = await postData(SESSION_API_URL, data);

      if (responce.Status === "ok") {
        setIsInAccount(true);
      }
      if (responce.Status === "fail") {
        setIsLoginFailedMessage(responce.Error.message);
      }

    } catch (err) {
      
      console.error(err);
    }
  };

  return (
    <div className="mobile-size-form-wrapper">
      <h1>GET LOVELY CUTIES IN YOUR AREA!</h1>
      {isInOwnAccount ? (
        <h2>You are successfully logged in to your account!</h2>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="wrapper">
            {step}
            <div className="mobile-button-wrapper">
              {!isFirstStep && (
                <Button
                  fullWidth
                  type="button"
                  variant="contained"
                  sx={buttonStyle("mobileSize")}
                  onClick={back}
                  startIcon={<ArrowBackIosIcon fontSize="small" />}
                >
                  Back
                </Button>
              )}
              {isLastStep ? (
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  sx={buttonStyle("mobileSize")}
                  endIcon={<ArrowForwardIosIcon />}
                  disabled={!!errors.password}
                >
                  Log In
                </Button>
              ) : (
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  sx={buttonStyle("mobileSize")}
                  endIcon={<ArrowForwardIosIcon />}
                  disabled={!!errors.username}
                >
                  Next
                </Button>
              )}
            </div>
            <div className="step-images-wrapper">
              {<p className="failed-login">{isLoginFailedMessage}</p>}
              <RenderStepImages
                currentStepIndex={currentStepIndex}
                stepsCount={stepsCount}
              />
            </div>
            <SuccessContent />
          </div>
        </form>
      )}
    </div>
  );
}
