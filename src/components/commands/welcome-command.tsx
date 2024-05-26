import React from 'react';
import figlet from 'figlet';
import Small from 'figlet/importable-fonts/Small.js';
import CommandLink from '@components/command-link';
import { COMMAND_NAMES } from '@data/commands';

type WelcomeCommandProps = {
  args?: string[]
}

const WelcomeCommand: React.FC<WelcomeCommandProps> = () => {
  const [text, setText] = React.useState<string>('');

  const isMobile = () => window.innerWidth < 450;

  const renderAscii = (mobile?: boolean) => {
    figlet.text('Geo Stokes', { font: 'Small', whitespaceBreak: true, width: mobile ? 40 : 80 }, (_, result) => {
      setText(result!);
    });
  }

  React.useEffect(() => {
    figlet.parseFont('Small', Small);
    renderAscii(isMobile());
  });

  const handleResize = () => {
    renderAscii(isMobile());
  }

  React.useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  })

  return (
    <div>
      <pre className={'text-lavender-rose-500'}>
        {text}
      </pre>
      <p>Welcome to my website. To get started by seeing a list of commands, type `<CommandLink command={COMMAND_NAMES.HELP}>help</CommandLink>`.</p>
    </div>
  )
}

export default WelcomeCommand;
