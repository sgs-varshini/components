import React from 'react'



const Modal = ({ isVisible, Close, children }: {
  isVisible: boolean;
  Close: boolean;
  children: React.ReactNode;
}) => {
  const onClose = () => {
    Close = false;
  }


  if (!isVisible) return null;
  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
      <div className='w-[600px] flex flex-col'>
        <button onClick={() => onClose()} className="text-white text-xl place-self-end">X</button>
        <div className='bg-white p-2 rounded'>
          {children}
        </div>
      </div>
    </div>
  )
};

export default Modal