export default function ProjectCard({ project }) {
  return (
    <div className="border rounded p-4 shadow">
      <h2 className="text-xl font-semibold">{project.title}</h2>
      <p className="text-sm text-gray-600">{project.description}</p>
      <a href={project.colabLink} className="text-blue-500" target="_blank">View on Colab</a>
      <div className="mt-2 text-sm">
        Tech Stack: {project.techStack.join(', ')}
      </div>
    </div>
  )
}