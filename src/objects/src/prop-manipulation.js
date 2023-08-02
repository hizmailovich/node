export const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com",

    /**
     * Update person.
     *
     * @param info Info object
     * @returns {person} Updated person
     */
    updateInfo(info) {
        const copied = JSON.parse(JSON.stringify(person));
        Object.getOwnPropertyNames(info)
            .forEach(key => copied[key] = info[key]);
        return copied;
    }
};

Object.defineProperties(person, {
    firstName: {
        writable: false
    },
    lastName: {
        writable: false
    },
    age: {
        writable: false
    },
    email: {
        writable: false
    }
});

Object.defineProperty(person, "address", {
    value: {},
    enumerable: false,
    configurable: false
});