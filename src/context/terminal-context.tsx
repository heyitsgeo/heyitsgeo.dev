import React from 'react';
import { generateUniqueId } from '@utils/generator-utils';

type ExecutedCommand = {
  command: string;
  executionId: string;
}

type TerminalContextType = {
  history: ExecutedCommand[];
  execute: (command: string) => void;
  clearHistory: () => void;
  prompt: [value: string, setValue: (value: string) => void];
  promptRef: React.Ref<HTMLInputElement>;
}

const TerminalContext = React.createContext<TerminalContextType | null>(null);

type TerminalContextProviderProps = {
  children: React.ReactNode;
}

export const TerminalContextProvider: React.FC<TerminalContextProviderProps> = ({ children }) => {
  const [history, setHistory] = React.useState<ExecutedCommand[]>([]);
  const [promptValue, setPromptValue] = React.useState<string>('');
  const promptRef = React.useRef<HTMLInputElement>(null);

  const clearHistory = () => setHistory([]);

  const execute = (command: string) => {
    const executionId = generateUniqueId(`${command}_`);
    const executedCommand = { command, executionId };
    setHistory(prevHistory => [...prevHistory, executedCommand]);
    setPromptValue('');

    if (promptRef.current) {
      promptRef.current.focus();
    }
  };

  return (
    <TerminalContext.Provider
      value={{
        clearHistory,
        execute,
        history,
        prompt: [promptValue, setPromptValue],
        promptRef
      }}
    >
      {children}
    </TerminalContext.Provider>
  )
}

export const useTerminalContext = () => {
  const context = React.useContext(TerminalContext);

  if (!context) {
    throw new Error('useTerminalContext must be used within a TerminalContextProvider');
  }

  return context;
}
