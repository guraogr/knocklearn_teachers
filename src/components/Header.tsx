import { Text, Flex, Divider } from '@chakra-ui/react';
import LogoWidthText from '../Icon/LogoWithText';
import { semanticTokens } from '../theme/colors';
import Button from './Button';

interface Props {
  darkMode: boolean;
}

const Header = ({ darkMode }: Props) => {
  return (
    <>
      <Flex py="4" px="10" justifyContent={'space-between'}>
        <LogoWidthText />
        <Button type="subtle" size="sm" otherProperties={{ href: 'https://knocklearn.com/', as: 'a' }}>
          公式サイトへ
        </Button>
      </Flex>
      <Divider borderColor={semanticTokens.border} />
    </>
  );
};

export default Header;
