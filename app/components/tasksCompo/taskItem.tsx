'use client'
import { ITask, ITaskListItemProps } from "@/app/interfaces/tasksInterface";
import Image from "next/image"

const TaskItem: React.FC<ITaskListItemProps> = ({ id, createdBy, priority, todo, completed, date, month }) => {
    let priorityImage = "";
    switch (priority) {
        case "LOW":
            priorityImage = "/Priority-LOW.svg";
            break;
        case "MEDIUM":
            priorityImage = "/Priority-MEDIUM.svg";
            break;
        case "HIGH":
            priorityImage = "/Priority-HIGH.svg";
            break;
        default:
            priorityImage = "/Priority-LOW.svg";
            break;
    };

    return (
        <div key={id} className="px-4">
            <div className="flex justify-between items-center py-3">
                <div className="flex items-center">
                    <Image src={priorityImage} alt={""} width={20} height={20} />
                    <p className="font-normal text-[14px] mx-2">{todo.slice(0, 40)}</p>
                </div>
                <div className="flex items-center ">
                    {completed ?
                        <div className="bg-light-green py-[2px] px-2 rounded-2xl text-green mx-2 w-max"><p className="w-max font-inter text-small">Done</p></div>
                        : <div className="bg-light-yellow px-2 rounded-2xl text-yellow mx-2 "><p className="w-max font-inter text-small">In-Progress</p></div>}
                    <p className="w-max text-grey font-inter text-small">{`${month} ${date}`}</p>
                </div>
            </div>
            {!completed ? <button className=" text-magenta py-1 pl-7" ><p className="w-max font-inter font-medium text-small">Mark as done</p></button> : null}
            <hr />
        </div>
    )
};

export default TaskItem;