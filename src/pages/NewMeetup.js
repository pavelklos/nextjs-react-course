import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const history = useHistory();

  function addMeetupHandler(meetupData) {
    console.log("ADD MEETUP HANDLER", meetupData);
    const firebaseUrlAndTable =
      "https://react-getting-started-7494a-default-rtdb.firebaseio.com/meetups.json";
    fetch(firebaseUrlAndTable, {
      method: "POST", // 'GET' = default
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      // history.push();
      history.replace("/");
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
