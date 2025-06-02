export type Goal = {
  id: string;
  title: string;
  description: string;
  status: "current" | "completed" | "future";
  date?: string;
};

export const initialGoals: Goal[] = [
  {
    id: "1",
    title: "Test Laravel",
    description: "Set up a project using Laravel",
    status: "future",
  },
  {
    id: "2",
    title: "Test Sveltekit",
    description: "Set up a project using Sveltekit",
    status: "future",
  },
  {
    id: "3",
    title: "Test Solidjs",
    description: "Set up a project using Solidjs",
    status: "future",
  },
  {
    id: "4",
    title: "Test C#",
    description: "Set up a project using C#",
    status: "future",
  },
  {
    id: "5",
    title: "Test Dart",
    description: "Set up a project using Dart",
    status: "future",
  },
  {
    id: "6",
    title: "Test Django",
    description: "Set up a project using Django",
    status: "future",
  },
  {
    id: "7",
    title: "Test Java",
    description: "Set up a project using Java",
    status: "future",
  },
  {
    id: "8",
    title: "Test Clojure",
    description: "Set up a project using Clojure",
    status: "future",
  },
  {
    id: "9",
    title: "Test Clojurescript",
    description: "Set up a project using Clojurescript",
    status: "future",
  },
  {
    id: "10",
    title: "Test Rust",
    description: "Set up a project using Rust",
    status: "future",
  },
  {
    id: "11",
    title: "Test Go",
    description: "Set up a project using Go",
    status: "future",
  },
  {
    id: "12",
    title: "Investigate MCP server",
    description: "Investigate MCP server",
    status: "future",
  },
  {
    id: "13",
    title: "Test web components",
    description: "Set up a project using web components",
    status: "future",
  },
  {
    id: "14",
    title: "Test webassembly",
    description: "Set up a project using webassembly",
    status: "future",
  },
  // test python
];
