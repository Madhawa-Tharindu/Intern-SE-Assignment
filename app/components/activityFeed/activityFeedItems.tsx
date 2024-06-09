import { ITaskListItemProps } from "@/app/interfaces/tasksInterface";
import Image from "next/image";

// ActivityFeedItem component
const ActivityFeedItems: React.FC<ITaskListItemProps> = ({ id,createdBy, todo, hours, minutes, date, month, year }) => {
    const avatarImage = Number.parseInt(minutes) % 2 === 0 ? "/Avatar-1.svg" : "/Avatar-2.svg";
    return (
        <div className="flex text-normal px-4" key={id}>
            <Image src={avatarImage} alt="avatar" width={32} height={32} />
            <div className="p-2">
                < p className="">
                    <span className="font-inter font-semi-bold">{createdBy}</span>
                    <span className="font-normal font-inter">{' created '}</span>
                    <span className="text-magenta  font-semi-bold">${todo}</span></p>
                <p className="text-small text-grey pb-2">{`${month} ${date}, ${year} at ${hours}:${minutes}`}</p> 
                {/* add mechanism to showing AM and PM of the time later */}
                <hr />
            </div>
            
        </div >
    );
};

export default ActivityFeedItems;