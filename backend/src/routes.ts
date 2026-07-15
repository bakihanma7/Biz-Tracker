import { Router } from "express";

import dashboardRoutes from "./modules/dashboard/dashboard.routes";
import authRoutes from "./modules/auth/auth.routes";
import customerRoutes from "./modules/customer/customer.routes";
import vehicleRoutes from "./modules/vehicle/vehicle.routes";
import serviceRoutes from "./modules/services/service.routes";
import serviceOrderRoutes from "./modules/service-order/service-order.routes";
const router = Router();

router.use("/dashboard", dashboardRoutes);
router.use("/auth", authRoutes);
router.use("/customers", customerRoutes);
router.use("/vehicles", vehicleRoutes);
router.use("/services", serviceRoutes);
router.use("/orders", serviceOrderRoutes);

export default router;