/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal.js");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.chinese_chess_game = (function() {

    /**
     * Namespace chinese_chess_game.
     * @exports chinese_chess_game
     * @namespace
     */
    var chinese_chess_game = {};

    chinese_chess_game.gameStateReq = (function() {

        /**
         * Properties of a gameStateReq.
         * @memberof chinese_chess_game
         * @interface IgameStateReq
         * @property {number|null} [playerId] gameStateReq playerId
         */

        /**
         * Constructs a new gameStateReq.
         * @memberof chinese_chess_game
         * @classdesc Represents a gameStateReq.
         * @implements IgameStateReq
         * @constructor
         * @param {chinese_chess_game.IgameStateReq=} [properties] Properties to set
         */
        function gameStateReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * gameStateReq playerId.
         * @member {number} playerId
         * @memberof chinese_chess_game.gameStateReq
         * @instance
         */
        gameStateReq.prototype.playerId = 0;

        /**
         * Creates a new gameStateReq instance using the specified properties.
         * @function create
         * @memberof chinese_chess_game.gameStateReq
         * @static
         * @param {chinese_chess_game.IgameStateReq=} [properties] Properties to set
         * @returns {chinese_chess_game.gameStateReq} gameStateReq instance
         */
        gameStateReq.create = function create(properties) {
            return new gameStateReq(properties);
        };

        /**
         * Encodes the specified gameStateReq message. Does not implicitly {@link chinese_chess_game.gameStateReq.verify|verify} messages.
         * @function encode
         * @memberof chinese_chess_game.gameStateReq
         * @static
         * @param {chinese_chess_game.IgameStateReq} message gameStateReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        gameStateReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.playerId);
            return writer;
        };

        /**
         * Encodes the specified gameStateReq message, length delimited. Does not implicitly {@link chinese_chess_game.gameStateReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof chinese_chess_game.gameStateReq
         * @static
         * @param {chinese_chess_game.IgameStateReq} message gameStateReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        gameStateReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a gameStateReq message from the specified reader or buffer.
         * @function decode
         * @memberof chinese_chess_game.gameStateReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {chinese_chess_game.gameStateReq} gameStateReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        gameStateReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chinese_chess_game.gameStateReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.playerId = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a gameStateReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof chinese_chess_game.gameStateReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {chinese_chess_game.gameStateReq} gameStateReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        gameStateReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a gameStateReq message.
         * @function verify
         * @memberof chinese_chess_game.gameStateReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        gameStateReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (!$util.isInteger(message.playerId))
                    return "playerId: integer expected";
            return null;
        };

        /**
         * Creates a gameStateReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof chinese_chess_game.gameStateReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {chinese_chess_game.gameStateReq} gameStateReq
         */
        gameStateReq.fromObject = function fromObject(object) {
            if (object instanceof $root.chinese_chess_game.gameStateReq)
                return object;
            var message = new $root.chinese_chess_game.gameStateReq();
            if (object.playerId != null)
                message.playerId = object.playerId | 0;
            return message;
        };

        /**
         * Creates a plain object from a gameStateReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof chinese_chess_game.gameStateReq
         * @static
         * @param {chinese_chess_game.gameStateReq} message gameStateReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        gameStateReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.playerId = 0;
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                object.playerId = message.playerId;
            return object;
        };

        /**
         * Converts this gameStateReq to JSON.
         * @function toJSON
         * @memberof chinese_chess_game.gameStateReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        gameStateReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for gameStateReq
         * @function getTypeUrl
         * @memberof chinese_chess_game.gameStateReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        gameStateReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/chinese_chess_game.gameStateReq";
        };

        return gameStateReq;
    })();

    chinese_chess_game.playerInfo = (function() {

        /**
         * Properties of a playerInfo.
         * @memberof chinese_chess_game
         * @interface IplayerInfo
         * @property {number|null} [seatId] playerInfo seatId
         * @property {number|null} [playerId] playerInfo playerId
         * @property {number|null} [teamType] playerInfo teamType
         */

        /**
         * Constructs a new playerInfo.
         * @memberof chinese_chess_game
         * @classdesc Represents a playerInfo.
         * @implements IplayerInfo
         * @constructor
         * @param {chinese_chess_game.IplayerInfo=} [properties] Properties to set
         */
        function playerInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * playerInfo seatId.
         * @member {number} seatId
         * @memberof chinese_chess_game.playerInfo
         * @instance
         */
        playerInfo.prototype.seatId = 0;

        /**
         * playerInfo playerId.
         * @member {number} playerId
         * @memberof chinese_chess_game.playerInfo
         * @instance
         */
        playerInfo.prototype.playerId = 0;

        /**
         * playerInfo teamType.
         * @member {number} teamType
         * @memberof chinese_chess_game.playerInfo
         * @instance
         */
        playerInfo.prototype.teamType = 0;

        /**
         * Creates a new playerInfo instance using the specified properties.
         * @function create
         * @memberof chinese_chess_game.playerInfo
         * @static
         * @param {chinese_chess_game.IplayerInfo=} [properties] Properties to set
         * @returns {chinese_chess_game.playerInfo} playerInfo instance
         */
        playerInfo.create = function create(properties) {
            return new playerInfo(properties);
        };

        /**
         * Encodes the specified playerInfo message. Does not implicitly {@link chinese_chess_game.playerInfo.verify|verify} messages.
         * @function encode
         * @memberof chinese_chess_game.playerInfo
         * @static
         * @param {chinese_chess_game.IplayerInfo} message playerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        playerInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.seatId != null && Object.hasOwnProperty.call(message, "seatId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.seatId);
            if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.playerId);
            if (message.teamType != null && Object.hasOwnProperty.call(message, "teamType"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.teamType);
            return writer;
        };

        /**
         * Encodes the specified playerInfo message, length delimited. Does not implicitly {@link chinese_chess_game.playerInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof chinese_chess_game.playerInfo
         * @static
         * @param {chinese_chess_game.IplayerInfo} message playerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        playerInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a playerInfo message from the specified reader or buffer.
         * @function decode
         * @memberof chinese_chess_game.playerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {chinese_chess_game.playerInfo} playerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        playerInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chinese_chess_game.playerInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.seatId = reader.int32();
                        break;
                    }
                case 2: {
                        message.playerId = reader.int32();
                        break;
                    }
                case 3: {
                        message.teamType = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a playerInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof chinese_chess_game.playerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {chinese_chess_game.playerInfo} playerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        playerInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a playerInfo message.
         * @function verify
         * @memberof chinese_chess_game.playerInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        playerInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.seatId != null && message.hasOwnProperty("seatId"))
                if (!$util.isInteger(message.seatId))
                    return "seatId: integer expected";
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (!$util.isInteger(message.playerId))
                    return "playerId: integer expected";
            if (message.teamType != null && message.hasOwnProperty("teamType"))
                if (!$util.isInteger(message.teamType))
                    return "teamType: integer expected";
            return null;
        };

        /**
         * Creates a playerInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof chinese_chess_game.playerInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {chinese_chess_game.playerInfo} playerInfo
         */
        playerInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.chinese_chess_game.playerInfo)
                return object;
            var message = new $root.chinese_chess_game.playerInfo();
            if (object.seatId != null)
                message.seatId = object.seatId | 0;
            if (object.playerId != null)
                message.playerId = object.playerId | 0;
            if (object.teamType != null)
                message.teamType = object.teamType | 0;
            return message;
        };

        /**
         * Creates a plain object from a playerInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof chinese_chess_game.playerInfo
         * @static
         * @param {chinese_chess_game.playerInfo} message playerInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        playerInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.seatId = 0;
                object.playerId = 0;
                object.teamType = 0;
            }
            if (message.seatId != null && message.hasOwnProperty("seatId"))
                object.seatId = message.seatId;
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                object.playerId = message.playerId;
            if (message.teamType != null && message.hasOwnProperty("teamType"))
                object.teamType = message.teamType;
            return object;
        };

        /**
         * Converts this playerInfo to JSON.
         * @function toJSON
         * @memberof chinese_chess_game.playerInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        playerInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for playerInfo
         * @function getTypeUrl
         * @memberof chinese_chess_game.playerInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        playerInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/chinese_chess_game.playerInfo";
        };

        return playerInfo;
    })();

    chinese_chess_game.oneChess = (function() {

        /**
         * Properties of an oneChess.
         * @memberof chinese_chess_game
         * @interface IoneChess
         * @property {number|null} [chessId] oneChess chessId
         * @property {number|null} [chessType] oneChess chessType
         * @property {number|null} [row] oneChess row
         * @property {number|null} [col] oneChess col
         * @property {number|null} [teamType] oneChess teamType
         */

        /**
         * Constructs a new oneChess.
         * @memberof chinese_chess_game
         * @classdesc Represents an oneChess.
         * @implements IoneChess
         * @constructor
         * @param {chinese_chess_game.IoneChess=} [properties] Properties to set
         */
        function oneChess(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * oneChess chessId.
         * @member {number} chessId
         * @memberof chinese_chess_game.oneChess
         * @instance
         */
        oneChess.prototype.chessId = 0;

        /**
         * oneChess chessType.
         * @member {number} chessType
         * @memberof chinese_chess_game.oneChess
         * @instance
         */
        oneChess.prototype.chessType = 0;

        /**
         * oneChess row.
         * @member {number} row
         * @memberof chinese_chess_game.oneChess
         * @instance
         */
        oneChess.prototype.row = 0;

        /**
         * oneChess col.
         * @member {number} col
         * @memberof chinese_chess_game.oneChess
         * @instance
         */
        oneChess.prototype.col = 0;

        /**
         * oneChess teamType.
         * @member {number} teamType
         * @memberof chinese_chess_game.oneChess
         * @instance
         */
        oneChess.prototype.teamType = 0;

        /**
         * Creates a new oneChess instance using the specified properties.
         * @function create
         * @memberof chinese_chess_game.oneChess
         * @static
         * @param {chinese_chess_game.IoneChess=} [properties] Properties to set
         * @returns {chinese_chess_game.oneChess} oneChess instance
         */
        oneChess.create = function create(properties) {
            return new oneChess(properties);
        };

        /**
         * Encodes the specified oneChess message. Does not implicitly {@link chinese_chess_game.oneChess.verify|verify} messages.
         * @function encode
         * @memberof chinese_chess_game.oneChess
         * @static
         * @param {chinese_chess_game.IoneChess} message oneChess message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        oneChess.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.chessId != null && Object.hasOwnProperty.call(message, "chessId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.chessId);
            if (message.chessType != null && Object.hasOwnProperty.call(message, "chessType"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.chessType);
            if (message.row != null && Object.hasOwnProperty.call(message, "row"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.row);
            if (message.col != null && Object.hasOwnProperty.call(message, "col"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.col);
            if (message.teamType != null && Object.hasOwnProperty.call(message, "teamType"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.teamType);
            return writer;
        };

        /**
         * Encodes the specified oneChess message, length delimited. Does not implicitly {@link chinese_chess_game.oneChess.verify|verify} messages.
         * @function encodeDelimited
         * @memberof chinese_chess_game.oneChess
         * @static
         * @param {chinese_chess_game.IoneChess} message oneChess message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        oneChess.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an oneChess message from the specified reader or buffer.
         * @function decode
         * @memberof chinese_chess_game.oneChess
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {chinese_chess_game.oneChess} oneChess
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        oneChess.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chinese_chess_game.oneChess();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.chessId = reader.int32();
                        break;
                    }
                case 2: {
                        message.chessType = reader.int32();
                        break;
                    }
                case 3: {
                        message.row = reader.int32();
                        break;
                    }
                case 4: {
                        message.col = reader.int32();
                        break;
                    }
                case 5: {
                        message.teamType = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an oneChess message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof chinese_chess_game.oneChess
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {chinese_chess_game.oneChess} oneChess
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        oneChess.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an oneChess message.
         * @function verify
         * @memberof chinese_chess_game.oneChess
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        oneChess.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.chessId != null && message.hasOwnProperty("chessId"))
                if (!$util.isInteger(message.chessId))
                    return "chessId: integer expected";
            if (message.chessType != null && message.hasOwnProperty("chessType"))
                if (!$util.isInteger(message.chessType))
                    return "chessType: integer expected";
            if (message.row != null && message.hasOwnProperty("row"))
                if (!$util.isInteger(message.row))
                    return "row: integer expected";
            if (message.col != null && message.hasOwnProperty("col"))
                if (!$util.isInteger(message.col))
                    return "col: integer expected";
            if (message.teamType != null && message.hasOwnProperty("teamType"))
                if (!$util.isInteger(message.teamType))
                    return "teamType: integer expected";
            return null;
        };

        /**
         * Creates an oneChess message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof chinese_chess_game.oneChess
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {chinese_chess_game.oneChess} oneChess
         */
        oneChess.fromObject = function fromObject(object) {
            if (object instanceof $root.chinese_chess_game.oneChess)
                return object;
            var message = new $root.chinese_chess_game.oneChess();
            if (object.chessId != null)
                message.chessId = object.chessId | 0;
            if (object.chessType != null)
                message.chessType = object.chessType | 0;
            if (object.row != null)
                message.row = object.row | 0;
            if (object.col != null)
                message.col = object.col | 0;
            if (object.teamType != null)
                message.teamType = object.teamType | 0;
            return message;
        };

        /**
         * Creates a plain object from an oneChess message. Also converts values to other types if specified.
         * @function toObject
         * @memberof chinese_chess_game.oneChess
         * @static
         * @param {chinese_chess_game.oneChess} message oneChess
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        oneChess.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.chessId = 0;
                object.chessType = 0;
                object.row = 0;
                object.col = 0;
                object.teamType = 0;
            }
            if (message.chessId != null && message.hasOwnProperty("chessId"))
                object.chessId = message.chessId;
            if (message.chessType != null && message.hasOwnProperty("chessType"))
                object.chessType = message.chessType;
            if (message.row != null && message.hasOwnProperty("row"))
                object.row = message.row;
            if (message.col != null && message.hasOwnProperty("col"))
                object.col = message.col;
            if (message.teamType != null && message.hasOwnProperty("teamType"))
                object.teamType = message.teamType;
            return object;
        };

        /**
         * Converts this oneChess to JSON.
         * @function toJSON
         * @memberof chinese_chess_game.oneChess
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        oneChess.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for oneChess
         * @function getTypeUrl
         * @memberof chinese_chess_game.oneChess
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        oneChess.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/chinese_chess_game.oneChess";
        };

        return oneChess;
    })();

    chinese_chess_game.chessCanMove = (function() {

        /**
         * Properties of a chessCanMove.
         * @memberof chinese_chess_game
         * @interface IchessCanMove
         * @property {number|null} [chessId] chessCanMove chessId
         * @property {Array.<number>|null} [rowList] chessCanMove rowList
         * @property {Array.<number>|null} [colList] chessCanMove colList
         */

        /**
         * Constructs a new chessCanMove.
         * @memberof chinese_chess_game
         * @classdesc Represents a chessCanMove.
         * @implements IchessCanMove
         * @constructor
         * @param {chinese_chess_game.IchessCanMove=} [properties] Properties to set
         */
        function chessCanMove(properties) {
            this.rowList = [];
            this.colList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * chessCanMove chessId.
         * @member {number} chessId
         * @memberof chinese_chess_game.chessCanMove
         * @instance
         */
        chessCanMove.prototype.chessId = 0;

        /**
         * chessCanMove rowList.
         * @member {Array.<number>} rowList
         * @memberof chinese_chess_game.chessCanMove
         * @instance
         */
        chessCanMove.prototype.rowList = $util.emptyArray;

        /**
         * chessCanMove colList.
         * @member {Array.<number>} colList
         * @memberof chinese_chess_game.chessCanMove
         * @instance
         */
        chessCanMove.prototype.colList = $util.emptyArray;

        /**
         * Creates a new chessCanMove instance using the specified properties.
         * @function create
         * @memberof chinese_chess_game.chessCanMove
         * @static
         * @param {chinese_chess_game.IchessCanMove=} [properties] Properties to set
         * @returns {chinese_chess_game.chessCanMove} chessCanMove instance
         */
        chessCanMove.create = function create(properties) {
            return new chessCanMove(properties);
        };

        /**
         * Encodes the specified chessCanMove message. Does not implicitly {@link chinese_chess_game.chessCanMove.verify|verify} messages.
         * @function encode
         * @memberof chinese_chess_game.chessCanMove
         * @static
         * @param {chinese_chess_game.IchessCanMove} message chessCanMove message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        chessCanMove.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.chessId != null && Object.hasOwnProperty.call(message, "chessId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.chessId);
            if (message.rowList != null && message.rowList.length)
                for (var i = 0; i < message.rowList.length; ++i)
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.rowList[i]);
            if (message.colList != null && message.colList.length)
                for (var i = 0; i < message.colList.length; ++i)
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.colList[i]);
            return writer;
        };

        /**
         * Encodes the specified chessCanMove message, length delimited. Does not implicitly {@link chinese_chess_game.chessCanMove.verify|verify} messages.
         * @function encodeDelimited
         * @memberof chinese_chess_game.chessCanMove
         * @static
         * @param {chinese_chess_game.IchessCanMove} message chessCanMove message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        chessCanMove.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a chessCanMove message from the specified reader or buffer.
         * @function decode
         * @memberof chinese_chess_game.chessCanMove
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {chinese_chess_game.chessCanMove} chessCanMove
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        chessCanMove.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chinese_chess_game.chessCanMove();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.chessId = reader.int32();
                        break;
                    }
                case 2: {
                        if (!(message.rowList && message.rowList.length))
                            message.rowList = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.rowList.push(reader.int32());
                        } else
                            message.rowList.push(reader.int32());
                        break;
                    }
                case 3: {
                        if (!(message.colList && message.colList.length))
                            message.colList = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.colList.push(reader.int32());
                        } else
                            message.colList.push(reader.int32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a chessCanMove message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof chinese_chess_game.chessCanMove
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {chinese_chess_game.chessCanMove} chessCanMove
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        chessCanMove.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a chessCanMove message.
         * @function verify
         * @memberof chinese_chess_game.chessCanMove
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        chessCanMove.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.chessId != null && message.hasOwnProperty("chessId"))
                if (!$util.isInteger(message.chessId))
                    return "chessId: integer expected";
            if (message.rowList != null && message.hasOwnProperty("rowList")) {
                if (!Array.isArray(message.rowList))
                    return "rowList: array expected";
                for (var i = 0; i < message.rowList.length; ++i)
                    if (!$util.isInteger(message.rowList[i]))
                        return "rowList: integer[] expected";
            }
            if (message.colList != null && message.hasOwnProperty("colList")) {
                if (!Array.isArray(message.colList))
                    return "colList: array expected";
                for (var i = 0; i < message.colList.length; ++i)
                    if (!$util.isInteger(message.colList[i]))
                        return "colList: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a chessCanMove message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof chinese_chess_game.chessCanMove
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {chinese_chess_game.chessCanMove} chessCanMove
         */
        chessCanMove.fromObject = function fromObject(object) {
            if (object instanceof $root.chinese_chess_game.chessCanMove)
                return object;
            var message = new $root.chinese_chess_game.chessCanMove();
            if (object.chessId != null)
                message.chessId = object.chessId | 0;
            if (object.rowList) {
                if (!Array.isArray(object.rowList))
                    throw TypeError(".chinese_chess_game.chessCanMove.rowList: array expected");
                message.rowList = [];
                for (var i = 0; i < object.rowList.length; ++i)
                    message.rowList[i] = object.rowList[i] | 0;
            }
            if (object.colList) {
                if (!Array.isArray(object.colList))
                    throw TypeError(".chinese_chess_game.chessCanMove.colList: array expected");
                message.colList = [];
                for (var i = 0; i < object.colList.length; ++i)
                    message.colList[i] = object.colList[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a chessCanMove message. Also converts values to other types if specified.
         * @function toObject
         * @memberof chinese_chess_game.chessCanMove
         * @static
         * @param {chinese_chess_game.chessCanMove} message chessCanMove
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        chessCanMove.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.rowList = [];
                object.colList = [];
            }
            if (options.defaults)
                object.chessId = 0;
            if (message.chessId != null && message.hasOwnProperty("chessId"))
                object.chessId = message.chessId;
            if (message.rowList && message.rowList.length) {
                object.rowList = [];
                for (var j = 0; j < message.rowList.length; ++j)
                    object.rowList[j] = message.rowList[j];
            }
            if (message.colList && message.colList.length) {
                object.colList = [];
                for (var j = 0; j < message.colList.length; ++j)
                    object.colList[j] = message.colList[j];
            }
            return object;
        };

        /**
         * Converts this chessCanMove to JSON.
         * @function toJSON
         * @memberof chinese_chess_game.chessCanMove
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        chessCanMove.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for chessCanMove
         * @function getTypeUrl
         * @memberof chinese_chess_game.chessCanMove
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        chessCanMove.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/chinese_chess_game.chessCanMove";
        };

        return chessCanMove;
    })();

    chinese_chess_game.nextDoing = (function() {

        /**
         * Properties of a nextDoing.
         * @memberof chinese_chess_game
         * @interface InextDoing
         * @property {number|null} [seatId] nextDoing seatId
         * @property {number|null} [playerId] nextDoing playerId
         * @property {number|null} [teamType] nextDoing teamType
         * @property {Array.<chinese_chess_game.IchessCanMove>|null} [canMoveList] nextDoing canMoveList
         */

        /**
         * Constructs a new nextDoing.
         * @memberof chinese_chess_game
         * @classdesc Represents a nextDoing.
         * @implements InextDoing
         * @constructor
         * @param {chinese_chess_game.InextDoing=} [properties] Properties to set
         */
        function nextDoing(properties) {
            this.canMoveList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * nextDoing seatId.
         * @member {number} seatId
         * @memberof chinese_chess_game.nextDoing
         * @instance
         */
        nextDoing.prototype.seatId = 0;

        /**
         * nextDoing playerId.
         * @member {number} playerId
         * @memberof chinese_chess_game.nextDoing
         * @instance
         */
        nextDoing.prototype.playerId = 0;

        /**
         * nextDoing teamType.
         * @member {number} teamType
         * @memberof chinese_chess_game.nextDoing
         * @instance
         */
        nextDoing.prototype.teamType = 0;

        /**
         * nextDoing canMoveList.
         * @member {Array.<chinese_chess_game.IchessCanMove>} canMoveList
         * @memberof chinese_chess_game.nextDoing
         * @instance
         */
        nextDoing.prototype.canMoveList = $util.emptyArray;

        /**
         * Creates a new nextDoing instance using the specified properties.
         * @function create
         * @memberof chinese_chess_game.nextDoing
         * @static
         * @param {chinese_chess_game.InextDoing=} [properties] Properties to set
         * @returns {chinese_chess_game.nextDoing} nextDoing instance
         */
        nextDoing.create = function create(properties) {
            return new nextDoing(properties);
        };

        /**
         * Encodes the specified nextDoing message. Does not implicitly {@link chinese_chess_game.nextDoing.verify|verify} messages.
         * @function encode
         * @memberof chinese_chess_game.nextDoing
         * @static
         * @param {chinese_chess_game.InextDoing} message nextDoing message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        nextDoing.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.seatId != null && Object.hasOwnProperty.call(message, "seatId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.seatId);
            if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.playerId);
            if (message.teamType != null && Object.hasOwnProperty.call(message, "teamType"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.teamType);
            if (message.canMoveList != null && message.canMoveList.length)
                for (var i = 0; i < message.canMoveList.length; ++i)
                    $root.chinese_chess_game.chessCanMove.encode(message.canMoveList[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified nextDoing message, length delimited. Does not implicitly {@link chinese_chess_game.nextDoing.verify|verify} messages.
         * @function encodeDelimited
         * @memberof chinese_chess_game.nextDoing
         * @static
         * @param {chinese_chess_game.InextDoing} message nextDoing message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        nextDoing.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a nextDoing message from the specified reader or buffer.
         * @function decode
         * @memberof chinese_chess_game.nextDoing
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {chinese_chess_game.nextDoing} nextDoing
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        nextDoing.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chinese_chess_game.nextDoing();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.seatId = reader.int32();
                        break;
                    }
                case 2: {
                        message.playerId = reader.int32();
                        break;
                    }
                case 3: {
                        message.teamType = reader.int32();
                        break;
                    }
                case 4: {
                        if (!(message.canMoveList && message.canMoveList.length))
                            message.canMoveList = [];
                        message.canMoveList.push($root.chinese_chess_game.chessCanMove.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a nextDoing message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof chinese_chess_game.nextDoing
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {chinese_chess_game.nextDoing} nextDoing
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        nextDoing.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a nextDoing message.
         * @function verify
         * @memberof chinese_chess_game.nextDoing
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        nextDoing.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.seatId != null && message.hasOwnProperty("seatId"))
                if (!$util.isInteger(message.seatId))
                    return "seatId: integer expected";
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (!$util.isInteger(message.playerId))
                    return "playerId: integer expected";
            if (message.teamType != null && message.hasOwnProperty("teamType"))
                if (!$util.isInteger(message.teamType))
                    return "teamType: integer expected";
            if (message.canMoveList != null && message.hasOwnProperty("canMoveList")) {
                if (!Array.isArray(message.canMoveList))
                    return "canMoveList: array expected";
                for (var i = 0; i < message.canMoveList.length; ++i) {
                    var error = $root.chinese_chess_game.chessCanMove.verify(message.canMoveList[i]);
                    if (error)
                        return "canMoveList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a nextDoing message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof chinese_chess_game.nextDoing
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {chinese_chess_game.nextDoing} nextDoing
         */
        nextDoing.fromObject = function fromObject(object) {
            if (object instanceof $root.chinese_chess_game.nextDoing)
                return object;
            var message = new $root.chinese_chess_game.nextDoing();
            if (object.seatId != null)
                message.seatId = object.seatId | 0;
            if (object.playerId != null)
                message.playerId = object.playerId | 0;
            if (object.teamType != null)
                message.teamType = object.teamType | 0;
            if (object.canMoveList) {
                if (!Array.isArray(object.canMoveList))
                    throw TypeError(".chinese_chess_game.nextDoing.canMoveList: array expected");
                message.canMoveList = [];
                for (var i = 0; i < object.canMoveList.length; ++i) {
                    if (typeof object.canMoveList[i] !== "object")
                        throw TypeError(".chinese_chess_game.nextDoing.canMoveList: object expected");
                    message.canMoveList[i] = $root.chinese_chess_game.chessCanMove.fromObject(object.canMoveList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a nextDoing message. Also converts values to other types if specified.
         * @function toObject
         * @memberof chinese_chess_game.nextDoing
         * @static
         * @param {chinese_chess_game.nextDoing} message nextDoing
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        nextDoing.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.canMoveList = [];
            if (options.defaults) {
                object.seatId = 0;
                object.playerId = 0;
                object.teamType = 0;
            }
            if (message.seatId != null && message.hasOwnProperty("seatId"))
                object.seatId = message.seatId;
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                object.playerId = message.playerId;
            if (message.teamType != null && message.hasOwnProperty("teamType"))
                object.teamType = message.teamType;
            if (message.canMoveList && message.canMoveList.length) {
                object.canMoveList = [];
                for (var j = 0; j < message.canMoveList.length; ++j)
                    object.canMoveList[j] = $root.chinese_chess_game.chessCanMove.toObject(message.canMoveList[j], options);
            }
            return object;
        };

        /**
         * Converts this nextDoing to JSON.
         * @function toJSON
         * @memberof chinese_chess_game.nextDoing
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        nextDoing.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for nextDoing
         * @function getTypeUrl
         * @memberof chinese_chess_game.nextDoing
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        nextDoing.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/chinese_chess_game.nextDoing";
        };

        return nextDoing;
    })();

    chinese_chess_game.gameStateRes = (function() {

        /**
         * Properties of a gameStateRes.
         * @memberof chinese_chess_game
         * @interface IgameStateRes
         * @property {number|null} [state] gameStateRes state
         * @property {Array.<chinese_chess_game.IplayerInfo>|null} [playerList] gameStateRes playerList
         * @property {Array.<chinese_chess_game.IoneChess>|null} [chessList] gameStateRes chessList
         * @property {chinese_chess_game.InextDoing|null} [nextDoing] gameStateRes nextDoing
         */

        /**
         * Constructs a new gameStateRes.
         * @memberof chinese_chess_game
         * @classdesc Represents a gameStateRes.
         * @implements IgameStateRes
         * @constructor
         * @param {chinese_chess_game.IgameStateRes=} [properties] Properties to set
         */
        function gameStateRes(properties) {
            this.playerList = [];
            this.chessList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * gameStateRes state.
         * @member {number} state
         * @memberof chinese_chess_game.gameStateRes
         * @instance
         */
        gameStateRes.prototype.state = 0;

        /**
         * gameStateRes playerList.
         * @member {Array.<chinese_chess_game.IplayerInfo>} playerList
         * @memberof chinese_chess_game.gameStateRes
         * @instance
         */
        gameStateRes.prototype.playerList = $util.emptyArray;

        /**
         * gameStateRes chessList.
         * @member {Array.<chinese_chess_game.IoneChess>} chessList
         * @memberof chinese_chess_game.gameStateRes
         * @instance
         */
        gameStateRes.prototype.chessList = $util.emptyArray;

        /**
         * gameStateRes nextDoing.
         * @member {chinese_chess_game.InextDoing|null|undefined} nextDoing
         * @memberof chinese_chess_game.gameStateRes
         * @instance
         */
        gameStateRes.prototype.nextDoing = null;

        /**
         * Creates a new gameStateRes instance using the specified properties.
         * @function create
         * @memberof chinese_chess_game.gameStateRes
         * @static
         * @param {chinese_chess_game.IgameStateRes=} [properties] Properties to set
         * @returns {chinese_chess_game.gameStateRes} gameStateRes instance
         */
        gameStateRes.create = function create(properties) {
            return new gameStateRes(properties);
        };

        /**
         * Encodes the specified gameStateRes message. Does not implicitly {@link chinese_chess_game.gameStateRes.verify|verify} messages.
         * @function encode
         * @memberof chinese_chess_game.gameStateRes
         * @static
         * @param {chinese_chess_game.IgameStateRes} message gameStateRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        gameStateRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.state);
            if (message.playerList != null && message.playerList.length)
                for (var i = 0; i < message.playerList.length; ++i)
                    $root.chinese_chess_game.playerInfo.encode(message.playerList[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.chessList != null && message.chessList.length)
                for (var i = 0; i < message.chessList.length; ++i)
                    $root.chinese_chess_game.oneChess.encode(message.chessList[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.nextDoing != null && Object.hasOwnProperty.call(message, "nextDoing"))
                $root.chinese_chess_game.nextDoing.encode(message.nextDoing, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified gameStateRes message, length delimited. Does not implicitly {@link chinese_chess_game.gameStateRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof chinese_chess_game.gameStateRes
         * @static
         * @param {chinese_chess_game.IgameStateRes} message gameStateRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        gameStateRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a gameStateRes message from the specified reader or buffer.
         * @function decode
         * @memberof chinese_chess_game.gameStateRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {chinese_chess_game.gameStateRes} gameStateRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        gameStateRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chinese_chess_game.gameStateRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.state = reader.int32();
                        break;
                    }
                case 2: {
                        if (!(message.playerList && message.playerList.length))
                            message.playerList = [];
                        message.playerList.push($root.chinese_chess_game.playerInfo.decode(reader, reader.uint32()));
                        break;
                    }
                case 3: {
                        if (!(message.chessList && message.chessList.length))
                            message.chessList = [];
                        message.chessList.push($root.chinese_chess_game.oneChess.decode(reader, reader.uint32()));
                        break;
                    }
                case 4: {
                        message.nextDoing = $root.chinese_chess_game.nextDoing.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a gameStateRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof chinese_chess_game.gameStateRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {chinese_chess_game.gameStateRes} gameStateRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        gameStateRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a gameStateRes message.
         * @function verify
         * @memberof chinese_chess_game.gameStateRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        gameStateRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.state != null && message.hasOwnProperty("state"))
                if (!$util.isInteger(message.state))
                    return "state: integer expected";
            if (message.playerList != null && message.hasOwnProperty("playerList")) {
                if (!Array.isArray(message.playerList))
                    return "playerList: array expected";
                for (var i = 0; i < message.playerList.length; ++i) {
                    var error = $root.chinese_chess_game.playerInfo.verify(message.playerList[i]);
                    if (error)
                        return "playerList." + error;
                }
            }
            if (message.chessList != null && message.hasOwnProperty("chessList")) {
                if (!Array.isArray(message.chessList))
                    return "chessList: array expected";
                for (var i = 0; i < message.chessList.length; ++i) {
                    var error = $root.chinese_chess_game.oneChess.verify(message.chessList[i]);
                    if (error)
                        return "chessList." + error;
                }
            }
            if (message.nextDoing != null && message.hasOwnProperty("nextDoing")) {
                var error = $root.chinese_chess_game.nextDoing.verify(message.nextDoing);
                if (error)
                    return "nextDoing." + error;
            }
            return null;
        };

        /**
         * Creates a gameStateRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof chinese_chess_game.gameStateRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {chinese_chess_game.gameStateRes} gameStateRes
         */
        gameStateRes.fromObject = function fromObject(object) {
            if (object instanceof $root.chinese_chess_game.gameStateRes)
                return object;
            var message = new $root.chinese_chess_game.gameStateRes();
            if (object.state != null)
                message.state = object.state | 0;
            if (object.playerList) {
                if (!Array.isArray(object.playerList))
                    throw TypeError(".chinese_chess_game.gameStateRes.playerList: array expected");
                message.playerList = [];
                for (var i = 0; i < object.playerList.length; ++i) {
                    if (typeof object.playerList[i] !== "object")
                        throw TypeError(".chinese_chess_game.gameStateRes.playerList: object expected");
                    message.playerList[i] = $root.chinese_chess_game.playerInfo.fromObject(object.playerList[i]);
                }
            }
            if (object.chessList) {
                if (!Array.isArray(object.chessList))
                    throw TypeError(".chinese_chess_game.gameStateRes.chessList: array expected");
                message.chessList = [];
                for (var i = 0; i < object.chessList.length; ++i) {
                    if (typeof object.chessList[i] !== "object")
                        throw TypeError(".chinese_chess_game.gameStateRes.chessList: object expected");
                    message.chessList[i] = $root.chinese_chess_game.oneChess.fromObject(object.chessList[i]);
                }
            }
            if (object.nextDoing != null) {
                if (typeof object.nextDoing !== "object")
                    throw TypeError(".chinese_chess_game.gameStateRes.nextDoing: object expected");
                message.nextDoing = $root.chinese_chess_game.nextDoing.fromObject(object.nextDoing);
            }
            return message;
        };

        /**
         * Creates a plain object from a gameStateRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof chinese_chess_game.gameStateRes
         * @static
         * @param {chinese_chess_game.gameStateRes} message gameStateRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        gameStateRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.playerList = [];
                object.chessList = [];
            }
            if (options.defaults) {
                object.state = 0;
                object.nextDoing = null;
            }
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = message.state;
            if (message.playerList && message.playerList.length) {
                object.playerList = [];
                for (var j = 0; j < message.playerList.length; ++j)
                    object.playerList[j] = $root.chinese_chess_game.playerInfo.toObject(message.playerList[j], options);
            }
            if (message.chessList && message.chessList.length) {
                object.chessList = [];
                for (var j = 0; j < message.chessList.length; ++j)
                    object.chessList[j] = $root.chinese_chess_game.oneChess.toObject(message.chessList[j], options);
            }
            if (message.nextDoing != null && message.hasOwnProperty("nextDoing"))
                object.nextDoing = $root.chinese_chess_game.nextDoing.toObject(message.nextDoing, options);
            return object;
        };

        /**
         * Converts this gameStateRes to JSON.
         * @function toJSON
         * @memberof chinese_chess_game.gameStateRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        gameStateRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for gameStateRes
         * @function getTypeUrl
         * @memberof chinese_chess_game.gameStateRes
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        gameStateRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/chinese_chess_game.gameStateRes";
        };

        return gameStateRes;
    })();

    chinese_chess_game.moveReq = (function() {

        /**
         * Properties of a moveReq.
         * @memberof chinese_chess_game
         * @interface ImoveReq
         * @property {number|null} [chessId] moveReq chessId
         * @property {number|null} [moveRow] moveReq moveRow
         * @property {number|null} [moveCol] moveReq moveCol
         */

        /**
         * Constructs a new moveReq.
         * @memberof chinese_chess_game
         * @classdesc Represents a moveReq.
         * @implements ImoveReq
         * @constructor
         * @param {chinese_chess_game.ImoveReq=} [properties] Properties to set
         */
        function moveReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * moveReq chessId.
         * @member {number} chessId
         * @memberof chinese_chess_game.moveReq
         * @instance
         */
        moveReq.prototype.chessId = 0;

        /**
         * moveReq moveRow.
         * @member {number} moveRow
         * @memberof chinese_chess_game.moveReq
         * @instance
         */
        moveReq.prototype.moveRow = 0;

        /**
         * moveReq moveCol.
         * @member {number} moveCol
         * @memberof chinese_chess_game.moveReq
         * @instance
         */
        moveReq.prototype.moveCol = 0;

        /**
         * Creates a new moveReq instance using the specified properties.
         * @function create
         * @memberof chinese_chess_game.moveReq
         * @static
         * @param {chinese_chess_game.ImoveReq=} [properties] Properties to set
         * @returns {chinese_chess_game.moveReq} moveReq instance
         */
        moveReq.create = function create(properties) {
            return new moveReq(properties);
        };

        /**
         * Encodes the specified moveReq message. Does not implicitly {@link chinese_chess_game.moveReq.verify|verify} messages.
         * @function encode
         * @memberof chinese_chess_game.moveReq
         * @static
         * @param {chinese_chess_game.ImoveReq} message moveReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        moveReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.chessId != null && Object.hasOwnProperty.call(message, "chessId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.chessId);
            if (message.moveRow != null && Object.hasOwnProperty.call(message, "moveRow"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.moveRow);
            if (message.moveCol != null && Object.hasOwnProperty.call(message, "moveCol"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.moveCol);
            return writer;
        };

        /**
         * Encodes the specified moveReq message, length delimited. Does not implicitly {@link chinese_chess_game.moveReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof chinese_chess_game.moveReq
         * @static
         * @param {chinese_chess_game.ImoveReq} message moveReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        moveReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a moveReq message from the specified reader or buffer.
         * @function decode
         * @memberof chinese_chess_game.moveReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {chinese_chess_game.moveReq} moveReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        moveReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chinese_chess_game.moveReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.chessId = reader.int32();
                        break;
                    }
                case 2: {
                        message.moveRow = reader.int32();
                        break;
                    }
                case 3: {
                        message.moveCol = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a moveReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof chinese_chess_game.moveReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {chinese_chess_game.moveReq} moveReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        moveReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a moveReq message.
         * @function verify
         * @memberof chinese_chess_game.moveReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        moveReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.chessId != null && message.hasOwnProperty("chessId"))
                if (!$util.isInteger(message.chessId))
                    return "chessId: integer expected";
            if (message.moveRow != null && message.hasOwnProperty("moveRow"))
                if (!$util.isInteger(message.moveRow))
                    return "moveRow: integer expected";
            if (message.moveCol != null && message.hasOwnProperty("moveCol"))
                if (!$util.isInteger(message.moveCol))
                    return "moveCol: integer expected";
            return null;
        };

        /**
         * Creates a moveReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof chinese_chess_game.moveReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {chinese_chess_game.moveReq} moveReq
         */
        moveReq.fromObject = function fromObject(object) {
            if (object instanceof $root.chinese_chess_game.moveReq)
                return object;
            var message = new $root.chinese_chess_game.moveReq();
            if (object.chessId != null)
                message.chessId = object.chessId | 0;
            if (object.moveRow != null)
                message.moveRow = object.moveRow | 0;
            if (object.moveCol != null)
                message.moveCol = object.moveCol | 0;
            return message;
        };

        /**
         * Creates a plain object from a moveReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof chinese_chess_game.moveReq
         * @static
         * @param {chinese_chess_game.moveReq} message moveReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        moveReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.chessId = 0;
                object.moveRow = 0;
                object.moveCol = 0;
            }
            if (message.chessId != null && message.hasOwnProperty("chessId"))
                object.chessId = message.chessId;
            if (message.moveRow != null && message.hasOwnProperty("moveRow"))
                object.moveRow = message.moveRow;
            if (message.moveCol != null && message.hasOwnProperty("moveCol"))
                object.moveCol = message.moveCol;
            return object;
        };

        /**
         * Converts this moveReq to JSON.
         * @function toJSON
         * @memberof chinese_chess_game.moveReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        moveReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for moveReq
         * @function getTypeUrl
         * @memberof chinese_chess_game.moveReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        moveReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/chinese_chess_game.moveReq";
        };

        return moveReq;
    })();

    chinese_chess_game.moveRes = (function() {

        /**
         * Properties of a moveRes.
         * @memberof chinese_chess_game
         * @interface ImoveRes
         * @property {number|null} [chessId] moveRes chessId
         * @property {number|null} [moveRow] moveRes moveRow
         * @property {number|null} [moveCol] moveRes moveCol
         */

        /**
         * Constructs a new moveRes.
         * @memberof chinese_chess_game
         * @classdesc Represents a moveRes.
         * @implements ImoveRes
         * @constructor
         * @param {chinese_chess_game.ImoveRes=} [properties] Properties to set
         */
        function moveRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * moveRes chessId.
         * @member {number} chessId
         * @memberof chinese_chess_game.moveRes
         * @instance
         */
        moveRes.prototype.chessId = 0;

        /**
         * moveRes moveRow.
         * @member {number} moveRow
         * @memberof chinese_chess_game.moveRes
         * @instance
         */
        moveRes.prototype.moveRow = 0;

        /**
         * moveRes moveCol.
         * @member {number} moveCol
         * @memberof chinese_chess_game.moveRes
         * @instance
         */
        moveRes.prototype.moveCol = 0;

        /**
         * Creates a new moveRes instance using the specified properties.
         * @function create
         * @memberof chinese_chess_game.moveRes
         * @static
         * @param {chinese_chess_game.ImoveRes=} [properties] Properties to set
         * @returns {chinese_chess_game.moveRes} moveRes instance
         */
        moveRes.create = function create(properties) {
            return new moveRes(properties);
        };

        /**
         * Encodes the specified moveRes message. Does not implicitly {@link chinese_chess_game.moveRes.verify|verify} messages.
         * @function encode
         * @memberof chinese_chess_game.moveRes
         * @static
         * @param {chinese_chess_game.ImoveRes} message moveRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        moveRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.chessId != null && Object.hasOwnProperty.call(message, "chessId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.chessId);
            if (message.moveRow != null && Object.hasOwnProperty.call(message, "moveRow"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.moveRow);
            if (message.moveCol != null && Object.hasOwnProperty.call(message, "moveCol"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.moveCol);
            return writer;
        };

        /**
         * Encodes the specified moveRes message, length delimited. Does not implicitly {@link chinese_chess_game.moveRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof chinese_chess_game.moveRes
         * @static
         * @param {chinese_chess_game.ImoveRes} message moveRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        moveRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a moveRes message from the specified reader or buffer.
         * @function decode
         * @memberof chinese_chess_game.moveRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {chinese_chess_game.moveRes} moveRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        moveRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chinese_chess_game.moveRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.chessId = reader.int32();
                        break;
                    }
                case 2: {
                        message.moveRow = reader.int32();
                        break;
                    }
                case 3: {
                        message.moveCol = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a moveRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof chinese_chess_game.moveRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {chinese_chess_game.moveRes} moveRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        moveRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a moveRes message.
         * @function verify
         * @memberof chinese_chess_game.moveRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        moveRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.chessId != null && message.hasOwnProperty("chessId"))
                if (!$util.isInteger(message.chessId))
                    return "chessId: integer expected";
            if (message.moveRow != null && message.hasOwnProperty("moveRow"))
                if (!$util.isInteger(message.moveRow))
                    return "moveRow: integer expected";
            if (message.moveCol != null && message.hasOwnProperty("moveCol"))
                if (!$util.isInteger(message.moveCol))
                    return "moveCol: integer expected";
            return null;
        };

        /**
         * Creates a moveRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof chinese_chess_game.moveRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {chinese_chess_game.moveRes} moveRes
         */
        moveRes.fromObject = function fromObject(object) {
            if (object instanceof $root.chinese_chess_game.moveRes)
                return object;
            var message = new $root.chinese_chess_game.moveRes();
            if (object.chessId != null)
                message.chessId = object.chessId | 0;
            if (object.moveRow != null)
                message.moveRow = object.moveRow | 0;
            if (object.moveCol != null)
                message.moveCol = object.moveCol | 0;
            return message;
        };

        /**
         * Creates a plain object from a moveRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof chinese_chess_game.moveRes
         * @static
         * @param {chinese_chess_game.moveRes} message moveRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        moveRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.chessId = 0;
                object.moveRow = 0;
                object.moveCol = 0;
            }
            if (message.chessId != null && message.hasOwnProperty("chessId"))
                object.chessId = message.chessId;
            if (message.moveRow != null && message.hasOwnProperty("moveRow"))
                object.moveRow = message.moveRow;
            if (message.moveCol != null && message.hasOwnProperty("moveCol"))
                object.moveCol = message.moveCol;
            return object;
        };

        /**
         * Converts this moveRes to JSON.
         * @function toJSON
         * @memberof chinese_chess_game.moveRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        moveRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for moveRes
         * @function getTypeUrl
         * @memberof chinese_chess_game.moveRes
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        moveRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/chinese_chess_game.moveRes";
        };

        return moveRes;
    })();

    return chinese_chess_game;
})();

$root.chinese_chess_hall = (function() {

    /**
     * Namespace chinese_chess_hall.
     * @exports chinese_chess_hall
     * @namespace
     */
    var chinese_chess_hall = {};

    chinese_chess_hall.matchReq = (function() {

        /**
         * Properties of a matchReq.
         * @memberof chinese_chess_hall
         * @interface ImatchReq
         * @property {number|null} [playerId] matchReq playerId
         */

        /**
         * Constructs a new matchReq.
         * @memberof chinese_chess_hall
         * @classdesc Represents a matchReq.
         * @implements ImatchReq
         * @constructor
         * @param {chinese_chess_hall.ImatchReq=} [properties] Properties to set
         */
        function matchReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * matchReq playerId.
         * @member {number} playerId
         * @memberof chinese_chess_hall.matchReq
         * @instance
         */
        matchReq.prototype.playerId = 0;

        /**
         * Creates a new matchReq instance using the specified properties.
         * @function create
         * @memberof chinese_chess_hall.matchReq
         * @static
         * @param {chinese_chess_hall.ImatchReq=} [properties] Properties to set
         * @returns {chinese_chess_hall.matchReq} matchReq instance
         */
        matchReq.create = function create(properties) {
            return new matchReq(properties);
        };

        /**
         * Encodes the specified matchReq message. Does not implicitly {@link chinese_chess_hall.matchReq.verify|verify} messages.
         * @function encode
         * @memberof chinese_chess_hall.matchReq
         * @static
         * @param {chinese_chess_hall.ImatchReq} message matchReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        matchReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.playerId);
            return writer;
        };

        /**
         * Encodes the specified matchReq message, length delimited. Does not implicitly {@link chinese_chess_hall.matchReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof chinese_chess_hall.matchReq
         * @static
         * @param {chinese_chess_hall.ImatchReq} message matchReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        matchReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a matchReq message from the specified reader or buffer.
         * @function decode
         * @memberof chinese_chess_hall.matchReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {chinese_chess_hall.matchReq} matchReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        matchReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chinese_chess_hall.matchReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.playerId = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a matchReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof chinese_chess_hall.matchReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {chinese_chess_hall.matchReq} matchReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        matchReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a matchReq message.
         * @function verify
         * @memberof chinese_chess_hall.matchReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        matchReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (!$util.isInteger(message.playerId))
                    return "playerId: integer expected";
            return null;
        };

        /**
         * Creates a matchReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof chinese_chess_hall.matchReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {chinese_chess_hall.matchReq} matchReq
         */
        matchReq.fromObject = function fromObject(object) {
            if (object instanceof $root.chinese_chess_hall.matchReq)
                return object;
            var message = new $root.chinese_chess_hall.matchReq();
            if (object.playerId != null)
                message.playerId = object.playerId | 0;
            return message;
        };

        /**
         * Creates a plain object from a matchReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof chinese_chess_hall.matchReq
         * @static
         * @param {chinese_chess_hall.matchReq} message matchReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        matchReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.playerId = 0;
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                object.playerId = message.playerId;
            return object;
        };

        /**
         * Converts this matchReq to JSON.
         * @function toJSON
         * @memberof chinese_chess_hall.matchReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        matchReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for matchReq
         * @function getTypeUrl
         * @memberof chinese_chess_hall.matchReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        matchReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/chinese_chess_hall.matchReq";
        };

        return matchReq;
    })();

    chinese_chess_hall.matchRes = (function() {

        /**
         * Properties of a matchRes.
         * @memberof chinese_chess_hall
         * @interface ImatchRes
         * @property {number|null} [tableId] matchRes tableId
         */

        /**
         * Constructs a new matchRes.
         * @memberof chinese_chess_hall
         * @classdesc Represents a matchRes.
         * @implements ImatchRes
         * @constructor
         * @param {chinese_chess_hall.ImatchRes=} [properties] Properties to set
         */
        function matchRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * matchRes tableId.
         * @member {number} tableId
         * @memberof chinese_chess_hall.matchRes
         * @instance
         */
        matchRes.prototype.tableId = 0;

        /**
         * Creates a new matchRes instance using the specified properties.
         * @function create
         * @memberof chinese_chess_hall.matchRes
         * @static
         * @param {chinese_chess_hall.ImatchRes=} [properties] Properties to set
         * @returns {chinese_chess_hall.matchRes} matchRes instance
         */
        matchRes.create = function create(properties) {
            return new matchRes(properties);
        };

        /**
         * Encodes the specified matchRes message. Does not implicitly {@link chinese_chess_hall.matchRes.verify|verify} messages.
         * @function encode
         * @memberof chinese_chess_hall.matchRes
         * @static
         * @param {chinese_chess_hall.ImatchRes} message matchRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        matchRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tableId != null && Object.hasOwnProperty.call(message, "tableId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.tableId);
            return writer;
        };

        /**
         * Encodes the specified matchRes message, length delimited. Does not implicitly {@link chinese_chess_hall.matchRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof chinese_chess_hall.matchRes
         * @static
         * @param {chinese_chess_hall.ImatchRes} message matchRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        matchRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a matchRes message from the specified reader or buffer.
         * @function decode
         * @memberof chinese_chess_hall.matchRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {chinese_chess_hall.matchRes} matchRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        matchRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chinese_chess_hall.matchRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.tableId = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a matchRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof chinese_chess_hall.matchRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {chinese_chess_hall.matchRes} matchRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        matchRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a matchRes message.
         * @function verify
         * @memberof chinese_chess_hall.matchRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        matchRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                if (!$util.isInteger(message.tableId))
                    return "tableId: integer expected";
            return null;
        };

        /**
         * Creates a matchRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof chinese_chess_hall.matchRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {chinese_chess_hall.matchRes} matchRes
         */
        matchRes.fromObject = function fromObject(object) {
            if (object instanceof $root.chinese_chess_hall.matchRes)
                return object;
            var message = new $root.chinese_chess_hall.matchRes();
            if (object.tableId != null)
                message.tableId = object.tableId | 0;
            return message;
        };

        /**
         * Creates a plain object from a matchRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof chinese_chess_hall.matchRes
         * @static
         * @param {chinese_chess_hall.matchRes} message matchRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        matchRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.tableId = 0;
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                object.tableId = message.tableId;
            return object;
        };

        /**
         * Converts this matchRes to JSON.
         * @function toJSON
         * @memberof chinese_chess_hall.matchRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        matchRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for matchRes
         * @function getTypeUrl
         * @memberof chinese_chess_hall.matchRes
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        matchRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/chinese_chess_hall.matchRes";
        };

        return matchRes;
    })();

    return chinese_chess_hall;
})();

$root.chinese_chess_login = (function() {

    /**
     * Namespace chinese_chess_login.
     * @exports chinese_chess_login
     * @namespace
     */
    var chinese_chess_login = {};

    chinese_chess_login.LoginReq = (function() {

        /**
         * Properties of a LoginReq.
         * @memberof chinese_chess_login
         * @interface ILoginReq
         * @property {string|null} [token] LoginReq token
         * @property {number|null} [playerId] LoginReq playerId
         */

        /**
         * Constructs a new LoginReq.
         * @memberof chinese_chess_login
         * @classdesc Represents a LoginReq.
         * @implements ILoginReq
         * @constructor
         * @param {chinese_chess_login.ILoginReq=} [properties] Properties to set
         */
        function LoginReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginReq token.
         * @member {string} token
         * @memberof chinese_chess_login.LoginReq
         * @instance
         */
        LoginReq.prototype.token = "";

        /**
         * LoginReq playerId.
         * @member {number} playerId
         * @memberof chinese_chess_login.LoginReq
         * @instance
         */
        LoginReq.prototype.playerId = 0;

        /**
         * Creates a new LoginReq instance using the specified properties.
         * @function create
         * @memberof chinese_chess_login.LoginReq
         * @static
         * @param {chinese_chess_login.ILoginReq=} [properties] Properties to set
         * @returns {chinese_chess_login.LoginReq} LoginReq instance
         */
        LoginReq.create = function create(properties) {
            return new LoginReq(properties);
        };

        /**
         * Encodes the specified LoginReq message. Does not implicitly {@link chinese_chess_login.LoginReq.verify|verify} messages.
         * @function encode
         * @memberof chinese_chess_login.LoginReq
         * @static
         * @param {chinese_chess_login.ILoginReq} message LoginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
            if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.playerId);
            return writer;
        };

        /**
         * Encodes the specified LoginReq message, length delimited. Does not implicitly {@link chinese_chess_login.LoginReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof chinese_chess_login.LoginReq
         * @static
         * @param {chinese_chess_login.ILoginReq} message LoginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginReq message from the specified reader or buffer.
         * @function decode
         * @memberof chinese_chess_login.LoginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {chinese_chess_login.LoginReq} LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chinese_chess_login.LoginReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.token = reader.string();
                        break;
                    }
                case 2: {
                        message.playerId = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof chinese_chess_login.LoginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {chinese_chess_login.LoginReq} LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginReq message.
         * @function verify
         * @memberof chinese_chess_login.LoginReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (!$util.isInteger(message.playerId))
                    return "playerId: integer expected";
            return null;
        };

        /**
         * Creates a LoginReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof chinese_chess_login.LoginReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {chinese_chess_login.LoginReq} LoginReq
         */
        LoginReq.fromObject = function fromObject(object) {
            if (object instanceof $root.chinese_chess_login.LoginReq)
                return object;
            var message = new $root.chinese_chess_login.LoginReq();
            if (object.token != null)
                message.token = String(object.token);
            if (object.playerId != null)
                message.playerId = object.playerId | 0;
            return message;
        };

        /**
         * Creates a plain object from a LoginReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof chinese_chess_login.LoginReq
         * @static
         * @param {chinese_chess_login.LoginReq} message LoginReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.token = "";
                object.playerId = 0;
            }
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                object.playerId = message.playerId;
            return object;
        };

        /**
         * Converts this LoginReq to JSON.
         * @function toJSON
         * @memberof chinese_chess_login.LoginReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LoginReq
         * @function getTypeUrl
         * @memberof chinese_chess_login.LoginReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LoginReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/chinese_chess_login.LoginReq";
        };

        return LoginReq;
    })();

    chinese_chess_login.LoginRes = (function() {

        /**
         * Properties of a LoginRes.
         * @memberof chinese_chess_login
         * @interface ILoginRes
         * @property {number|null} [playerId] LoginRes playerId
         */

        /**
         * Constructs a new LoginRes.
         * @memberof chinese_chess_login
         * @classdesc Represents a LoginRes.
         * @implements ILoginRes
         * @constructor
         * @param {chinese_chess_login.ILoginRes=} [properties] Properties to set
         */
        function LoginRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginRes playerId.
         * @member {number} playerId
         * @memberof chinese_chess_login.LoginRes
         * @instance
         */
        LoginRes.prototype.playerId = 0;

        /**
         * Creates a new LoginRes instance using the specified properties.
         * @function create
         * @memberof chinese_chess_login.LoginRes
         * @static
         * @param {chinese_chess_login.ILoginRes=} [properties] Properties to set
         * @returns {chinese_chess_login.LoginRes} LoginRes instance
         */
        LoginRes.create = function create(properties) {
            return new LoginRes(properties);
        };

        /**
         * Encodes the specified LoginRes message. Does not implicitly {@link chinese_chess_login.LoginRes.verify|verify} messages.
         * @function encode
         * @memberof chinese_chess_login.LoginRes
         * @static
         * @param {chinese_chess_login.ILoginRes} message LoginRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.playerId);
            return writer;
        };

        /**
         * Encodes the specified LoginRes message, length delimited. Does not implicitly {@link chinese_chess_login.LoginRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof chinese_chess_login.LoginRes
         * @static
         * @param {chinese_chess_login.ILoginRes} message LoginRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginRes message from the specified reader or buffer.
         * @function decode
         * @memberof chinese_chess_login.LoginRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {chinese_chess_login.LoginRes} LoginRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chinese_chess_login.LoginRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.playerId = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof chinese_chess_login.LoginRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {chinese_chess_login.LoginRes} LoginRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginRes message.
         * @function verify
         * @memberof chinese_chess_login.LoginRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (!$util.isInteger(message.playerId))
                    return "playerId: integer expected";
            return null;
        };

        /**
         * Creates a LoginRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof chinese_chess_login.LoginRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {chinese_chess_login.LoginRes} LoginRes
         */
        LoginRes.fromObject = function fromObject(object) {
            if (object instanceof $root.chinese_chess_login.LoginRes)
                return object;
            var message = new $root.chinese_chess_login.LoginRes();
            if (object.playerId != null)
                message.playerId = object.playerId | 0;
            return message;
        };

        /**
         * Creates a plain object from a LoginRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof chinese_chess_login.LoginRes
         * @static
         * @param {chinese_chess_login.LoginRes} message LoginRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.playerId = 0;
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                object.playerId = message.playerId;
            return object;
        };

        /**
         * Converts this LoginRes to JSON.
         * @function toJSON
         * @memberof chinese_chess_login.LoginRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LoginRes
         * @function getTypeUrl
         * @memberof chinese_chess_login.LoginRes
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LoginRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/chinese_chess_login.LoginRes";
        };

        return LoginRes;
    })();

    return chinese_chess_login;
})();

module.exports = $root;
