import { Router } from "express"
import ctrl from "../controllers/controllers.js"

const router = Router()

router.get('/', ctrl.listRegisters)
router.get('/:id', ctrl.listRegister)
router.post('/add', ctrl.addRegister)
router.put('/update/:id', ctrl.updateRegister)
router.delete('/delete/:id',ctrl.deleteRegister)


export default router