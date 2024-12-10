import React from 'react'

const MaxWidth: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  return (
    <div
      {...props}
      className={
        'mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ' + props.className
      }
    >
      {props.children}
    </div>
  )
}

export default MaxWidth
