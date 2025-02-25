
const DataTable = ({ coltitles,fields,datalist }) => {
    return (
            <table className="min-w-full text-left text-sm ">
                <thead className=" tracking-wider border-b-2 dark:border-neutral-600">
                    <tr>
                        {coltitles && coltitles.map((item, idx) => (
                            <th scope="col"  key={idx}  className="md:px-6 md:py-4 px-1 py-3">
                                {item}
                            </th>
                        ))}

                    </tr>
                </thead>
                <tbody>
                    {datalist && datalist.map((row, aidx) => (
                        <tr key={aidx} className="border-b dark:border-neutral-600">
                            {fields.map((field, idx) => (
                                idx ? <td scope="row" key={idx} className="md:px-6 md:py-4 px-1 py-3">
                                    {row[field]}
                                </td> :
                                    <th key={idx}  className="md:px-6 md:py-4 px-1 py-2"> {row[field]}</th>

                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
    )
}
export default DataTable