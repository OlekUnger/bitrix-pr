{"version":3,"sources":["script.js"],"names":["exports","main_core","main_core_events","ImageInput","babelHelpers","createClass","key","value","getById","id","imageInputInstances","get","options","arguments","length","undefined","classCallCheck","this","defineProperty","handleOnUploaderIsInited","bind","Map","wrapper","BX","productId","skuId","iblockId","saveable","inputId","ajaxStatus","WAIT_STATUS","hideAddButton","addButton","querySelector","Type","isDomNode","style","display","isObject","values","hasOwnProperty","set","isSaveable","EventEmitter","subscribe","onUploaderIsInitedHandler","event","_event$getCompatData","getCompatData","_event$getCompatData2","slicedToArray","uploader","isStringFilled","uploaderFieldMap","onFileDelete","onFileUpload","onDone","onQueueIsChanged","unsubscribeEvents","unsubscribe","unsubscribeImageInputEvents","Reflection","getClass","imageInput","UI","getId","setId","_event$getCompatData3","_event$getCompatData4","file","inputName","input_name","isNil","delete","save","_event$getCompatData5","_event$getCompatData6","type","itemId","uploaderItem","image","newValues","size","clear","_event$getCompatData7","_event$getCompatData8","params","files","currentUploadedFile","photoItem","fileId","data","name","tmp_name","path","error","fileFieldName","_this","submitFileTimeOut","clearTimeout","requestId","Text","getRandom","refreshImageSelectorId","setTimeout","forEach","ajax","runAction","json","variationId","imageValues","then","response","_response$data","Runtime","html","input","emit","namespace","window","Event"],"mappings":"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","file":"script.map.js"}