import React from 'react';
import TerminalInfo from './terminal-info';
import { useTerminalContext } from '@context/terminal-context';

const CommandPrompt: React.FC= () => {
  const {
    execute,
    prompt: [ promptValue, setPromptValue ],
    promptRef
  } = useTerminalContext();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    execute(promptValue);
  }

  const handleCommandPromptValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPromptValue(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={'flex flex-col gap-2'}>
        <label htmlFor={'terminal-prompt'}>
          <TerminalInfo user={'guest'} machine={'heyitsgeo.dev'}/>
        </label>
        <input
          ref={promptRef}
          id={'command-prompt'}
          autoFocus
          autoComplete={'off'}
          spellCheck={'false'}
          autoCapitalize={'off'}
          type={'text'}
          className={'bg-transparent caret-blue-ribbon-500 outline-none w-full'}
          placeholder={'Type `help` for available commands.'}
          value={promptValue}
          onChange={handleCommandPromptValueChange}
        />
      </div>
    </form>
  )
}

export default CommandPrompt;
