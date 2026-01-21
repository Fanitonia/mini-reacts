export type Task = {
    id: string;
    text: string;
    isDone: boolean;
}

export type ProjectData = {
    id: string;
    title: string;
    description: string;
    dueDate: Date;
    tasks?: Task[];
}