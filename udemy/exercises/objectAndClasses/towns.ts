function towns (arr: string[]): void {
    interface Town {
        town: string;
        latitude: string;
        longitude: string;
    }

    const objTowns: Town[] = [];
    
    arr.forEach((info: string) => {
        const [town, latitude, longitude] = info.split(' | ');
        objTowns.push({
            town, 
            latitude: parseFloat(latitude).toFixed(2), 
            longitude: parseFloat(longitude).toFixed(2)
        }); 
    });

    objTowns.forEach(obj => console.log(obj));
}