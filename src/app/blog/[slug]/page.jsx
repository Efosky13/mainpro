import { projects } from "@/app/array/array";



export default function BlogSlug({params}) {

    const fP = projects.filter(pj => pj.category === params.slug)

  return (
    <div>

        <div>
        <h2>{params.slug}</h2>
        </div>

        <div>
                    {
                        fP.map(proj => (
                            <div key={proj.id}>

                            </div>
                        ) )
                    }
        </div>

          </div>
  )
}
