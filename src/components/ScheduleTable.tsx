import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { SingleOutlineCircle } from '../Icon/Icon';

const ScheduleTable = () => {
  return (
    <TableContainer>
      <Table
        variant={'simple'}
        overflowX={'scroll'}
        sx={{ borderCollapse: 'collapse', border: '1px solid rgb(219,219,219)' }}
      >
        <Thead bg="primary">
          <Tr>
            <Th textAlign="center" color="white" borderColor="rgba(219,219,219,0.2)" borderRightWidth={'1px'}></Th>
            <Th textAlign="center" color="white" borderColor="rgba(219,219,219,0.2)" borderRightWidth={'1px'}>
              月曜日
            </Th>
            <Th textAlign="center" color="white" borderColor="rgba(219,219,219,0.2)" borderRightWidth={'1px'}>
              火曜日
            </Th>
            <Th textAlign="center" color="white" borderColor="rgba(219,219,219,0.2)" borderRightWidth={'1px'}>
              水曜日
            </Th>
            <Th textAlign="center" color="white" borderColor="rgba(219,219,219,0.2)" borderRightWidth={'1px'}>
              木曜日
            </Th>
            <Th textAlign="center" color="white" borderColor="rgba(219,219,219,0.2)" borderRightWidth={'1px'}>
              金曜日
            </Th>
            <Th textAlign="center" color="white" borderColor="rgba(219,219,219,0.2)" borderRightWidth={'1px'}>
              土曜日
            </Th>
            <Th textAlign="center" color="white" borderColor="rgba(219,219,219,0.2)" borderRightWidth={'1px'}>
              日曜日
            </Th>
            <Th textAlign="center" color="white" borderColor="rgba(219,219,219,0.2)" borderRightWidth={'1px'}>
              祝日
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td borderColor="border" borderRightWidth={'1px'}>
              7:00
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

export default ScheduleTable;
