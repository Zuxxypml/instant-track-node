import { getCode } from "country-list";
import countryToCurrency from "country-to-currency";

export const renderHomepage = async (req, res) => {
  res.render("index");
};
export const renderAboutpage = async (req, res) => {
  res.render("aboutus");
};
export const renderServicepage = async (req, res) => {
  res.render("services");
};
export const renderLoginpage = async (req, res) => {
  res.render("login");
};
export const renderRegisterpage = async (req, res) => {
  res.render("register");
};
export const renderContactUspage = async (req, res) => {
  res.render("contactus");
};
export const renderPrivacyPolicypage = async (req, res) => {
  res.render("privacypolicy");
};
export const renderTrackingpage = async (req, res) => {
  const nameOfClient = req.query.name,
    statusOfTransaction = req.query.status,
    county = req.query.county,
    country = req.query.country,
    address = req.query.address;
  const countryCode = getCode(country);
  const currency = countryToCurrency[`${countryCode}`];
  console.log(currency);
  res.render("track", {
    clientName: nameOfClient,
    clientAddress: address,
    clientState: county,
    clientCountry: country,
    transactionStatus: statusOfTransaction,
    currency: currency,
  });
};
export const renderInvoicepage = async (req, res) => {
  res.render("invoice");
};
export const renderTrackpageGeneratorpage = async (req, res) => {
  res.render('tracklinkgenerator')
}