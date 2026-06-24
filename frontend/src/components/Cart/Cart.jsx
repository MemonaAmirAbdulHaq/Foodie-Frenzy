import React from 'react';
import { useCart } from '../../CartContext/CartContext'; // Adjust path if needed
import { FaPlus, FaMinus, FaTrashAlt, FaShoppingCart } from 'react-icons/fa';

const Cart = () => {
    const { 
        cartItems, 
        //addToCart, 
        removeFromCart, 
        updateQuantity, 
        cartTotal, 
        totalItemsCount 
    } = useCart();

    // Utility function to handle decreasing quantity safely
    const handleDecrease = (item) => {
        if (item.quantity > 1) {
            updateQuantity(item.id, item.quantity - 1);
        } else {
            removeFromCart(item.id);
        }
    };

    // Utility function to handle increasing quantity safely
    const handleIncrease = (item) => {
        updateQuantity(item.id, item.quantity + 1);
    };

    return (
        <div className="bg-gradient-to-br from-[#1a120b] via-[#2a1e14] to-[#3e2b1d] min-h-screen py-16 px-4 sm:px-6 lg:px-8 text-amber-100">
            <div className="max-w-4xl mx-auto">
                {/* Header section matching your menu theme */}
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-amber-300 to-amber-200">
                    <span className="font-dancingscript block text-5xl md:text-7xl sm:text-6xl mb-2">
                        Your Selection
                    </span>
                    <span className="block text-xl sm:text-2xl md:text-3xl font-cinzel mt-4 text-amber-100/80">
                        An Elegant Dining Experience Awaits
                    </span>
                </h2>

                {cartItems.length === 0 ? (
                    /* EMPTY CART STATE */
                    <div className="text-center py-20 bg-amber-900/10 rounded-2xl border border-amber-800/20 backdrop-blur-sm p-8">
                        <FaShoppingCart className="text-6xl mx-auto mb-6 text-amber-300/40 animate-pulse" />
                        <p className="font-cinzel text-xl sm:text-2xl text-amber-200/70 mb-4">
                            Your culinary canvas is completely empty.
                        </p>
                        <p className="font-dancingscript text-2xl text-amber-400">
                            Explore our exquisite menu to fill it with flavor.
                        </p>
                    </div>
                ) : (
                    /* ACTIVE CART ITEMS CONTAINER */
                    <div className="space-y-8">
                        <div className="bg-amber-900/10 rounded-2xl border border-amber-800/30 backdrop-blur-sm p-4 sm:p-6 divide-y divide-amber-800/30">
                            {cartItems.map((item) => (
                                <div key={item.id} className="py-6 flex flex-col sm:flex-row items-center justify-between gap-6 first:pt-0 last:pb-0">
                                    
                                    {/* Item Details */}
                                    <div className="flex items-center gap-4 w-full sm:w-auto">
                                        <div className="w-20 h-20 bg-amber-900/20 rounded-xl border border-amber-800/30 overflow-hidden flex items-center justify-center p-2 shrink-0">
                                            <img src={item.image} alt={item.name} className="max-h-full max-w-full object-contain" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-dancingscript text-amber-200 mb-1">{item.name}</h3>
                                            <p className="font-cinzel text-xs text-amber-300/70">${item.price} each</p>
                                        </div>
                                    </div>

                                    {/* Item Quantity Controller and Price Calculation */}
                                    <div className="flex items-center justify-between w-full sm:w-auto gap-8">
                                        <div className="flex items-center gap-3">
                                            <button 
                                                className="w-8 h-8 rounded-full bg-amber-900/40 flex items-center justify-center hover:bg-amber-800/50 transition-colors border border-amber-800/30"
                                                onClick={() => handleDecrease(item)}
                                            >
                                                <FaMinus className="text-xs text-amber-200" />
                                            </button>
                                            <span className="w-8 text-center text-lg font-cinzel text-amber-100">
                                                {item.quantity}
                                            </span>
                                            <button 
                                                className="w-8 h-8 rounded-full bg-amber-900/40 flex items-center justify-center hover:bg-amber-800/50 transition-colors border border-amber-800/30"
                                                onClick={() => handleIncrease(item)}
                                            >
                                                <FaPlus className="text-xs text-amber-200" />
                                            </button>
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <span className="text-lg font-bold text-amber-300 font-cinzel min-w-[70px] text-right">
                                                ${(item.price * item.quantity).toFixed(2)}
                                            </span>
                                            <button 
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-amber-500/60 hover:text-red-400 transition-colors p-2"
                                                title="Remove item"
                                            >
                                                <FaTrashAlt />
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            ))}
                        </div>

                        {/* ORDER SUMMARY */}
                        <div className="bg-amber-900/20 border border-amber-800/40 rounded-2xl p-6 sm:p-8 backdrop-blur-md max-w-md ml-auto shadow-2xl shadow-black/40">
                            <h4 className="font-cinzel text-lg tracking-wider mb-4 border-b border-amber-800/30 pb-2 text-amber-200">
                                Summary of Flavours
                            </h4>
                            <div className="flex justify-between items-center mb-3 font-cinzel text-sm text-amber-100/70">
                                <span>Total Selected Items:</span>
                                <span>{totalItemsCount}</span>
                            </div>
                            <div className="flex justify-between items-baseline mb-6 border-t border-amber-800/20 pt-4">
                                <span className="font-cinzel text-lg text-amber-100">Grand Total:</span>
                                <span className="text-3xl font-bold font-dancingscript text-amber-300">
                                    ${cartTotal.toFixed(2)}
                                </span>
                            </div>

                            <button className="w-full py-3 rounded-full bg-gradient-to-r from-amber-800 to-amber-600 hover:from-amber-700 hover:to-amber-500 border border-amber-500/30 text-black font-cinzel font-bold text-sm sm:text-base tracking-widest transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-amber-950/50">
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;