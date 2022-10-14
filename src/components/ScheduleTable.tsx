import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Close, DoubleCircle, OutlineTriangle, SingleOutlineCircle } from '../Icon/Icon';
import { dayOfWeeks, scheduleTimes } from '../libs/tableData';
import { WorkDate } from '../types/api';

interface Props {
  contents: WorkDate[];
}
const ScheduleTable = ({ contents }: Props) => {
  const [teacherWorkDays, setTeacherWorkDays] = useState<string[]>([]);
  const createTeacherWorkDays = () => {
    const cellNames: string[] = [];
    contents.forEach((content) => {
      content.times.forEach((time) => {
        const cellName = `${content.day_of_week[0]}_${time}`;
        cellNames.push(cellName);
      });
    });
    setTeacherWorkDays([...teacherWorkDays, ...cellNames]);
  };

  useEffect(() => {
    createTeacherWorkDays();
  }, []);
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
            {dayOfWeeks.map((day, index) => (
              <Th
                key={index}
                textAlign="center"
                color="white"
                borderColor="rgba(219,219,219,0.2)"
                borderRightWidth={'1px'}
              >
                {day}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {scheduleTimes.map((time) => (
            <Tr key={time}>
              <Td borderColor="border" borderRightWidth={'1px'}>
                {time}
              </Td>
              {dayOfWeeks.map((day, index) => {
                const cellName = `${day}_${time}`;
                return (
                  <Td id={cellName} key={index} textAlign="center" borderColor="border" borderRightWidth={'1px'}>
                    {teacherWorkDays.includes(cellName) ? (
                      <SingleOutlineCircle color={'primary'} boxSize={'14px'} mr={'4px'} />
                    ) : (
                      <Close color={'border'} boxSize={'14px'} mr={'4px'} />
                    )}
                  </Td>
                );
              })}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default ScheduleTable;
