// @ts-ignore
import Button from './button.pug';

import './_button.scss';

export default {
  title: 'Example/Button',
};

export const Primary = () => {
  const contents = 'Button';

  return Button({ contents });
};

export const Secondary = () => {
  const contents = 'Button';
  const props = { mode: 'secondary' };

  return Button({ props, contents });
};

export const Large = () => {
  const contents = 'Button';
  const props = { size: 'large' };

  return Button({ props, contents });
};

export const Small = () => {
  const contents = 'Button';
  const props = { size: 'small' };

  return Button({ props, contents });
};
