function piccolo (commands: string[]): string {

    let parking: Set<string> = new Set();

    for (const commmand of commands) {
        const [direction, carNumber] = commmand.split(', ');

        if (direction === 'IN') {
            parking.add(carNumber);
        } 

        else if (direction === 'OUT') {
            parking.delete(carNumber);
        }
    }
    
    const sortedParking: string[] = Array.from(parking).sort((a, b) => a.localeCompare(b, 'en', { numeric: true}));
    
    return sortedParking.length > 0 ? sortedParking.join('\n') : 'Parking Lot is Empty';
    

}