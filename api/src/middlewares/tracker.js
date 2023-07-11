
requestTracker = (req, res, next) => {
        console.log("Hola desde el middleware");

        next();
}

const tracker = {
        requestTracker
}

module.exports = tracker;