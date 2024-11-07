import React from 'react'

export default function PageBlog() {
  return (
    <div className='flex flex-col items-center justify-center space-y-4 text-center'>
      <div className='space-y-2'>
        <div className='inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm'>
          Blog
        </div>
        <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
          Muy pronto
        </h2>
        <p className='text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
          Esta sección está en construcción, pero puedes seguir el proyecto en GitHub.
          <br />
          <br />
          <a href='https://github.com/facuguardia/my-website' target='_blank' className='text-blue-500 hover:underline'>
            https://github.com/facuguardia/my-website
          </a>
        </p>
      </div>
    </div>
  )
}
