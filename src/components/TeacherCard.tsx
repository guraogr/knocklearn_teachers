import { Text, Flex, Avatar, Box, Heading, HStack, StackDivider } from '@chakra-ui/react';
import Button from './Button';

const TeacherCard = () => {
  return (
    <Flex justifyContent={'space-between'} direction={['column', 'row']}>
      <Box maxWidth={['90%', '100px']} mx={'auto'} justifyContent="center">
        <Avatar width={['140px', '116px']} height={['140px', '116px']} src="https://bit.ly/sage-adebayo" mb={'14px'} />
        {/* <Flex justifyContent={'space-between'} width="100%">
          <Avatar width={['44px', '28px']} height={['44px', '28px']} src="https://bit.ly/sage-adebayo" />
          <Avatar width={['44px', '28px']} height={['44px', '28px']} src="https://bit.ly/sage-adebayo" />
          <Avatar width={['44px', '28px']} height={['44px', '28px']} src="https://bit.ly/sage-adebayo" />
        </Flex> */}
      </Box>
      <Box pr={4} pl={10} width="100%">
        <Flex alignItems={'center'} mb="4px">
          <Heading size={'title2'} mr="12px">
            福本 英
          </Heading>
          <Text textStyle={'caption1'}>ふくもと あきら</Text>
        </Flex>
        <HStack
          textStyle={'body1Light'}
          spacing={'8px'}
          divider={<StackDivider borderColor={'border'} />}
          mb={['16px', '8px']}
          height={'18px'}
        >
          <Text>25歳</Text>
          <Text>男性</Text>
          <Text>株式会社ノックラーン</Text>
          <Text>経営者</Text>
        </HStack>
        <Text textStyle={'body1Light'}>
          副業社会人によるオンライン家庭教師KnockLearnを運営する株式会社ノックラーン代表の福本です!
          私は兵庫県姫路市で生まれ、幼少期から公文と野球をしていたのですが、小学5年生の時に自ら中学受験をすることを選び兵庫県にある白陵中学・高等学校に進学しました...
        </Text>
      </Box>
      <Button type="primary" size="md">
        詳細を見る
      </Button>
    </Flex>
  );
};

export default TeacherCard;
