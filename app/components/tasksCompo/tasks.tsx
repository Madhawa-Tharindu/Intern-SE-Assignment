'use client';

import { ChangeEvent, useContext, useState } from "react";
import TaskItem from "./taskItem";
import { TaskListContext } from "@/app/context/TaskListContext";
import { ITaskListItemProps } from "@/app/interfaces/tasksInterface";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { CircularProgress } from "@mui/material";

/*   Note: Tailwind CSS is primarily used for styling in this project. 
   But,I used Material UI components are also utilized for certain elements like pagination and Stack 
   and for circularProgress loading because of it better align with the requirement of design*/

const Tasks: React.FC = () => {
    const taskContext = useContext(TaskListContext);
    const { tasks, isLoading } = taskContext!;

    const [currentPage, setCurrentPage] = useState<number>(1);
    const taskItemsPerPage = 9;
    const indexOfLastTaskItem = currentPage * taskItemsPerPage;
    const indexOfFirstTaskItem = indexOfLastTaskItem - taskItemsPerPage;
    const currentTaskItems = tasks?.slice(indexOfFirstTaskItem, indexOfLastTaskItem);

    const handle = (e: ChangeEvent<unknown>, val: number) => {
        setCurrentPage(val);
    }

    return (
        <div className="border-solid border-[1px] border-stroke rounded-lg px-2 py-2 w-full mr-8 xl:min-h-full lg:min-h-fit flex flex-col">
            <div className="flex items-center py-2 px-4">
                <p className="w-max font-medium text-large">Tasks</p>
            </div>
            <hr />
            {isLoading ?
                <div className="flex justify-center items-center h-full">
                    <CircularProgress />
                </div>
                :
                <>
                    <div className="w-full h-full md:h-fit">
                        {currentTaskItems?.map((task: ITaskListItemProps,) => TaskItem(task))}
                    </div>
                    <div className="py-4">
                        <Stack spacing={2} className="mx-auto items-center">
                            <Pagination variant="outlined" shape="rounded" count={Math.ceil(tasks.length / 17)} page={currentPage} onChange={handle} />
                        </Stack>
                    </div>
                </>}

        </div>
    );
};

export default Tasks;
