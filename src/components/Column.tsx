import { ColumnType } from "../utils/enums";
import { AddIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Heading,
  IconButton,
  Stack,
  useColorModeValue
} from '@chakra-ui/react';
import { TaskModel } from "../utils/models";
import Task from "./Task";
import useColumTasks from "../hooks/useColumnTask";

const ColorColumnScheme: Record<ColumnType, string> = {
  Todo: 'gray',
  "In progress": 'blue',
  Blocked: 'red',
  Completed: 'green'
}

// const mockTasks: TaskModel[] = [
//   {
//     id: '1',
//     title: 'Task 1',
//     column: ColumnType.TO_DO,
//     color: 'red.300'
//   },
//   {
//     id: '2',
//     title: 'Task 2',
//     column: ColumnType.TO_DO,
//     color: 'blue.300'
//   },
//   {
//     id: '3',
//     title: 'Task 3',
//     column: ColumnType.TO_DO,
//     color: 'green.300'
//   }
// ];

function Column({ column } : { column: ColumnType }) {
  const { tasks, addEmptyTask, updateTask, deleteTask } = useColumTasks(column);

  const ColumnTasks = tasks.map((task, index) => (
    <Task 
      key={task.id} 
      task={task}
      index={index}
      onDelete={deleteTask}
      onUpdate={updateTask}
    />
  ));

  return (
    <Box>
      <Heading
        fontSize='md'
        mb={4}
        letterSpacing='wide'
      >
        <Badge
          px={2}
          py={1}
          rounded='lg'
          colorScheme={ColorColumnScheme[column]}
        >
          {column}
        </Badge>
      </Heading>
      <IconButton 
        size='ls'
        w='full'
        color={useColorModeValue('gray.500', 'gray.400')}
        bgColor={useColorModeValue('gray.100', 'gray.700')}
        _hover={{ bgColor: useColorModeValue('gray.200', 'gray.600') }}
        px={2}
        variant='solid'
        colorScheme='black'
        aria-label='add-task'
        icon={<AddIcon />}
        onClick={addEmptyTask}
      />
      <Stack
        direction={{ base: 'row', md: 'column' }}
        h={{ base: 300, md: 600 }}
        p={4}
        mt={2}
        spacing={4}
        bgColor={useColorModeValue('gray.50', 'gray.900')}
        rounded='lg'
        boxShadow='md'
        overflow='auto'
      >
        {ColumnTasks}
      </Stack>
    </Box>
  );
}

export default Column;