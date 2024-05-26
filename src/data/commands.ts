type Command = {
  command: typeof COMMAND_NAMES[keyof typeof COMMAND_NAMES];
  description: string;
}

export const COMMAND_NAMES = {
  ABOUT: 'about',
  CLEAR: 'clear',
  HELP: 'help',
  CONTACT: 'contact',
  WELCOME: 'welcome',
} as const;

export const COMMANDS: Command[] = [
  { command: COMMAND_NAMES.ABOUT, description: 'Learn more about Geo Stokes.' },
  { command: COMMAND_NAMES.CLEAR, description: 'Clears the terminal.' },
  { command: COMMAND_NAMES.HELP, description: 'List available commands.' },
  { command: COMMAND_NAMES.CONTACT, description: 'List all the ways to get in touch.'},
  { command: COMMAND_NAMES.WELCOME, description: 'Displays welcome message.'}
]
