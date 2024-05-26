import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"

import meAnimation from '@images/me-animated.gif';

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main className={'bg-black text-white p-4 flex justify-center items-center w-full min-h-screen'}>
      <div className={'flex flex-col gap-4 items-center border border-white border-dashed p-8 max-w-[600px]'}>
        <h1>Page not found</h1>
        <img
          src={meAnimation}
          alt="animated illustration of developer typing on keyboard with text scrolling in reflection of their eyes"
          className={'w-[200px] h-auto'}
        />
        <p>
          Working hard to make new things, but this is one that doesn't exist yet.
          <br />
          <br />
          <Link to="/" className={'text-blue-ribbon-500 border-b border-blue-ribbon-500 border-dashed hover:border-solid'}>Back</Link>
        </p>
      </div>
    </main>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
