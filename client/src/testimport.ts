interface Sensor {
    id: number,
    name: string,
    value: number,
}

class Sensor implements Sensor {
    constructor (id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

class SensorService {
    private sensors: Sensor[];

    constructor () {
        this.sensors = [];
    }

    getSensors () {
        return this.sensors
    }
}

export default new SensorService();