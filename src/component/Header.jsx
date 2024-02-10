import React from 'react'
import img1 from "./../assets/img/a82dc765c699d74d33d41d7fdaa4e4faf69ed3ae_1707545885.webp"
import logo from "./../assets/img/logo.svg"
import LoginIcon from '@mui/icons-material/Login';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Header = () => {
    return (
        <React.Fragment>
            <div className='w-full'>
                <a href="#">
                    <figure className='h-14 w-full overflow-hidden  '>
                        <img src={img1} className='w-full' alt="" />
                    </figure>
                </a>

            </div>
            <div className='w-full'>
                <div className='container mx-auto'>
                    <div className="flex justify-between">
                        <div className='flex'>
                            <div className='logo'>
                                <figure>
                                    <img src={logo} alt="" />
                                </figure>
                            </div>
                            <div className='px-7 bg-[#F0F0F1]'>
                                <input type="text" className='px-3 py-1 bg-transparent' placeholder='جستجو' name="" id="" />
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='flex justify-center items-center border border-black rounded-md px-3 py-1 text-s'>

                                <LoginIcon className="mx-1 text-xs" style={{fontSize:"18px"}}/>
                                <p>
                                    ورود
                                </p>
                                <span className='mx-2'>|</span>
                                <p>
                                    ثبت نام
                                </p>
                            </div>
                            <div className='mx-2'>|</div>
                            <div>
                                <div className='shop'>
                                    <ShoppingCartIcon/>
                                </div>
                            </div>

                        </div>


                    </div>

                </div>

            </div>
        </React.Fragment>
    )
}

export default Header