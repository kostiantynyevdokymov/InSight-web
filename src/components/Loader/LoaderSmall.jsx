import { ThreeDots } from 'react-loader-spinner';
import { theme } from 'components/Common/Theme';

export const LoaderSmall = ({ size = 30, visible = true, color = theme.colors.text.accentText }) => {
  return (
    <ThreeDots
      height={size}
      width={size}
      radius="15"
      color="#4fa94d"
      ariaLabel="three-dots-loading"
      visible={visible}
    />
  );
};
