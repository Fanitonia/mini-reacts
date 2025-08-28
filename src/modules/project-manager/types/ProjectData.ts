export type ProjectData = {
    id: string;
    title: string;
    description: string;
    dueDate: Date;
    tasks?: {
        text: string;
        isDone: boolean;
    }[]
}