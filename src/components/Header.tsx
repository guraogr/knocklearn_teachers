import { Text, Flex, Divider, Box } from '@chakra-ui/react';
import Link from 'next/link';
import Router from 'next/router';
import Logo from '../Icon/Logo';
import LogoWidthText from '../Icon/LogoWithText';
import { semanticTokens } from '../theme/colors';
import Button from './Button';

interface Props {
  darkMode: boolean;
}

const Header = ({ darkMode }: Props) => {
  const onClickHandler = () => {
    Router.push('/');
  };
  return (
    <>
      {darkMode ? (
        <Box height="10vw" maxHeight="200px" minHeight="160px" backgroundColor="primary">
          <Flex as="header" py="16px" px={['24px', '40px']} justifyContent={'space-between'}>
            <Box onClick={onClickHandler} cursor="pointer">
              <Logo />
            </Box>
            <Button
              type="subtle"
              size="sm"
              otherProperties={{ href: 'https://knocklearn.com/', as: 'a', color: 'white' }}
            >
              公式サイトへ
            </Button>
          </Flex>
        </Box>
      ) : (
        <>
          <Flex as="header" pt="16px" pb="14px" px={['24px', '40px']} justifyContent={'space-between'}>
            <Box onClick={onClickHandler} cursor="pointer">
              <LogoWidthText />
            </Box>
            <Button type="subtle" size="sm" otherProperties={{ href: 'https://knocklearn.com/', as: 'a' }}>
              公式サイトへ
            </Button>
          </Flex>
          <Divider borderColor={'border'} />
        </>
      )}
    </>
  );
};

export default Header;
