import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Avatar, Heading, Text } from '@chakra-ui/react';
import Button from '../components/Button';
import LogoWidthText from '../Icon/LogoWithText';
import { semanticTokens } from '../theme/colors';
import Logo from '../Icon/Logo';
import Header from '../components/Header';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header darkMode={false} />
      {/* <Heading size={'title1'}>Title</Heading>
      <Heading size={'title2'}>Title</Heading>
      <Heading size={'title3'}>Title</Heading>
      <Heading size={'headline'}>Title</Heading>
      <Heading size={'subHeadline'}>Title</Heading>
      <Text textStyle={'body1Light'}>Title</Text>
      <Text textStyle={'body1Bold'}>Title</Text>
      <Text textStyle={'caption1'}>Title</Text>
      <Button type="primary" size="lg">
        text
      </Button>
      <LogoWidthText fill={semanticTokens.primary} width={'155px'} height={'31px'} />
      <Logo fill={semanticTokens.primary} width={'28px'} height={'30px'} />
      <Avatar width={['120px', '140px']} height={['120px', '140px']} src="https://bit.ly/sage-adebayo" /> */}
    </div>
  );
};

export default Home;
