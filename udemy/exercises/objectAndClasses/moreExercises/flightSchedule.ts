function flightSchedule(arr: string[][]): string {
    const [flights, cancelledFlights, searchStatus] = arr;
    
    const objCancelledFlights: { Destination: string; Status: string }[] = [];
    const objFlightsReadyToFly: { Destination: string; Status: string }[] = [];

    for (const flight of flights) {
        const num = flight.slice(0, flight.indexOf(' '));
        const destination = flight.slice(flight.indexOf(' ') + 1);

        const currentFlight = { Destination: destination, Status: 'Ready to fly' };

        for (const canceledFlight of cancelledFlights) {
            const flightNum = canceledFlight.slice(0, canceledFlight.indexOf(' '));
            const canceledStatus = canceledFlight.slice(canceledFlight.indexOf(' ') + 1)
            if (flightNum === num) {
                currentFlight.Status = canceledStatus;
                break;
            }
        }

        if (currentFlight.Status === 'Cancelled') {
            objCancelledFlights.push(currentFlight);
        } else {
            objFlightsReadyToFly.push(currentFlight);
        }
    }

    return searchStatus[0] === 'Cancelled' 
        ? objCancelledFlights.map(flight => `{ Destination: '${flight.Destination}', Status: '${flight.Status}' }`).join('\n') 
        : objFlightsReadyToFly.map(flight => `{ Destination: '${flight.Destination}', Status: '${flight.Status}' }`).join('\n');
}


