import InputLabel from '@mui/material/InputLabel';

export default function Label({ name, styles, labelId }) {
  
  return (
    <InputLabel htmlFor={labelId} sx={styles}>
      {name}
    </InputLabel>
  );
}
