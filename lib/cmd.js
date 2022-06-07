'use strict';

class Cmd {

    constructor(action) {
    
        this.isCmd = true;
        this.action = action;
    }

    static quit = () => new Cmd('QUIT');

    static clear = () => new Cmd('CLEAR');

    static viewStack = () => new Cmd('VIEW_STACK');
};

module.exports = Cmd;
