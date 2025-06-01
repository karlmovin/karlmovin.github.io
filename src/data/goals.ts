export type Goal = {
  id: string;
  title: string;
  description: string;
  status: "current" | "completed" | "future";
  date?: string;
};

export const initialGoals: Goal[] = [];
