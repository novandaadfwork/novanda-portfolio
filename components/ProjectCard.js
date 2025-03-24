export default function ProjectCard({ project }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <h2 className="text-xl font-semibold">{project.title}</h2>
      <p className="text-gray-600">{project.description}</p>
      <a href={project.colabLink} target="_blank" className="text-blue-500 underline">Open Colab</a>
      <div className="mt-2 text-sm text-gray-500">
        {project.techStack.map((tech, i) => (
          <span key={i} className="inline-block bg-gray-200 rounded-full px-2 py-1 mr-2">{tech}</span>
        ))}
      </div>
    </div>
  )
}