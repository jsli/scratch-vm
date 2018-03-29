/**
 * Icon svg to be displayed at the left edge of each extension block, encoded as a data URI.
 * @type {string}
 */
// eslint-disable-next-line max-len
const iconURI = 'data:image/jpeg;base64,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';


/**
 * Manage communication with a Espduino device over a Device Manager client socket.
 */
class Espduino {

    /**
     * @return {string} - the type of Device Manager device socket that this class will handle.
     */
    static get DEVICE_TYPE () {
        return 'espduino';
    }

    /**
     * Construct a Espduino communication object.
     * @param {WebSocket} socket - the socket for a Espduino device, as provided by a Device Manager client.
     */
    constructor (socket) {
        /**
         * The socket-IO socket used to communicate with the Device Manager about this device.
         * @type {Socket}
         * @private
         */
        this._socket = socket;
        //
        // this._socket.onmessage = function(event) {
        //     console.log( "Received Message: " + event);
        //     console.log( "Received Message: " + event.data);
        // }.bind(this);
        //
        // this._socket.onclose = function(event) {
        //     console.log("Connection closed.", event);
        // }.bind(this);
        //
        // this._socket.onerror = function(event) {
        //     console.log("Connection error.", event);
        // }.bind(this);
    }

    /**
     * Set the WeDo 2.0 hub's LED to a specific color.
     */
    ledOn () {
        this._send('1');
    }

    ledOff () {
        this._send('0');
    }

    /**
     * Send a message to the device socket.
     * @param {string} message - the name of the message, such as 'playTone'.
     * @private
     */
    _send (message) {
        this._socket.send(message);
    }
}

/**
 * Scratch 3.0 blocks to interact with a ESPDuino device.
 */
class Scratch3EspduinoBlocks {

    /**
     * @return {string} - the ID of this extension.
     */
    static get EXTENSION_ID () {
        return 'espduino';
    }

    /**
     * Construct a set of Espduino blocks.
     * @param {Runtime} runtime - the Scratch 3.0 runtime.
     */
    constructor (runtime) {
        /**
         * The Scratch 3.0 runtime.
         * @type {Runtime}
         */
        this.runtime = runtime;

        this.connect();
    }

    /**
     * @returns {object} metadata for this extension and its blocks.
     */
    getInfo () {
        return {
            id: Scratch3EspduinoBlocks.EXTENSION_ID,
            name: 'Espduino',
            iconURI: iconURI,
            blocks: [
                {
                    opcode: 'ledOn',
                    text: 'turn LED on',
                    blockType: 'command',
                    arguments: {}
                },
                {
                    opcode: 'ledOff',
                    text: 'turn LED off',
                    blockType: 'command',
                    arguments: {}
                }
            ]
        };
    }

    /**
     * Use the Device Manager client to attempt to connect to a Espduino 2.0 device.
     */
    connect () {
        this._device = null;

        const _socket = new WebSocket('ws://127.0.0.1:9999');

        _socket.onopen = function(event) {
            console.log("Connection open ...", event);
            this._device = new Espduino(_socket);
        }.bind(this);

        // _socket.onmessage = function(event) {
        //     console.log( "Received Message: " + event);
        //     console.log( "Received Message: " + event.data);
        // }.bind(this);
        //
        // _socket.onclose = function(event) {
        //     console.log("Connection closed.", event);
        // }.bind(this);
        //
        // _socket.onerror = function(event) {
        //     console.log("Connection error.", event);
        // }.bind(this);
    }

    ledOn () {
        this._device.ledOn();
    }

    ledOff () {
        this._device.ledOff();
    }
}

Scratch.extensions.register(new Scratch3EspduinoBlocks());
