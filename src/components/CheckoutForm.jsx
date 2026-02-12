import React, { useState } from 'react'

const CheckoutForm = ({
    isOpen,
    onClose,
    preSelectedProduct,  
    setProductList,          
    setTotalRevenue
}) => {

    const [sellQuantity, setSellQuantity] = useState('');

    const handleConfirm = () => {
        if (!product) return;

        const qty = Number(sellQuantity);

        if (isNaN(qty) || qty <= 0) {
            alert('Please enter a valid quantity(greater than 0) ');
            return;
        }
        if (qty > product.quantity) {
            alert(`Cannot sell more than curren stock (${product.quantity})`)
        }

        // update product list immutably 

        setProductList(prevList => 
            prevList.map(p => 
                p.id === product.id ?
                {...p, quntity: p.quntity - qty}
                : p
            )
        )

        const saleValue = qty * product.price;
        setTotalRevenue(prev => prev +saleValue);

        setSellQuantity('');
        onClose();

    }

    if (!isOpen) return null;

    const product = preSelectedProduct;

    return (
        <div className='fixed px-md inset-0 bg-black/40 flex justify-center items-center z-50'>
            <div className='bg-bgCard min-w-70 w-100 rounded-2xl p-padding-sm'>
                <div className='flex justify-between mb-padding-sm'>
                    <h1 className='text-mid font-bold text-primary'>Checkout</h1>
                    <button onClick={onClose} className='cursor-pointer flex justify-center items-center rounded-md w-10 bg-bgApp hover:bg-danger' >
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                    </button>
                </div>
                {product ? (
                    <div className='mb-6 p-4 bg-bgApp rounded-lg'>
                        <p className='font-medium'>Product: <span className='text-primary'>{product.name}</span></p>
                        <p>Current Stock: <span className='font-bold'>{product.quantity}</span></p>
                        <p>Price per unit: ₦{product.price.toLocaleString()}</p>
                    </div>
                ) : (
                    <p className='mb-4 text-center text-gray-600'>
                        Select a product first (coming soon: search here)
                    </p>
                )}

                {/* Quantity Input */}
                <fieldset className='flex flex-col gap-4'>
                    <label className='flex flex-col'>
                        Quantity to Sell
                        <input
                            type="number"
                            min="1"
                            value={sellQuantity}
                            onChange={(e) => setSellQuantity(e.target.value)}
                            placeholder="Enter quantity"
                            className='bg-bgInput h-10 rounded-sm px-3 mt-1'
                        />
                    </label>
                </fieldset>

                {/* Buttons */}
                <div className='flex justify-end gap-3 mt-6'>
                    <button
                        onClick={onClose}
                        className='px-4 py-2 bg-gray-300 rounded hover:bg-gray-400'
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleConfirm} // ← we'll add this in next step
                        className='px-4 py-2 bg-primary text-white rounded hover:bg-primaryHvr'
                        disabled={!sellQuantity || !product}
                    >
                        Confirm Sale
                    </button>
                </div>
            </div>

        </div>
    )
}

export default CheckoutForm