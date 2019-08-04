export class Task {  
    constructor(public cd_task: string,
        public id_task: string,
        public title_task: string,
        public desc_task: string,
        public status_task: string,
        public cd_user: string,
        public createdOnDate: Date = new Date(),
        public lasModifiedOnDate: Date = new Date(),
        public pageIndex: number = 1,
        public pageSize: number= 10) {  }

     
 }
