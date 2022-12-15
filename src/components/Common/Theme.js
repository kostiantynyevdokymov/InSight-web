export const theme = {
  colors: {
    defaultText: '#212121',
    mediumText: '#9B9FAA',
    inverseText: '#ffffff',
    accentText: '#FC842D',
    pageBackground: '#FFFFFF',
    pageBackgroundGrey: '#F0F1F3',
    secondBackground: '#264061',
    buttonColor: '#FC842D',
    modalBackdropColor: 'rgba(33, 33, 33, 0.12)',
    // buttonColorAccent: '#FC842D',
    //   buttonColorActive: '#ffee55',
  },
  fontSizes: {
    //   s: '12px',
    //   m: '16px',
    //   l: '18px',
    //   xl: '24px',
    //   xxl: '36px',
    //   xxxl: '58px',
    //   xxxxl: '96px',
  },
  fontWeights: {
    //   normal: 400,
    //   bold: 700,
  },
  // spacing: [0, 5, 10, 20, 40, 80, 160, 320, 640],
  radii: {
    //   none: 0,
    //   normal: '5px',
    //   large: '10px',
    //   round: '50%',
  },
  mp: returnParams,
  animation: {
    //   fast: '150ms ease-in-out',
    //   normal: '250ms ease-in-out',
    //   long: '450ms ease-in-out',
  },
  // shadow: { default: '1px 1px 3px rgba(0, 0, 0, 0.4)' },
};

function returnParams(...sizes) {
  if (sizes.length === 0) return;

  const resultArray = [];

  for (const size of sizes) {
    let index = size;

    if (index === 0) {
      resultArray.push('0');
    } else if (index > 0) {
      if (index >= this.spacing.length) index = this.spacing.length;
      resultArray.push(`${this.spacing[index]}px`);
    } else if (index < 0) {
      index = index * -1;
      if (index >= this.spacing.length) index = this.spacing.length;
      resultArray.push(`-${this.spacing[index]}px`);
    } else if (index === 'auto') {
      resultArray.push('auto');
    }
  }

  return resultArray.join(' ');
}
