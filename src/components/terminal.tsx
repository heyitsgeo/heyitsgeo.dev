import React, { useState } from 'react';
import CommandPrompt from './command-prompt';
import CommandOutput from './command-output';
import { COMMAND_NAMES } from '@data/commands';
import { useTerminalContext } from '@context/terminal-context';
import { generateUniqueId } from '@utils/generator-utils';

const Terminal: React.FC = () => {
  const [ initialized, setInitialized ] = useState<boolean>(false);
  const {
    execute,
    history
  } = useTerminalContext();

  React.useEffect(() => {
    if (!initialized) {
      setInitialized(true);
      execute(COMMAND_NAMES.WELCOME);
    }
  }, [initialized])

  return (
    <div className={'flex flex-col-reverse gap-4'}>
      <CommandPrompt />
      <div className={'flex flex-col gap-2'}>
        {history.map(({ command, executionId }) => (
          <CommandOutput command={command} key={executionId}/>
        ))}
      </div>
    </div>
  )
}

export default Terminal;
