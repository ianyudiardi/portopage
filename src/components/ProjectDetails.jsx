import { useParams } from 'react-router-dom';

export default function ProjectDetails() {
  const { projectId } = useParams();

  return <h1>Project ID: {projectId}</h1>;
}
