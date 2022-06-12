import useId from 'react-use-uuid'

export default class Set{
    constructor(weight, reps) {
        this.id = useId();
        this.equivalent = weight*(1+reps/30);
        this.weight = weight;
        this.reps = reps;
        this.done = false;
    }

}