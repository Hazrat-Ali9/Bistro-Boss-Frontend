import React from 'react';
import useCarts from '../../../hooks/useCarts';

const Carts = () => {
    const [cart] = useCarts();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0).toFixed(2);
    return (
        <div className='p-6'>
            {/* Header Section */}
            <div className='flex items-center justify-between flex-wrap gap-4'>
                <h1 className='font-bold text-xl sm:text-3xl'>Total Price : ${totalPrice}</h1>
                <h1 className='font-bold text-xl sm:text-3xl'>Total Items : {cart.length}</h1>
            </div>

            {/* Table Section */}
            <div className="overflow-x-auto mt-10">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {
                            cart.map((cartItem, index) => (
                                <tr key={cartItem._id}>
                                    <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="avatar">
                                            <div className="w-10 rounded-full">
                                                <img src={cartItem.image} alt={cartItem.name} />
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">{cartItem.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="px-2 inline-flex text-sm leading-5 font-bold">${cartItem.price}</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <button className="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Carts;
