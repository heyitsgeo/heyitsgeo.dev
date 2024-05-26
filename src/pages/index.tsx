import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Terminal from '../components/terminal';
import { TerminalContextProvider } from '@context/terminal-context';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className={'bg-black text-white p-4 flex justify-center min-h-screen'}>
      <div className={'w-1/2 p-2 max-w-[800px] min-w-[350px]'}>
        <TerminalContextProvider>
          <Terminal />
        </TerminalContextProvider>
      </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
