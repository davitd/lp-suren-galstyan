import { useState } from 'react';

import { useForm } from 'react-hook-form';

import Button from '@mui/material/Button';

import UserName from '../../../../../components/FormFields/UserName';
import Password from '../../../../../components/FormFields/Password';
import SuccessContent from '../../../../../components/SuccessContent/SuccessContent';
import Label from '../../../../../components/Label/Label';

import './LoginForm.css';
import { buttonStyle } from '../../../../../helpers/styles';

import { postData } from '../../../../../services/httpRequest';

import { SESSION_API_URL, SITE_KEY } from '../../../../../constants';

export default function LoginForm() {
  const [isInOwnAccount, setIsInAccount] = useState(false);
  const [isLoginFailedMessage, setIsLoginFailedMessage] = useState(null);
  
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {

    data.site_key = SITE_KEY;

    try {
      const res = postData(SESSION_API_URL, data);

      res.then((responce) => {
        if (responce.Status === 'ok') {
          setIsInAccount(true);
        };
        if(responce.Status === "fail"){
          setIsLoginFailedMessage(responce.Error.message);
        }
      });
      
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="form-wrapper">
      <h1 className="title">GET LOVELY CUTIES IN YOUR AREA!</h1>
      {isInOwnAccount ? (
        <h2>You are succes log in your account</h2>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-wrapper">
            <Label name={'UserName'} labalId={'username'} />
            <UserName control={control} errors={errors} />
            <Label name={'My password'} labalId={'password'} />
            <Password control={control} errors={errors} />
          </div>
          <div className="button-wrapper">
            {<p className='failed-login'>{isLoginFailedMessage}</p>}
            <Button
              type="submit"
              variant="contained"
              sx={buttonStyle('desktopSize')}
              disabled={Object.keys(errors).length > 0}
            >
              Log In
            </Button>
          </div>
          <SuccessContent />
        </form>
      )}
    </div>
  );
}
