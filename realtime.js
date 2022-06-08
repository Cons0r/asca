// This file should include all of your socket.io server things

class Logger {
    #name
    #startdate

    /**
     * 
     * @param {String} name 
     */
    constructor(name) {
        console.log(`LOGGER: ${name.toLocaleUpperCase()} started`)
        this.#name = name.toLocaleUpperCase();
        this.#startdate = new Date();
    }

    log(text) {
        console.log(`${this.#name}@${(new Date()).toISOString()}: ${text}`)
    }
}

/**
 * 
 * @param io 
 */
export function realtimeapp(io) {
    const log = new Logger('realtime');
    io.on('connection', ()=>{
        log.log('New connection.')
    })
}