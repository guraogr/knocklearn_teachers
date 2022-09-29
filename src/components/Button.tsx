import { Button as ChakraButton } from '@chakra-ui/react';

interface Props {
  children: string;
  type: 'primary' | 'subtle';
  size: 'lg' | 'md' | 'sm';
  otherProperties?: { [key: string]: string };
}

interface ButtonStyle {
  colorScheme: string;
  variant: 'solid' | 'outline' | 'ghost' | 'link';
  height: string | string[];
  width: string | string[];
}

const Button = ({ children, type, size, otherProperties }: Props) => {
  const generateButtonSize = () => {
    if (size === 'md') {
      return {
        height: ['50px', '44px'],
        width: ['100%', '160px'],
      };
    } else if (size === 'sm') {
      return {
        height: '36px',
        width: 'auto',
      };
    } else {
      // large
      return {
        height: '48px',
        width: ['100%', '264px'],
      };
    }
  };

  const generateButtonStyle = (): ButtonStyle => {
    let buttonStyle: ButtonStyle;
    if (type === 'subtle') {
      buttonStyle = {
        colorScheme: 'gray',
        variant: 'link',
        height: generateButtonSize().height,
        width: generateButtonSize().width,
      };
    } else {
      // primary
      buttonStyle = {
        colorScheme: 'brand',
        variant: 'solid',
        height: generateButtonSize().height,
        width: generateButtonSize().width,
      };
    }
    return buttonStyle;
  };

  return (
    <ChakraButton {...generateButtonStyle()} size={size} borderRadius="4px" {...otherProperties}>
      {children}
    </ChakraButton>
  );
};

export default Button;
