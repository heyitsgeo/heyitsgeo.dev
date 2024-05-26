import React from 'react';
import { COMMANDS } from '@data/commands';
import CommandLink from '@components/command-link';

type HelpCommandProps = {
  args?: string[]
};

const HelpCommand: React.FC<HelpCommandProps> = (_) => {
  return (
    <div>
      {COMMANDS.sort((a, b) => a.command.localeCompare(b.command)).map(command => (
        <div className={'grid grid-cols-2 gap-2'} key={command.command}>
          <div>
            <CommandLink command={command.command}>
              {command.command}
            </CommandLink>
          </div>
          <span>{command.description}</span>
        </div>
      ))}
    </div>
  )
}

export default HelpCommand;
