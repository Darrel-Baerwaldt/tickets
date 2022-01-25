const tickets = (tInfo, sortBy) => {
  let schedule = [];

  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = price;
      this.status = status;
    }
  }
  tInfo.forEach((city) => {
    let [destination, price, status] = city.split("|");
    schedule.push(new Ticket(destination, price, status));
  });

  if (sortBy === "price") {
    schedule.sort((a, b) => a.price - b.price);
  } else if (sortBy === "destination") {
    schedule.sort((a, b) => a.destination.localeCompare(b.destination));
  } else if (sortBy === "status") {
    schedule.sort((a, b) => a.status.localeCompare(b.status));
  } else {
    return "Error";
  }

  console.log(schedule);
};
tickets(
  [
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
  ],
  "status"
);
