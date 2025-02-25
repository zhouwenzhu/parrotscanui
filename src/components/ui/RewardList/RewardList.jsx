const RewardList= ({showpage,showmore,data}) => {
    return (

        <div class=" ml-3 mr-3 flex  flex-col justify-center items-center  bg-white dark:bg-neutral-700">
            <div class="flex w-full flex-row justify-between">
                <div  className="text-2xl font-bold m-3">Rewards</div>
                { showmore && <div><a href="/nodes" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center  gap-x-1 py-2 px-4 text-gray-600 hover:text-gray-700 active:bg-gray-800 font-medium duration-150   rounded-lg md:inline-flex" >
                    more
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                    </svg>
                </a></div>}
            </div>


            <table class="min-w-full text-left text-sm whitespace-nowrap">
                <thead class=" tracking-wider border-b-2 dark:border-neutral-600 bg-neutral-50 dark:bg-neutral-800">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Node
                        </th>
                        <th scope="col" class="px-6 py-3">
                        nodename
                        </th>
                        <th scope="col" class="px-6 py-3">
                            rewards
                        </th>

                    </tr>
                </thead>


                <tbody>

                {data && data.map((row, index) => (
                    <tr class="border-b dark:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-600">
                        <th scope="row" class="px-6 py-3">
                             {row.nodeaddr}
                        </th>
                        <td class="px-6 py-3">{row.nodename}</td>
                        <td class="px-6 py-3">{row.rewards}</td>
                      
                    </tr>
                    ))}

                    <tr class="border-b dark:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-600">
                        <th scope="row" class="px-6 py-3">
                            Handbag
                        </th>
                        <td class="px-6 py-3">$129.99</td>
                        <td class="px-6 py-3">30</td>
                   
                    </tr>

                    <tr class="border-b dark:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-600 bg-neutral-50 dark:bg-neutral-800">
                        <th scope="row" class="px-6 py-3">
                            Shoes
                        </th>
                        <td class="px-6 py-3">$89.50</td>
                        <td class="px-6 py-3">25</td>
                       
                    </tr>

                    <tr class="border-b dark:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-600">
                        <th scope="row" class="px-6 py-3">
                            Bedding Set
                        </th>
                        <td class="px-6 py-3">$69.99</td>
                        <td class="px-6 py-3">40</td>
                       
                    </tr>

                    <tr class="border-b dark:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-600 bg-neutral-50 dark:bg-neutral-800">
                        <th scope="row" class="px-6 py-3">
                            Dining Table
                        </th>
                        <td class="px-6 py-3">$449.99</td>
                        <td class="px-6 py-3">5</td>
                       
                    </tr>

                    <tr class="border-b dark:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-600">
                        <th scope="row" class="px-6 py-3">
                            Soap Set
                        </th>
                        <td class="px-6 py-3">$24.95</td>
                        <td class="px-6 py-3">50</td>
                        
                    </tr>

                </tbody>

            </table>

            {showpage && <nav aria-label="Page navigation example">
                <ul class="list-style-none flex">
                    <li>
                        <a
                            class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-primary-700 focus:outline-none focus:ring-0 active:bg-neutral-100 active:text-primary-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:focus:text-primary-500 dark:active:bg-neutral-700 dark:active:text-primary-500"
                            href="#"
                        >Previous</a
                        >
                    </li>
                    <li>
                        <a
                            class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-primary-700 focus:outline-none active:bg-neutral-100 active:text-primary-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:focus:text-primary-500 dark:active:bg-neutral-700 dark:active:text-primary-500"
                            href="#"
                        >1</a
                        >
                    </li>
                    <li aria-current="page">
                        <a
                            class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-primary-700 focus:outline-none active:bg-neutral-100 active:text-primary-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:focus:text-primary-500 dark:active:bg-neutral-700 dark:active:text-primary-500"
                            href="#"
                        >2</a
                        >
                    </li>
                    <li>
                        <a
                            class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-primary-700 focus:outline-none active:bg-neutral-100 active:text-primary-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:focus:text-primary-500 dark:active:bg-neutral-700 dark:active:text-primary-500"
                            href="#"
                        >3</a
                        >
                    </li>
                    <li>
                        <a
                            class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-primary-700 focus:outline-none active:bg-neutral-100 active:text-primary-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:focus:text-primary-500 dark:active:bg-neutral-700 dark:active:text-primary-500"
                            href="#"
                        >Next</a
                        >
                    </li>
                </ul>
            </nav>}

        </div>
    )
};
export default RewardList;