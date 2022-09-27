import { Button as ChakraButton } from '@chakra-ui/react';

interface Props {
  children: string;
  type: 'primary';
  size: 'lg' | 'md' | 'sm';
}

interface ButtonStyle {
  colorScheme: string;
  variant: 'solid' | 'outline' | 'ghost' | 'link';
  height: string;
  width: string | string[];
}

const Button = ({ children, type, size }: Props) => {
  let buttonStyle: ButtonStyle = {
    colorScheme: 'brand',
    variant: 'solid',
    height: '46px',
    width: ['100%', '264px'],
  };

  const generateButtonColor = () => (type === 'primary' ? 'brand' : '');

  const generateButtonSize = () => {
    if (size === 'md') {
      return {
        height: '40px',
        width: ['100%', '160px'],
      };
    } else if (size === 'sm') {
      return {
        height: '36px',
        width: 'auto',
      };
    } else {
      return {
        height: '48px',
        width: ['100%', '264px'],
      };
    }
  };

  const generateButtonStyle = (): ButtonStyle => {
    if (type === 'primary') {
      buttonStyle = {
        colorScheme: generateButtonColor(),
        variant: 'solid',
        height: generateButtonSize().height,
        width: generateButtonSize().width,
      };
    }
    return buttonStyle;
  };

  return (
    <ChakraButton {...generateButtonStyle()} size={size} borderRadius="0">
      {children}
    </ChakraButton>
  );
};

export default Button;
