import express from "express";
import cors from "cors";

import type { UserType } from "./types/UserType";

const users: UserType[] = [
  {
    id: 1,
    image: "https://source.unsplash.com/300x300/?portrait,man",
    name: "Aiden Walker",
    description: "Creative thinker who loves solving complex problems.",
    profession: "UI/UX Designer",
    rating: 4.8,
  },
  {
    id: 2,
    image: "https://source.unsplash.com/300x300/?portrait,woman",
    name: "Sophia Martinez",
    description: "Passionate about helping brands grow.",
    profession: "Digital Marketer",
    rating: 4.6,
  },
  {
    id: 3,
    image: "https://source.unsplash.com/300x300/?portrait,developer",
    name: "Ethan Williams",
    description: "Full-stack developer with 5+ years of experience.",
    profession: "Software Engineer",
    rating: 4.9,
  },
  {
    id: 4,
    image: "https://source.unsplash.com/300x300/?portrait,photographer",
    name: "Mia Johnson",
    description: "Capturing moments through creative storytelling.",
    profession: "Photographer",
    rating: 4.7,
  },
  {
    id: 5,
    image: "https://source.unsplash.com/300x300/?portrait,chef",
    name: "Noah Brown",
    description: "Loves experimenting with world cuisines.",
    profession: "Chef",
    rating: 4.5,
  },
  {
    id: 6,
    image: "https://source.unsplash.com/300x300/?portrait,teacher",
    name: "Olivia Davis",
    description: "Helping students achieve academic success.",
    profession: "Teacher",
    rating: 4.8,
  },
  {
    id: 7,
    image: "https://source.unsplash.com/300x300/?portrait,artist",
    name: "Liam Miller",
    description: "Creating expressive illustrations and designs.",
    profession: "Artist",
    rating: 4.9,
  },
  {
    id: 8,
    image: "https://source.unsplash.com/300x300/?portrait,doctor",
    name: "Emma Wilson",
    description: "Dedicated to improving patient wellbeing.",
    profession: "Doctor",
    rating: 4.6,
  },
  {
    id: 9,
    image: "https://source.unsplash.com/300x300/?portrait,engineer",
    name: "James Anderson",
    description: "Engineering innovative solutions for modern challenges.",
    profession: "Mechanical Engineer",
    rating: 4.7,
  },
  {
    id: 10,
    image: "https://source.unsplash.com/300x300/?portrait,writer",
    name: "Ava Thomas",
    description: "Writer who loves crafting compelling stories.",
    profession: "Content Writer",
    rating: 4.8,
  },
  {
    id: 11,
    image: "https://source.unsplash.com/300x300/?portrait,musician",
    name: "Benjamin Moore",
    description: "Creates music that inspires and uplifts.",
    profession: "Musician",
    rating: 4.5,
  },
  {
    id: 12,
    image: "https://source.unsplash.com/300x300/?portrait,trainer",
    name: "Isabella Clark",
    description: "Helping people achieve fitness goals.",
    profession: "Fitness Trainer",
    rating: 4.9,
  },
  {
    id: 13,
    image: "https://source.unsplash.com/300x300/?portrait,scientist",
    name: "Lucas Rodriguez",
    description: "Researching innovative scientific breakthroughs.",
    profession: "Scientist",
    rating: 4.8,
  },
  {
    id: 14,
    image: "https://source.unsplash.com/300x300/?portrait,student",
    name: "Harper Lewis",
    description: "Curious learner with a passion for tech.",
    profession: "Student",
    rating: 4.4,
  },
  {
    id: 15,
    image: "https://source.unsplash.com/300x300/?portrait,model",
    name: "Henry Walker",
    description: "Fashion model with a unique style.",
    profession: "Model",
    rating: 4.7,
  },
  {
    id: 16,
    image: "https://source.unsplash.com/300x300/?portrait,developer,woman",
    name: "Grace Young",
    description: "Frontend developer crafting clean user interfaces.",
    profession: "Frontend Developer",
    rating: 4.9,
  },
  {
    id: 17,
    image: "https://source.unsplash.com/300x300/?portrait,businessman",
    name: "Daniel King",
    description: "Entrepreneur building scalable startups.",
    profession: "Business Owner",
    rating: 4.6,
  },
  {
    id: 18,
    image: "https://source.unsplash.com/300x300/?portrait,lawyer",
    name: "Chloe Scott",
    description: "Committed to delivering justice and fairness.",
    profession: "Lawyer",
    rating: 4.9,
  },
  {
    id: 19,
    image: "https://source.unsplash.com/300x300/?portrait,designer,man",
    name: "Matthew Green",
    description: "Designing minimalistic and clean experiences.",
    profession: "Product Designer",
    rating: 4.8,
  },
  {
    id: 20,
    image: "https://source.unsplash.com/300x300/?portrait,dentist",
    name: "Ella Harris",
    description: "Making people smile with confidence.",
    profession: "Dentist",
    rating: 4.7,
  },
];


const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to welcome page" });
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.listen(port, () => {
  console.log(`server is listening on the port ${port}`);
});
