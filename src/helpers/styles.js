export function inputStyle(borderColor, deviceSize) {
  if (deviceSize === 'mobileSize') {
    return {
      input: {
        fontFamily: 'Manrope',
        fontStyle: 'normal',
        color: '#3E352F',
        fontWeight: 800,
        fontSize: '12px',
        lineHeight: '16px',
        padding: '0 10px',
        height: '26px',
      },
      fieldset: {
        border: `2px solid ${borderColor}!important`,
        borderRadius: 2,
      },
    };
  }

  return {
    height: '46px',
    input: {
      padding: '12px 20px',
      fontFamily: 'Manrope',
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: '16px',
      lineHeight: '22px',
      color: '#3E352F',
    },
    fieldset: {
      border: `2px solid ${borderColor}!important`,
      borderRadius: 3,
    },
  };
}

export function buttonStyle(deviceSize) {
  if (deviceSize === 'mobileSize') {
    return {
      height: '26px',
      background: '#F6A95F',
      borderRadius: '8px',
      fontFamily: 'Manrope',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '10px',
      lineHeight: '14px',
      color: '#3E352F',
      textTransform: 'unset',
      ':hover': {
        bgcolor: '#F6A95F',
        color: '#3E352F',
      },
      svg: {
        fontSize: '8px!important',
      },
    };
  }
  return {
    height: '42px',
    width: '115px',
    background: '#F6A95F',
    borderRadius: '12px',
    fontFamily: 'Manrope',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '22px',
    color: '#3E352F',
    textTransform: 'unset',
    ':hover': {
      bgcolor: '#F6A95F',
      color: '#3E352F',
    },
  };
}

export const labelStyles = {
  fontFamily: 'Manrope',
  fontStyle: 'normal',
  fontWeight: 800,
  fontSize: '14px',
  lineHeight: '19px',
  color: '#3E352F',
  paddingBottom: '10px',
};
