import { useState, useEffect } from "react";
import { Goal, initialGoals } from "../data/goals";

export default function Goals() {
  const [goals, setGoals] = useState<Goal[]>(() => {
    const savedGoals = localStorage.getItem("goals");
    return savedGoals ? JSON.parse(savedGoals) : initialGoals;
  });

  const [isAddingGoal, setIsAddingGoal] = useState(false);
  const [newGoal, setNewGoal] = useState({
    title: "",
    description: "",
    status: "current" as const,
  });

  useEffect(() => {
    localStorage.setItem("goals", JSON.stringify(goals));
  }, [goals]);

  const handleStatusChange = (goalId: string, newStatus: Goal["status"]) => {
    setGoals((prevGoals) =>
      prevGoals.map((goal) =>
        goal.id === goalId
          ? {
              ...goal,
              status: newStatus,
              date:
                newStatus === "completed"
                  ? new Date().toISOString().split("T")[0]
                  : undefined,
            }
          : goal
      )
    );
  };

  const handleAddGoal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newGoal.title.trim()) return;

    const goal: Goal = {
      id: Date.now().toString(),
      ...newGoal,
    };

    setGoals((prev) => [...prev, goal]);
    setNewGoal({ title: "", description: "", status: "current" });
    setIsAddingGoal(false);
  };

  const renderGoalCard = (goal: Goal) => (
    <div
      key={goal.id}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            {goal.title}
          </h3>
          <div className="flex space-x-2">
            <button
              onClick={() => handleStatusChange(goal.id, "current")}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                goal.status === "current"
                  ? "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              Nuvarande
            </button>
            <button
              onClick={() => handleStatusChange(goal.id, "completed")}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                goal.status === "completed"
                  ? "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              Uppnått
            </button>
            <button
              onClick={() => handleStatusChange(goal.id, "future")}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                goal.status === "future"
                  ? "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              Framtida
            </button>
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {goal.description}
        </p>
        {goal.date && (
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Uppnått: {new Date(goal.date).toLocaleDateString("sv-SE")}
          </p>
        )}
      </div>
    </div>
  );

  const currentGoals = goals.filter((goal) => goal.status === "current");
  const completedGoals = goals.filter((goal) => goal.status === "completed");
  const futureGoals = goals.filter((goal) => goal.status === "future");

  return (
    <main className="container max-w-screen-xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
        Mina Mål
      </h1>

      <div className="max-w-2xl mx-auto mb-12">
        {!isAddingGoal ? (
          <button
            onClick={() => setIsAddingGoal(true)}
            className="w-full px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-300 font-medium transition-colors"
          >
            + Lägg till nytt mål
          </button>
        ) : (
          <form
            onSubmit={handleAddGoal}
            className="space-y-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
          >
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Titel
              </label>
              <input
                type="text"
                id="title"
                value={newGoal.title}
                onChange={(e) =>
                  setNewGoal((prev) => ({ ...prev, title: e.target.value }))
                }
                className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-gray-400 focus:border-gray-400 transition-colors"
                placeholder="Skriv en titel för ditt mål"
                required
              />
            </div>
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Beskrivning
              </label>
              <textarea
                id="description"
                value={newGoal.description}
                onChange={(e) =>
                  setNewGoal((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
                className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-gray-400 focus:border-gray-400 transition-colors"
                placeholder="Beskriv ditt mål"
                rows={3}
              />
            </div>
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => setIsAddingGoal(false)}
                className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-300 font-medium transition-colors"
              >
                Avbryt
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-gray-900 hover:bg-gray-800 dark:bg-gray-100 dark:hover:bg-gray-200 text-white dark:text-gray-900 font-medium transition-colors"
              >
                Spara mål
              </button>
            </div>
          </form>
        )}
      </div>

      <div className="space-y-12">
        {currentGoals.length > 0 && (
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
              Nuvarande Mål
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentGoals.map(renderGoalCard)}
            </div>
          </section>
        )}

        {completedGoals.length > 0 && (
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
              Uppnådda Mål
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {completedGoals.map(renderGoalCard)}
            </div>
          </section>
        )}

        {futureGoals.length > 0 && (
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
              Framtida Mål
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {futureGoals.map(renderGoalCard)}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
