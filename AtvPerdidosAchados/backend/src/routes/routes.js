import express from "express"
import achados from "./endpoints/achados.js"

export default function(app) {
    app
    .use(express.json())
    .use("/achados", achados)
}