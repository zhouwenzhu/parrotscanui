//import { useNavigate } from 'react-router-dom';
const Pricing = ({data}) => {
   // const navigate = useNavigate();

    return (
        <section id="pricing" className='py-14'>
            <div className="max-w-screen-xl mx-auto px-4 text-gray-50 md:px-8">
                <div className='relative max-w-xl mx-auto sm:text-center'>
                    <h3 className='text-gray-50 text-3xl font-semibold sm:text-4xl'>
                       {data.title}
                    </h3>
                    <div className='mt-3 max-w-xl'>
                        <p>{data.subTitle}
                            
                        </p>
                    </div>
                </div>
                <div className='mt-16 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3'>
                    {
                        data.items.map((item, idx) => (
                            <div key={idx} className={`relative flex-1 flex items-stretch flex-col rounded-xl border-2 mt-6 sm:mt-0 ${item.isMostPop ? "mt-10" : ""}`}>
                                {
                                    item.isMostPop ? (
                                        <span class="w-32 absolute -top-5 left-0 right-0 mx-auto px-3 py-2 rounded-full border shadow-md bg-white text-center text-gray-700 text-sm font-semibold">Most popular</span>
                                    ) : ""
                                }
                                <div className="p-8 space-y-4 border-b">
                                    <span className='text-green-50 font-medium'>
                                        {item.name}
                                    </span>
                               {/*      <div className='text-gray-100 text-3xl font-semibold'>
                                    Staking:{item.price} <span className="text-xl text-gray-50 font-normal">PTR</span>
                                    </div> */}
                                    <p>
                                        {item.desc}
                                    </p>
                                    <a  href={item.buttonLink} className='px-7 py-3 w-full rounded-lg font-semibold text-sm duration-150 text-white bg-green-700 hover:bg-green-600 active:bg-green-800 text-gray-800 text-center rounded-md shadow-md block sm:w-auto'>
                                        Get Started
                                    </a>
                                </div>
                                <ul className='p-8 space-y-3'>
                                    <li className="pb-2 text-gray-200 font-medium">
                                        <p>Requirements</p>
                                    </li>
                                    {
                                        item.features.map((featureItem, idx) => (
                                            <li key={idx} className='flex items-center gap-5'>
                                                <svg
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    className='h-5 w-5 text-green-200'
                                                    viewBox='0 0 20 20'
                                                    fill='currentColor'>
                                                    <path
                                                        fill-rule='evenodd'
                                                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                                        clip-rule='evenodd'></path>
                                                </svg>
                                                {featureItem}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};


export default Pricing