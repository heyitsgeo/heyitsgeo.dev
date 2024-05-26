import React from 'react';
import CommandLink from '@components/command-link';
import CONTACTS from '@data/contacts';

type ContactCommandProps = {
  args: string[];
}
const ContactCommand: React.FC<ContactCommandProps> = ({ args }) => {
  const [output, setOutput] = React.useState<string>('PENDING');

  const getContactArg = (args: string[]) => args && args[0];

  const getSelectedContact = (arg: string) => {
    if (!arg) return undefined;
    return CONTACTS.find(contact => contact.name.toLowerCase() === arg.toLowerCase());
  }

  const options = [
    { name: '<social-name>', description: 'Open link.' }
  ];

  React.useEffect(() => {
    const contact = getSelectedContact(getContactArg(args));
    if (contact) {
      setOutput('LINK_OPENED');
      window.open(contact.link, '_blank');
      return;
    }

    setOutput('DEFAULT');
  }, []);

  if (output === 'PENDING') return <></>;

  if (output === 'LINK_OPENED') {
    return <span className={'text-green-500'}>Opening link to {getSelectedContact(getContactArg(args))?.name}...</span>
  }

  return (
    <div className={'flex flex-col gap-4'}>
      <div className={'flex flex-col gap-2'}>
        {CONTACTS.map((contact, index) => (
          <div className={'grid grid-cols-2'} key={contact.name}>
            <span className={'text-blue-ribbon-500'}>{index + 1}. <CommandLink command={`contact ${contact.name.toLowerCase()}`}>{contact.name}</CommandLink></span>
            <span>
              {contact.link}
            </span>
          </div>
        ))}
      </div>
      <div>
        <p>Options</p>
        {options.map(option => (
          <div className={'grid grid-cols-2'} key={option.name}>
            <span className={'text-green-500'}>{option.name} </span>
            <span>{option.description}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ContactCommand;
