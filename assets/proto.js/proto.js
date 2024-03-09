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
         * @property {number|Long|null} [playerId] gameStateReq playerId
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
         * @member {number|Long} playerId
         * @memberof chinese_chess_game.gameStateReq
         * @instance
         */
        gameStateReq.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

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
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
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
                        message.playerId = reader.int64();
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
                if (!$util.isInteger(message.playerId) && !(message.playerId && $util.isInteger(message.playerId.low) && $util.isInteger(message.playerId.high)))
                    return "playerId: integer|Long expected";
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
                if ($util.Long)
                    (message.playerId = $util.Long.fromValue(object.playerId)).unsigned = false;
                else if (typeof object.playerId === "string")
                    message.playerId = parseInt(object.playerId, 10);
                else if (typeof object.playerId === "number")
                    message.playerId = object.playerId;
                else if (typeof object.playerId === "object")
                    message.playerId = new $util.LongBits(object.playerId.low >>> 0, object.playerId.high >>> 0).toNumber();
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
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.playerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.playerId = options.longs === String ? "0" : 0;
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (typeof message.playerId === "number")
                    object.playerId = options.longs === String ? String(message.playerId) : message.playerId;
                else
                    object.playerId = options.longs === String ? $util.Long.prototype.toString.call(message.playerId) : options.longs === Number ? new $util.LongBits(message.playerId.low >>> 0, message.playerId.high >>> 0).toNumber() : message.playerId;
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
         * @property {number|Long|null} [playerId] playerInfo playerId
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
         * @member {number|Long} playerId
         * @memberof chinese_chess_game.playerInfo
         * @instance
         */
        playerInfo.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

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
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.playerId);
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
                        message.playerId = reader.int64();
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
                if (!$util.isInteger(message.playerId) && !(message.playerId && $util.isInteger(message.playerId.low) && $util.isInteger(message.playerId.high)))
                    return "playerId: integer|Long expected";
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
                if ($util.Long)
                    (message.playerId = $util.Long.fromValue(object.playerId)).unsigned = false;
                else if (typeof object.playerId === "string")
                    message.playerId = parseInt(object.playerId, 10);
                else if (typeof object.playerId === "number")
                    message.playerId = object.playerId;
                else if (typeof object.playerId === "object")
                    message.playerId = new $util.LongBits(object.playerId.low >>> 0, object.playerId.high >>> 0).toNumber();
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
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.playerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.playerId = options.longs === String ? "0" : 0;
                object.teamType = 0;
            }
            if (message.seatId != null && message.hasOwnProperty("seatId"))
                object.seatId = message.seatId;
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (typeof message.playerId === "number")
                    object.playerId = options.longs === String ? String(message.playerId) : message.playerId;
                else
                    object.playerId = options.longs === String ? $util.Long.prototype.toString.call(message.playerId) : options.longs === Number ? new $util.LongBits(message.playerId.low >>> 0, message.playerId.high >>> 0).toNumber() : message.playerId;
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
         * @property {number|Long|null} [playerId] nextDoing playerId
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
         * @member {number|Long} playerId
         * @memberof chinese_chess_game.nextDoing
         * @instance
         */
        nextDoing.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

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
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.playerId);
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
                        message.playerId = reader.int64();
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
                if (!$util.isInteger(message.playerId) && !(message.playerId && $util.isInteger(message.playerId.low) && $util.isInteger(message.playerId.high)))
                    return "playerId: integer|Long expected";
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
                if ($util.Long)
                    (message.playerId = $util.Long.fromValue(object.playerId)).unsigned = false;
                else if (typeof object.playerId === "string")
                    message.playerId = parseInt(object.playerId, 10);
                else if (typeof object.playerId === "number")
                    message.playerId = object.playerId;
                else if (typeof object.playerId === "object")
                    message.playerId = new $util.LongBits(object.playerId.low >>> 0, object.playerId.high >>> 0).toNumber();
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
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.playerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.playerId = options.longs === String ? "0" : 0;
                object.teamType = 0;
            }
            if (message.seatId != null && message.hasOwnProperty("seatId"))
                object.seatId = message.seatId;
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (typeof message.playerId === "number")
                    object.playerId = options.longs === String ? String(message.playerId) : message.playerId;
                else
                    object.playerId = options.longs === String ? $util.Long.prototype.toString.call(message.playerId) : options.longs === Number ? new $util.LongBits(message.playerId.low >>> 0, message.playerId.high >>> 0).toNumber() : message.playerId;
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
         * @property {number|Long|null} [winPlayerId] gameStateRes winPlayerId
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
         * gameStateRes winPlayerId.
         * @member {number|Long} winPlayerId
         * @memberof chinese_chess_game.gameStateRes
         * @instance
         */
        gameStateRes.prototype.winPlayerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

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
            if (message.winPlayerId != null && Object.hasOwnProperty.call(message, "winPlayerId"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.winPlayerId);
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
                case 5: {
                        message.winPlayerId = reader.int64();
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
            if (message.winPlayerId != null && message.hasOwnProperty("winPlayerId"))
                if (!$util.isInteger(message.winPlayerId) && !(message.winPlayerId && $util.isInteger(message.winPlayerId.low) && $util.isInteger(message.winPlayerId.high)))
                    return "winPlayerId: integer|Long expected";
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
            if (object.winPlayerId != null)
                if ($util.Long)
                    (message.winPlayerId = $util.Long.fromValue(object.winPlayerId)).unsigned = false;
                else if (typeof object.winPlayerId === "string")
                    message.winPlayerId = parseInt(object.winPlayerId, 10);
                else if (typeof object.winPlayerId === "number")
                    message.winPlayerId = object.winPlayerId;
                else if (typeof object.winPlayerId === "object")
                    message.winPlayerId = new $util.LongBits(object.winPlayerId.low >>> 0, object.winPlayerId.high >>> 0).toNumber();
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
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.winPlayerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.winPlayerId = options.longs === String ? "0" : 0;
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
            if (message.winPlayerId != null && message.hasOwnProperty("winPlayerId"))
                if (typeof message.winPlayerId === "number")
                    object.winPlayerId = options.longs === String ? String(message.winPlayerId) : message.winPlayerId;
                else
                    object.winPlayerId = options.longs === String ? $util.Long.prototype.toString.call(message.winPlayerId) : options.longs === Number ? new $util.LongBits(message.winPlayerId.low >>> 0, message.winPlayerId.high >>> 0).toNumber() : message.winPlayerId;
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

    chinese_chess_hall.JoinReq = (function() {

        /**
         * Properties of a JoinReq.
         * @memberof chinese_chess_hall
         * @interface IJoinReq
         * @property {string|null} [tableId] JoinReq tableId
         */

        /**
         * Constructs a new JoinReq.
         * @memberof chinese_chess_hall
         * @classdesc Represents a JoinReq.
         * @implements IJoinReq
         * @constructor
         * @param {chinese_chess_hall.IJoinReq=} [properties] Properties to set
         */
        function JoinReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JoinReq tableId.
         * @member {string} tableId
         * @memberof chinese_chess_hall.JoinReq
         * @instance
         */
        JoinReq.prototype.tableId = "";

        /**
         * Creates a new JoinReq instance using the specified properties.
         * @function create
         * @memberof chinese_chess_hall.JoinReq
         * @static
         * @param {chinese_chess_hall.IJoinReq=} [properties] Properties to set
         * @returns {chinese_chess_hall.JoinReq} JoinReq instance
         */
        JoinReq.create = function create(properties) {
            return new JoinReq(properties);
        };

        /**
         * Encodes the specified JoinReq message. Does not implicitly {@link chinese_chess_hall.JoinReq.verify|verify} messages.
         * @function encode
         * @memberof chinese_chess_hall.JoinReq
         * @static
         * @param {chinese_chess_hall.IJoinReq} message JoinReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tableId != null && Object.hasOwnProperty.call(message, "tableId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.tableId);
            return writer;
        };

        /**
         * Encodes the specified JoinReq message, length delimited. Does not implicitly {@link chinese_chess_hall.JoinReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof chinese_chess_hall.JoinReq
         * @static
         * @param {chinese_chess_hall.IJoinReq} message JoinReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JoinReq message from the specified reader or buffer.
         * @function decode
         * @memberof chinese_chess_hall.JoinReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {chinese_chess_hall.JoinReq} JoinReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chinese_chess_hall.JoinReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.tableId = reader.string();
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
         * Decodes a JoinReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof chinese_chess_hall.JoinReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {chinese_chess_hall.JoinReq} JoinReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JoinReq message.
         * @function verify
         * @memberof chinese_chess_hall.JoinReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JoinReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                if (!$util.isString(message.tableId))
                    return "tableId: string expected";
            return null;
        };

        /**
         * Creates a JoinReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof chinese_chess_hall.JoinReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {chinese_chess_hall.JoinReq} JoinReq
         */
        JoinReq.fromObject = function fromObject(object) {
            if (object instanceof $root.chinese_chess_hall.JoinReq)
                return object;
            var message = new $root.chinese_chess_hall.JoinReq();
            if (object.tableId != null)
                message.tableId = String(object.tableId);
            return message;
        };

        /**
         * Creates a plain object from a JoinReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof chinese_chess_hall.JoinReq
         * @static
         * @param {chinese_chess_hall.JoinReq} message JoinReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JoinReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.tableId = "";
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                object.tableId = message.tableId;
            return object;
        };

        /**
         * Converts this JoinReq to JSON.
         * @function toJSON
         * @memberof chinese_chess_hall.JoinReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JoinReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for JoinReq
         * @function getTypeUrl
         * @memberof chinese_chess_hall.JoinReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        JoinReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/chinese_chess_hall.JoinReq";
        };

        return JoinReq;
    })();

    chinese_chess_hall.JoinRes = (function() {

        /**
         * Properties of a JoinRes.
         * @memberof chinese_chess_hall
         * @interface IJoinRes
         * @property {string|null} [tableId] JoinRes tableId
         */

        /**
         * Constructs a new JoinRes.
         * @memberof chinese_chess_hall
         * @classdesc Represents a JoinRes.
         * @implements IJoinRes
         * @constructor
         * @param {chinese_chess_hall.IJoinRes=} [properties] Properties to set
         */
        function JoinRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JoinRes tableId.
         * @member {string} tableId
         * @memberof chinese_chess_hall.JoinRes
         * @instance
         */
        JoinRes.prototype.tableId = "";

        /**
         * Creates a new JoinRes instance using the specified properties.
         * @function create
         * @memberof chinese_chess_hall.JoinRes
         * @static
         * @param {chinese_chess_hall.IJoinRes=} [properties] Properties to set
         * @returns {chinese_chess_hall.JoinRes} JoinRes instance
         */
        JoinRes.create = function create(properties) {
            return new JoinRes(properties);
        };

        /**
         * Encodes the specified JoinRes message. Does not implicitly {@link chinese_chess_hall.JoinRes.verify|verify} messages.
         * @function encode
         * @memberof chinese_chess_hall.JoinRes
         * @static
         * @param {chinese_chess_hall.IJoinRes} message JoinRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tableId != null && Object.hasOwnProperty.call(message, "tableId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.tableId);
            return writer;
        };

        /**
         * Encodes the specified JoinRes message, length delimited. Does not implicitly {@link chinese_chess_hall.JoinRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof chinese_chess_hall.JoinRes
         * @static
         * @param {chinese_chess_hall.IJoinRes} message JoinRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JoinRes message from the specified reader or buffer.
         * @function decode
         * @memberof chinese_chess_hall.JoinRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {chinese_chess_hall.JoinRes} JoinRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chinese_chess_hall.JoinRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.tableId = reader.string();
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
         * Decodes a JoinRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof chinese_chess_hall.JoinRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {chinese_chess_hall.JoinRes} JoinRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JoinRes message.
         * @function verify
         * @memberof chinese_chess_hall.JoinRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JoinRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                if (!$util.isString(message.tableId))
                    return "tableId: string expected";
            return null;
        };

        /**
         * Creates a JoinRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof chinese_chess_hall.JoinRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {chinese_chess_hall.JoinRes} JoinRes
         */
        JoinRes.fromObject = function fromObject(object) {
            if (object instanceof $root.chinese_chess_hall.JoinRes)
                return object;
            var message = new $root.chinese_chess_hall.JoinRes();
            if (object.tableId != null)
                message.tableId = String(object.tableId);
            return message;
        };

        /**
         * Creates a plain object from a JoinRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof chinese_chess_hall.JoinRes
         * @static
         * @param {chinese_chess_hall.JoinRes} message JoinRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JoinRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.tableId = "";
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                object.tableId = message.tableId;
            return object;
        };

        /**
         * Converts this JoinRes to JSON.
         * @function toJSON
         * @memberof chinese_chess_hall.JoinRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JoinRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for JoinRes
         * @function getTypeUrl
         * @memberof chinese_chess_hall.JoinRes
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        JoinRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/chinese_chess_hall.JoinRes";
        };

        return JoinRes;
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
         * @property {number|Long|null} [playerId] LoginReq playerId
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
         * @member {number|Long} playerId
         * @memberof chinese_chess_login.LoginReq
         * @instance
         */
        LoginReq.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

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
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.playerId);
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
                        message.playerId = reader.int64();
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
                if (!$util.isInteger(message.playerId) && !(message.playerId && $util.isInteger(message.playerId.low) && $util.isInteger(message.playerId.high)))
                    return "playerId: integer|Long expected";
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
                if ($util.Long)
                    (message.playerId = $util.Long.fromValue(object.playerId)).unsigned = false;
                else if (typeof object.playerId === "string")
                    message.playerId = parseInt(object.playerId, 10);
                else if (typeof object.playerId === "number")
                    message.playerId = object.playerId;
                else if (typeof object.playerId === "object")
                    message.playerId = new $util.LongBits(object.playerId.low >>> 0, object.playerId.high >>> 0).toNumber();
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
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.playerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.playerId = options.longs === String ? "0" : 0;
            }
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (typeof message.playerId === "number")
                    object.playerId = options.longs === String ? String(message.playerId) : message.playerId;
                else
                    object.playerId = options.longs === String ? $util.Long.prototype.toString.call(message.playerId) : options.longs === Number ? new $util.LongBits(message.playerId.low >>> 0, message.playerId.high >>> 0).toNumber() : message.playerId;
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
         * @property {number|null} [isreconnect] LoginRes isreconnect
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
         * LoginRes isreconnect.
         * @member {number} isreconnect
         * @memberof chinese_chess_login.LoginRes
         * @instance
         */
        LoginRes.prototype.isreconnect = 0;

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
            if (message.isreconnect != null && Object.hasOwnProperty.call(message, "isreconnect"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.isreconnect);
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
                        message.isreconnect = reader.int32();
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
            if (message.isreconnect != null && message.hasOwnProperty("isreconnect"))
                if (!$util.isInteger(message.isreconnect))
                    return "isreconnect: integer expected";
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
            if (object.isreconnect != null)
                message.isreconnect = object.isreconnect | 0;
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
                object.isreconnect = 0;
            if (message.isreconnect != null && message.hasOwnProperty("isreconnect"))
                object.isreconnect = message.isreconnect;
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

$root.hallserver_login = (function() {

    /**
     * Namespace hallserver_login.
     * @exports hallserver_login
     * @namespace
     */
    var hallserver_login = {};

    hallserver_login.LoginReq = (function() {

        /**
         * Properties of a LoginReq.
         * @memberof hallserver_login
         * @interface ILoginReq
         * @property {string|null} [token] LoginReq token
         * @property {number|Long|null} [playerId] LoginReq playerId
         */

        /**
         * Constructs a new LoginReq.
         * @memberof hallserver_login
         * @classdesc Represents a LoginReq.
         * @implements ILoginReq
         * @constructor
         * @param {hallserver_login.ILoginReq=} [properties] Properties to set
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
         * @memberof hallserver_login.LoginReq
         * @instance
         */
        LoginReq.prototype.token = "";

        /**
         * LoginReq playerId.
         * @member {number|Long} playerId
         * @memberof hallserver_login.LoginReq
         * @instance
         */
        LoginReq.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new LoginReq instance using the specified properties.
         * @function create
         * @memberof hallserver_login.LoginReq
         * @static
         * @param {hallserver_login.ILoginReq=} [properties] Properties to set
         * @returns {hallserver_login.LoginReq} LoginReq instance
         */
        LoginReq.create = function create(properties) {
            return new LoginReq(properties);
        };

        /**
         * Encodes the specified LoginReq message. Does not implicitly {@link hallserver_login.LoginReq.verify|verify} messages.
         * @function encode
         * @memberof hallserver_login.LoginReq
         * @static
         * @param {hallserver_login.ILoginReq} message LoginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
            if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.playerId);
            return writer;
        };

        /**
         * Encodes the specified LoginReq message, length delimited. Does not implicitly {@link hallserver_login.LoginReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hallserver_login.LoginReq
         * @static
         * @param {hallserver_login.ILoginReq} message LoginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginReq message from the specified reader or buffer.
         * @function decode
         * @memberof hallserver_login.LoginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hallserver_login.LoginReq} LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hallserver_login.LoginReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.token = reader.string();
                        break;
                    }
                case 2: {
                        message.playerId = reader.int64();
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
         * @memberof hallserver_login.LoginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hallserver_login.LoginReq} LoginReq
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
         * @memberof hallserver_login.LoginReq
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
                if (!$util.isInteger(message.playerId) && !(message.playerId && $util.isInteger(message.playerId.low) && $util.isInteger(message.playerId.high)))
                    return "playerId: integer|Long expected";
            return null;
        };

        /**
         * Creates a LoginReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hallserver_login.LoginReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hallserver_login.LoginReq} LoginReq
         */
        LoginReq.fromObject = function fromObject(object) {
            if (object instanceof $root.hallserver_login.LoginReq)
                return object;
            var message = new $root.hallserver_login.LoginReq();
            if (object.token != null)
                message.token = String(object.token);
            if (object.playerId != null)
                if ($util.Long)
                    (message.playerId = $util.Long.fromValue(object.playerId)).unsigned = false;
                else if (typeof object.playerId === "string")
                    message.playerId = parseInt(object.playerId, 10);
                else if (typeof object.playerId === "number")
                    message.playerId = object.playerId;
                else if (typeof object.playerId === "object")
                    message.playerId = new $util.LongBits(object.playerId.low >>> 0, object.playerId.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a LoginReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hallserver_login.LoginReq
         * @static
         * @param {hallserver_login.LoginReq} message LoginReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.token = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.playerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.playerId = options.longs === String ? "0" : 0;
            }
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (typeof message.playerId === "number")
                    object.playerId = options.longs === String ? String(message.playerId) : message.playerId;
                else
                    object.playerId = options.longs === String ? $util.Long.prototype.toString.call(message.playerId) : options.longs === Number ? new $util.LongBits(message.playerId.low >>> 0, message.playerId.high >>> 0).toNumber() : message.playerId;
            return object;
        };

        /**
         * Converts this LoginReq to JSON.
         * @function toJSON
         * @memberof hallserver_login.LoginReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LoginReq
         * @function getTypeUrl
         * @memberof hallserver_login.LoginReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LoginReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/hallserver_login.LoginReq";
        };

        return LoginReq;
    })();

    hallserver_login.LoginRes = (function() {

        /**
         * Properties of a LoginRes.
         * @memberof hallserver_login
         * @interface ILoginRes
         * @property {number|Long|null} [playerId] LoginRes playerId
         */

        /**
         * Constructs a new LoginRes.
         * @memberof hallserver_login
         * @classdesc Represents a LoginRes.
         * @implements ILoginRes
         * @constructor
         * @param {hallserver_login.ILoginRes=} [properties] Properties to set
         */
        function LoginRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginRes playerId.
         * @member {number|Long} playerId
         * @memberof hallserver_login.LoginRes
         * @instance
         */
        LoginRes.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new LoginRes instance using the specified properties.
         * @function create
         * @memberof hallserver_login.LoginRes
         * @static
         * @param {hallserver_login.ILoginRes=} [properties] Properties to set
         * @returns {hallserver_login.LoginRes} LoginRes instance
         */
        LoginRes.create = function create(properties) {
            return new LoginRes(properties);
        };

        /**
         * Encodes the specified LoginRes message. Does not implicitly {@link hallserver_login.LoginRes.verify|verify} messages.
         * @function encode
         * @memberof hallserver_login.LoginRes
         * @static
         * @param {hallserver_login.ILoginRes} message LoginRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
            return writer;
        };

        /**
         * Encodes the specified LoginRes message, length delimited. Does not implicitly {@link hallserver_login.LoginRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hallserver_login.LoginRes
         * @static
         * @param {hallserver_login.ILoginRes} message LoginRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginRes message from the specified reader or buffer.
         * @function decode
         * @memberof hallserver_login.LoginRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hallserver_login.LoginRes} LoginRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hallserver_login.LoginRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.playerId = reader.int64();
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
         * @memberof hallserver_login.LoginRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hallserver_login.LoginRes} LoginRes
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
         * @memberof hallserver_login.LoginRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (!$util.isInteger(message.playerId) && !(message.playerId && $util.isInteger(message.playerId.low) && $util.isInteger(message.playerId.high)))
                    return "playerId: integer|Long expected";
            return null;
        };

        /**
         * Creates a LoginRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hallserver_login.LoginRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hallserver_login.LoginRes} LoginRes
         */
        LoginRes.fromObject = function fromObject(object) {
            if (object instanceof $root.hallserver_login.LoginRes)
                return object;
            var message = new $root.hallserver_login.LoginRes();
            if (object.playerId != null)
                if ($util.Long)
                    (message.playerId = $util.Long.fromValue(object.playerId)).unsigned = false;
                else if (typeof object.playerId === "string")
                    message.playerId = parseInt(object.playerId, 10);
                else if (typeof object.playerId === "number")
                    message.playerId = object.playerId;
                else if (typeof object.playerId === "object")
                    message.playerId = new $util.LongBits(object.playerId.low >>> 0, object.playerId.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a LoginRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hallserver_login.LoginRes
         * @static
         * @param {hallserver_login.LoginRes} message LoginRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.playerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.playerId = options.longs === String ? "0" : 0;
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (typeof message.playerId === "number")
                    object.playerId = options.longs === String ? String(message.playerId) : message.playerId;
                else
                    object.playerId = options.longs === String ? $util.Long.prototype.toString.call(message.playerId) : options.longs === Number ? new $util.LongBits(message.playerId.low >>> 0, message.playerId.high >>> 0).toNumber() : message.playerId;
            return object;
        };

        /**
         * Converts this LoginRes to JSON.
         * @function toJSON
         * @memberof hallserver_login.LoginRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LoginRes
         * @function getTypeUrl
         * @memberof hallserver_login.LoginRes
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LoginRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/hallserver_login.LoginRes";
        };

        return LoginRes;
    })();

    return hallserver_login;
})();

$root.hallserver_match = (function() {

    /**
     * Namespace hallserver_match.
     * @exports hallserver_match
     * @namespace
     */
    var hallserver_match = {};

    hallserver_match.MatchGameReq = (function() {

        /**
         * Properties of a MatchGameReq.
         * @memberof hallserver_match
         * @interface IMatchGameReq
         * @property {number|null} [gameId] MatchGameReq gameId
         */

        /**
         * Constructs a new MatchGameReq.
         * @memberof hallserver_match
         * @classdesc Represents a MatchGameReq.
         * @implements IMatchGameReq
         * @constructor
         * @param {hallserver_match.IMatchGameReq=} [properties] Properties to set
         */
        function MatchGameReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MatchGameReq gameId.
         * @member {number} gameId
         * @memberof hallserver_match.MatchGameReq
         * @instance
         */
        MatchGameReq.prototype.gameId = 0;

        /**
         * Creates a new MatchGameReq instance using the specified properties.
         * @function create
         * @memberof hallserver_match.MatchGameReq
         * @static
         * @param {hallserver_match.IMatchGameReq=} [properties] Properties to set
         * @returns {hallserver_match.MatchGameReq} MatchGameReq instance
         */
        MatchGameReq.create = function create(properties) {
            return new MatchGameReq(properties);
        };

        /**
         * Encodes the specified MatchGameReq message. Does not implicitly {@link hallserver_match.MatchGameReq.verify|verify} messages.
         * @function encode
         * @memberof hallserver_match.MatchGameReq
         * @static
         * @param {hallserver_match.IMatchGameReq} message MatchGameReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MatchGameReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.gameId != null && Object.hasOwnProperty.call(message, "gameId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.gameId);
            return writer;
        };

        /**
         * Encodes the specified MatchGameReq message, length delimited. Does not implicitly {@link hallserver_match.MatchGameReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hallserver_match.MatchGameReq
         * @static
         * @param {hallserver_match.IMatchGameReq} message MatchGameReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MatchGameReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MatchGameReq message from the specified reader or buffer.
         * @function decode
         * @memberof hallserver_match.MatchGameReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hallserver_match.MatchGameReq} MatchGameReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MatchGameReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hallserver_match.MatchGameReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.gameId = reader.int32();
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
         * Decodes a MatchGameReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hallserver_match.MatchGameReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hallserver_match.MatchGameReq} MatchGameReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MatchGameReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MatchGameReq message.
         * @function verify
         * @memberof hallserver_match.MatchGameReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MatchGameReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                if (!$util.isInteger(message.gameId))
                    return "gameId: integer expected";
            return null;
        };

        /**
         * Creates a MatchGameReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hallserver_match.MatchGameReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hallserver_match.MatchGameReq} MatchGameReq
         */
        MatchGameReq.fromObject = function fromObject(object) {
            if (object instanceof $root.hallserver_match.MatchGameReq)
                return object;
            var message = new $root.hallserver_match.MatchGameReq();
            if (object.gameId != null)
                message.gameId = object.gameId | 0;
            return message;
        };

        /**
         * Creates a plain object from a MatchGameReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hallserver_match.MatchGameReq
         * @static
         * @param {hallserver_match.MatchGameReq} message MatchGameReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MatchGameReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.gameId = 0;
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                object.gameId = message.gameId;
            return object;
        };

        /**
         * Converts this MatchGameReq to JSON.
         * @function toJSON
         * @memberof hallserver_match.MatchGameReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MatchGameReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MatchGameReq
         * @function getTypeUrl
         * @memberof hallserver_match.MatchGameReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MatchGameReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/hallserver_match.MatchGameReq";
        };

        return MatchGameReq;
    })();

    hallserver_match.MatchGameRes = (function() {

        /**
         * Properties of a MatchGameRes.
         * @memberof hallserver_match
         * @interface IMatchGameRes
         * @property {number|null} [gameId] MatchGameRes gameId
         */

        /**
         * Constructs a new MatchGameRes.
         * @memberof hallserver_match
         * @classdesc Represents a MatchGameRes.
         * @implements IMatchGameRes
         * @constructor
         * @param {hallserver_match.IMatchGameRes=} [properties] Properties to set
         */
        function MatchGameRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MatchGameRes gameId.
         * @member {number} gameId
         * @memberof hallserver_match.MatchGameRes
         * @instance
         */
        MatchGameRes.prototype.gameId = 0;

        /**
         * Creates a new MatchGameRes instance using the specified properties.
         * @function create
         * @memberof hallserver_match.MatchGameRes
         * @static
         * @param {hallserver_match.IMatchGameRes=} [properties] Properties to set
         * @returns {hallserver_match.MatchGameRes} MatchGameRes instance
         */
        MatchGameRes.create = function create(properties) {
            return new MatchGameRes(properties);
        };

        /**
         * Encodes the specified MatchGameRes message. Does not implicitly {@link hallserver_match.MatchGameRes.verify|verify} messages.
         * @function encode
         * @memberof hallserver_match.MatchGameRes
         * @static
         * @param {hallserver_match.IMatchGameRes} message MatchGameRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MatchGameRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.gameId != null && Object.hasOwnProperty.call(message, "gameId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.gameId);
            return writer;
        };

        /**
         * Encodes the specified MatchGameRes message, length delimited. Does not implicitly {@link hallserver_match.MatchGameRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hallserver_match.MatchGameRes
         * @static
         * @param {hallserver_match.IMatchGameRes} message MatchGameRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MatchGameRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MatchGameRes message from the specified reader or buffer.
         * @function decode
         * @memberof hallserver_match.MatchGameRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hallserver_match.MatchGameRes} MatchGameRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MatchGameRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hallserver_match.MatchGameRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.gameId = reader.int32();
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
         * Decodes a MatchGameRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hallserver_match.MatchGameRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hallserver_match.MatchGameRes} MatchGameRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MatchGameRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MatchGameRes message.
         * @function verify
         * @memberof hallserver_match.MatchGameRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MatchGameRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                if (!$util.isInteger(message.gameId))
                    return "gameId: integer expected";
            return null;
        };

        /**
         * Creates a MatchGameRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hallserver_match.MatchGameRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hallserver_match.MatchGameRes} MatchGameRes
         */
        MatchGameRes.fromObject = function fromObject(object) {
            if (object instanceof $root.hallserver_match.MatchGameRes)
                return object;
            var message = new $root.hallserver_match.MatchGameRes();
            if (object.gameId != null)
                message.gameId = object.gameId | 0;
            return message;
        };

        /**
         * Creates a plain object from a MatchGameRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hallserver_match.MatchGameRes
         * @static
         * @param {hallserver_match.MatchGameRes} message MatchGameRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MatchGameRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.gameId = 0;
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                object.gameId = message.gameId;
            return object;
        };

        /**
         * Converts this MatchGameRes to JSON.
         * @function toJSON
         * @memberof hallserver_match.MatchGameRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MatchGameRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MatchGameRes
         * @function getTypeUrl
         * @memberof hallserver_match.MatchGameRes
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MatchGameRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/hallserver_match.MatchGameRes";
        };

        return MatchGameRes;
    })();

    hallserver_match.CancelMatchGameReq = (function() {

        /**
         * Properties of a CancelMatchGameReq.
         * @memberof hallserver_match
         * @interface ICancelMatchGameReq
         * @property {number|null} [gameId] CancelMatchGameReq gameId
         */

        /**
         * Constructs a new CancelMatchGameReq.
         * @memberof hallserver_match
         * @classdesc Represents a CancelMatchGameReq.
         * @implements ICancelMatchGameReq
         * @constructor
         * @param {hallserver_match.ICancelMatchGameReq=} [properties] Properties to set
         */
        function CancelMatchGameReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CancelMatchGameReq gameId.
         * @member {number} gameId
         * @memberof hallserver_match.CancelMatchGameReq
         * @instance
         */
        CancelMatchGameReq.prototype.gameId = 0;

        /**
         * Creates a new CancelMatchGameReq instance using the specified properties.
         * @function create
         * @memberof hallserver_match.CancelMatchGameReq
         * @static
         * @param {hallserver_match.ICancelMatchGameReq=} [properties] Properties to set
         * @returns {hallserver_match.CancelMatchGameReq} CancelMatchGameReq instance
         */
        CancelMatchGameReq.create = function create(properties) {
            return new CancelMatchGameReq(properties);
        };

        /**
         * Encodes the specified CancelMatchGameReq message. Does not implicitly {@link hallserver_match.CancelMatchGameReq.verify|verify} messages.
         * @function encode
         * @memberof hallserver_match.CancelMatchGameReq
         * @static
         * @param {hallserver_match.ICancelMatchGameReq} message CancelMatchGameReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CancelMatchGameReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.gameId != null && Object.hasOwnProperty.call(message, "gameId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.gameId);
            return writer;
        };

        /**
         * Encodes the specified CancelMatchGameReq message, length delimited. Does not implicitly {@link hallserver_match.CancelMatchGameReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hallserver_match.CancelMatchGameReq
         * @static
         * @param {hallserver_match.ICancelMatchGameReq} message CancelMatchGameReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CancelMatchGameReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CancelMatchGameReq message from the specified reader or buffer.
         * @function decode
         * @memberof hallserver_match.CancelMatchGameReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hallserver_match.CancelMatchGameReq} CancelMatchGameReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CancelMatchGameReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hallserver_match.CancelMatchGameReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.gameId = reader.int32();
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
         * Decodes a CancelMatchGameReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hallserver_match.CancelMatchGameReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hallserver_match.CancelMatchGameReq} CancelMatchGameReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CancelMatchGameReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CancelMatchGameReq message.
         * @function verify
         * @memberof hallserver_match.CancelMatchGameReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CancelMatchGameReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                if (!$util.isInteger(message.gameId))
                    return "gameId: integer expected";
            return null;
        };

        /**
         * Creates a CancelMatchGameReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hallserver_match.CancelMatchGameReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hallserver_match.CancelMatchGameReq} CancelMatchGameReq
         */
        CancelMatchGameReq.fromObject = function fromObject(object) {
            if (object instanceof $root.hallserver_match.CancelMatchGameReq)
                return object;
            var message = new $root.hallserver_match.CancelMatchGameReq();
            if (object.gameId != null)
                message.gameId = object.gameId | 0;
            return message;
        };

        /**
         * Creates a plain object from a CancelMatchGameReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hallserver_match.CancelMatchGameReq
         * @static
         * @param {hallserver_match.CancelMatchGameReq} message CancelMatchGameReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CancelMatchGameReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.gameId = 0;
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                object.gameId = message.gameId;
            return object;
        };

        /**
         * Converts this CancelMatchGameReq to JSON.
         * @function toJSON
         * @memberof hallserver_match.CancelMatchGameReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CancelMatchGameReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CancelMatchGameReq
         * @function getTypeUrl
         * @memberof hallserver_match.CancelMatchGameReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CancelMatchGameReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/hallserver_match.CancelMatchGameReq";
        };

        return CancelMatchGameReq;
    })();

    hallserver_match.CancelMatchGameRes = (function() {

        /**
         * Properties of a CancelMatchGameRes.
         * @memberof hallserver_match
         * @interface ICancelMatchGameRes
         * @property {number|null} [gameId] CancelMatchGameRes gameId
         */

        /**
         * Constructs a new CancelMatchGameRes.
         * @memberof hallserver_match
         * @classdesc Represents a CancelMatchGameRes.
         * @implements ICancelMatchGameRes
         * @constructor
         * @param {hallserver_match.ICancelMatchGameRes=} [properties] Properties to set
         */
        function CancelMatchGameRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CancelMatchGameRes gameId.
         * @member {number} gameId
         * @memberof hallserver_match.CancelMatchGameRes
         * @instance
         */
        CancelMatchGameRes.prototype.gameId = 0;

        /**
         * Creates a new CancelMatchGameRes instance using the specified properties.
         * @function create
         * @memberof hallserver_match.CancelMatchGameRes
         * @static
         * @param {hallserver_match.ICancelMatchGameRes=} [properties] Properties to set
         * @returns {hallserver_match.CancelMatchGameRes} CancelMatchGameRes instance
         */
        CancelMatchGameRes.create = function create(properties) {
            return new CancelMatchGameRes(properties);
        };

        /**
         * Encodes the specified CancelMatchGameRes message. Does not implicitly {@link hallserver_match.CancelMatchGameRes.verify|verify} messages.
         * @function encode
         * @memberof hallserver_match.CancelMatchGameRes
         * @static
         * @param {hallserver_match.ICancelMatchGameRes} message CancelMatchGameRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CancelMatchGameRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.gameId != null && Object.hasOwnProperty.call(message, "gameId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.gameId);
            return writer;
        };

        /**
         * Encodes the specified CancelMatchGameRes message, length delimited. Does not implicitly {@link hallserver_match.CancelMatchGameRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hallserver_match.CancelMatchGameRes
         * @static
         * @param {hallserver_match.ICancelMatchGameRes} message CancelMatchGameRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CancelMatchGameRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CancelMatchGameRes message from the specified reader or buffer.
         * @function decode
         * @memberof hallserver_match.CancelMatchGameRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hallserver_match.CancelMatchGameRes} CancelMatchGameRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CancelMatchGameRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hallserver_match.CancelMatchGameRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.gameId = reader.int32();
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
         * Decodes a CancelMatchGameRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hallserver_match.CancelMatchGameRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hallserver_match.CancelMatchGameRes} CancelMatchGameRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CancelMatchGameRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CancelMatchGameRes message.
         * @function verify
         * @memberof hallserver_match.CancelMatchGameRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CancelMatchGameRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                if (!$util.isInteger(message.gameId))
                    return "gameId: integer expected";
            return null;
        };

        /**
         * Creates a CancelMatchGameRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hallserver_match.CancelMatchGameRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hallserver_match.CancelMatchGameRes} CancelMatchGameRes
         */
        CancelMatchGameRes.fromObject = function fromObject(object) {
            if (object instanceof $root.hallserver_match.CancelMatchGameRes)
                return object;
            var message = new $root.hallserver_match.CancelMatchGameRes();
            if (object.gameId != null)
                message.gameId = object.gameId | 0;
            return message;
        };

        /**
         * Creates a plain object from a CancelMatchGameRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hallserver_match.CancelMatchGameRes
         * @static
         * @param {hallserver_match.CancelMatchGameRes} message CancelMatchGameRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CancelMatchGameRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.gameId = 0;
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                object.gameId = message.gameId;
            return object;
        };

        /**
         * Converts this CancelMatchGameRes to JSON.
         * @function toJSON
         * @memberof hallserver_match.CancelMatchGameRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CancelMatchGameRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CancelMatchGameRes
         * @function getTypeUrl
         * @memberof hallserver_match.CancelMatchGameRes
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CancelMatchGameRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/hallserver_match.CancelMatchGameRes";
        };

        return CancelMatchGameRes;
    })();

    hallserver_match.MatchGameNotice = (function() {

        /**
         * Properties of a MatchGameNotice.
         * @memberof hallserver_match
         * @interface IMatchGameNotice
         * @property {number|null} [gameId] MatchGameNotice gameId
         * @property {string|null} [sessionId] MatchGameNotice sessionId
         * @property {number|null} [remainTime] MatchGameNotice remainTime
         */

        /**
         * Constructs a new MatchGameNotice.
         * @memberof hallserver_match
         * @classdesc Represents a MatchGameNotice.
         * @implements IMatchGameNotice
         * @constructor
         * @param {hallserver_match.IMatchGameNotice=} [properties] Properties to set
         */
        function MatchGameNotice(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MatchGameNotice gameId.
         * @member {number} gameId
         * @memberof hallserver_match.MatchGameNotice
         * @instance
         */
        MatchGameNotice.prototype.gameId = 0;

        /**
         * MatchGameNotice sessionId.
         * @member {string} sessionId
         * @memberof hallserver_match.MatchGameNotice
         * @instance
         */
        MatchGameNotice.prototype.sessionId = "";

        /**
         * MatchGameNotice remainTime.
         * @member {number} remainTime
         * @memberof hallserver_match.MatchGameNotice
         * @instance
         */
        MatchGameNotice.prototype.remainTime = 0;

        /**
         * Creates a new MatchGameNotice instance using the specified properties.
         * @function create
         * @memberof hallserver_match.MatchGameNotice
         * @static
         * @param {hallserver_match.IMatchGameNotice=} [properties] Properties to set
         * @returns {hallserver_match.MatchGameNotice} MatchGameNotice instance
         */
        MatchGameNotice.create = function create(properties) {
            return new MatchGameNotice(properties);
        };

        /**
         * Encodes the specified MatchGameNotice message. Does not implicitly {@link hallserver_match.MatchGameNotice.verify|verify} messages.
         * @function encode
         * @memberof hallserver_match.MatchGameNotice
         * @static
         * @param {hallserver_match.IMatchGameNotice} message MatchGameNotice message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MatchGameNotice.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.gameId != null && Object.hasOwnProperty.call(message, "gameId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.gameId);
            if (message.sessionId != null && Object.hasOwnProperty.call(message, "sessionId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.sessionId);
            if (message.remainTime != null && Object.hasOwnProperty.call(message, "remainTime"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.remainTime);
            return writer;
        };

        /**
         * Encodes the specified MatchGameNotice message, length delimited. Does not implicitly {@link hallserver_match.MatchGameNotice.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hallserver_match.MatchGameNotice
         * @static
         * @param {hallserver_match.IMatchGameNotice} message MatchGameNotice message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MatchGameNotice.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MatchGameNotice message from the specified reader or buffer.
         * @function decode
         * @memberof hallserver_match.MatchGameNotice
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hallserver_match.MatchGameNotice} MatchGameNotice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MatchGameNotice.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hallserver_match.MatchGameNotice();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.gameId = reader.int32();
                        break;
                    }
                case 2: {
                        message.sessionId = reader.string();
                        break;
                    }
                case 3: {
                        message.remainTime = reader.int32();
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
         * Decodes a MatchGameNotice message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hallserver_match.MatchGameNotice
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hallserver_match.MatchGameNotice} MatchGameNotice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MatchGameNotice.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MatchGameNotice message.
         * @function verify
         * @memberof hallserver_match.MatchGameNotice
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MatchGameNotice.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                if (!$util.isInteger(message.gameId))
                    return "gameId: integer expected";
            if (message.sessionId != null && message.hasOwnProperty("sessionId"))
                if (!$util.isString(message.sessionId))
                    return "sessionId: string expected";
            if (message.remainTime != null && message.hasOwnProperty("remainTime"))
                if (!$util.isInteger(message.remainTime))
                    return "remainTime: integer expected";
            return null;
        };

        /**
         * Creates a MatchGameNotice message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hallserver_match.MatchGameNotice
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hallserver_match.MatchGameNotice} MatchGameNotice
         */
        MatchGameNotice.fromObject = function fromObject(object) {
            if (object instanceof $root.hallserver_match.MatchGameNotice)
                return object;
            var message = new $root.hallserver_match.MatchGameNotice();
            if (object.gameId != null)
                message.gameId = object.gameId | 0;
            if (object.sessionId != null)
                message.sessionId = String(object.sessionId);
            if (object.remainTime != null)
                message.remainTime = object.remainTime | 0;
            return message;
        };

        /**
         * Creates a plain object from a MatchGameNotice message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hallserver_match.MatchGameNotice
         * @static
         * @param {hallserver_match.MatchGameNotice} message MatchGameNotice
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MatchGameNotice.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.gameId = 0;
                object.sessionId = "";
                object.remainTime = 0;
            }
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                object.gameId = message.gameId;
            if (message.sessionId != null && message.hasOwnProperty("sessionId"))
                object.sessionId = message.sessionId;
            if (message.remainTime != null && message.hasOwnProperty("remainTime"))
                object.remainTime = message.remainTime;
            return object;
        };

        /**
         * Converts this MatchGameNotice to JSON.
         * @function toJSON
         * @memberof hallserver_match.MatchGameNotice
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MatchGameNotice.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MatchGameNotice
         * @function getTypeUrl
         * @memberof hallserver_match.MatchGameNotice
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MatchGameNotice.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/hallserver_match.MatchGameNotice";
        };

        return MatchGameNotice;
    })();

    hallserver_match.AcceptMatchReq = (function() {

        /**
         * Properties of an AcceptMatchReq.
         * @memberof hallserver_match
         * @interface IAcceptMatchReq
         * @property {number|null} [gameId] AcceptMatchReq gameId
         * @property {string|null} [sessionId] AcceptMatchReq sessionId
         */

        /**
         * Constructs a new AcceptMatchReq.
         * @memberof hallserver_match
         * @classdesc Represents an AcceptMatchReq.
         * @implements IAcceptMatchReq
         * @constructor
         * @param {hallserver_match.IAcceptMatchReq=} [properties] Properties to set
         */
        function AcceptMatchReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AcceptMatchReq gameId.
         * @member {number} gameId
         * @memberof hallserver_match.AcceptMatchReq
         * @instance
         */
        AcceptMatchReq.prototype.gameId = 0;

        /**
         * AcceptMatchReq sessionId.
         * @member {string} sessionId
         * @memberof hallserver_match.AcceptMatchReq
         * @instance
         */
        AcceptMatchReq.prototype.sessionId = "";

        /**
         * Creates a new AcceptMatchReq instance using the specified properties.
         * @function create
         * @memberof hallserver_match.AcceptMatchReq
         * @static
         * @param {hallserver_match.IAcceptMatchReq=} [properties] Properties to set
         * @returns {hallserver_match.AcceptMatchReq} AcceptMatchReq instance
         */
        AcceptMatchReq.create = function create(properties) {
            return new AcceptMatchReq(properties);
        };

        /**
         * Encodes the specified AcceptMatchReq message. Does not implicitly {@link hallserver_match.AcceptMatchReq.verify|verify} messages.
         * @function encode
         * @memberof hallserver_match.AcceptMatchReq
         * @static
         * @param {hallserver_match.IAcceptMatchReq} message AcceptMatchReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AcceptMatchReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.gameId != null && Object.hasOwnProperty.call(message, "gameId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.gameId);
            if (message.sessionId != null && Object.hasOwnProperty.call(message, "sessionId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.sessionId);
            return writer;
        };

        /**
         * Encodes the specified AcceptMatchReq message, length delimited. Does not implicitly {@link hallserver_match.AcceptMatchReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hallserver_match.AcceptMatchReq
         * @static
         * @param {hallserver_match.IAcceptMatchReq} message AcceptMatchReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AcceptMatchReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AcceptMatchReq message from the specified reader or buffer.
         * @function decode
         * @memberof hallserver_match.AcceptMatchReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hallserver_match.AcceptMatchReq} AcceptMatchReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AcceptMatchReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hallserver_match.AcceptMatchReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.gameId = reader.int32();
                        break;
                    }
                case 2: {
                        message.sessionId = reader.string();
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
         * Decodes an AcceptMatchReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hallserver_match.AcceptMatchReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hallserver_match.AcceptMatchReq} AcceptMatchReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AcceptMatchReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AcceptMatchReq message.
         * @function verify
         * @memberof hallserver_match.AcceptMatchReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AcceptMatchReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                if (!$util.isInteger(message.gameId))
                    return "gameId: integer expected";
            if (message.sessionId != null && message.hasOwnProperty("sessionId"))
                if (!$util.isString(message.sessionId))
                    return "sessionId: string expected";
            return null;
        };

        /**
         * Creates an AcceptMatchReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hallserver_match.AcceptMatchReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hallserver_match.AcceptMatchReq} AcceptMatchReq
         */
        AcceptMatchReq.fromObject = function fromObject(object) {
            if (object instanceof $root.hallserver_match.AcceptMatchReq)
                return object;
            var message = new $root.hallserver_match.AcceptMatchReq();
            if (object.gameId != null)
                message.gameId = object.gameId | 0;
            if (object.sessionId != null)
                message.sessionId = String(object.sessionId);
            return message;
        };

        /**
         * Creates a plain object from an AcceptMatchReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hallserver_match.AcceptMatchReq
         * @static
         * @param {hallserver_match.AcceptMatchReq} message AcceptMatchReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AcceptMatchReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.gameId = 0;
                object.sessionId = "";
            }
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                object.gameId = message.gameId;
            if (message.sessionId != null && message.hasOwnProperty("sessionId"))
                object.sessionId = message.sessionId;
            return object;
        };

        /**
         * Converts this AcceptMatchReq to JSON.
         * @function toJSON
         * @memberof hallserver_match.AcceptMatchReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AcceptMatchReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AcceptMatchReq
         * @function getTypeUrl
         * @memberof hallserver_match.AcceptMatchReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AcceptMatchReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/hallserver_match.AcceptMatchReq";
        };

        return AcceptMatchReq;
    })();

    hallserver_match.AcceptMatchRes = (function() {

        /**
         * Properties of an AcceptMatchRes.
         * @memberof hallserver_match
         * @interface IAcceptMatchRes
         * @property {number|null} [gameId] AcceptMatchRes gameId
         * @property {string|null} [sessionId] AcceptMatchRes sessionId
         */

        /**
         * Constructs a new AcceptMatchRes.
         * @memberof hallserver_match
         * @classdesc Represents an AcceptMatchRes.
         * @implements IAcceptMatchRes
         * @constructor
         * @param {hallserver_match.IAcceptMatchRes=} [properties] Properties to set
         */
        function AcceptMatchRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AcceptMatchRes gameId.
         * @member {number} gameId
         * @memberof hallserver_match.AcceptMatchRes
         * @instance
         */
        AcceptMatchRes.prototype.gameId = 0;

        /**
         * AcceptMatchRes sessionId.
         * @member {string} sessionId
         * @memberof hallserver_match.AcceptMatchRes
         * @instance
         */
        AcceptMatchRes.prototype.sessionId = "";

        /**
         * Creates a new AcceptMatchRes instance using the specified properties.
         * @function create
         * @memberof hallserver_match.AcceptMatchRes
         * @static
         * @param {hallserver_match.IAcceptMatchRes=} [properties] Properties to set
         * @returns {hallserver_match.AcceptMatchRes} AcceptMatchRes instance
         */
        AcceptMatchRes.create = function create(properties) {
            return new AcceptMatchRes(properties);
        };

        /**
         * Encodes the specified AcceptMatchRes message. Does not implicitly {@link hallserver_match.AcceptMatchRes.verify|verify} messages.
         * @function encode
         * @memberof hallserver_match.AcceptMatchRes
         * @static
         * @param {hallserver_match.IAcceptMatchRes} message AcceptMatchRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AcceptMatchRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.gameId != null && Object.hasOwnProperty.call(message, "gameId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.gameId);
            if (message.sessionId != null && Object.hasOwnProperty.call(message, "sessionId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.sessionId);
            return writer;
        };

        /**
         * Encodes the specified AcceptMatchRes message, length delimited. Does not implicitly {@link hallserver_match.AcceptMatchRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hallserver_match.AcceptMatchRes
         * @static
         * @param {hallserver_match.IAcceptMatchRes} message AcceptMatchRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AcceptMatchRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AcceptMatchRes message from the specified reader or buffer.
         * @function decode
         * @memberof hallserver_match.AcceptMatchRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hallserver_match.AcceptMatchRes} AcceptMatchRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AcceptMatchRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hallserver_match.AcceptMatchRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.gameId = reader.int32();
                        break;
                    }
                case 2: {
                        message.sessionId = reader.string();
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
         * Decodes an AcceptMatchRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hallserver_match.AcceptMatchRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hallserver_match.AcceptMatchRes} AcceptMatchRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AcceptMatchRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AcceptMatchRes message.
         * @function verify
         * @memberof hallserver_match.AcceptMatchRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AcceptMatchRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                if (!$util.isInteger(message.gameId))
                    return "gameId: integer expected";
            if (message.sessionId != null && message.hasOwnProperty("sessionId"))
                if (!$util.isString(message.sessionId))
                    return "sessionId: string expected";
            return null;
        };

        /**
         * Creates an AcceptMatchRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hallserver_match.AcceptMatchRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hallserver_match.AcceptMatchRes} AcceptMatchRes
         */
        AcceptMatchRes.fromObject = function fromObject(object) {
            if (object instanceof $root.hallserver_match.AcceptMatchRes)
                return object;
            var message = new $root.hallserver_match.AcceptMatchRes();
            if (object.gameId != null)
                message.gameId = object.gameId | 0;
            if (object.sessionId != null)
                message.sessionId = String(object.sessionId);
            return message;
        };

        /**
         * Creates a plain object from an AcceptMatchRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hallserver_match.AcceptMatchRes
         * @static
         * @param {hallserver_match.AcceptMatchRes} message AcceptMatchRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AcceptMatchRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.gameId = 0;
                object.sessionId = "";
            }
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                object.gameId = message.gameId;
            if (message.sessionId != null && message.hasOwnProperty("sessionId"))
                object.sessionId = message.sessionId;
            return object;
        };

        /**
         * Converts this AcceptMatchRes to JSON.
         * @function toJSON
         * @memberof hallserver_match.AcceptMatchRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AcceptMatchRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AcceptMatchRes
         * @function getTypeUrl
         * @memberof hallserver_match.AcceptMatchRes
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AcceptMatchRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/hallserver_match.AcceptMatchRes";
        };

        return AcceptMatchRes;
    })();

    hallserver_match.JoinGameNotice = (function() {

        /**
         * Properties of a JoinGameNotice.
         * @memberof hallserver_match
         * @interface IJoinGameNotice
         * @property {string|null} [gamehost] JoinGameNotice gamehost
         * @property {string|null} [gametoken] JoinGameNotice gametoken
         * @property {string|null} [tableId] JoinGameNotice tableId
         */

        /**
         * Constructs a new JoinGameNotice.
         * @memberof hallserver_match
         * @classdesc Represents a JoinGameNotice.
         * @implements IJoinGameNotice
         * @constructor
         * @param {hallserver_match.IJoinGameNotice=} [properties] Properties to set
         */
        function JoinGameNotice(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JoinGameNotice gamehost.
         * @member {string} gamehost
         * @memberof hallserver_match.JoinGameNotice
         * @instance
         */
        JoinGameNotice.prototype.gamehost = "";

        /**
         * JoinGameNotice gametoken.
         * @member {string} gametoken
         * @memberof hallserver_match.JoinGameNotice
         * @instance
         */
        JoinGameNotice.prototype.gametoken = "";

        /**
         * JoinGameNotice tableId.
         * @member {string} tableId
         * @memberof hallserver_match.JoinGameNotice
         * @instance
         */
        JoinGameNotice.prototype.tableId = "";

        /**
         * Creates a new JoinGameNotice instance using the specified properties.
         * @function create
         * @memberof hallserver_match.JoinGameNotice
         * @static
         * @param {hallserver_match.IJoinGameNotice=} [properties] Properties to set
         * @returns {hallserver_match.JoinGameNotice} JoinGameNotice instance
         */
        JoinGameNotice.create = function create(properties) {
            return new JoinGameNotice(properties);
        };

        /**
         * Encodes the specified JoinGameNotice message. Does not implicitly {@link hallserver_match.JoinGameNotice.verify|verify} messages.
         * @function encode
         * @memberof hallserver_match.JoinGameNotice
         * @static
         * @param {hallserver_match.IJoinGameNotice} message JoinGameNotice message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinGameNotice.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.gamehost != null && Object.hasOwnProperty.call(message, "gamehost"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.gamehost);
            if (message.gametoken != null && Object.hasOwnProperty.call(message, "gametoken"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.gametoken);
            if (message.tableId != null && Object.hasOwnProperty.call(message, "tableId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.tableId);
            return writer;
        };

        /**
         * Encodes the specified JoinGameNotice message, length delimited. Does not implicitly {@link hallserver_match.JoinGameNotice.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hallserver_match.JoinGameNotice
         * @static
         * @param {hallserver_match.IJoinGameNotice} message JoinGameNotice message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinGameNotice.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JoinGameNotice message from the specified reader or buffer.
         * @function decode
         * @memberof hallserver_match.JoinGameNotice
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hallserver_match.JoinGameNotice} JoinGameNotice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinGameNotice.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hallserver_match.JoinGameNotice();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.gamehost = reader.string();
                        break;
                    }
                case 2: {
                        message.gametoken = reader.string();
                        break;
                    }
                case 3: {
                        message.tableId = reader.string();
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
         * Decodes a JoinGameNotice message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hallserver_match.JoinGameNotice
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hallserver_match.JoinGameNotice} JoinGameNotice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinGameNotice.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JoinGameNotice message.
         * @function verify
         * @memberof hallserver_match.JoinGameNotice
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JoinGameNotice.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.gamehost != null && message.hasOwnProperty("gamehost"))
                if (!$util.isString(message.gamehost))
                    return "gamehost: string expected";
            if (message.gametoken != null && message.hasOwnProperty("gametoken"))
                if (!$util.isString(message.gametoken))
                    return "gametoken: string expected";
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                if (!$util.isString(message.tableId))
                    return "tableId: string expected";
            return null;
        };

        /**
         * Creates a JoinGameNotice message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hallserver_match.JoinGameNotice
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hallserver_match.JoinGameNotice} JoinGameNotice
         */
        JoinGameNotice.fromObject = function fromObject(object) {
            if (object instanceof $root.hallserver_match.JoinGameNotice)
                return object;
            var message = new $root.hallserver_match.JoinGameNotice();
            if (object.gamehost != null)
                message.gamehost = String(object.gamehost);
            if (object.gametoken != null)
                message.gametoken = String(object.gametoken);
            if (object.tableId != null)
                message.tableId = String(object.tableId);
            return message;
        };

        /**
         * Creates a plain object from a JoinGameNotice message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hallserver_match.JoinGameNotice
         * @static
         * @param {hallserver_match.JoinGameNotice} message JoinGameNotice
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JoinGameNotice.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.gamehost = "";
                object.gametoken = "";
                object.tableId = "";
            }
            if (message.gamehost != null && message.hasOwnProperty("gamehost"))
                object.gamehost = message.gamehost;
            if (message.gametoken != null && message.hasOwnProperty("gametoken"))
                object.gametoken = message.gametoken;
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                object.tableId = message.tableId;
            return object;
        };

        /**
         * Converts this JoinGameNotice to JSON.
         * @function toJSON
         * @memberof hallserver_match.JoinGameNotice
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JoinGameNotice.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for JoinGameNotice
         * @function getTypeUrl
         * @memberof hallserver_match.JoinGameNotice
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        JoinGameNotice.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/hallserver_match.JoinGameNotice";
        };

        return JoinGameNotice;
    })();

    return hallserver_match;
})();

$root.hallserver_player = (function() {

    /**
     * Namespace hallserver_player.
     * @exports hallserver_player
     * @namespace
     */
    var hallserver_player = {};

    hallserver_player.HeartReq = (function() {

        /**
         * Properties of a HeartReq.
         * @memberof hallserver_player
         * @interface IHeartReq
         * @property {number|Long|null} [time] HeartReq time
         */

        /**
         * Constructs a new HeartReq.
         * @memberof hallserver_player
         * @classdesc Represents a HeartReq.
         * @implements IHeartReq
         * @constructor
         * @param {hallserver_player.IHeartReq=} [properties] Properties to set
         */
        function HeartReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HeartReq time.
         * @member {number|Long} time
         * @memberof hallserver_player.HeartReq
         * @instance
         */
        HeartReq.prototype.time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new HeartReq instance using the specified properties.
         * @function create
         * @memberof hallserver_player.HeartReq
         * @static
         * @param {hallserver_player.IHeartReq=} [properties] Properties to set
         * @returns {hallserver_player.HeartReq} HeartReq instance
         */
        HeartReq.create = function create(properties) {
            return new HeartReq(properties);
        };

        /**
         * Encodes the specified HeartReq message. Does not implicitly {@link hallserver_player.HeartReq.verify|verify} messages.
         * @function encode
         * @memberof hallserver_player.HeartReq
         * @static
         * @param {hallserver_player.IHeartReq} message HeartReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.time != null && Object.hasOwnProperty.call(message, "time"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.time);
            return writer;
        };

        /**
         * Encodes the specified HeartReq message, length delimited. Does not implicitly {@link hallserver_player.HeartReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hallserver_player.HeartReq
         * @static
         * @param {hallserver_player.IHeartReq} message HeartReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeartReq message from the specified reader or buffer.
         * @function decode
         * @memberof hallserver_player.HeartReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hallserver_player.HeartReq} HeartReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hallserver_player.HeartReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.time = reader.int64();
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
         * Decodes a HeartReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hallserver_player.HeartReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hallserver_player.HeartReq} HeartReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeartReq message.
         * @function verify
         * @memberof hallserver_player.HeartReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeartReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.time != null && message.hasOwnProperty("time"))
                if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                    return "time: integer|Long expected";
            return null;
        };

        /**
         * Creates a HeartReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hallserver_player.HeartReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hallserver_player.HeartReq} HeartReq
         */
        HeartReq.fromObject = function fromObject(object) {
            if (object instanceof $root.hallserver_player.HeartReq)
                return object;
            var message = new $root.hallserver_player.HeartReq();
            if (object.time != null)
                if ($util.Long)
                    (message.time = $util.Long.fromValue(object.time)).unsigned = false;
                else if (typeof object.time === "string")
                    message.time = parseInt(object.time, 10);
                else if (typeof object.time === "number")
                    message.time = object.time;
                else if (typeof object.time === "object")
                    message.time = new $util.LongBits(object.time.low >>> 0, object.time.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a HeartReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hallserver_player.HeartReq
         * @static
         * @param {hallserver_player.HeartReq} message HeartReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HeartReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.time = options.longs === String ? "0" : 0;
            if (message.time != null && message.hasOwnProperty("time"))
                if (typeof message.time === "number")
                    object.time = options.longs === String ? String(message.time) : message.time;
                else
                    object.time = options.longs === String ? $util.Long.prototype.toString.call(message.time) : options.longs === Number ? new $util.LongBits(message.time.low >>> 0, message.time.high >>> 0).toNumber() : message.time;
            return object;
        };

        /**
         * Converts this HeartReq to JSON.
         * @function toJSON
         * @memberof hallserver_player.HeartReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HeartReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for HeartReq
         * @function getTypeUrl
         * @memberof hallserver_player.HeartReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        HeartReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/hallserver_player.HeartReq";
        };

        return HeartReq;
    })();

    return hallserver_player;
})();

module.exports = $root;
