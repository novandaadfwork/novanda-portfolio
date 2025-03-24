import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'

const dummyProjects = [
  {
    id: 1,
    title: 'Prediksi Harga Rumah',
    description: 'Menggunakan Linear Regression di Google Colab',
    colabLink: 'https://colab.research.google.com/drive/xyz123',
    techStack: ['Python', 'Pandas', 'Sklearn']
  }
]

export default function Projects() {
  const [projects, setProjects] = useState(dummyProjects)

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">My Projects</h1>
      <div className="grid gap-4">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}