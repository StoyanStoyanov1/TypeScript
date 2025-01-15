enum TrafficLight {
    Red = 'Red',
    Yellow = 'Yellow',
    Green = 'Green',
};

function getTrafficLightAction(light: TrafficLight): string {
    switch (light) {
        case TrafficLight.Red:
            return 'Stop!';
        case TrafficLight.Yellow:
            return 'Get ready!';
        case TrafficLight.Green:
            return 'You can go!';
        default:
            return 'Invalid color!'
    }
}

