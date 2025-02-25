
const Navbar = ({data}) => {

    const stats = [
        {
            data: "35K",
            title: "Customers"
        },
        {
            data: "40+",
            title: "Countries"
        },
        {
            data: "30M+",
            title: "Total revenue"
        },
    ]

    return (
        <section className="py-2 bg-gray-900">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
{/*                 <div className="max-w-2xl mx-auto text-center">
                    <h3 className="text-white text-3xl font-semibold sm:text-4xl">
                        {data.title}
                    </h3>
                    <p className="mt-3 text-gray-300">
                    {data.subTitle}
                    </p>
                </div> */}
                <div className="mt-5 mb-5">
                    <ul className="flex flex-col gap-4 items-center justify-center sm:flex-row">
                        {
                            data.stats && data.stats.map((item, idx) => (
                                <li key={idx} className="w-full text-center bg-gray-800 px-12 py-4 rounded-lg sm:w-auto">
                                    <h4 className="text-4xl text-white font-semibold">{item.data}</h4>
                                    <p className="mt-3 text-gray-400 font-medium">{item.title}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}
export default Navbar