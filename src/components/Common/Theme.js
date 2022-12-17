export const theme = {
  colors: {
    text: {
      defaultText: '#212121',
      mediumText: '#9B9FAA',
      inverseText: '#FFFFFF',
      accentText: '#FC842D',
      calorieText: '#264061',
    },
    background: {
      pageBackground: '#FFFFFF',
      greyBackground: '#F0F1F3',
      secondBackground: '#264061',
    },
    modalBackdropColor: 'rgba(33, 33, 33, 0.12)',

    separator: '#E0E0E0',
  },
  button: {
    accentButton: {
      background: '#FC842D',
      border: 'none',
      text: '#FFFFFF',
    },
    defaultButton: {
      background: '#FFFFFF',
      border: '2px solid #FC842D',
      text: '#FC842D',
    },
    shadow: {
      default: '0px 4px 10px rgba(252, 132, 45, 0.5)',
      hover: '2px 6px 14px rgba(252, 132, 45, 0.5)',
      active: '0px 2px 5px rgba(252, 132, 45, 0.5)',
    },
  },
  fontSizes: {
    default: '14px',
    s: '18px',
    m: '24px',
    l: '26px',
    xl: '34px',
    xxl: '48px',
  },
  fontWeights: {
    normal: 400,
    bold: 700,
  },
  spacing: [0, 5, 10, 20, 40, 80, 160, 320, 640],
  radii: {
    none: 0,
    normal: '5px',
    large: '10px',
    round: '50%',
  },
  mp: returnParams,
  animation: {
    fast: '150ms ease-in-out',
    normal: '250ms ease-in-out',
    long: '450ms ease-in-out',
  },
  shadow: {
    modalWindow: '0px 22px 40px rgba(0, 0, 0, 0.1)',
  },
  border: {
    default: '1px solid #212121',

    dev: '1px solid tomato',
  },
  // media: {
  //   desktop: '(min-width: 769px)',
  //   tablet: '(min-width: 321px)',
  //   mobile: '(max-width: 320px)',
  // },
};

// theme.mp usage example:
//   margin: {p=>p.theme.mp(1,3,-2,auto)};
// will yield result
//   margin: 5px 20px -10px auto;
// where
//   'n' is theme.spacing[n],
//   '-n' is -theme.spacing[n]
//   and auto stays as auto
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
