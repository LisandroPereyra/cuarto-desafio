import { Router } from "express";

import productos from "./products"

const router = Router()

router.get("/products-view", (req,res) => {
    const products = [
        {
            id:id,
            title: title,
            description: description,
            price: price,
            thumbnail: thumbnail,
            code: code,
            stock: stock
        }
    ]
    res.render("products",{products})
})
router.use("/productos", productosRouter)

export default router