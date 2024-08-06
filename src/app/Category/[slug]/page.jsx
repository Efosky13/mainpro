import { projects } from "@/app/array/array"

export default function page({params}) {
    const filteredPro = projects.filter(project => project.category == params.slug)
  return (
    <div>
      {
        filteredPro.map(pro => (
            <div key={pro.id}>
                <h2>Nothing</h2>
            </div>
        ))
      }
    </div>
  )
}
