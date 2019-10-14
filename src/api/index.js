import { Router } from 'express'
import user from './user'
import auth from './auth'

const router = new Router()

router.use('/users', user)
router.use('/auth', auth)

export default router
