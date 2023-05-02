
function sendSuccess(res, $successCode, $message){
    return res.status(200).json({
        'data': $successCode,
        'message' : $message,
    });
}

function sendCreated(res, $successCode, $message=""){
    return res.status(201).json({
        'data': $successCode,
        'message' : $message,
    });
}

const sendError = (res, $errorCode, $errorMessage = "") => {
    return res.status(400).json({
        'error': $errorCode,
        'message' : $errorMessage,
    });
}

module.exports = {
    sendSuccess,
    sendError,
    sendCreated
}
