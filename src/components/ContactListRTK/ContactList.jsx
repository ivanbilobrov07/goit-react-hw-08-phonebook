import { useGetContactsQuery } from 'redux/contacts/contactsApiRTK';
import { useSelector } from 'react-redux';
import { selectFilterByOption, selectFilterByQuery } from 'redux/selectors';
import { MessageWrapper, StyledItem, StyledList } from './ContactList.styled';
import { ContactItem } from 'components/ContactItemRTK';
import { Message } from 'components/Message';
import { Spinner } from 'components/Spinner';
import { useEffect } from 'react';
import { errorNotify } from 'utils';

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
  const data = useGetContactsQuery();
  console.log(data);
  const {
    data: contacts,
    isFetching,
    isError,
  } = useGetContactsQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  const option = useSelector(selectFilterByOption);
  const query = useSelector(selectFilterByQuery);
  const usedLetters = findUsedLetters(contacts);

  useEffect(() => {
    if (isError) {
      errorNotify('We can`t load your contacts, try again laters');
    }
  }, [isError]);

  const getFilteredContacts = data => {
    let filteredContacts = [...data];

    switch (option) {
      case 'without': {
        break;
      }
      case 'ascending': {
        filteredContacts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      }
      case 'descending': {
        filteredContacts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      }
      default:
        break;
    }

    return filteredContacts.filter(({ name }) =>
      name.toLowerCase().includes(query)
    );
  };

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

  const filteredContacts = contacts && getFilteredContacts(contacts);

  if (isFetching) {
    return (
      <MessageWrapper>
        <Spinner position="center" />
      </MessageWrapper>
    );
  } else {
    return (
      <>
        {isError && errorNotify()}
        {filteredContacts?.length ? (
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
  }
};
