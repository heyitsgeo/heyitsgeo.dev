import React from 'react';
import { useTerminalContext } from '@context/terminal-context';

type CommandLinkProps = {
  children: React.ReactNode;
  command: string;
}

const CommandLink: React.FC<CommandLinkProps> = ({ children, command}) => {
  const { execute } = useTerminalContext();

  const handleClick = () => {
    execute(command);
  }

  return (
    <button
      className={'text-blue-ribbon-500 border-b border-blue-ribbon-500 border-dashed hover:border-solid'}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

export default CommandLink;
