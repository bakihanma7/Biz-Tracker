import { Router } from "express";

import dashboardRoutes from "./modules/dashboard/dashboard.routes";
import authRoutes from "./modules/auth/auth.routes";
import customerRoutes from "./modules/customer/customer.routes";

const router = Router();

router.use("/dashboard", dashboardRoutes);
router.use("/auth", authRoutes);
router.use("/customers", customerRoutes);

export default router;