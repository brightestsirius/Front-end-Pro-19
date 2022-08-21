//       Plane

// Airliner   Aerobatic

// Boeing737   Extra330

// The Boeing 737 has a maximum crosswind component of 35 knots if the runway is perfectly dry, or 15 knots if the runway is wet.
// The Boeing 737: 108 to 215 passengers.

// Extra 330 has a maximum crosswind component of 14 knots if the runway is perfectly dry, or 12 knots if the runway is wet.

const CROSSWIND = 15;
const RUNAWAY = `wet`;
const CURRENT_PASSANGERS = 220;

const planes = [
    {
        name: `Boeing 737`,
        type: `Airliner`,
        crosswind: {
            dry: 35,
            wet: 15
        },
        passengers: {
            min: 108,
            max: 215
        }
    },
    {
        name: `Airbus 300`,
        type: `Airliner`,
        crosswind: {
            dry: 35,
            wet: 20
        },
        passengers: {
            min: 100,
            max: 230
        }
    },
    {
        name: `Extra 330`,
        type: `Aerobatic`,
        crosswind: {
            dry: 14,
            wet: 12
        }
    }
];


class Plane{
    constructor(plane){
        Object.assign(this, plane);
    }

    takeoff(){
        let approved = this.getApproveParams().every(param => param); // false
        return `Takeoff for ${this.name} is ${approved ? `allowed` : `not allowed`}.`
    }

    getApproveParams(){
        return [this.getCrosswindApprove()];
    }

    getCrosswindApprove(){
        return this.crosswind[RUNAWAY] >= CROSSWIND ? true : false;
    }
}

class Airliner extends Plane{
    constructor(plane){
        super(plane);
    }

    getApproveParams(){
        let params = super.getApproveParams(); // [true]
        params.push(this.getPassangersApprove()); // [true, false]

        return params;
    }

    getPassangersApprove(){
        return this.passengers.min <= CURRENT_PASSANGERS && this.passengers.max >= CURRENT_PASSANGERS ? true : false;
    }
}

class Aerobatic extends Plane{
    constructor(plane){
        super(plane);
    }
}

const PLANE_TYPES = {
    Airliner: plane => new Airliner(plane),
    Aerobatic: plane => new Aerobatic(plane)
}

planes
    .map(plane => PLANE_TYPES[plane.type] ? PLANE_TYPES[plane.type](plane) : new Plane(plane))
    .map(plane => {
        console.log(plane);
        return plane;
    })
    .forEach(plane => console.log(plane.takeoff()));