import React from "react";

export const Button = ({ children, icon, onClick }: {
  children: React.ReactNode
  icon: React.ReactElement
  onClick: (val: any) => void
}) => {
  return (
    <button onClick={onClick}
      className="flex item-center justify-center bg-transparent hover:bg-gray-800 border border-gray-700 text-gray-100 font-semibold py-2 px-4 rounded-l">
      {icon}
      {children}
    </button>
  )
}

