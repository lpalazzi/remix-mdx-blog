import React from 'react'

export const ArticleH1: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  className = '',
  ...props
}) => {
  return <h1 {...props} className={`text-4xl font-medium ${className}`} />
}

export const ArticleH2: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  className = '',
  ...props
}) => {
  return (
    <h2 {...props} className={`mb-3 mt-5 text-xl font-medium ${className}`} />
  )
}

export const ArticleP: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  className = '',
  ...props
}) => {
  return <p {...props} className={`mb-4 text-base font-normal ${className}`} />
}

export const ArticleUL: React.FC<React.HTMLAttributes<HTMLUListElement>> = ({
  className = '',
  ...props
}) => {
  return <ul {...props} className={`ml-6 list-disc text-base ${className}`} />
}

export const ArticleLI: React.FC<React.HTMLAttributes<HTMLLIElement>> = (
  props,
) => {
  return <li {...props} />
}
