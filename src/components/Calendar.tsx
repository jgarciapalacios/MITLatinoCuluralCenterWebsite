const Calendar = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <iframe
        src="https://calendar.google.com/calendar/embed?src=latinoculturalcenter%40gmail.com&ctz=America%2FNew_York"
        style={{
          border: "0",
          width: "100%",
          height: "600px",
        }}
        title="Google Calendar"
      ></iframe>
    </div>
  );
};

export default Calendar;
