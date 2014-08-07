editAreaLoader.load_syntax["lscript"] = {
    'COMMENT_SINGLE' : {1: "//"}, 
    'COMMENT_MULTI' : {"/*": "*/"}, 
    'QUOTEMARKS' : {0: "\""}, 
    'KEYWORDS' : {
        'keywordgroup7': ["@data", "@define", "@else", "@end", "@fpdepth", "@if", "@include", "@insert", "@library", "@localipc", "@name", "@save", "@script", "@sequence", "@version", "@warnings"],
        'keywordgroup1': ["break", "case", "continue", "else", "end", "false", "for", "foreach", "if", "return", "switch", "true", "while"],
        'keywordgroup3': ["active", "alertlevel", "alpha", "alphaprefix", "animfilename", "autokeycreate", "backdroptype", "blue", "boxthreshold", "button", "channelsvisible", "childrenvisible", "compfg", "compbg", "compfgalpha", "coneangles", "cosine", "count", "ctl", "curFilename", "curFrame", "currenttime", "curTime", "curType", "depth", "diffshade", "diffuse", "dimensions", "displayopts", "dynamicupdate", "end", "eta", "filename", "flags", "fogtype", "fps", "frame", "frameend", "frameheight", "framestart", "framestep", "framewidth", "generalopts", "genus", "geometry", "gNorm", "goal", "green", "h", "hasAlpha", "height", "id", "innerlimit", "isColor", "keyCount", "keys", "limiteregion", "locked", "luminous", "maxsamplesperpixel", "minsamplesperpixel", "mirror", "motionx", "motiony", "name", "newFilename", "newFrame", "newTime", "newType", "null", "numthreads", "objID", "oPos", "outerlimit", "oXfrm", "parent", "pixel", "pixelaspect", "point", "points", "pointcount", "polNum", "polycount", "polygon", "polygons", "postBehavior", "preBehavior", "previewend", "previewstart", "previewstep", "range", "rawblue", "rawgreen", "rawred", "rayLength", "raySource", "red", "reflectblue", "reflectgreen", "reflectred", "recursiondepth", "renderend", "renderopts", "renderstart", "renderstep", "rendertype", "restlength", "rgbprefix", "roughness", "selected", "setColor", "setPattern", "shading", "shadow", "shadows", "shadowtype", "size", "source", "special", "specshade", "specular", "spotsize", "start", "sx", "sy", "sz", "target", "totallayers", "totalpoints", "totalpolygons", "trans", "transparency", "type", "value", "view", "visible", "visibility", "w", "width", "wNorm", "wPos", "wXfrm", "x", "xoffset", "y", "yoffset", "z"],
        'keywordgroup4': ["addLayer", "addParticle", "alphaspot", "ambient", "asAsc", "asBin", "asInt", "asNum", "asStr", "asVec", "attach", "axislocks", "backdropColor", "backdropRay", "backdropSqueeze", "bone", "blurLength", "close", "color", "contains", "copy", "createKey", "deleteKey", "detach", "drawCircle", "drawLine", "drawPoint", "drawText", "drawTriangle", "edit", "eof", "event", "firstChannel", "firstLayer", "firstSelect", "focalLength", "fogColor", "fogMaxAmount", "fogMaxDist", "fogMinAmount", "fogMinDist", "fovAngles", "fStop", "firstChild", "focalDistance", "get", "getChannelGroup", "getEnvelope", "getForward", "getKeyBias", "getKeyContinuity", "getKeyCurve", "getKeyHermite", "getKeyTension", "getKeyTime", "getKeyValue", "getParticle", "getPivot", "getPosition", "getRight", "getRotation", "getSelect", "getScaling", "getTag", "getTexture", "getUp", "getValue", "getWorldPosition", "getWorldForward", "getWorldRight", "getWorldRotation", "getWorldUp", "globalBlur", "globalMask", "globalResolution", "hasCCEnd", "hasCCStart", "illuminate", "indexOf", "isAscii", "isAlnum", "isAlpha", "isBone", "isCamera", "isChannel", "isChannelGroup", "isCntrl", "isCurve", "isDigit", "isEnvelope", "isImage", "isInt", "isLight", "isLower", "isMapped", "isMesh", "isNil", "isNum", "IsOpen", "isOriginal", "isPrint", "isPunct", "isScene", "isSpace", "isStr", "isUpper", "isValid", "isVMap", "isVec", "isXDigit", "keyExists", "layer", "layerName", "layerVisible", "limits", "line", "linecount", "load", "luma", "next", "nextLayer", "nextSelect", "nextChannel", "nextChild", "nl", "offset", "open", "pack", "param", "parse", "paste", "persist", "polygonCount", "position", "rayCast", "rayTrace", "read", "readByte", "readInt", "readNumber", "readDouble", "readShort", "readString", "readVector", "reduce", "remParticle", "renderCamera", "reopen", "replace", "reset", "restParam", "rewind", "rgb", "rgbambient", "rgbcolor", "rgbspot", "save", "schemaPosition", "select", "set", "setChannelGroup", "setKeyBias", "setKeyContinuity", "setKeyCurve", "setKeyHermite", "setKeyTension", "setKeyValue", "setParticle", "setPoints", "setTag", "setValue", "server", "serverFlags", "sortA", "sortD", "surface", "trunc", "write", "writeln", "writeByte", "writeData", "writeNumber", "writeDouble", "writeShort", "writeString", "writeVector", "vertex", "vertexCount", "zoomFactor"],
        'keywordgroup2': ["abs", "acos", "angle", "append", "ascii", "asin", "atan", "binary", "ceil", "center", "chdir", "clearimage", "cloned", "comringattach", "comringdecode", "comringdetach", "comringencode", "comringmsg", "cos", "cosh", "cot", "cross2d", "cross3d", "csc", "ctlstring", "ctlinteger", "ctlnumber", "ctlvector", "ctldistance", "ctlchoice", "ctltext", "ctlcolor", "ctlsurface", "ctlfont", "ctlpopup", "ctledit", "ctlpercent", "ctlangle", "ctlrgb", "ctlhsv", "ctlcheckbox", "ctlstate", "ctlfilename", "ctlbutton", "ctllistbox", "ctlslider", "ctlminislider", "ctlsep", "ctlimage", "ctltab", "ctlallitems", "ctlmeshitems", "ctlcameraitems", "ctllightitems", "ctlboneitems", "ctlimageitems", "ctlchannel", "ctlviewport", "Control_Management", "ctlpage", "ctlgroup", "ctlposition", "ctlactive", "ctlvisible", "ctlalign", "ctlrefresh", "ctlmenu", "ctlinfo", "date", "debug", "deg", "dot2d", "dot3d", "drawborder", "drawbox", "drawcircle", "drawelipse", "drawerase", "drawfillcircle", "drawfillelipse", "drawline", "drawpixel", "drawtext", "drawtextwidth", "drawtextheight", "dump", "error", "exp", "expose", "extent", "fac", "filecrc", "filedelete", "fileexists", "filefind", "filerename", "filestat", "floor", "format", "frac", "fullpath", "gamma", "getdir", "getenv", "getfile", "getfirstitem", "getsep", "getvalue", "globalrecall", "globalstore", "hash", "hex", "hostBuild", "hostVersion", "hypot", "info", "integer", "library", "licenseId", "lscriptVersion", "load", "loadimage", "log", "log10", "matchdirs", "matchfiles", "max", "min", "mkdir", "mod", "monend", "moninit", "monstep", "nil", "normalize", "number", "octal", "overlayglyph", "parse", "platform", "pow", "rad", "random", "randu", "range", "read", "readdouble", "readInt", "readNumber", "readShort", "recall", "regexp", "reqabort", "reqbegin", "reqend", "reqisopen", "reqkeyboard", "reqopen", "reqposition", "reqpost", "reqredraw", "reqsize", "reqresize", "requpdate", "rmdir", "round", "runningUnder", "save", "sec", "select", "selector", "setdesc", "setvalue", "sin", "sinh", "size", "sizeof", "sleep", "spawn", "split", "sqrt", "step", "store", "string", "strleft", "strlower", "strright", "strsub", "strupper", "tan", "tanh", "targetobject", "terminate", "text", "time", "wait", "warn", "when", "write", "writeDouble", "writeInt", "writeNumber", "writeShort", "var", "vector", "visitnodes", "vmag"],
        'keywordgroup5': ["addcurve", "addpoint", "addpolygon", "addquad", "addtriangle", "alignpols", "autoflex", "axisdrill", "bend", "bevel", "boolean", "boundingbox", "changepart", "changesurface", "close", "closeall", "cmdseq", "copy", "copysurface", "createsurface", "cut", "deformregion", "delete", "editbegin", "editend", "exit", "extrude", "fixedflex", "flip", "fontclear", "fontcount", "fontindex", "fontload", "fontname", "fracsubdivide", "freezecurves", "getdefaultsurface", "jitter", "lathe", "layerName", "layerVisible", "lyrbg", "lyrdata", "lyrempty", "lyremptybg", "lyremptyfg", "lyrfg", "lyrsetbg", "lyrsetfg", "lyrswap", "magnet", "make4patch", "makeball", "makebox", "makecone", "makedisc", "maketesball", "maketext", "mergepoints", "mergepols", "meshedit", "mirror", "morphpols", "move", "new", "nextsurface", "paste", "pathclone", "pathextrude", "pixel", "pointcount", "pointinfo", "pointmove", "pole", "polycount", "polyinfo", "polynormal", "polypointcount", "polypoints", "polysurface", "quantize", "railclone", "railextrude", "redo", "removepols", "rempoint", "rempoly", "renamesurface", "revert", "rotate", "scale", "selhide", "selinvert", "selmode", "selpoint", "selpolygon", "selunhide", "selectvmap", "setlayername", "setobject", "setpivot", "setsurface", "shapebevel", "shear", "skinpols", "smooth", "smoothcurves", "smoothscale", "smoothshift", "soliddrill", "splitpols", "subdivide", "swaphidden", "taper", "triple", "toggleCCend", "toggleCCstart", "togglepatches", "twist", "undo", "undogroupend", "undogroupbegin", "unifypols", "unweld", "vortex", "weldaverage", "weldpoints"],
        'keywordgroup6': ["About", "AboutOpenGL", "AdaptiveSampling", "AdaptiveThreshold", "AddAreaLight", "AddBone", "AddButton", "AddCamera", "AddChildBone", "AddDistantLight", "AddEnvelope", "AddLinearLight", "AddNull", "AddPartigon", "AddPlugins", "AddPointLight", "AddPosition", "AddRotation", "AddScale", "AddSpotlight", "AddToSelection", "AdjustRegionTool", "AffectCaustics", "AffectDiffuse", "AffectOpenGL", "AffectSpecular", "AlertLevel", "AmbientColor", "AmbientIntensity", "Antialiasing", "ApertureHeight", "ApplyServer", "AreaLight", "AutoConfirm", "AutoFrameAdvance", "AutoKey", "BackdropColor", "BackView", "BController", "BLimits", "BLurLength", "BoneActive", "BoneFalloffType", "BoneJointComp", "BoneJointCompAmounts", "BoneJointCompParent", "BoneLimitedRange", "BoneMaxRange", "BoneMinRange", "BoneMuscleFlex", "BoneMuscleFlexAmounts", "BoneMuscleFlexParent", "BoneNormalization", "BoneRestLength", "BoneRestPosition", "BoneRestRotation", "BoneSource", "BoneStrength", "BoneStrengthMultiply", "BoneWeightMapName", "BoneWeightMapOnly", "BoneWeightShade", "BoneXRay", "BottomView", "BoundingBoxThreshold", "BStiffness", "CacheCaustics", "CacheRadiosity", "CacheShadowMap", "CameraMask", "CameraView", "CameraZoomTool", "CastShadow", "CausticIntensity", "CenterItem", "CenterMouse", "ChangeTool", "ClearAllBones", "ClearAllCameras", "ClearAllLights", "ClearAllObjects", "ClearAudio", "ClearScene", "ClearSelected", "Clone", "CommandHistory", "CommandInput", "Compositing", "ConeAngleTool", "ContentDirectory", "CreateKey", "DecreaseGrid", "DeleteKey", "DepthBufferAA", "DepthOfField", "DisplayOptions", "DistantLight", "DrawAntialiasing", "DrawBones", "DrawChildBones", "DynamicUpdate", "EditBones", "EditCameras", "EditKeys", "EditLights", "EditMenus", "EditObjects", "EditPlugins", "EditServer", "EnableCaustics", "EnableDeformations", "EnableIK", "EnableLensFlares", "EnableRadiosity", "EnableServer", "EnableShadowMaps", "EnableVIPER", "EnableVolumetricLights", "EnableXH", "EnableYP", "EnableZB", "EnahancedAA", "ExcludeLight", "ExcludeObject", "EyeSeparation", "FasterBones", "FirstFrame", "FirstItem", "FitAll", "FitSelected", "FlareIntensity", "FlareOptions", "FocalDistance", "FogColor", "FogMaxAmount", "FogMaxDistance", "FogMinAmount", "FogMinDistance", "FogType", "FractionalFrames", "FrameSize", "FramesPerSecond", "FrameStep", "FreePreview", "FrontView", "FullTimeIK", "GeneralOptions", "Generics", "GlobalApertureHeight", "GlobalBlurLength", "GlobalFrameSize", "GlobalIllumination", "GlobalMaskPosition", "GlobalMotionBlur", "GlobalParticleBlur", "GlobalPixelAspect", "GlobalResolutionMulitplier", "GoalItem", "GoalStrength", "GoToFrame", "GradientBackdrop", "GraphEditor", "GridSize", "GroundColor", "HController", "HideToolbar", "HideWindows", "HLimits", "HStiffness", "ImageEditor", "ImageProcessing", "IncludeLight", "IncludeObject", "IncreaseGrid", "IndirectBounces", "Item_SetWindowPos", "ItemActive", "ItemColor", "ItemLock", "ItemProperties", "ItemVisibilty", "KeepGoalWithinReach", "LastFrame", "LastItem", "LastPluginInterface", "Layout_SetWindowPos", "Layout_SetWindowSize", "LeftView", "LensFlare", "LensFStop", "LightColor", "LightConeAngle", "LightEdgeAngle", "LightFalloffType", "LightIntensity", "LightIntensityTool", "LightQuality", "LightRange", "LightView", "LimitB", "LimitDynamicRange", "LimitedRegion", "LimitH", "LimitP", "LinearLight", "LoadAudio", "LoadFromScene", "LoadMotion", "LoadObject", "LoadObjectLayer", "LoadPreview", "LoadScene", "LocalCoordinateSystem", "MakePreview", "MaskColor", "MaskPosition", "MasterPlugins", "MatchGoalOrientation", "MatteColor", "MatteObject", "MetaballResolution", "Model", "MorphAmount", "MorphAmountTool", "MorphMTSE", "MorphSurfaces", "MorphTarget", "MotionBlur", "MotionBlurDOFPreview", "MotionOptions", "MovePathTool", "MovePivotTool", "MoveTool", "NadirColor", "NetRender", "NextFrame", "NextItem", "NextKey", "NextSibling", "NextViewLayout", "NoiseReduction", "Numeric", "ObjectDissolve", "ParentCoordinateSystem", "ParentInPlace", "ParentItem", "ParticleBlur", "PathAlignLookAhead", "PathAlignMaxLookSteps", "PathAlignReliableDist", "Pause", "PController", "PerspectiveView", "PivotPosition", "PivotRotation", "PixelAspect", "PlayAudio", "PlayBackward", "PlayForward", "PlayPreview", "PLimits", "PointLight", "PolygonEdgeColor", "PolygonEdgeFlags", "PolygonEdgeThickness", "PolygonEdgeZScale", "PolygonSize", "Position", "Presets", "PreviewFirstFrame", "PreviewFrameStep", "PreviewLastFrame", "PreviewOptions", "PreviousFrame", "PreviousItem", "PreviousKey", "PreviousSibling", "PreviousViewLayout", "PStiffness", "Quit", "RadiosityIntensity", "RadiosityTolerance", "RadiosityType", "RayRecursionLimit", "RayTraceReflection", "RayTraceShadows", "RayTraceTransparency", "ReceiveShadow", "RecentContentDirs", "RecentScenes", "ReconstructionFilter", "RecordMaxAngles", "RecordMinAngles", "RecordPivotRotation", "RecordRestPosition", "Redraw", "RedrawNow", "Refresh", "RefreshNow", "RegionPosition", "RemoveEnvelope", "RemoveFromSelection", "RemoveServer", "Rename", "RenderFrame", "RenderOptions", "RenderScene", "RenderSelected", "RenderThreads", "ReplaceObjectLayer", "ReplaceWithNull", "ReplaceWithObject", "Reset", "ResolutionMultiplier", "RestLengthTool", "RightView", "RotatePivotTool", "RotateTool", "Rotation", "SaveAllObjects", "SaveCommandList", "SaveCommandMessages", "SaveEndomorph", "SaveLight", "SaveLWSC1", "SaveMotion", "SaveObject", "SaveObjectCopy", "SavePreview", "SaveScene", "SaveSceneAs", "SaveSceneCopy", "SaveTransformed", "SaveViewLayout", "Scale", "Scene_SetWindowPos", "Scene_SetWindowSize", "SceneEditor", "SchematicPosition", "SchematicView", "SelectAllBones", "SelectAllCameras", "SelectAllLights", "SelectAllObjects", "SelectByName", "SelectChild", "SelectItem", "SelectParent", "SelfShadow", "ShadowColor", "ShadowExclusion", "ShadowMapAngle", "ShadowMapFitCone", "ShadowMapFuzziness", "ShadowMapSize", "ShadowType", "ShowCages", "ShowFieldChart", "ShowHandles", "ShowIKChains", "ShowMotionPaths", "ShowSafeAreas", "ShowTargetLines", "ShrinkEdgesWithDistance", "SingleView", "SizeTool", "SkelegonsToBones", "SkyColor", "Spotlight", "SquashTool", "Statistics", "StatusMsg", "Stereoscopic", "StretchTool", "SubdivisionOrder", "SubPatchLevel", "SurfaceEditor", "Synchronize", "TargetItem", "TopView", "UnaffectedByFog", "UnaffectedByIK", "Undo", "UnseenByAlphaChannel", "UnseenByCamera", "UnseenByRays", "UseGlobalResolution", "UseGlobalBlur", "UseGlobalMask", "UseMorphedPositions", "ViewLayout", "VIPER", "VolumetricLighting", "VolumetricLightingOptions", "VolumetricRadiosity", "Volumetrics", "WorldCoordinateSystem", "XYView", "XZView", "ZenithColor", "ZoomFactor", "ZoomIn", "ZoomInX2", "ZoomOut", "ZoomOutX2", "ZYView", "Camera", "Channel", "ChannelGroup", "Envelope", "File", "Glyph", "Icon", "Image", "Light", "Mesh", "Scene", "Surface", "VMap"]
}, 
    'OPERATORS' : ["=", "<", ">", "+", "-", "*", "/", "!", "%", "&", "@"], 
    'DELIMITERS' : [ '(', ')', '[', ']', '{', '}' ], 
    'STYLES' : { 
        'COMMENTS' : 'color: #7F7F7F;', 
        'QUOTESMARKS' : 'color: #00C800;', 
        'KEYWORDS' : { 
        'keywordgroup1': 'color: #000000;',
        'keywordgroup2': 'color: #FF6820;',
        'keywordgroup3': 'color: #007F7F;',
        'keywordgroup4': 'color: #800080;',
        'keywordgroup5': 'color: #51BD95;',
        'keywordgroup6': 'color: #416F85;',
        'keywordgroup7': 'color: #C92929;'    }, 
       'OPERATORS' : 'color: #0040A0;', 
        'DELIMITERS' : 'color: #0040A0;' 
    } 
}; 
