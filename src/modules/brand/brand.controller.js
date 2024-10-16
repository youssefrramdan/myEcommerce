import { catchError } from "../../middlewares/catchError.js";
import { Brand } from "../../models/brand.model.js";
import slugify from "slugify";
import { AppError } from "../../utils/appError.js";
import { deleteOne, updateOne } from "../handlers/handlers.js";
const addBrand = catchError(async (req, res, next) => {
  req.body.slug = slugify(req.body.name, { lower: true });
  req.body.logo = req.file.filename;
  let brand = new Brand(req.body);
  await brand.save();
  res.json({ message: "success", brand });
});

const getAllBrands = catchError(async (req, res, next) => {
  let brands = await Brand.find(); //.populate("createdBy", { name: 1, _id: 0 });
  res.json({ message: "success", brands });
});

const getSpecificBrand = catchError(async (req, res, next) => {
  let brand = await Brand.findById(req.params.id); //.populate("createdBy", { name: 1, _id: 0 });
  if (!brand) {
    return next(new AppError("brand not found", 404));
  }
  res.json({ message: "success", brand });
});

const updateBrand = updateOne(Brand);
const deleteBrand = deleteOne(Brand);

export { addBrand, getAllBrands, getSpecificBrand, deleteBrand, updateBrand };
