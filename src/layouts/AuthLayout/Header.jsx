import React, { useState, Fragment } from 'react'
import { FiSearch } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { useNavigate } from 'react-router';
import { Listbox, Transition } from '@headlessui/react';

import Logo from "../../assets/svg/logo.svg"
import { IoIosArrowDown } from 'react-icons/io';


const categories = [
    { name: 'All Categories' },
    { name: 'Fashion' },
    { name: 'Home & Decor' },
    { name: 'Beauty' },
    { name: 'Food & Beverages' },
    { name: 'Health & Wellness' },
    { name: 'Hand Crafts' },
    { name: 'Books & Literature' },
    { name: 'Musical Instruments' },
    { name: 'Others' },
  ]

const Header = () => {
    const [selected, setSelected] = useState(categories[0])
    const [text, setText] = useState(" ");

    const handleChange = (e) => {
        const value = e.target.value;
        setText(value);
    }

    const navigate = useNavigate()

  return (
    <div className='bg-[#fff] shadow h-[100px] flex items-center justify-between px-[100px] py-[26px]'>
        <img src={Logo} alt='Logo' className='' />
        <div className='flex items-center gap-[44px]'>

            <div className='w-[593px] h-[48px] gap-2 border border-[#E1E3E2] hidden rounded-lg p-3 flex items-center'>
                <Listbox value={selected} onChange={setSelected}>
                    <div className="relative">
                        <Listbox.Button className="relative w-[150px] cursor-default flex items-center gap-2   py-2 pl-3 pr-10 text-left outline-none sm:text-sm">
                            <span className="block truncate w-full">{selected.name}</span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <IoIosArrowDown
                                    className="h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                />
                            </span>
                        </Listbox.Button>
                        <Transition
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="absolute mt-1 w-[200px] max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                {categories.map((item, index) => (
                                    <Listbox.Option
                                        key={index}
                                        className={({ active }) =>
                                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                            active ? 'bg-[#E6F6F4] text-[#052011]' : 'text-[#052011]'
                                            }`
                                        }
                                        value={item}
                                    >
                                    {({ selected }) => (
                                        <>
                                            <span
                                                className={`block truncate ${
                                                selected ? 'font-medium' : 'font-normal'
                                                } text-[#052011]`}
                                            >
                                                {item.name}
                                            </span>
                                        </>
                                    )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </Listbox>
                <div className='flex items-center gap-1.5'>
                    <FiSearch />
                    <input 
                        name='search'
                        type='text'
                        placeholder='Search'
                        onChange={(e) => handleChange(e)}
                        value={text}
                        className='border-0 font-inter outline-none text-base text-[#A8ACAB] placeholder-[#A8ACAB]'
                    />
                </div>
            </div>

            <div className='flex items-center w-[66px] h-[24px] hidden gap-1.5'>
                <p className='font-inter text-base text-[#000]'>Cart</p>
                <IoCartOutline className='w-[20px] h-[20px] text-[#333333]'/>
            </div>
            <button 
                type='button' 
                className='w-[120px] h-[48px] rounded-lg bg-[#52BC77] flex items-center justify-center'
                onClick={() => navigate("/register")}
            >
                <p className='font-inter text-base text-[#fff]'>Sign up</p>
            </button>

        </div>

    </div>
  )
}

export default Header