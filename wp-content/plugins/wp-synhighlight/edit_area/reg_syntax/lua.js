editAreaLoader.load_syntax["lua"] = {
    'COMMENT_SINGLE' : {1: "--"}, 
    'COMMENT_MULTI' : {"--[[": "]]"}, 
    'QUOTEMARKS' : {0: "\'", 1: "\""}, 
    'KEYWORDS' : {
        'keywordgroup1': ["and", "break", "do", "else", "elseif", "end", "false", "for", "function", "if", "in", "local", "nil", "not", "or", "repeat", "return", "then", "true", "until", "while", "_VERSION", "assert", "collectgarbage", "dofile", "error", "gcinfo", "loadfile", "loadstring", "print", "tonumber", "tostring", "type", "unpack", "_ALERT", "_ERRORMESSAGE", "_INPUT", "_PROMPT", "_OUTPUT", "_STDERR", "_STDIN", "_STDOUT", "call", "dostring", "foreach", "foreachi", "getn", "globals", "newtype", "rawget", "rawset", "require", "sort", "tinsert", "tremove", "abs", "acos", "asin", "atan", "atan2", "ceil", "cos", "deg", "exp", "floor", "format", "frexp", "gsub", "ldexp", "log", "log10", "max", "min", "mod", "rad", "random", "randomseed", "sin", "sqrt", "strbyte", "strchar", "strfind", "strlen", "strlower", "strrep", "strsub", "strupper", "tan", "openfile", "closefile", "readfrom", "writeto", "appendto", "remove", "rename", "flush", "seek", "tmpfile", "tmpname", "read", "write", "clock", "date", "difftime", "execute", "exit", "getenv", "setlocale", "time", "_G", "getfenv", "getmetatable", "ipairs", "loadlib", "next", "pairs", "pcall", "rawegal", "setfenv", "setmetatable", "xpcall", "string.byte", "string.char", "string.dump", "string.find", "string.len", "string.lower", "string.rep", "string.sub", "string.upper", "string.format", "string.gfind", "string.gsub", "table.concat", "table.foreach", "table.foreachi", "table.getn", "table.sort", "table.insert", "table.remove", "table.setn", "math.abs", "math.acos", "math.asin", "math.atan", "math.atan2", "math.ceil", "math.cos", "math.deg", "math.exp", "math.floor", "math.frexp", "math.ldexp", "math.log", "math.log10", "math.max", "math.min", "math.mod", "math.pi", "math.rad", "math.random", "math.randomseed", "math.sin", "math.sqrt", "math.tan", "coroutine.create", "coroutine.resume", "coroutine.status", "coroutine.wrap", "coroutine.yield", "io.close", "io.flush", "io.input", "io.lines", "io.open", "io.output", "io.read", "io.tmpfile", "io.type", "io.write", "io.stdin", "io.stdout", "io.stderr", "os.clock", "os.date", "os.difftime", "os.execute", "os.exit", "os.getenv", "os.remove", "os.rename", "os.setlocale", "os.time", "os.tmpname", "string", "table", "math", "coroutine", "io", "os", "debug"]
}, 
    'OPERATORS' : ["!", "@", "%", "&", "*", "|", "/", "<", ">", "=", ";"], 
    'DELIMITERS' : [ '(', ')', '[', ']', '{', '}' ], 
    'STYLES' : { 
        'COMMENTS' : 'color: #808080;', 
        'QUOTESMARKS' : 'color: #ff0000;', 
        'KEYWORDS' : { 
        'keywordgroup1': 'color: #b1b100;'    }, 
       'OPERATORS' : 'color: #66cc66;', 
        'DELIMITERS' : 'color: #66cc66;' 
    } 
}; 
