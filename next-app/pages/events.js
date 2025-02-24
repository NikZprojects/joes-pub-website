import styles from "../styles/Home.module.css";

const eventDetails = [
  { Date: "03/18/2025", Name: "Tiki Poster" },
  { Date: "08/13/2024", Name: "Rum Poster" },
  { Date: "04/30/2024", Name: "Tequila Poster" },
];

export default function Recipes() {
  const formatDateString = (date) => {
    const dateOptions = {
      month: "long",
      day: "numeric",
    };
    if (new Date(date).getFullYear() < new Date().getFullYear()) {
      dateOptions["year"] = "numeric";
    } else {
      dateOptions["weekday"] = "long";
    }
    return new Date(date).toLocaleDateString(undefined, dateOptions);
  };

  const sortedEventDetails = eventDetails.sort(
    (a, b) => new Date(b.Date) - new Date(a.Date)
  );

  const upcomingEvents = {
    name: "Upcoming Events",
    events: sortedEventDetails.filter(
      (item) => new Date() <= new Date(item.Date)
    ),
  };

  const previousEvents = {
    name: "Previous Events",
    events: sortedEventDetails.filter(
      (item) => new Date() > new Date(item.Date)
    ),
  };

  const eventTypes = [];

  if (upcomingEvents.events.length) {
    eventTypes.push(upcomingEvents);
  }
  if (previousEvents.events.length) {
    eventTypes.push(previousEvents);
  }

  return (
    <div
      className={styles.about}
      style={{ flexWrap: "wrap", justifyContent: "flex-start" }}
    >
      <div className={styles.container}>
        <h2>Our Events</h2>
      </div>
      <div
        style={{
          width: "100vw",
          marginLeft: "2.5px",
        }}
      >
        {eventTypes.map(
          (eventCategory, index) =>
            eventCategory.events.length > 0 && (
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  marginTop: index > 0 ? "15px" : "-30px",
                }}
                key={index}
              >
                <h2 style={{ margin: 0, paddingRight: "0px" }}>
                  {eventCategory.name}
                </h2>
                {eventCategory.events.map((item, index) => (
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      flexWrap: "wrap",
                      marginBottom: "25px",
                      marginTop: "0px",
                      margin: "15px 0 15px 0",
                      justifyContent: "center",
                    }}
                    key={index}
                  >
                    <div
                      style={{
                        // marginLeft: "25px",
                        width: "min(90%,800px)",
                      }}
                    >
                      <div>
                        <h3
                          style={{
                            margin: "20px 0 10px 5%",
                            width: "100%",
                            display: "inline",
                            marginBlockEnd: 0,
                          }}
                        >
                          {formatDateString(item.Date)}
                        </h3>
                      </div>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <img
                          src={`/Events/${item.Name}.jpg`}
                          alt={"Event Poster"}
                          style={{
                            // width: "min(95vw,800px)",
                            width: "min(90%,800px)",
                            objectFit: "contain",
                            border: "1px solid black",
                            margin: "auto",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )
        )}
      </div>
    </div>
  );
}
