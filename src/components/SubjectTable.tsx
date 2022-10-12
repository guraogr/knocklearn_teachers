import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { SingleOutlineCircle } from '../Icon/Icon';

const SubjectTable = () => {
  return (
    <TableContainer>
      <Table
        variant={'simple'}
        overflowX={'scroll'}
        sx={{ borderCollapse: 'collapse', border: '1px solid rgb(219,219,219)' }}
      >
        <Thead bg="primary">
          <Tr>
            <Th
              textAlign="center"
              color="white"
              rowSpan={2}
              borderColor="rgba(219,219,219,0.2)"
              borderBottomWidth={0}
              borderRightWidth={'1px'}
            >
              学年
            </Th>
            <Th textAlign="center" color="white" colSpan={5} borderColor="rgba(219,219,219,0.2)">
              教科
            </Th>
          </Tr>
          <Tr>
            <Th
              textAlign="center"
              color="white"
              borderBottomWidth={0}
              borderColor="rgba(219,219,219,0.2)"
              borderRightWidth={'1px'}
            >
              国語
            </Th>
            <Th
              textAlign="center"
              color="white"
              borderBottomWidth={0}
              borderColor="rgba(219,219,219,0.2)"
              borderRightWidth={'1px'}
            >
              数学
            </Th>
            <Th
              textAlign="center"
              color="white"
              borderBottomWidth={0}
              borderColor="rgba(219,219,219,0.2)"
              borderRightWidth={'1px'}
            >
              理科
            </Th>
            <Th
              textAlign="center"
              color="white"
              borderBottomWidth={0}
              borderColor="rgba(219,219,219,0.2)"
              borderRightWidth={'1px'}
            >
              社会
            </Th>
            <Th
              textAlign="center"
              color="white"
              borderBottomWidth={0}
              borderColor="rgba(219,219,219,0.2)"
              borderRightWidth={'1px'}
            >
              英語
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td textAlign="center" borderColor="border" borderRightWidth={'1px'}>
              中学一年生
            </Td>
            <Td textAlign="center" borderColor="border" borderRightWidth={'1px'}>
              <SingleOutlineCircle color={'primary'} boxSize={'14px'} mr={'4px'} />
            </Td>
            <Td textAlign="center" borderColor="border" borderRightWidth={'1px'}>
              <SingleOutlineCircle color={'primary'} boxSize={'14px'} mr={'4px'} />
            </Td>
            <Td textAlign="center" borderColor="border" borderRightWidth={'1px'}>
              <SingleOutlineCircle color={'primary'} boxSize={'14px'} mr={'4px'} />
            </Td>
            <Td textAlign="center" borderColor="border" borderRightWidth={'1px'}>
              <SingleOutlineCircle color={'primary'} boxSize={'14px'} mr={'4px'} />
            </Td>
            <Td textAlign="center" borderColor="border">
              <SingleOutlineCircle color={'primary'} boxSize={'14px'} mr={'4px'} />
            </Td>
          </Tr>
          <Tr>
            <Td textAlign="center" borderColor="border" borderRightWidth={'1px'}>
              中学一年生
            </Td>
            <Td textAlign="center" borderColor="border" borderRightWidth={'1px'}>
              <SingleOutlineCircle color={'primary'} boxSize={'14px'} mr={'4px'} />
            </Td>
            <Td textAlign="center" borderColor="border" borderRightWidth={'1px'}>
              <SingleOutlineCircle color={'primary'} boxSize={'14px'} mr={'4px'} />
            </Td>
            <Td textAlign="center" borderColor="border" borderRightWidth={'1px'}>
              <SingleOutlineCircle color={'primary'} boxSize={'14px'} mr={'4px'} />
            </Td>
            <Td textAlign="center" borderColor="border" borderRightWidth={'1px'}>
              <SingleOutlineCircle color={'primary'} boxSize={'14px'} mr={'4px'} />
            </Td>
            <Td textAlign="center" borderColor="border">
              <SingleOutlineCircle color={'primary'} boxSize={'14px'} mr={'4px'} />
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default SubjectTable;
