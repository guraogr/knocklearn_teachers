import { Text, Flex, Divider } from '@chakra-ui/react';
import LogoWidthText from '../Icon/LogoWithText';
import { semanticTokens } from '../theme/colors';
import Button from './Button';

interface Props {
  darkMode: boolean;
}

const Header = ({ darkMode }: Props) => {
  return (
    <header>
      <Flex py="16px" px={['24px', '40px']} justifyContent={'space-between'}>
        <LogoWidthText />
        <Button type="subtle" size="sm" otherProperties={{ href: 'https://knocklearn.com/', as: 'a' }}>
          公式サイトへ
        </Button>
      </Flex>
      <Divider borderColor={'border'} />
    </header>
  );
};

export default Header;
