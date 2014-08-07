editAreaLoader.load_syntax["progress"] = {
    'COMMENT_SINGLE' : {}, 
    'COMMENT_MULTI' : {"/*": "*/"}, 
    'QUOTEMARKS' : {0: "\'", 1: "\""}, 
    'KEYWORDS' : {
        'keywordgroup1': ["ACCUMULATE", "APPLY", "ASSIGN", "BELL", "QUERY", "BUFFER-COMPARE", "BUFFER-COPY", "CALL", "CASE", "CHOOSE", "CLASS", "CLOSE QUERY", "each", "WHERE", "CLOSE STORED-PROCEDURE", "COLOR", "COMPILE", "CONNECT", "CONSTRUCTOR", "COPY-LOB", "CREATE", "CREATE ALIAS", "CREATE BROWSE", "CREATE BUFFER", "CREATE CALL", "CREATE CLIENT-PRINCIPAL", "CREATE DATABASE", "CREATE DATASET", "CREATE DATA-SOURCE", "CREATE QUERY", "CREATE SAX-attributeS", "CREATE SAX-READER", "CREATE SAX-WRITER", "CREATE SERVER", "CREATE SERVER-SOCKET", "CREATE SOAP-HEADER", "CREATE SOAP-HEADER-ENTRYREF", "CREATE SOCKET", "CREATE TEMP-TABLE", "CREATE WIDGET", "CREATE widget-POOL", "CREATE X-DOCUMENT", "CREATE X-NODEREF", "CURRENT-LANGUAGE", "CURRENT-VALUE", "DDE ADVISE", "DDE EXECUTE", "DDE GET", "DDE INITIATE", "DDE REQUEST", "DDE SEND", "DDE TERMINATE", "DEFINE BROWSE", "DEFINE BUFFER", "DEFINE", "DEFINE BUTTON", "DEFINE DATASET", "DEFINE DATA-SOURCE", "DEFINE FRAME", "DEF", "VAR", "DEFINE IMAGE", "DEFINE MENU", "DEFINE PARAMETER", "DEFINE property", "PARAM", "DEFINE QUERY", "DEFINE RECTANGLE", "DEFINE STREAM", "DEFINE SUB-MENU", "DEFINE TEMP-TABLE", "DEFINE WORKFILE", "DEFINE WORK-TABLE", "DELETE", "DELETE ALIAS", "DELETE object", "DELETE PROCEDURE", "DELETE widget", "DELETE widget-POOL", "DESTRUCTOR", "DICTIONARY", "DISABLE", "DISABLE TRIGGERS", "DISCONNECT", "DISPLAY", "DO", "DOS", "DOWN", "DYNAMIC-CURRENT-VALUE", "ELSE", "EMPTY TEMP-TABLE", "ENABLE", "END", "ENTRY", "FIND", "AND", "FIX-CODEPAGE", "FOR", "FORM", "FRAME-VALUE", "GET", "GET-KEY-VALUE", "HIDE", "IF", "IMPORT", "INPUT CLEAR", "INPUT CLOSE", "INPUT FROM", "input", "INPUT THROUGH", "INPUT-OUTPUT CLOSE", "INPUT-OUTPUT THROUGH", "INTERFACE", "LEAVE", "BREAK", "LOAD-PICTURE", "MESSAGE", "method", "NEXT", "prev", "NEXT-PROMPT", "ON", "OPEN QUERY", "OS-APPEND", "OS-COMMAND", "OS-COPY", "OS-CREATE-DIR", "OS-DELETE", "OS-RENAME", "OUTPUT CLOSE", "OUTPUT THROUGH", "OUTPUT TO", "OVERLAY", "PAGE", "PAUSE", "PROCEDURE", "PROCESS EVENTS", "PROMPT-FOR", "PROMSGS", "PROPATH", "PUBLISH", "PUT", "PUT CURSOR", "PUT SCREEN", "PUT-BITS", "PUT-BYTE", "PUT-BYTES", "PUT-DOUBLE", "PUT-FLOAT", "PUT-INT64", "PUT-KEY-VALUE", "PUT-LONG", "PUT-SHORT", "PUT-STRING", "PUT-UNSIGNED-LONG", "PUT-UNSIGNED-SHORT", "QUIT", "RAW-TRANSFER", "READKEY", "RELEASE", "RELEASE EXTERNAL", "RELEASE object", "REPEAT", "REPOSITION", "RUN", "RUN STORED-PROCEDURE", "RUN SUPER", "SAVE CACHE", "SCROLL", "SEEK", "SET", "SET-BYTE-ORDER", "SET-POINTER-VALUE", "SET-SIZE", "SHOW-STATS", "STATUS", "STOP", "SUBSCRIBE", "SUBSTRING", "system-DIALOG COLOR", "system-DIALOG FONT", "system-DIALOG GET-DIR", "system-DIALOG GET-FILE", "system-DIALOG PRINTER-SETUP", "system-HELP", "THEN", "THIS-object", "TRANSACTION-MODE AUTOMATIC", "TRIGGER PROCEDURE", "UNDERLINE", "UNDO", "UNIX", "UNLOAD", "UNSUBSCRIBE", "UP", "STRING", "UPDATE", "USE", "USING", "substr", "SKIP", "CLOSE", "VIEW", "WAIT-FOR", "MODULO", "NE", "AVAIL", "NOT", "OR", "&GLOBAL-DEFINE", "&IF", "UNFORMATTED", "NO-PAUSE", "&THEN", "&ELSEIF", "&ELSE", "&ENDIF", "OPEN", "NO-WAIT", "&MESSAGE", "&SCOPED-DEFINE", "&UNDEFINE", "DEFINED", "BROWSE", "BUTTON", "COMBO-BOX", "CONTROL-FRAME", "DIALOG-BOX", "EDITOR", "FIELD-GROUP", "FILL-IN", "FRAME", "IMAGE", "LITERAL", "MENU", "MENU-ITEM", "RADIO-SET", "RECTANGLE", "SELECTION-LIST", "SLIDER", "SUB-MENU", "TEXT", "TOGGLE-BOX", "WINDOW", "WITH", "AT", "OF", "EDITING", "ON ENDKEY", "output", "ON ERROR", "ON QUIT", "ON STOP", "PRESELECT", "QUERY-TUNING", "SIZE", "Trigger", "VIEW-AS", "ALERT-BOX", "Buffer", "Data-relation", "ProDataSet", "SAX-attributes", "SAX-reader", "SAX-writer", "Server socket", "SOAP-fault", "SOAP-header", "SOAP-header-entryref", "Socket", "Temp-table", "X-noderef", "Height", "Left", "Top", "TO", "Width", "ACTIVE-WINDOW", "AUDIT-CONTROL", "FIRST", "LAST", "AUDIT-POLICY", "CLIPBOARD", "CODEBASE-LOCATOR", "COLOR-TABLE", "COMPILER", "COM-SELF", "DEBUGGER", "DEFAULT-WINDOW", "ERROR-STATUS", "FILE-INFO", "FOCUS", "FONT-TABLE", "LAST-EVENT", "LOG-MANAGER", "RCODE-INFO", "SECURITY-POLICY", "SELF", "SESSION", "SOURCE-PROCEDURE", "TARGET-PROCEDURE", "NO-LOCK", "NO-error", "THIS-PROCEDURE", "WEB-CONTEXT", "FUNCTION", "RETURNS", "NO-UNDO"],
        'keywordgroup2': ["ACCEPT-CHANGES", "ACCEPT-ROW-CHANGES", "ADD-BUFFER", "ADD-CALC-COLUMN", "ADD-COLUMNS-FROM", "ADD-EVENTS-PROCEDURE", "ADD-FIELDS-FROM", "ADD-FIRST", "ADD-HEADER-ENTRY", "ADD-INDEX-FIELD", "ADD-LAST", "ADD-LIKE-COLUMN", "ADD-LIKE-FIELD", "ADD-LIKE-INDEX", "ADD-NEW-FIELD", "ADD-NEW-INDEX", "ADD-RELATION", "ADD-SCHEMA-LOCATION", "ADD-SOURCE-BUFFER", "ADD-SUPER-PROCEDURE", "APPEND-CHILD", "APPLY-CALLBACK", "ATTACH-DATA-SOURCE", "AUTHENTICATION-FAILED", "BEGIN-EVENT-GROUP", "BUFFER-CREATE", "BUFFER-DELETE", "BUFFER-RELEASE", "BUFFER-VALIDATE", "CANCEL-BREAK", "CANCEL-REQUESTS", "CLEAR", "CLEAR-APPL-CONTEXT", "CLEAR-LOG", "CLEAR-SELECTION", "CLEAR-SORT-ARROWS", "CLONE-NODE", "CLOSE-LOG", "CONNECTED", "CONVERT-TO-OFFSET", "COPY-DATASET", "COPY-SAX-attributeS", "COPY-TEMP-TABLE", "CREATE-LIKE", "CREATE-NODE", "CREATE-NODE-NAMESPACE", "CREATE-RESULT-LIST-ENTRY", "DEBUG", "DECLARE-NAMESPACE", "DELETE-CHAR", "DELETE-CURRENT-ROW", "DELETE-HEADER-ENTRY", "DELETE-LINE", "DELETE-NODE", "DELETE-RESULT-LIST-ENTRY", "DELETE-SELECTED-ROW", "DELETE-SELECTED-ROWS", "DESELECT-FOCUSED-ROW", "DESELECT-ROWS", "DESELECT-SELECTED-ROW", "DETACH-DATA-SOURCE", "DISABLE-CONNECTIONS", "DISABLE-DUMP-TRIGGERS", "DISABLE-LOAD-TRIGGERS", "DISPLAY-MESSAGE", "DUMP-LOGGING-NOW", "EDIT-CLEAR", "EDIT-COPY", "EDIT-CUT", "EDIT-PASTE", "EDIT-UNDO", "EMPTY-DATASET", "EMPTY-TEMP-TABLE", "ENABLE-CONNECTIONS", "ENABLE-EVENTS", "ENCRYPT-AUDIT-MAC-KEY", "END-DOCUMENT", "END-ELEMENT", "END-EVENT-GROUP", "END-FILE-DROP", "EXPORT", "EXPORT-PRINCIPAL", "FETCH-SELECTED-ROW", "FILL", "FIND-BY-ROWID", "FIND-CURRENT", "FIND-FIRST", "FIND-LAST", "FIND-UNIQUE", "GET-attribute", "GET-attribute-NODE", "GET-BINARY-DATA", "GET-BLUE-VALUE", "GET-BROWSE-COLUMN", "GET-BUFFER-HANDLE", "GET-BYTES-AVAILABLE", "GET-CALLBACK-PROC-CONTEXT", "GET-CALLBACK-PROC-NAME", "GET-CGI-LIST", "GET-CGI-LONG-VALUE", "GET-CGI-VALUE", "GET-CHANGES", "GET-CHILD", "GET-CHILD-RELATION", "GET-CONFIG-VALUE", "GET-CURRENT", "GET-DATASET-BUFFER", "GET-DOCUMENT-ELEMENT", "GET-DROPPED-FILE", "GET-DYNAMIC", "GET-ERROR-COLUMN ", "GET-ERROR-ROW ", "GET-FILE-NAME ", "GET-FILE-OFFSET ", "GET-FIRST", "GET-GREEN-VALUE", "GET-HEADER-ENTRY", "GET-INDEX-BY-NAMESPACE-NAME", "GET-INDEX-BY-QNAME", "GET-ITERATION", "GET-LAST", "GET-LOCALNAME-BY-INDEX", "GET-MESSAGE", "GET-NEXT", "GET-NODE", "GET-NUMBER", "GET-PARENT", "GET-PREV", "GET-PRINTERS", "GET-property", "GET-QNAME-BY-INDEX", "GET-RED-VALUE", "GET-RELATION", "GET-REPOSITIONED-ROW", "GET-RGB-VALUE", "GET-SELECTED-widget", "GET-SERIALIZED", "GET-SIGNATURE", "GET-SOCKET-OPTION", "GET-SOURCE-BUFFER", "GET-TAB-ITEM", "GET-TEXT-HEIGHT-CHARS", "GET-TEXT-HEIGHT-PIXELS", "GET-TEXT-WIDTH-CHARS", "GET-TEXT-WIDTH-PIXELS", "GET-TOP-BUFFER", "GET-TYPE-BY-INDEX", "GET-TYPE-BY-NAMESPACE-NAME", "GET-TYPE-BY-QNAME", "GET-URI-BY-INDEX", "GET-VALUE-BY-INDEX", "GET-VALUE-BY-NAMESPACE-NAME", "GET-VALUE-BY-QNAME", "GET-WAIT-STATE", "IMPORT-NODE", "IMPORT-PRINCIPAL", "INCREMENT-EXCLUSIVE-ID", "INITIALIZE-DOCUMENT-TYPE", "INITIATE", "INSERT", "INSERT-attribute", "INSERT-BACKTAB", "INSERT-BEFORE", "INSERT-FILE", "INSERT-ROW", "INSERT-STRING", "INSERT-TAB", "INVOKE", "IS-ROW-SELECTED", "IS-SELECTED", "LIST-property-NAMES", "LOAD", "LoadControls", "LOAD-DOMAINS", "LOAD-ICON", "LOAD-IMAGE", "LOAD-IMAGE-DOWN", "LOAD-IMAGE-INSENSITIVE", "LOAD-IMAGE-UP", "LOAD-MOUSE-POINTER", "LOAD-SMALL-ICON", "LOCK-REGISTRATION", "LOG-AUDIT-EVENT", "LOGOUT", "LONGCHAR-TO-NODE-VALUE", "LOOKUP", "MEMPTR-TO-NODE-VALUE", "MERGE-CHANGES", "MERGE-ROW-CHANGES", "MOVE-AFTER-TAB-ITEM", "MOVE-BEFORE-TAB-ITEM", "MOVE-COLUMN", "MOVE-TO-BOTTOM", "MOVE-TO-EOF", "MOVE-TO-TOP", "NODE-VALUE-TO-LONGCHAR", "NODE-VALUE-TO-MEMPTR", "NORMALIZE", "QUERY-CLOSE", "QUERY-OPEN", "QUERY-PREPARE", "READ", "READ-FILE", "READ-XML", "READ-XMLSCHEMA", "REFRESH", "REFRESH-AUDIT-POLICY", "REGISTER-DOMAIN", "REJECT-CHANGES", "REJECT-ROW-CHANGES", "REMOVE-attribute", "REMOVE-CHILD", "REMOVE-EVENTS-PROCEDURE", "REMOVE-SUPER-PROCEDURE", "REPLACE", "REPLACE-CHILD", "REPLACE-SELECTION-TEXT", "REPOSITION-BACKWARD", "REPOSITION-FORWARD", "REPOSITION-TO-ROW", "REPOSITION-TO-ROWID", "RESET", "SAVE", "SAVE-FILE", "SAVE-ROW-CHANGES", "SAX-PARSE", "SAX-PARSE-FIRST", "SAX-PARSE-NEXT", "SCROLL-TO-CURRENT-ROW", "SCROLL-TO-ITEM", "SCROLL-TO-SELECTED-ROW", "SEAL", "SEARCH", "SELECT-ALL", "SELECT-FOCUSED-ROW", "SELECT-NEXT-ROW", "SELECT-PREV-ROW", "SELECT-ROW", "SET-ACTOR", "SET-APPL-CONTEXT", "SET-attribute", "SET-attribute-NODE", "SET-BLUE-VALUE", "SET-BREAK", "SET-BUFFERS", "SET-CALLBACK", "SET-CALLBACK-PROCEDURE", "SET-CLIENT", "SET-COMMIT", "SET-CONNECT-PROCEDURE", "SET-DYNAMIC", "SET-GREEN-VALUE", "SET-INPUT-SOURCE", "SET-MUST-UNDERSTAND", "SET-NODE", "SET-NUMERIC-FORMAT", "SET-OUTPUT-DESTINATION", "SET-PARAMETER", "SET-property", "SET-READ-RESPONSE-PROCEDURE", "SET-RED-VALUE", "SET-REPOSITIONED-ROW", "SET-RGB-VALUE", "SET-ROLLBACK", "SET-SELECTION", "SET-SERIALIZED", "SET-SOCKET-OPTION", "SET-SORT-ARROW", "SET-WAIT-STATE", "START-DOCUMENT", "START-ELEMENT", "STOP-PARSING", "SYNCHRONIZE", "TEMP-TABLE-PREPARE", "UPDATE-attribute", "URL-DECODE", "URL-ENCODE", "VALIDATE", "VALIDATE-SEAL", "WRITE", "WRITE-CDATA", "USE-INDEX", "WRITE-CHARACTERS", "WRITE-COMMENT", "WRITE-DATA-ELEMENT", "WRITE-EMPTY-ELEMENT", "WRITE-ENTITY-REF", "WRITE-EXTERNAL-DTD", "WRITE-FRAGMENT", "WRITE-MESSAGE", "WRITE-PROCESSING-INSTRUCTION", "WRITE-XML", "WRITE-XMLSCHEMA", "FALSE", "true"],
        'keywordgroup3': ["ABSOLUTE", "ACCUM", "ADD-INTERVAL", "ALIAS", "mod", "AMBIGUOUS", "ASC", "AUDIT-ENABLED", "AVAILABLE", "BASE64-DECODE", "BASE64-ENCODE", "CAN-DO", "CAN-FIND", "CAN-QUERY", "CAN-SET", "CAPS", "CAST", "OS-DIR", "CHR", "CODEPAGE-CONVERT", "COMPARE", "COUNT-OF", "CURRENT-CHANGED", "CURRENT-RESULT-ROW", "DATASERVERS", "DATA-SOURCE-MODIFIED", "DATETIME", "DATETIME-TZ", "DAY", "DBCODEPAGE", "DBCOLLATION", "DBNAME", "DBPARAM", "DBRESTRICTIONS", "DBTASKID", "DBTYPE", "DBVERSION", "DECIMAL", "DECRYPT", "DYNAMIC-function", "DYNAMIC-NEXT-VALUE", "ENCODE", "ENCRYPT", "ENTERED", "ERROR", "ETIME", "EXP", "ENDKEY", "END-error", "FIRST-OF", "FRAME-DB", "FRAME-DOWN", "FRAME-FIELD", "FRAME-FILE", "FRAME-INDEX", "FRAME-LINE", "GATEWAYS", "GENERATE-PBE-KEY", "GENERATE-PBE-SALT", "GENERATE-RANDOM-KEY", "GENERATE-UUID", "GET-BITS", "GET-BYTE", "GET-BYTE-ORDER", "GET-BYTES", "GET-CODEPAGE", "GET-CODEPAGES", "GET-COLLATION", "GET-COLLATIONS", "GET-DOUBLE", "GET-FLOAT", "GET-INT64", "GET-LONG", "GET-POINTER-VALUE", "GET-SHORT", "GET-SIZE", "GET-STRING", "GET-UNSIGNED-LONG", "GET-UNSIGNED-SHORT", "GO-PENDING", "GUID", "HEX-DECODE", "INDEX", "INT64", "INTEGER", "INTERVAL", "IS-ATTR-SPACE", "IS-CODEPAGE-FIXED", "IS-COLUMN-CODEPAGE", "IS-LEAD-BYTE", "ISO-DATE", "KBLABEL", "KEYCODE", "KEYFUNCTION", "KEYLABEL", "KEYWORD", "KEYWORD-ALL", "LASTKEY", "LAST-OF", "LC", "LDBNAME", "LEFT-TRIM", "LIBRARY", "LINE-COUNTER", "LIST-EVENTS", "LIST-QUERY-ATTRS", "LIST-SET-ATTRS", "LIST-widgetS", "LOCKED", "LOGICAL", "MAXIMUM", "MD5-DIGEST", "MEMBER", "MESSAGE-LINES", "MINIMUM", "MONTH", "MTIME", "NEW", "NEXT-VALUE", "SHARED", "NOT ENTERED", "NOW", "NUM-ALIASES", "NUM-DBS", "NUM-ENTRIES", "NUM-RESULTS", "OPSYS", "OS-DRIVES", "OS-ERROR", "OS-GETENV", "PAGE-NUMBER", "PAGE-SIZE", "PDBNAME", "PROC-HANDLE", "PROC-STATUS", "PROGRAM-NAME", "PROGRESS", "PROVERSION", "QUERY-OFF-END", "QUOTER", "RANDOM", "RAW", "RECID", "REJECTED", "RETRY", "RETURN-VALUE", "RGB-VALUE", "RIGHT-TRIM", "R-INDEX", "ROUND", "ROWID", "LENGTH", "SDBNAME", "SET-DB-CLIENT", "SETUSERID", "SHA1-DIGEST", "SQRT", "SUBSTITUTE", "VARIABLE", "SUPER", "TERMINAL", "TIME", "TIMEZONE", "external", "TODAY", "TO-ROWID", "TRIM", "TRUNCATE", "return", "TYPE-OF", "USERID", "VALID-EVENT", "VALID-HANDLE", "VALID-object", "WEEKDAY", "YEAR", "BEGINS", "VALUE", "EQ", "GE", "GT", "LE", "LT", "MATCHES", "AS", "BY", "LIKE"],
        'keywordgroup4': ["ACCELERATOR", "ACTIVE", "ACTOR", "ADM-DATA", "AFTER-BUFFER", "AFTER-ROWID", "AFTER-TABLE", "ALLOW-COLUMN-SEARCHING", "ALWAYS-ON-TOP", "APPL-ALERT-BOXES", "APPL-CONTEXT-ID", "APPSERVER-INFO", "APPSERVER-PASSWORD", "APPSERVER-USERID", "ASYNCHRONOUS", "ASYNC-REQUEST-COUNT", "ASYNC-REQUEST-HANDLE", "ATTACHED-PAIRLIST", "attribute-NAMES", "ATTR-SPACE", "AUDIT-EVENT-CONTEXT", "AUTO-COMPLETION", "AUTO-DELETE", "AUTO-DELETE-XML", "AUTO-END-KEY", "AUTO-GO", "AUTO-INDENT", "AUTO-RESIZE", "AUTO-RETURN", "AUTO-SYNCHRONIZE", "AUTO-VALIDATE", "AUTO-ZAP", "AVAILABLE-FORMATS", "BACKGROUND", "BASE-ADE", "BASIC-LOGGING", "BATCH-MODE", "BATCH-SIZE", "BEFORE-BUFFER", "BEFORE-ROWID", "BEFORE-TABLE", "BGCOLOR", "BLANK", "BLOCK-ITERATION-DISPLAY", "BORDER-BOTTOM-CHARS", "BORDER-BOTTOM-PIXELS", "BORDER-LEFT-CHARS", "BORDER-LEFT-PIXELS", "BORDER-RIGHT-CHARS", "BORDER-RIGHT-PIXELS", "BORDER-TOP-CHARS", "BORDER-TOP-PIXELS", "BOX", "BOX-SELECTABLE", "BUFFER-CHARS", "BUFFER-FIELD", "BUFFER-HANDLE", "BUFFER-LINES", "BUFFER-NAME", "BUFFER-VALUE", "BYTES-READ", "BYTES-WRITTEN", "CACHE", "CALL-NAME", "CALL-TYPE", "CANCEL-BUTTON", "CANCELLED", "CAN-CREATE", "CAN-DELETE", "CAN-READ", "CAN-WRITE", "CAREFUL-PAINT", "CASE-SENSITIVE", "CENTERED", "CHARSET", "CHECKED", "CHILD-BUFFER", "CHILD-NUM", "CLASS-TYPE", "CLIENT-CONNECTION-ID", "CLIENT-TTY", "CLIENT-TYPE", "CLIENT-WORKSTATION", "CODE", "CODEPAGE", "COLUMN", "COLUMN-BGCOLOR", "COLUMN-DCOLOR", "COLUMN-FGCOLOR", "COLUMN-FONT", "COLUMN-LABEL", "COLUMN-MOVABLE", "COLUMN-PFCOLOR", "COLUMN-READ-ONLY", "COLUMN-RESIZABLE", "COLUMN-SCROLLING", "COM-HANDLE", "COMPLETE", "CONFIG-NAME", "CONTEXT-HELP", "CONTEXT-HELP-FILE", "CONTEXT-HELP-ID", "CONTROL-BOX", "CONVERT-3D-COLORS", "CPCASE", "CPCOLL", "CPINTERNAL", "CPLOG", "CPPRINT", "CPRCODEIN", "CPRCODEOUT", "CPSTREAM", "CPTERM", "CRC-VALUE", "CURRENT-COLUMN", "CURRENT-ENVIRONMENT", "CURRENT-ITERATION", "CURRENT-ROW-MODIFIED", "CURRENT-WINDOW", "CURSOR-CHAR", "CURSOR-LINE", "CURSOR-OFFSET", "DATA-ENTRY-RETURN", "DATASET", "DATA-SOURCE", "DATA-SOURCE-COMPLETE-MAP", "DATA-TYPE", "DATE-FORMAT", "DB-REFERENCES", "DCOLOR", "DDE-ERROR", "DDE-ID", "DDE-ITEM", "DDE-NAME", "DDE-TOPIC", "DEBLANK", "DEBUG-ALERT", "DECIMALS", "DEFAULT", "DEFAULT-BUFFER-HANDLE", "DEFAULT-BUTTON", "DEFAULT-COMMIT", "DELIMITER", "DISABLE-AUTO-ZAP", "DISPLAY-TIMEZONE", "DISPLAY-TYPE", "DOMAIN-DESCRIPTION", "DOMAIN-NAME", "DOMAIN-TYPE", "DRAG-ENABLED", "DROP-TARGET", "DYNAMIC", "EDGE-CHARS", "EDGE-PIXELS", "EDIT-CAN-PASTE", "EDIT-CAN-UNDO", "EMPTY", "ENCODING", "ENCRYPTION-SALT", "END-USER-PROMPT", "ENTRY-TYPES-LIST", "ERROR-COLUMN", "ERROR-object-DETAIL", "ERROR-ROW", "ERROR-STRING", "EVENT-GROUP-ID", "EVENT-PROCEDURE", "EVENT-PROCEDURE-CONTEXT", "EVENT-TYPE", "EXCLUSIVE-ID", "EXECUTION-LOG", "EXPAND", "EXPANDABLE", "FGCOLOR", "FILE-CREATE-DATE", "FILE-CREATE-TIME", "FILE-MOD-DATE", "FILE-MOD-TIME", "FILE-NAME", "FILE-OFFSET", "FILE-SIZE", "FILE-TYPE", "FILLED", "FILL-MODE", "FILL-WHERE-STRING", "FIRST-ASYNC-REQUEST", "FIRST-BUFFER", "FIRST-CHILD", "FIRST-COLUMN", "FIRST-DATASET", "FIRST-DATA-SOURCE", "FIRST-object", "FIRST-PROCEDURE", "FIRST-QUERY", "FIRST-SERVER", "FIRST-SERVER-SOCKET", "FIRST-SOCKET", "FIRST-TAB-ITEM", "FIT-LAST-COLUMN", "FLAT-BUTTON", "FOCUSED-ROW", "FOCUSED-ROW-SELECTED", "FONT", "FOREGROUND", "FORMAT", "FORMATTED", "FORM-INPUT", "FORM-LONG-INPUT", "FORWARD-ONLY", "FRAGMENT", "FRAME-COL", "FRAME-NAME", "FRAME-ROW", "FRAME-SPACING", "FRAME-X", "FRAME-Y", "FREQUENCY", "FULL-HEIGHT-CHARS", "FULL-HEIGHT-PIXELS", "FULL-PATHNAME", "FULL-WIDTH-CHARS", "FULL-WIDTH-PIXELS", "GRAPHIC-EDGE", "GRID-FACTOR-HORIZONTAL", "GRID-FACTOR-VERTICAL", "GRID-SNAP", "GRID-UNIT-HEIGHT-CHARS", "GRID-UNIT-HEIGHT-PIXELS", "GRID-UNIT-WIDTH-CHARS", "GRID-UNIT-WIDTH-PIXELS", "GRID-VISIBLE", "GROUP-BOX", "HANDLE", "HANDLER", "HAS-LOBS", "HAS-RECORDS", "HEIGHT-CHARS", "HEIGHT-PIXELS", "HELP", "HIDDEN", "HORIZONTAL", "HTML-CHARSET", "HTML-END-OF-LINE", "HTML-END-OF-PAGE", "HTML-FRAME-BEGIN", "HTML-FRAME-END", "HTML-HEADER-BEGIN", "HTML-HEADER-END", "HTML-TITLE-BEGIN", "HTML-TITLE-END", "HWND", "ICFPARAMETER", "ICON", "IGNORE-CURRENT-MODIFIED", "IMAGE-DOWN", "IMAGE-INSENSITIVE", "IMAGE-UP", "IMMEDIATE-DISPLAY", "INDEX-INFORMATION", "IN-HANDLE", "INHERIT-BGCOLOR", "INHERIT-FGCOLOR", "INITIAL", "INIT", "INNER-CHARS", "INNER-LINES", "INPUT-VALUE", "INSTANTIATING-PROCEDURE", "INTERNAL-ENTRIES", "IS-CLASS", "IS-OPEN", "IS-PARAMETER-SET", "IS-XML", "ITEMS-PER-ROW", "KEEP-CONNECTION-OPEN", "KEEP-FRAME-Z-ORDER", "KEEP-SECURITY-CACHE", "KEY", "KEYS", "LABEL", "LABEL-BGCOLOR", "LABEL-DCOLOR", "LABEL-FGCOLOR", "LABEL-FONT", "LABELS", "LANGUAGES", "LARGE", "LARGE-TO-SMALL", "LAST-ASYNC-REQUEST", "LAST-BATCH", "LAST-CHILD", "LAST-object", "LAST-PROCEDURE", "LAST-SERVER", "LAST-SERVER-SOCKET", "LAST-SOCKET", "LAST-TAB-ITEM", "LINE", "LIST-ITEM-PAIRS", "LIST-ITEMS", "LITERAL-QUESTION", "LOCAL-HOST", "LOCAL-NAME", "LOCAL-PORT", "LOCATOR-COLUMN-NUMBER", "LOCATOR-LINE-NUMBER", "LOCATOR-PUBLIC-ID", "LOCATOR-system-ID", "LOCATOR-TYPE", "LOG-ENTRY-TYPES", "LOGFILE-NAME", "LOGGING-LEVEL", "LOGIN-EXPIRATION-TIMESTAMP", "LOGIN-HOST", "LOGIN-STATE", "LOG-THRESHOLD", "MANDATORY", "MANUAL-HIGHLIGHT", "MAX-BUTTON", "MAX-CHARS", "MAX-DATA-GUESS", "MAX-HEIGHT-CHARS", "MAX-HEIGHT-PIXELS", "MAX-VALUE", "MAX-WIDTH-CHARS", "MAX-WIDTH-PIXELS", "MD5-VALUE", "MENU-BAR", "MENU-KEY", "MENU-MOUSE", "MERGE-BY-FIELD", "MESSAGE-AREA", "MESSAGE-AREA-FONT", "MIN-BUTTON", "MIN-COLUMN-WIDTH-CHARS", "MIN-COLUMN-WIDTH-PIXELS", "MIN-HEIGHT-CHARS", "MIN-HEIGHT-PIXELS", "MIN-SCHEMA-MARSHAL", "MIN-VALUE", "MIN-WIDTH-CHARS", "MIN-WIDTH-PIXELS", "MODIFIED", "MOUSE-POINTER", "MOVABLE", "MULTI-COMPILE", "MULTIPLE", "MULTITASKING-INTERVAL", "MUST-UNDERSTAND", "NAME", "NAMESPACE-PREFIX", "NAMESPACE-URI", "NEEDS-APPSERVER-PROMPT", "NEEDS-PROMPT", "NESTED", "NEW-ROW", "NEXT-COLUMN", "NEXT-ROWID", "NEXT-SIBLING", "NEXT-TAB-ITEM", "NO-BOX", "NO-CURRENT-VALUE", "NODE-VALUE", "NO-EMPTY-SPACE", "NO-FOCUS", "NONAMESPACE-SCHEMA-LOCATION", "NO-SCHEMA-MARSHAL", "NO-VALIDATE", "NUM-BUFFERS", "NUM-BUTTONS", "NUM-CHILD-RELATIONS", "NUM-CHILDREN", "NUM-COLUMNS", "NUM-DROPPED-FILES", "NUMERIC-DECIMAL-POINT", "NUMERIC-FORMAT", "NUMERIC-SEPARATOR", "NUM-FIELDS", "NUM-FORMATS", "NUM-HEADER-ENTRIES", "NUM-ITEMS", "NUM-ITERATIONS", "NUM-LINES", "NUM-LOCKED-COLUMNS", "NUM-LOG-FILES", "NUM-MESSAGES", "NUM-PARAMETERS", "NUM-REFERENCES", "NUM-RELATIONS", "NUM-REPLACED", "NUM-SELECTED-ROWS", "NUM-SELECTED-WIDGETS", "NUM-SOURCE-BUFFERS", "NUM-TABS", "NUM-TOP-BUFFERS", "NUM-TO-RETAIN", "NUM-VISIBLE-COLUMNS", "ON-FRAME-BORDER", "ORIGIN-HANDLE", "ORIGIN-ROWID", "OWNER", "OWNER-DOCUMENT", "PAGE-BOTTOM", "PAGE-TOP", "PARAMETER", "PARENT", "PARENT-BUFFER", "PARENT-RELATION", "PARSE-STATUS", "PASSWORD-FIELD", "PATHNAME", "PBE-HASH-ALGORITHM", "PBE-KEY-ROUNDS", "PERSISTENT", "PERSISTENT-CACHE-DISABLED", "PERSISTENT-PROCEDURE", "PFCOLOR", "PIXELS-PER-COLUMN", "PIXELS-PER-ROW", "POPUP-MENU", "POPUP-ONLY", "POSITION", "PREFER-DATASET", "PREPARED", "PREPARE-STRING", "PREV-COLUMN", "PREV-SIBLING", "PREV-TAB-ITEM", "PRIMARY", "PRINTER-CONTROL-HANDLE", "PRINTER-HDC", "PRINTER-NAME", "PRINTER-PORT", "PRIVATE-DATA", "PROCEDURE-NAME", "PROGRESS-SOURCE", "PROXY", "PROXY-PASSWORD", "PROXY-USERID", "PUBLIC-ID", "PUBLISHED-EVENTS", "RADIO-BUTTONS", "READ-ONLY", "RECORD-LENGTH", "REFRESHABLE", "RELATION-FIELDS", "RELATIONS-ACTIVE", "REMOTE", "REMOTE-HOST", "REMOTE-PORT", "RESIZABLE", "RESIZE", "RESTART-ROWID", "RETAIN-SHAPE", "RETURN-INSERTED", "RETURN-VALUE-DATA-TYPE", "ROLES", "ROUNDED", "COL", "ROW", "ROW-HEIGHT-CHARS", "ROW-HEIGHT-PIXELS", "ROW-MARKERS", "ROW-RESIZABLE", "ROW-STATE", "SAVE-WHERE-STRING", "SCHEMA-CHANGE", "SCHEMA-LOCATION", "SCHEMA-MARSHAL", "SCHEMA-PATH", "SCREEN-LINES", "SCREEN-VALUE", "SCROLLABLE", "SCROLLBAR-HORIZONTAL", "SCROLL-BARS", "SCROLLBAR-VERTICAL", "SEAL-TIMESTAMP", "SELECTABLE", "SELECTED", "SELECTION-END", "SELECTION-START", "SELECTION-TEXT", "SENSITIVE", "SEPARATOR-FGCOLOR", "SEPARATORS", "SERVER", "SERVER-CONNECTION-BOUND", "SERVER-CONNECTION-BOUND-REQUEST", "SERVER-CONNECTION-CONTEXT", "SERVER-CONNECTION-ID", "SERVER-OPERATING-MODE", "SESSION-END", "SESSION-ID", "SHOW-IN-TASKBAR", "SIDE-LABEL-HANDLE", "SIDE-LABELS", "SKIP-DELETED-RECORD", "SMALL-ICON", "SMALL-TITLE", "SOAP-FAULT-ACTOR", "SOAP-FAULT-CODE", "SOAP-FAULT-DETAIL", "SOAP-FAULT-STRING", "SORT", "SORT-ASCENDING", "SORT-NUMBER", "SSL-SERVER-NAME", "STANDALONE", "STARTUP-PARAMETERS", "STATE-DETAIL", "STATUS-AREA", "STATUS-AREA-FONT", "STOPPED", "STREAM", "STRETCH-TO-FIT", "STRICT", "STRING-VALUE", "SUBTYPE", "SUPER-PROCEDURES", "SUPPRESS-NAMESPACE-PROCESSING", "SUPPRESS-WARNINGS", "SYMMETRIC-ENCRYPTION-ALGORITHM", "SYMMETRIC-ENCRYPTION-IV", "SYMMETRIC-ENCRYPTION-KEY", "SYMMETRIC-SUPPORT", "system-ALERT-BOXES", "system-ID", "TABLE", "TABLE-CRC-LIST", "TABLE-HANDLE", "TABLE-LIST", "TABLE-NUMBER", "TAB-POSITION", "TAB-STOP", "TEMP-DIRECTORY", "TEXT-SELECTED", "THREE-D", "TIC-MARKS", "TIME-SOURCE", "TITLE", "TITLE-BGCOLOR", "FIELD", "TITLE-DCOLOR", "TITLE-FGCOLOR", "TITLE-FONT", "TOOLTIP", "TOOLTIPS", "TOP-ONLY", "TRACKING-CHANGES", "TRANSACTION", "TRANS-INIT-PROCEDURE", "TRANSPARENT", "TYPE", "UNIQUE-ID", "UNIQUE-MATCH", "URL", "URL-PASSWORD", "URL-USERID", "EXTENT", "USER-ID", "V6DISPLAY", "VALIDATE-EXPRESSION", "VALIDATE-MESSAGE", "VALIDATE-XML", "VALIDATION-ENABLED", "VIEW-FIRST-COLUMN-ON-REOPEN", "VIRTUAL-HEIGHT-CHARS", "VIRTUAL-HEIGHT-PIXELS", "VIRTUAL-WIDTH-CHARS", "VIRTUAL-WIDTH-PIXELS", "VISIBLE", "WARNING", "WHERE-STRING", "widget-ENTER", "DATE", "widget-LEAVE", "WIDTH-CHARS", "WIDTH-PIXELS", "WINDOW-STATE", "WINDOW-system", "WORD-WRAP", "WORK-AREA-HEIGHT-PIXELS", "WORK-AREA-WIDTH-PIXELS", "WORK-AREA-X", "WORK-AREA-Y", "WRITE-STATUS", "X", "widget-Handle", "X-DOCUMENT", "XML-DATA-TYPE", "XML-NODE-TYPE", "XML-SCHEMA-PATH", "XML-SUPPRESS-NAMESPACE-PROCESSING", "Y", "YEAR-OFFSET", "CHARACTER", "LONGCHAR", "MEMPTR", "CHAR", "DEC", "INT", "LOG", "DECI", "INTE", "LOGI", "long"]
}, 
    'OPERATORS' : ["<", ">", "=", "+", "-", "*", "/", "!", "@", "%", "|", "$", ":", ".", ";", ",", "?", "<=", "<>", ">=", "\\"], 
    'DELIMITERS' : [ '(', ')', '[', ']', '{', '}' ], 
    'STYLES' : { 
        'COMMENTS' : '', 
        'QUOTESMARKS' : 'color: #ff0000;', 
        'KEYWORDS' : { 
        'keywordgroup1': 'color: #0000ff;',
        'keywordgroup2': 'color: #1D16B2;',
        'keywordgroup3': 'color: #993333;',
        'keywordgroup4': 'color: #0000ff;'    }, 
       'OPERATORS' : 'color: #66cc66;', 
        'DELIMITERS' : 'color: #66cc66;' 
    } 
}; 
