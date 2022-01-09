import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';
import {
    fetchAllContacts,
    deleteContact,
} from '../../redux/contacts/contacts-operations';

function ContactList() {
    const contacts = useSelector(getVisibleContacts);
    const dispatch = useDispatch();

    console.log(contacts)

    useEffect(() => {
        dispatch(fetchAllContacts());
    }, [dispatch]);

    const onDeleteContact = id => dispatch(deleteContact(id));
    return (
        <ol >
            {contacts?.map(({ name, number, id }) => (
                <li key={id}>
                    {name}: <span >{number}</span>
                    <button
                        type="button"
                        onClick={() => onDeleteContact(id)}
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ol>
    );
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        }),
    ),
};

export default ContactList;