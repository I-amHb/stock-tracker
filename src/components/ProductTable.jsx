import React, { useState } from 'react'

const ProductTable = ({ prod }) => {

    const prodList = prod.map((val) => {

        return (
            <tr key={val.id} className=' bg-bgCard [&>td]:px-2.5
            *:last:p-1 *:last:text-left border-b border-b-bgApp '>
                <td>{val.name}</td>
                <td className='hidden'>{val.price}</td>
                <td className='hidden'>{val.quantity}</td>
                <td>
                    {val.quantity >= val.threshold ? <p className='w-20 text-[0.8em] text-primary text-center bg-primarySoft rounded-sm border border-primary'>In Stock</p>
                        : <p className='w-20 text-[0.8em] text-danger text-center bg-dangerSoft rounded-sm border border-danger'>Low Stock</p>
                    }


                </td>
                <td>
                    <button className='bg-secondary text-white w-24 rounded-sm '>Checkout</button>
                </td>
            </tr>
        )
    })


    return (
        <section className='w-full p-padding-sm flex flex-col gap-8'>
            <div className='table-container w-full bg-bgCard shadow flex flex-col gap-2 rounded-2xl'>
                <div className='flex justify-between p-2.5 '>
                    <h1 className='text-mid font-bold'>Products</h1>
                    <input type="text" name='search' className='bg-[#f0f0f1] px-2 rounded-md w-30' placeholder='Search...' />
                </div>
                <table className='w-full text-[0.9em]'>
                    <thead>
                        <tr className=' bg-bgApp [&>th]:px-2.5 text-left [&>th]:font-normal text-gray-600 text-[0.8em] '>
                            <th>Name</th>
                            <th className='hidden'>Price</th>
                            <th className='hidden'>Stock</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {prodList}
                    </tbody>

                </table>
            </div>

        </section>
    )
}

export default ProductTable