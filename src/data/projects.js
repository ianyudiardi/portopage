const projects = [
    {
        id: "project-1",
        title: "Project One",
        description: "A web application built with React and Node.js.",
        image: "/path/to/image1.jpg",
        tech: "React, Node.js"
    },
    {
        id: "project-2",
        title: "Project Two",
        description: "A mobile app developed using React Native.",
        image: "/path/to/image2.jpg",
        tech: "React Native, Expo"
    },
    {
        id: "project-3",
        title: "Project Three",
        description: "An e-commerce platform built with Next.js.",
        image: "/path/to/image3.jpg",
        tech: "Next.js, Tailwind CSS"
    },
    {
        id: "project-4",
        title: "Project Four",
        description: "A portfolio website created with Gatsby.",
        image: "/path/to/image4.jpg",
        tech: "Gatsby, GraphQL"
    },
    {
        id: "project-5",
        title: "Project Five",
        description: "A blogging platform built with WordPress.",
        image: "/path/to/image5.jpg",
        tech: "WordPress, PHP"
    },
    {
        id: "project-6",
        title: "Project Six",
        description: "A social media app developed using Flutter.",
        image: "/path/to/image6.jpg",
        tech: "Flutter, Dart"
    }
]

export default projects;
export const getProjectById = (id) => {
    return projects.find(project => project.id === id);
}