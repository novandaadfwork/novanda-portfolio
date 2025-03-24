import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [newProject, setNewProject] = useState({
    title: '', description: '', colabLink: '', techStack: ''
  })

  const addProject = () => {
    const newItem = { ...newProject, id: Date.now(), techStack: newProject.techStack.split(',') }
    setProjects([newItem, ...projects])
    setNewProject({ title: '', description: '', colabLink: '', techStack: '' })
  }

  return (
    <>
      <NavBar />
      <main className="p-8 bg-white min-h-screen">
        <h1 className="text-3xl font-bold mb-6">Projects</h1>
        <div className="mb-8">
          <input type="text" placeholder="Title" value={newProject.title}
            onChange={e => setNewProject({ ...newProject, title: e.target.value })}
            className="border p-2 mr-2" />
          <input type="text" placeholder="Description" value={newProject.description}
            onChange={e => setNewProject({ ...newProject, description: e.target.value })}
            className="border p-2 mr-2" />
          <input type="text" placeholder="Colab Link" value={newProject.colabLink}
            onChange={e => setNewProject({ ...newProject, colabLink: e.target.value })}
            className="border p-2 mr-2" />
          <input type="text" placeholder="Tech Stack (comma separated)" value={newProject.techStack}
            onChange={e => setNewProject({ ...newProject, techStack: e.target.value })}
            className="border p-2 mr-2" />
          <button onClick={addProject} className="bg-blue-500 text-white px-4 py-2 rounded">Add</button>
        </div>
        <div className="grid gap-4">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}