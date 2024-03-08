export default class Airport {
    constructor(name, code) {
        this._name = name;
        this._code = code;
    }

    // Getter and setter for name
    get name() {
        return this._name;
    }
    set name(name) {
        if (typeof name === 'string') {
            this._name = name;
        } else {
            throw new TypeError('Name must be a string');
        }
    }

    // Getter and setter for code
    get code() {
        return this._code;
    }
    set code(code) {
        if (typeof code === 'string') {
            this._code = code;
        } else {
            throw new TypeError('Code must be a string');
        }
    }

    // Custom toString method
    toString() {
        return `Airport [${this._code}] { _name: '${this._name}', _code: '${this._code}' }`;
    }
}