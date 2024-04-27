// DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run build:types'.

/** Namespace chinese_chess_game. */
export namespace chinese_chess_game {

    /** Properties of a gameStateReq. */
    interface IgameStateReq {

        /** gameStateReq playerId */
        playerId?: (number|null);
    }

    /** Represents a gameStateReq. */
    class gameStateReq implements IgameStateReq {

        /**
         * Constructs a new gameStateReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: chinese_chess_game.IgameStateReq);

        /** gameStateReq playerId. */
        public playerId: number;

        /**
         * Creates a new gameStateReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns gameStateReq instance
         */
        public static create(properties?: chinese_chess_game.IgameStateReq): chinese_chess_game.gameStateReq;

        /**
         * Encodes the specified gameStateReq message. Does not implicitly {@link chinese_chess_game.gameStateReq.verify|verify} messages.
         * @param message gameStateReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: chinese_chess_game.IgameStateReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified gameStateReq message, length delimited. Does not implicitly {@link chinese_chess_game.gameStateReq.verify|verify} messages.
         * @param message gameStateReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: chinese_chess_game.IgameStateReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a gameStateReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns gameStateReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chinese_chess_game.gameStateReq;

        /**
         * Decodes a gameStateReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns gameStateReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chinese_chess_game.gameStateReq;

        /**
         * Verifies a gameStateReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a gameStateReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns gameStateReq
         */
        public static fromObject(object: { [k: string]: any }): chinese_chess_game.gameStateReq;

        /**
         * Creates a plain object from a gameStateReq message. Also converts values to other types if specified.
         * @param message gameStateReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: chinese_chess_game.gameStateReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this gameStateReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for gameStateReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a playerInfo. */
    interface IplayerInfo {

        /** playerInfo seatId */
        seatId?: (number|null);

        /** playerInfo playerId */
        playerId?: (number|null);

        /** playerInfo teamType */
        teamType?: (number|null);
    }

    /** Represents a playerInfo. */
    class playerInfo implements IplayerInfo {

        /**
         * Constructs a new playerInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: chinese_chess_game.IplayerInfo);

        /** playerInfo seatId. */
        public seatId: number;

        /** playerInfo playerId. */
        public playerId: number;

        /** playerInfo teamType. */
        public teamType: number;

        /**
         * Creates a new playerInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns playerInfo instance
         */
        public static create(properties?: chinese_chess_game.IplayerInfo): chinese_chess_game.playerInfo;

        /**
         * Encodes the specified playerInfo message. Does not implicitly {@link chinese_chess_game.playerInfo.verify|verify} messages.
         * @param message playerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: chinese_chess_game.IplayerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified playerInfo message, length delimited. Does not implicitly {@link chinese_chess_game.playerInfo.verify|verify} messages.
         * @param message playerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: chinese_chess_game.IplayerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a playerInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns playerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chinese_chess_game.playerInfo;

        /**
         * Decodes a playerInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns playerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chinese_chess_game.playerInfo;

        /**
         * Verifies a playerInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a playerInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns playerInfo
         */
        public static fromObject(object: { [k: string]: any }): chinese_chess_game.playerInfo;

        /**
         * Creates a plain object from a playerInfo message. Also converts values to other types if specified.
         * @param message playerInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: chinese_chess_game.playerInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this playerInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for playerInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an oneChess. */
    interface IoneChess {

        /** oneChess chessId */
        chessId?: (number|null);

        /** oneChess chessType */
        chessType?: (number|null);

        /** oneChess row */
        row?: (number|null);

        /** oneChess col */
        col?: (number|null);

        /** oneChess teamType */
        teamType?: (number|null);
    }

    /** Represents an oneChess. */
    class oneChess implements IoneChess {

        /**
         * Constructs a new oneChess.
         * @param [properties] Properties to set
         */
        constructor(properties?: chinese_chess_game.IoneChess);

        /** oneChess chessId. */
        public chessId: number;

        /** oneChess chessType. */
        public chessType: number;

        /** oneChess row. */
        public row: number;

        /** oneChess col. */
        public col: number;

        /** oneChess teamType. */
        public teamType: number;

        /**
         * Creates a new oneChess instance using the specified properties.
         * @param [properties] Properties to set
         * @returns oneChess instance
         */
        public static create(properties?: chinese_chess_game.IoneChess): chinese_chess_game.oneChess;

        /**
         * Encodes the specified oneChess message. Does not implicitly {@link chinese_chess_game.oneChess.verify|verify} messages.
         * @param message oneChess message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: chinese_chess_game.IoneChess, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified oneChess message, length delimited. Does not implicitly {@link chinese_chess_game.oneChess.verify|verify} messages.
         * @param message oneChess message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: chinese_chess_game.IoneChess, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an oneChess message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns oneChess
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chinese_chess_game.oneChess;

        /**
         * Decodes an oneChess message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns oneChess
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chinese_chess_game.oneChess;

        /**
         * Verifies an oneChess message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an oneChess message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns oneChess
         */
        public static fromObject(object: { [k: string]: any }): chinese_chess_game.oneChess;

        /**
         * Creates a plain object from an oneChess message. Also converts values to other types if specified.
         * @param message oneChess
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: chinese_chess_game.oneChess, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this oneChess to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for oneChess
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a chessCanMove. */
    interface IchessCanMove {

        /** chessCanMove chessId */
        chessId?: (number|null);

        /** chessCanMove rowList */
        rowList?: (number[]|null);

        /** chessCanMove colList */
        colList?: (number[]|null);
    }

    /** Represents a chessCanMove. */
    class chessCanMove implements IchessCanMove {

        /**
         * Constructs a new chessCanMove.
         * @param [properties] Properties to set
         */
        constructor(properties?: chinese_chess_game.IchessCanMove);

        /** chessCanMove chessId. */
        public chessId: number;

        /** chessCanMove rowList. */
        public rowList: number[];

        /** chessCanMove colList. */
        public colList: number[];

        /**
         * Creates a new chessCanMove instance using the specified properties.
         * @param [properties] Properties to set
         * @returns chessCanMove instance
         */
        public static create(properties?: chinese_chess_game.IchessCanMove): chinese_chess_game.chessCanMove;

        /**
         * Encodes the specified chessCanMove message. Does not implicitly {@link chinese_chess_game.chessCanMove.verify|verify} messages.
         * @param message chessCanMove message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: chinese_chess_game.IchessCanMove, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified chessCanMove message, length delimited. Does not implicitly {@link chinese_chess_game.chessCanMove.verify|verify} messages.
         * @param message chessCanMove message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: chinese_chess_game.IchessCanMove, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a chessCanMove message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns chessCanMove
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chinese_chess_game.chessCanMove;

        /**
         * Decodes a chessCanMove message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns chessCanMove
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chinese_chess_game.chessCanMove;

        /**
         * Verifies a chessCanMove message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a chessCanMove message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns chessCanMove
         */
        public static fromObject(object: { [k: string]: any }): chinese_chess_game.chessCanMove;

        /**
         * Creates a plain object from a chessCanMove message. Also converts values to other types if specified.
         * @param message chessCanMove
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: chinese_chess_game.chessCanMove, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this chessCanMove to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for chessCanMove
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a nextDoing. */
    interface InextDoing {

        /** nextDoing seatId */
        seatId?: (number|null);

        /** nextDoing playerId */
        playerId?: (number|null);

        /** nextDoing teamType */
        teamType?: (number|null);

        /** nextDoing canMoveList */
        canMoveList?: (chinese_chess_game.IchessCanMove[]|null);
    }

    /** Represents a nextDoing. */
    class nextDoing implements InextDoing {

        /**
         * Constructs a new nextDoing.
         * @param [properties] Properties to set
         */
        constructor(properties?: chinese_chess_game.InextDoing);

        /** nextDoing seatId. */
        public seatId: number;

        /** nextDoing playerId. */
        public playerId: number;

        /** nextDoing teamType. */
        public teamType: number;

        /** nextDoing canMoveList. */
        public canMoveList: chinese_chess_game.IchessCanMove[];

        /**
         * Creates a new nextDoing instance using the specified properties.
         * @param [properties] Properties to set
         * @returns nextDoing instance
         */
        public static create(properties?: chinese_chess_game.InextDoing): chinese_chess_game.nextDoing;

        /**
         * Encodes the specified nextDoing message. Does not implicitly {@link chinese_chess_game.nextDoing.verify|verify} messages.
         * @param message nextDoing message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: chinese_chess_game.InextDoing, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified nextDoing message, length delimited. Does not implicitly {@link chinese_chess_game.nextDoing.verify|verify} messages.
         * @param message nextDoing message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: chinese_chess_game.InextDoing, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a nextDoing message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns nextDoing
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chinese_chess_game.nextDoing;

        /**
         * Decodes a nextDoing message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns nextDoing
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chinese_chess_game.nextDoing;

        /**
         * Verifies a nextDoing message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a nextDoing message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns nextDoing
         */
        public static fromObject(object: { [k: string]: any }): chinese_chess_game.nextDoing;

        /**
         * Creates a plain object from a nextDoing message. Also converts values to other types if specified.
         * @param message nextDoing
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: chinese_chess_game.nextDoing, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this nextDoing to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for nextDoing
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a gameStateRes. */
    interface IgameStateRes {

        /** gameStateRes state */
        state?: (number|null);

        /** gameStateRes playerList */
        playerList?: (chinese_chess_game.IplayerInfo[]|null);

        /** gameStateRes chessList */
        chessList?: (chinese_chess_game.IoneChess[]|null);

        /** gameStateRes nextDoing */
        nextDoing?: (chinese_chess_game.InextDoing|null);
    }

    /** Represents a gameStateRes. */
    class gameStateRes implements IgameStateRes {

        /**
         * Constructs a new gameStateRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: chinese_chess_game.IgameStateRes);

        /** gameStateRes state. */
        public state: number;

        /** gameStateRes playerList. */
        public playerList: chinese_chess_game.IplayerInfo[];

        /** gameStateRes chessList. */
        public chessList: chinese_chess_game.IoneChess[];

        /** gameStateRes nextDoing. */
        public nextDoing?: (chinese_chess_game.InextDoing|null);

        /**
         * Creates a new gameStateRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns gameStateRes instance
         */
        public static create(properties?: chinese_chess_game.IgameStateRes): chinese_chess_game.gameStateRes;

        /**
         * Encodes the specified gameStateRes message. Does not implicitly {@link chinese_chess_game.gameStateRes.verify|verify} messages.
         * @param message gameStateRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: chinese_chess_game.IgameStateRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified gameStateRes message, length delimited. Does not implicitly {@link chinese_chess_game.gameStateRes.verify|verify} messages.
         * @param message gameStateRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: chinese_chess_game.IgameStateRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a gameStateRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns gameStateRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chinese_chess_game.gameStateRes;

        /**
         * Decodes a gameStateRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns gameStateRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chinese_chess_game.gameStateRes;

        /**
         * Verifies a gameStateRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a gameStateRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns gameStateRes
         */
        public static fromObject(object: { [k: string]: any }): chinese_chess_game.gameStateRes;

        /**
         * Creates a plain object from a gameStateRes message. Also converts values to other types if specified.
         * @param message gameStateRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: chinese_chess_game.gameStateRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this gameStateRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for gameStateRes
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a moveReq. */
    interface ImoveReq {

        /** moveReq chessId */
        chessId?: (number|null);

        /** moveReq moveRow */
        moveRow?: (number|null);

        /** moveReq moveCol */
        moveCol?: (number|null);
    }

    /** Represents a moveReq. */
    class moveReq implements ImoveReq {

        /**
         * Constructs a new moveReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: chinese_chess_game.ImoveReq);

        /** moveReq chessId. */
        public chessId: number;

        /** moveReq moveRow. */
        public moveRow: number;

        /** moveReq moveCol. */
        public moveCol: number;

        /**
         * Creates a new moveReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns moveReq instance
         */
        public static create(properties?: chinese_chess_game.ImoveReq): chinese_chess_game.moveReq;

        /**
         * Encodes the specified moveReq message. Does not implicitly {@link chinese_chess_game.moveReq.verify|verify} messages.
         * @param message moveReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: chinese_chess_game.ImoveReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified moveReq message, length delimited. Does not implicitly {@link chinese_chess_game.moveReq.verify|verify} messages.
         * @param message moveReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: chinese_chess_game.ImoveReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a moveReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns moveReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chinese_chess_game.moveReq;

        /**
         * Decodes a moveReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns moveReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chinese_chess_game.moveReq;

        /**
         * Verifies a moveReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a moveReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns moveReq
         */
        public static fromObject(object: { [k: string]: any }): chinese_chess_game.moveReq;

        /**
         * Creates a plain object from a moveReq message. Also converts values to other types if specified.
         * @param message moveReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: chinese_chess_game.moveReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this moveReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for moveReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a moveRes. */
    interface ImoveRes {

        /** moveRes chessId */
        chessId?: (number|null);

        /** moveRes moveRow */
        moveRow?: (number|null);

        /** moveRes moveCol */
        moveCol?: (number|null);
    }

    /** Represents a moveRes. */
    class moveRes implements ImoveRes {

        /**
         * Constructs a new moveRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: chinese_chess_game.ImoveRes);

        /** moveRes chessId. */
        public chessId: number;

        /** moveRes moveRow. */
        public moveRow: number;

        /** moveRes moveCol. */
        public moveCol: number;

        /**
         * Creates a new moveRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns moveRes instance
         */
        public static create(properties?: chinese_chess_game.ImoveRes): chinese_chess_game.moveRes;

        /**
         * Encodes the specified moveRes message. Does not implicitly {@link chinese_chess_game.moveRes.verify|verify} messages.
         * @param message moveRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: chinese_chess_game.ImoveRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified moveRes message, length delimited. Does not implicitly {@link chinese_chess_game.moveRes.verify|verify} messages.
         * @param message moveRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: chinese_chess_game.ImoveRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a moveRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns moveRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chinese_chess_game.moveRes;

        /**
         * Decodes a moveRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns moveRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chinese_chess_game.moveRes;

        /**
         * Verifies a moveRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a moveRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns moveRes
         */
        public static fromObject(object: { [k: string]: any }): chinese_chess_game.moveRes;

        /**
         * Creates a plain object from a moveRes message. Also converts values to other types if specified.
         * @param message moveRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: chinese_chess_game.moveRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this moveRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for moveRes
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace game_hall. */
export namespace game_hall {

    /** Properties of a matchReq. */
    interface ImatchReq {

        /** matchReq playerId */
        playerId?: (number|null);
    }

    /** Represents a matchReq. */
    class matchReq implements ImatchReq {

        /**
         * Constructs a new matchReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: game_hall.ImatchReq);

        /** matchReq playerId. */
        public playerId: number;

        /**
         * Creates a new matchReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns matchReq instance
         */
        public static create(properties?: game_hall.ImatchReq): game_hall.matchReq;

        /**
         * Encodes the specified matchReq message. Does not implicitly {@link game_hall.matchReq.verify|verify} messages.
         * @param message matchReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game_hall.ImatchReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified matchReq message, length delimited. Does not implicitly {@link game_hall.matchReq.verify|verify} messages.
         * @param message matchReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game_hall.ImatchReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a matchReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns matchReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game_hall.matchReq;

        /**
         * Decodes a matchReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns matchReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game_hall.matchReq;

        /**
         * Verifies a matchReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a matchReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns matchReq
         */
        public static fromObject(object: { [k: string]: any }): game_hall.matchReq;

        /**
         * Creates a plain object from a matchReq message. Also converts values to other types if specified.
         * @param message matchReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game_hall.matchReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this matchReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for matchReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a matchRes. */
    interface ImatchRes {

        /** matchRes tableId */
        tableId?: (number|null);
    }

    /** Represents a matchRes. */
    class matchRes implements ImatchRes {

        /**
         * Constructs a new matchRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: game_hall.ImatchRes);

        /** matchRes tableId. */
        public tableId: number;

        /**
         * Creates a new matchRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns matchRes instance
         */
        public static create(properties?: game_hall.ImatchRes): game_hall.matchRes;

        /**
         * Encodes the specified matchRes message. Does not implicitly {@link game_hall.matchRes.verify|verify} messages.
         * @param message matchRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game_hall.ImatchRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified matchRes message, length delimited. Does not implicitly {@link game_hall.matchRes.verify|verify} messages.
         * @param message matchRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game_hall.ImatchRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a matchRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns matchRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game_hall.matchRes;

        /**
         * Decodes a matchRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns matchRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game_hall.matchRes;

        /**
         * Verifies a matchRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a matchRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns matchRes
         */
        public static fromObject(object: { [k: string]: any }): game_hall.matchRes;

        /**
         * Creates a plain object from a matchRes message. Also converts values to other types if specified.
         * @param message matchRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game_hall.matchRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this matchRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for matchRes
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace game_login. */
export namespace game_login {

    /** Properties of a LoginReq. */
    interface ILoginReq {

        /** LoginReq token */
        token?: (string|null);

        /** LoginReq playerId */
        playerId?: (number|null);
    }

    /** Represents a LoginReq. */
    class LoginReq implements ILoginReq {

        /**
         * Constructs a new LoginReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: game_login.ILoginReq);

        /** LoginReq token. */
        public token: string;

        /** LoginReq playerId. */
        public playerId: number;

        /**
         * Creates a new LoginReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginReq instance
         */
        public static create(properties?: game_login.ILoginReq): game_login.LoginReq;

        /**
         * Encodes the specified LoginReq message. Does not implicitly {@link game_login.LoginReq.verify|verify} messages.
         * @param message LoginReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game_login.ILoginReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginReq message, length delimited. Does not implicitly {@link game_login.LoginReq.verify|verify} messages.
         * @param message LoginReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game_login.ILoginReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game_login.LoginReq;

        /**
         * Decodes a LoginReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game_login.LoginReq;

        /**
         * Verifies a LoginReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginReq
         */
        public static fromObject(object: { [k: string]: any }): game_login.LoginReq;

        /**
         * Creates a plain object from a LoginReq message. Also converts values to other types if specified.
         * @param message LoginReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game_login.LoginReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LoginReq
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a LoginRes. */
    interface ILoginRes {

        /** LoginRes playerId */
        playerId?: (number|null);
    }

    /** Represents a LoginRes. */
    class LoginRes implements ILoginRes {

        /**
         * Constructs a new LoginRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: game_login.ILoginRes);

        /** LoginRes playerId. */
        public playerId: number;

        /**
         * Creates a new LoginRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginRes instance
         */
        public static create(properties?: game_login.ILoginRes): game_login.LoginRes;

        /**
         * Encodes the specified LoginRes message. Does not implicitly {@link game_login.LoginRes.verify|verify} messages.
         * @param message LoginRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game_login.ILoginRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginRes message, length delimited. Does not implicitly {@link game_login.LoginRes.verify|verify} messages.
         * @param message LoginRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game_login.ILoginRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game_login.LoginRes;

        /**
         * Decodes a LoginRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game_login.LoginRes;

        /**
         * Verifies a LoginRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginRes
         */
        public static fromObject(object: { [k: string]: any }): game_login.LoginRes;

        /**
         * Creates a plain object from a LoginRes message. Also converts values to other types if specified.
         * @param message LoginRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game_login.LoginRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LoginRes
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
