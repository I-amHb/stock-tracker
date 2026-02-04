import React from 'react'

const Overview = ({totalProd, totalStockVal}) => {
    return (
        <section className='w-full p-padding-sm flex flex-col gap-8'>
            <div className='flex flex-col gap-4'>
                <div className='totatl-product bg-bgCard p-padding-sm rounded-2xl shadow flex gap-3'>
                    <div className=' w-15 h-15 bg-primarySoft rounded-full flex justify-center items-center'>
                        <svg width="50px" height="50px" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 13V22M12.5 13L4.5 8M12.5 13L20.5 8M8.5 5.5L16.5 10.5M4.5 8L12.5 3L20.5 8V17L12.5 22L4.5 17V8Z" stroke="#22C55E" stroke-width="1.2" /></svg>
                    </div>
                    <div className='flex flex-col'>
                        <p>Total Products</p>
                        <h1 className='text-mid font-bold'>{totalProd}</h1>
                    </div>
                </div>
                <div className='totatl-product bg-bgCard p-padding-sm rounded-2xl shadow flex gap-3'>
                    <div className=' w-15 h-15 bg-primarySoft rounded-full flex justify-center items-center'>
                        <svg fill="#22C55E" width="40px" height="40px" viewBox="0 0 64 64" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><title /><path d="M61,17H3a1,1,0,0,0-1,1V46a1,1,0,0,0,1,1H61a1,1,0,0,0,1-1V18A1,1,0,0,0,61,17ZM4,19H9.929A7.018,7.018,0,0,1,4,24.929ZM4,45V39.071A7.018,7.018,0,0,1,9.929,45Zm56,0H54.071A7.018,7.018,0,0,1,60,39.071Zm0-7.941A9.013,9.013,0,0,0,52.059,45H11.941A9.013,9.013,0,0,0,4,37.059V26.941A9.013,9.013,0,0,0,11.941,19H52.059A9.013,9.013,0,0,0,60,26.941Zm0-12.13A7.018,7.018,0,0,1,54.071,19H60Z" /><path d="M37,23H35v6H31.571l-2.683-5.174a1,1,0,0,0-1.888.46V29H24v2h3v2H24v2h3v6h2V35h3.429l2.683,5.174A1,1,0,0,0,37,39.714V35h3V33H37V31h3V29H37Zm-8,5.387.318.613H29ZM29,33V31h1.355l1.037,2Zm6,2.613L34.682,35H35ZM35,33H33.645l-1.037-2H35Z" /></svg>
                    </div>
                    <div className='flex flex-col'>
                        <p>Total Stock Value</p>
                        <h1 className='text-mid font-bold'>&#8358;{totalStockVal.toLocaleString()}</h1>
                    </div>
                </div>
                <div className='totatl-product bg-bgCard p-padding-sm rounded-2xl shadow flex gap-3'>
                    <div className=' w-15 h-15 bg-primarySoft rounded-full flex justify-center items-center'>
                        <svg fill="#22C55E" width="30px" height="30px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M136.948 908.811c5.657 0 10.24-4.583 10.24-10.24V610.755c0-5.657-4.583-10.24-10.24-10.24h-81.92a10.238 10.238 0 00-10.24 10.24v287.816c0 5.657 4.583 10.24 10.24 10.24h81.92zm0 40.96h-81.92c-28.278 0-51.2-22.922-51.2-51.2V610.755c0-28.278 22.922-51.2 51.2-51.2h81.92c28.278 0 51.2 22.922 51.2 51.2v287.816c0 28.278-22.922 51.2-51.2 51.2zm278.414-40.96c5.657 0 10.24-4.583 10.24-10.24V551.322c0-5.657-4.583-10.24-10.24-10.24h-81.92a10.238 10.238 0 00-10.24 10.24v347.249c0 5.657 4.583 10.24 10.24 10.24h81.92zm0 40.96h-81.92c-28.278 0-51.2-22.922-51.2-51.2V551.322c0-28.278 22.922-51.2 51.2-51.2h81.92c28.278 0 51.2 22.922 51.2 51.2v347.249c0 28.278-22.922 51.2-51.2 51.2zm278.414-40.342c5.657 0 10.24-4.583 10.24-10.24V492.497c0-5.651-4.588-10.24-10.24-10.24h-81.92c-5.652 0-10.24 4.589-10.24 10.24v406.692c0 5.657 4.583 10.24 10.24 10.24h81.92zm0 40.96h-81.92c-28.278 0-51.2-22.922-51.2-51.2V492.497c0-28.271 22.924-51.2 51.2-51.2h81.92c28.276 0 51.2 22.929 51.2 51.2v406.692c0 28.278-22.922 51.2-51.2 51.2zm278.414-40.958c5.657 0 10.24-4.583 10.24-10.24V441.299c0-5.657-4.583-10.24-10.24-10.24h-81.92a10.238 10.238 0 00-10.24 10.24v457.892c0 5.657 4.583 10.24 10.24 10.24h81.92zm0 40.96h-81.92c-28.278 0-51.2-22.922-51.2-51.2V441.299c0-28.278 22.922-51.2 51.2-51.2h81.92c28.278 0 51.2 22.922 51.2 51.2v457.892c0 28.278-22.922 51.2-51.2 51.2zm-6.205-841.902C677.379 271.088 355.268 367.011 19.245 387.336c-11.29.683-19.889 10.389-19.206 21.679s10.389 19.889 21.679 19.206c342.256-20.702 670.39-118.419 964.372-284.046 9.854-5.552 13.342-18.041 7.79-27.896s-18.041-13.342-27.896-7.79z" /><path d="M901.21 112.64l102.39.154c11.311.017 20.494-9.138 20.511-20.449s-9.138-20.494-20.449-20.511l-102.39-.154c-11.311-.017-20.494 9.138-20.511 20.449s9.138 20.494 20.449 20.511z" /><path d="M983.151 92.251l-.307 101.827c-.034 11.311 9.107 20.508 20.418 20.542s20.508-9.107 20.542-20.418l.307-101.827c.034-11.311-9.107-20.508-20.418-20.542s-20.508 9.107-20.542 20.418z" /></svg>
                    </div>
                    <div className='flex flex-col'>
                        <p>Total Revenue</p>
                        <h1 className='text-mid font-bold'>&#8358;0</h1>
                    </div>
                </div>
            </div>
            <div className='w-full flex gap-2 text-white'>
                <button
                    // onClick={}
                    className='bg-primary hover:bg-primaryHvr w-1/2 h-15 rounded-xl shadow'>Add New Product</button>
                <button
                    // onClick={}
                    className='bg-secondary hover:bg-secondaryHvr w-1/2 h-15 rounded-xl shadow'>Checkout</button>
            </div>
        </section>
    )
}

export default Overview