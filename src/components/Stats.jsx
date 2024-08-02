import {stats} from "../Data/stats"

export const Stats = () => {
  return (
    <div className="flex flex-col md:flex-row md:py-28 justify-center items-center py-12 bg-black
    font-League text-white gap-12">
        {stats.map((stat, key) =>(
            <article key={key}
            className="flex flex-col items-center justify-center gap-4">
                <div>
                    <img src={stat.image} alt={`Imagen de ${stat.text}`}/>
                </div>
                <div className="w-3/4 text-center">
                    <h3 className="text-3xl font-bold">
                        {stat.text}
                    </h3>
                </div>
            </article>
        ))}
    </div>
  )
}
