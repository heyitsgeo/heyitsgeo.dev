import React from 'react';
import { useTerminalContext } from '@context/terminal-context';

type ClearCommandProps = {
  args?: string[];
}
const ClearCommand: React.FC<ClearCommandProps> = (_) => {
  const { clearHistory } = useTerminalContext();

  React.useEffect(() => {
    clearHistory();
  }, []);

  return <></>;
}

export default ClearCommand;
