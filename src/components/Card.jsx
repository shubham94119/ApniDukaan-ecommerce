import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Context } from '../context';
import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid';
import './styles.css'

export const Card = ({ item }) => {

    const context = useContext(Context);

    const { id, title, price, category, images } = item;

    const showProduct = (productDetail) => {
        context.closeCheckoutSideMenu()
        context.openProductDetail();
        context.setShowProductDetail(productDetail);
    }

    const addProductsToCart = (productData) => {
        context.setCartProducts([...context.cartProducts, productData]);
        context.closeProductDetail();
        context.openCheckoutSideMenu();
    }

    const renderIcon = (id) => {
        const isInCart = context.cartProducts.filter(prod => prod.id === id).length > 0

        if (isInCart) {
            return (
                <div className='absolute top-0 right-0 flex justify-center items-center bg-green-100 w-6 h-6 rounded-full m-2 p-1'>
                    <CheckIcon className='h-6 w-6 text-black'></CheckIcon>
                </div>
            )
        } else {
            return (
                <div
                    className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1 border-circle'
                    onClick={() => addProductsToCart(item)}
                >
                    <PlusIcon className='h-6 w-6 text-black'></PlusIcon>
                </div>
            )
        }
    }

    return (
        <div className='fondo2 cursor-pointer w-99 h-76 rounded-lg relative py-7 px-2  border-solid '>
            <figure
                className='relative mb-2 w-full h-4/5'
                onClick={() => showProduct(item)}
            >
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5 flex justify-center items-center'>
                    {category}
                </span>
                <img src={images[0]} alt={`image ${title}`} className='w-full h-full object-contain rounded-lg' />
            </figure>
            <p className='flex justify-between px-1'>
                <span className='text-sm font-light'>
                    {title.length > 25 ? (title.substring(0, 24)) + '...' : title}
                </span>
                <span className='text-lg font-medium text-green-500 px-6' >₹{price}</span>
            </p>
            {
                renderIcon(id)
            }
        </div>
    )
};

Card.propTypes = {
    item: PropTypes.object
}