import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Task } from '../models';

export const TASKS: Task[] = [
    {
        cd_task: "10_10",
        id_task: "1",
        title_task: "Title",
        desc_task: "Description",
        status_task: "IN_PROGRESS",
        cd_user: "ABC1",
        createdOnDate: new Date(),
        lasModifiedOnDate: new Date(),
        pageIndex: 1,
        pageSize: 5}

];