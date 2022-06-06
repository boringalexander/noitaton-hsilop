'use strict';

class Cmd {
    constructor(action) {
        this.isCmd = true;
        this.action = action;
    }

    static quit = () => {
        return new Cmd('QUIT');
    }

    static clear = () => {
        return new Cmd('CLEAR');
    }
};

module.exports = Cmd;
