const EventExamples = () => {
  function handleButtonClick() {
    console.log("button clicked!");
  }
  function handleFormSubmission(event) {
    event.preventDefault();
    console.log("form submitted");
  }
  return (
    <section>
      <form onSubmit={handleFormSubmission}>
        <h2>Form</h2>
        <input
          type="text"
          name="example"
          onChange={(event) =>
            console.log("handle form input", event.target.value)
          }
          style={{ margin: "1rem 0" }}
        />
        <button onClick={handleButtonClick} type="button">
          click
        </button>
      </form>
    </section>
  );
};

export default EventExamples;
