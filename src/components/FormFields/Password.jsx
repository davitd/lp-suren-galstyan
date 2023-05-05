import React, { useState } from 'react';

import { Controller } from 'react-hook-form';

import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { inputStyle } from '../../helpers/styles';

export default function Password({ control, errors, deviceSize }) {
  
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Controller
        name="password"
        control={control}
        rules={{
          required: {
            value: true,
            message: 'password is required',
          },
        }}
        render={({ field }) => (
          <FormControl fullWidth>
            <OutlinedInput
              id="password"
              {...field}
              placeholder="Password"
              sx={
                errors.password
                  ? inputStyle('#d50000', deviceSize)
                  : inputStyle('#F6A95F', deviceSize)
              }
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        )}
      />
      <p className="alert-error-message">
        {errors.password && <p>{errors.password.message}</p>}
      </p>
    </>
  );
}
