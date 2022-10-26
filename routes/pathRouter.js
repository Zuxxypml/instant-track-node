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

export default pathRouter;
