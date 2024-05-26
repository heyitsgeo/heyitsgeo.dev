import React from 'react';

type TerminalInfoProps = {
  user: string;
  machine: string;
}

const TerminalInfo: React.FC<TerminalInfoProps> = ({ user, machine}) => {
  return (
    <>
      <span className={'text-green-500'}>{user}</span>
      <span>@</span>
      <span className={'text-blue-ribbon-500'}>{machine}</span>
      <span>:~$</span>
    </>
  )
}

export default TerminalInfo;
