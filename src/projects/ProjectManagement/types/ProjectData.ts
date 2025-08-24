export type ProjectData = {
    title: string;
    description: string;
    dueDate: Date;
    tasks?: {
        text: string;
        isDone: boolean;
    }[]
}