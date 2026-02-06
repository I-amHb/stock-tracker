import React from 'react'

const AddProductForm = ({ setShowProdForm }) => {
    return (
        <div className='fixed px-md inset-0 bg-black/40 flex justify-center items-center z-50'>
            <div className='bg-bgCard min-w-70 w-100 rounded-2xl p-padding-sm'>
                <div className='flex justify-between mb-padding-sm'>
                    <h1 className='text-mid font-bold text-primary'>Add Product</h1>
                    <button onClick={() => setShowProdForm(false)} className='cursor-pointer flex justify-center items-center rounded-md w-10 bg-bgApp hover:bg-danger' >
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                    </button>
                </div>
                <form action="">
                    <fieldset className='flex flex-col [&>input]:bg-bgInput [&>input]:h-10 [&>input]:rounded-sm [&>input]:px-3 gap-4 '>
                        <input className='' type="text" placeholder='Product Name...' />
                        <input className='' type="number" placeholder='Price...' />
                        <input className='' type="number" placeholder='Quantity...' />
                        <input className='' type="number" placeholder='Threshold...' />
                    </fieldset>
                    <button className='cursor-pointer mt-5 rounded-2xl bg-primary hover:bg-primaryHvr hover:text-white p-2 w-20 '>Save</button>
                </form>
            </div>

        </div>
    )
}

export default AddProductForm