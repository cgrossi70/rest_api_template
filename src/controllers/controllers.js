const ctrl = {}

ctrl.addRegister = (req, res) => {
  res.send('Add')
}

ctrl.listRegister = (req, res) => {
  res.send('List')
}

ctrl.listRegisters = (req, res) => {
  res.send('List All')
}

ctrl.deleteRegister = (req, res) => {
  res.send('Delete')
}

ctrl.updateRegister = (req, res) => {
  res.send('Update')
}

export default ctrl
