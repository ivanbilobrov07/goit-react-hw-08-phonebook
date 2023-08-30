import { useSelector } from 'react-redux';

import { Message } from 'components/Message';
import { ContactItem } from 'components/ContactItemThunk';
import { StyledList, StyledItem, MessageWrapper } from './ContactList.styled';

import { selectFilterByOption, selectFilteredContacts } from 'redux/selectors';

const findUsedLetters = data => {
  const arrOfLetters = [];

  if (!data) return null;

  for (const item of data) {
    const letter = item.name.toUpperCase()[0];
    if (arrOfLetters.includes(letter)) {
      continue;
    }

    arrOfLetters.push(letter);
  }

  return arrOfLetters.map(item => ({ letter: item, isUsed: false }));
};

export const ContactList = ({ chooseContact }) => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const option = useSelector(selectFilterByOption);
  const usedLetters = findUsedLetters(filteredContacts);

  const generateLetter = item => {
    if (option !== 'ascending' && option !== 'descending') {
      return null;
    }

    const letterToGenerate = item.name.toUpperCase()[0];
    const letterOptions = usedLetters.find(i => i.letter === letterToGenerate);

    if (letterOptions.isUsed) return null;

    letterOptions.isUsed = true;
    return letterToGenerate;
  };

  return (
    <>
      {filteredContacts.length ? (
        <StyledList>
          {filteredContacts.map(item => (
            <StyledItem
              generateLetter={generateLetter(item)}
              onClick={() => chooseContact(item)}
              key={item.id}
            >
              <ContactItem {...item} />
            </StyledItem>
          ))}
        </StyledList>
      ) : (
        <MessageWrapper>
          <Message text="There are no contacts here" />
        </MessageWrapper>
      )}
    </>
  );
};
