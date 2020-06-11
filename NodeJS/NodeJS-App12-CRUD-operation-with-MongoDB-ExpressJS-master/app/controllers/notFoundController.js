let generateMessage = (req, res) => {
    res.send({status: 'Bad request'});
}

// export controller
module.exports = {
    generateMessage: generateMessage
}