import { Controller } from 'react-hook-form';

import TextField from '@mui/material/TextField';

import { inputStyle } from '../../helpers/styles';

export default function UserName({ control, errors, deviceSize }) {
  return (
    <>
      <Controller
        name="username"
        control={control}
        rules={{
          required: {
            value: true,
            message: 'username is required',
          },
        }}
        render={({ field }) => (
          <TextField
            {...field}
            fullWidth
            id="username"
            placeholder="username"
            sx={
              errors?.username
                ? inputStyle('#d50000', deviceSize)
                : inputStyle('#F6A95F', deviceSize)
            }
          />
        )}
      />
      <p className="alert-error-message">
        {errors?.username && <p>{errors.username.message}</p>}
      </p>
    </>
  );
}
