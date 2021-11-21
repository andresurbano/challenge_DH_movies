const controller = {}

controller.index = () => (req, res) => {
    res.send("conexion correcta desde index.controller")
}

module.exports = controller