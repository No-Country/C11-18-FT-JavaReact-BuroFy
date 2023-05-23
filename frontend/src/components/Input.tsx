"use client";

const Input = () => {
  return (
    <div className='relative z-0 w-full mb-6 group'>
      <input
        type='text'
        name='text'
        id='text '
        className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-lilac peer'
        placeholder=' '
        required
      />
      <label
        htmlFor='text'
        className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-lilac peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
      >
        Email address
      </label>
    </div>
  );
};

export default Input;
