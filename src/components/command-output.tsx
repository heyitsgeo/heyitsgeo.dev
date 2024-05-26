import TerminalInfo from './terminal-info';
import React from 'react';
import { COMMAND_NAMES, COMMANDS } from '@data/commands';
import ClearCommand from './commands/clear-command';
import HelpCommand from './commands/help-command';
import WelcomeCommand from './commands/welcome-command';
import AboutCommand from './commands/about-command';
import ContactCommand from './commands/contact-command';

type CommandOutputProps = {
  command: string
};

const CommandOutput: React.FC<CommandOutputProps> = ({ command}) => {

  const output = React.useMemo(() => {
    const [commandString, ...args] = command.trim().split(' ');

    if (!commandString) return <></>;

    const validCommand = COMMANDS.find((commandConfig) => commandConfig.command === commandString);

    if (!validCommand) return <>Command not found: {command}</>;

    return {
      [COMMAND_NAMES.ABOUT]: <AboutCommand args={args} />,
      [COMMAND_NAMES.CLEAR]: <ClearCommand args={args} />,
      [COMMAND_NAMES.HELP]: <HelpCommand args={args} />,
      [COMMAND_NAMES.CONTACT]: <ContactCommand args={args} />,
      [COMMAND_NAMES.WELCOME]: <WelcomeCommand args={args} />,
    }[commandString]
  }, [command]);

  return (
    <div className={'flex flex-col gap-2'}>
      <div>
        <TerminalInfo user={'guest'} machine={'heyitsgeo.dev'}/>
      </div>
      <span className={'font-bold'}>{command}</span>
      <div className={'font-light'}>
        {output}
      </div>
    </div>
  )
}

export default CommandOutput;

