import { NextResponse } from "next/server"

const tasks = [
  {
    id: 1,
    name: "Complete presentation slides",
    description: "Prepare slides for the upcoming meeting on market analysis."
  },
  {
    id: 2,
    name: "Send out weekly report",
    description: "Compile and distribute the weekly progress report to team members."
  },
  {
    id: 3,
    name: "Review project proposal",
    description: "Evaluate the project proposal and provide feedback to the stakeholders."
  },
  {
    id: 4,
    name: "Schedule client meeting",
    description: "Coordinate with clients to set up a meeting for discussing project requirements."
  },
  {
    id: 5,
    name: "Research industry trends",
    description: "Gather information on current trends in the industry to inform business strategies."
  },
  {
    id: 6,
    name: "Update website content",
    description: "Refresh the content on the company website to reflect recent developments and updates."
  },
  {
    id: 7,
    name: "Conduct performance reviews",
    description: "Assess the performance of team members and conduct one-on-one performance reviews."
  },
  {
    id: 8,
    name: "Arrange travel accommodations",
    description: "Book flights, hotels, and transportation for upcoming business trips."
  },
  {
    id: 9,
    name: "Organize team-building activity",
    description: "Plan and execute a team-building event to foster collaboration and morale."
  },
  {
    id: 10,
    name: "Develop marketing campaign",
    description: "Create a comprehensive marketing campaign to promote a new product or service."
  }
];

export const GET = () => {
  const randomTasks = Math.floor(Math.random() * tasks.length);
  const singleTodos = tasks[randomTasks];
  return NextResponse.json({
    todos: singleTodos
  })
};
