
import { Task } from '../models/task';
import { User } from '../models/user';

export const TASKS: Task[] =
    [
    {
        cd_task: '10_10',
        id_task: '1',
        title_task: 'Title',
        desc_task: 'Description',
        status_task: 'IN_PROGRESS',
        cd_user: 'ABC1',
        createdOnDate: new Date(),
        lasModifiedOnDate: new Date(),
        pageIndex: 1,
            pageSize: 5
        },
        {
            cd_task: '10_10',
            id_task: '1',
            title_task: 'Title 2' ,
            desc_task: 'Description',
            status_task: 'IN_PROGRESS',
            cd_user: 'ABC1',
            createdOnDate: new Date(),
            lasModifiedOnDate: new Date(),
            pageIndex: 1,
            pageSize: 5}

    ];

    export const USERS: User[] =
        [{
            id_user: 1,
            nm_user: 'Title',
            cd_user: '10_10',
            createdOnDate: new Date(),
            lasModifiedOnDate: new Date(),
            pageIndex: 1,
            pageSize: 5}
          ];