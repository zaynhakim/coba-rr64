import { Form, useLoaderData, useNavigate, redirect } from "react-router-dom";
import { getContact, updateContact } from "../contacts";

export function loader({ params }) {
  return getContact(params.contactId);
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  await updateContact(params.contactId, updates);
  return redirect(`/contacts/${params.contactId}`);
}

export default function Edit() {
  const contact = useLoaderData();
  const navigate = useNavigate();

  return (
    <Form method="post" id="contact-form">
      <p>
        <span>Name</span>
        <input
          type="text"
          name="first"
          placeholder="First"
          aria-label="First Name"
          defaultValue={contact.first}
        />
        <input
          type="text"
          name="last"
          placeholder="Last"
          aria-label="Last name"
          defaultValue={contact.last}
        />
      </p>
      <label>
        <span>Twitter</span>
        <input
          type="text"
          name="twitter"
          placeholder="@jack"
          defaultValue={contact.twitter}
        />
      </label>
      <label>
        <span>Notes</span>
        <textarea name="notes" rows={6} />
      </label>
      <p>
        <button type="submit">Save</button>
        <button
          type="button"
          onClick={() => {
            navigate(-1);
          }}
        >
          Cancel
        </button>
      </p>
    </Form>
  );
}
