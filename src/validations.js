import { body } from "express-validator";

export const validacionesTasks = [
    body("title")
        .isString().withMessage("El título debe ser un string")
        .notEmpty().withMessage("El título no puede estar vacío"),
    body("description")
        .isString().withMessage("La descripción debe ser un string")
        .notEmpty().withMessage("La descripción no puede estar vacia"),
    body("isComplete")
        .isBoolean().withMessage("isComplete debe ser un boolean")
        .notEmpty().withMessage("isComplete no puede estar vacia"),
]