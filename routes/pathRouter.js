import express from "express";
import {
  renderAboutpage,
  renderContactUspage,
  renderHomepage,
  renderInvoicepage,
  renderLoginpage,
  renderPrivacyPolicypage,
  renderRegisterpage,
  renderServicepage,
  renderTrackingpage,
  renderTrackpageGeneratorpage,
} from "../controllers/pathControllers.js";

const pathRouter = express.Router();

pathRouter.route("/").get(renderHomepage);
pathRouter.route("/aboutus").get(renderAboutpage);
pathRouter.route("/services").get(renderServicepage);
pathRouter.route("/login").get(renderLoginpage);
pathRouter.route("/register").get(renderRegisterpage);
pathRouter.route("/contactus").get(renderContactUspage);
pathRouter.route("/contactus").get(renderContactUspage);
pathRouter.route("/privacypolicy").get(renderPrivacyPolicypage);
pathRouter.route("/track").get(renderTrackingpage);
pathRouter.route("/invoice").get(renderInvoicepage);
pathRouter.route('/generatetrack').get(renderTrackpageGeneratorpage).post(async (req, res) => {
  console.log(req.body)
  const Link = `https://instant-track.onrender.com/track?name=${req.body.clientFirstname}+${req.body.clientLastname}&status=${req.body.transactionStatus}&county=${req.body.clientCounty}&country=${req.body.clientCountry}&address=${req.body.clientAddress}`
  console.log(Link)
  res.render('generatedLink',{generatedLink: Link})
})

export default pathRouter;
