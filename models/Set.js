

export default class Set{
    constructor(weight, reps) {
        this.equivalent = weight*(1+reps/30);
        this.weight = weight;
        this.reps = reps;
        this.done = false;
    }

}
