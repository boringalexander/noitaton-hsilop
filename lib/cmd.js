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

    static viewStack = () => {
        return new Cmd('VIEW_STACK');
    }
};

module.exports = Cmd;
