import { Text, Flex, Avatar, Box, Heading, HStack, StackDivider } from '@chakra-ui/react';
import { ommitedString } from '../libs/ommitedString';
import { Teacher } from '../types/api';
import Button from './Button';

interface Props {
  content: Teacher;
}

const TeacherCard = ({ content }: Props) => {
  return (
    <Flex justifyContent={'space-between'} direction={['column', 'row']} w="100%">
      <Box maxWidth={['90%', '100px']} mx={'auto'} justifyContent="center">
        <Avatar width={['140px', '116px']} height={['140px', '116px']} src={content.photo[0].photo.url} mb={'14px'} />
      </Box>
      <Box pr={[0, 4]} pl={[0, 10]} mb={['24px', 0]} width="100%">
        <Flex justifyContent={['center', 'flex-start']} alignItems={'center'} mb={['8px', '4px']}>
          <Heading size={'title2'} mr="12px">
            {content.name}
          </Heading>
          <Text textStyle={'caption1'}>{content.name_furigana}</Text>
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
          <Text>{content.age}歳</Text>
          <Text>{content.gender}</Text>
          <Text>{content.company_name}</Text>
          <Text>{content.job_category}</Text>
        </HStack>
        <Text textStyle={'body1Light'}>{ommitedString(content.self_pr)}</Text>
      </Box>
      <Button type="primary" size="md" href={`/teacher/${content.id}`}>
        詳細を見る
      </Button>
    </Flex>
  );
};

export default TeacherCard;
