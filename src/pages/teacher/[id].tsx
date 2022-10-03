import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import { Avatar, Box, Flex, Heading, HStack, Stack, StackDivider, Text, VStack } from '@chakra-ui/react';
import Header from '../../components/Header';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

const Home: NextPage = () => {
  return (
    <Box className={styles.container}>
      <Head>
        <title>KnockLeran | 講師一覧</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header darkMode={true} />
      <Box as="main" mt={'-64px'}>
        <Flex alignItems={'flex-end'} maxWidth="820px" marginX={'auto'} mb={'48px'}>
          <Box mr={'24px'}>
            <Avatar
              width={['140px', '130px']}
              height={['140px', '130px']}
              src="https://bit.ly/sage-adebayo"
              mb={'8px'}
              border={'2px solid white'}
            />
            <Flex justifyContent={'space-between'} width="100%" px={'8px'}>
              <Avatar width={['44px', '32px']} height={['44px', '32px']} src="https://bit.ly/sage-adebayo" />
              <Avatar width={['44px', '32px']} height={['44px', '32px']} src="https://bit.ly/sage-adebayo" />
              <Avatar width={['44px', '32px']} height={['44px', '32px']} src="https://bit.ly/sage-adebayo" />
            </Flex>
          </Box>
          <Box>
            <Flex justifyContent={['center', 'flex-start']} alignItems={'center'} mb={['8px', '12px']}>
              <Heading size={'title1'} mr="12px">
                福本 英
              </Heading>
              <Text textStyle={'body1Light'}>ふくもと あきら</Text>
            </Flex>
            <HStack
              textStyle={'body1Light'}
              spacing={'8px'}
              wrap="wrap"
              divider={<StackDivider transform="translateY(5px)" height={'18px'} borderColor={'border'} />}
              mb={['16px', '8px']}
              justify={['center', 'flex-start']}
              color={'secondaryText'}
            >
              <Text>25歳</Text>
              <Text>男性</Text>
              <Text>株式会社ノックラーン</Text>
              <Text>経営者</Text>
            </HStack>
          </Box>
        </Flex>
        <Tabs colorScheme="brand">
          <TabList borderColor={'border'} borderBottom="1px solid" color="secondaryText">
            <Flex width={'820px'} margin="0 auto">
              <Tab fontWeight={'bold'} width={['50%', '160px']}>
                プロフィール
              </Tab>
              <Tab fontWeight={'bold'} width={['50%', '160px']}>
                授業内容
              </Tab>
            </Flex>
          </TabList>

          <TabPanels>
            <TabPanel width={'820px'} margin="0 auto">
              <Box my="56px">
                <Heading size={'title2'} mb="24px">
                  自己紹介
                </Heading>
                <Text textStyle={'body1Light'}>
                  副業社会人によるオンライン家庭教師KnockLearnを運営する株式会社ノックラーン代表の福本です！
                  私は兵庫県姫路市で生まれ、幼少期から公文と野球をしていたのですが、小学5年生の時に自ら中学受験をすることを選び兵庫県にある白陵中学・高等学校に進学しました。
                </Text>
              </Box>
              <Box mb="56px">
                <Heading size={'title2'} mb="24px">
                  話せるテーマ
                </Heading>
                <Text textStyle={'body1Light'}>
                  「自分らしく生きること」「起業という選択肢」「TikTokやUberなどの日常生活で使うサービスの仕組み」「多面的思考」「リーダーシップの歴史」「三国志から学ぶリーダー像」
                </Text>
              </Box>
            </TabPanel>
            <TabPanel width={'820px'} margin="0 auto">
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};

export default Home;