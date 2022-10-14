import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { Close, DoubleCircle, OutlineTriangle, SingleOutlineCircle } from '../Icon/Icon';
import { subjectNames, teachLevels } from '../libs/tableData';
import { TeachSubject } from '../types/api';

interface Props {
  teach_subject: TeachSubject[];
}

const SubjectTable = ({ teach_subject }: Props) => {
  const renderTeachLevel = (teachLevel: string) => {
    if (teachLevel === teachLevels[0]) {
      return <DoubleCircle color={'primary'} boxSize={'18px'} mr={'4px'} />;
    } else if (teachLevel === teachLevels[1]) {
      return <SingleOutlineCircle color={'primary'} boxSize={'16px'} mr={'4px'} />;
    } else {
      return <OutlineTriangle color={'secondary'} boxSize={'18px'} mr={'4px'} />;
    }
  };
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
            {subjectNames.map((subjectNames, index) => (
              <Th
                key={index}
                textAlign="center"
                color="white"
                borderBottomWidth={0}
                borderColor="rgba(219,219,219,0.2)"
                borderRightWidth={index === subjectNames.length - 1 ? '0' : '1px'}
              >
                {subjectNames}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {teach_subject.map((data, index) => {
            return (
              <Tr key={`${data.fieldId}-${index}`}>
                <Td textAlign="center" borderColor="border" borderRightWidth={'1px'}>
                  {data.teach_school_year}
                </Td>
                {subjectNames.map((subjectName, index) => (
                  <Td key={index} textAlign="center" borderColor="border" borderRightWidth={'1px'}>
                    {data.teach_subject.includes(subjectName) ? (
                      <>{renderTeachLevel(data.teach_level[0])}</>
                    ) : (
                      <Close color={'border'} boxSize={'14px'} mr={'4px'} />
                    )}
                  </Td>
                ))}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default SubjectTable;
