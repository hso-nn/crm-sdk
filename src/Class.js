class Class {
    getClass() {
        return Object.getPrototypeOf(this).constructor;
    }
}
export default Class;
