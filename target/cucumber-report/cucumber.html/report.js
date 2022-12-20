$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("desktop.feature");
formatter.feature({
  "line": 1,
  "name": "Desktop Page Test",
  "description": "As a user I would like to go to Desktop page into Tutorial Ninja website",
  "id": "desktop-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5482565400,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Verify Products Price Display HighToLow Successfully",
  "description": "",
  "id": "desktop-page-test;verify-products-price-display-hightolow-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 5,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click On Currency Link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I mouse Hover On Desktop",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click On Show All Desktop",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I sort By Position NameZtoA(\"Name (Z - A)\")",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I get Products Arrange In Descending Order Text",
  "keyword": "Then "
});
formatter.match({
  "location": "DesktopSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 134416300,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSteps.iClickOnCurrencyLink()"
});
formatter.result({
  "duration": 567914299,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSteps.iMouseHoverOnDesktop()"
});
formatter.result({
  "duration": 153942700,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSteps.iClickOnShowAllDesktop()"
});
formatter.result({
  "duration": 731773699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name (Z - A)",
      "offset": 29
    }
  ],
  "location": "DesktopSteps.iSortByPositionNameZtoA(String)"
});
formatter.result({
  "duration": 407990600,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSteps.iGetProductsArrangeInDescendingOrderText()"
});
formatter.result({
  "duration": 243991300,
  "status": "passed"
});
formatter.after({
  "duration": 621450301,
  "status": "passed"
});
formatter.before({
  "duration": 2843892201,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Verify Product Added To Shopping Cart SuccessFully",
  "description": "",
  "id": "desktop-page-test;verify-product-added-to-shopping-cart-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@sanity"
    },
    {
      "line": 15,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I am on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I click On Currency Link",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I mouse Hover On Desktop",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click On Show All Desktop",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I sort By Position Name AtoZ \"Name (A - Z)\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click On Product HPLP",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I verify HPLP Text From List",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click On Delivery Date",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter Quantity One",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click On Ad To Cart",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I verify Product Added To Shopping Cart Text",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click On Shopping Cart",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I verify Text Shopping Cart",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I verify Text Product Name HPLP",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I verify Delivery Date",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I verify The Model Product Text",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I verify The Total Price Text",
  "keyword": "And "
});
formatter.match({
  "location": "DesktopSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 21001,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSteps.iClickOnCurrencyLink()"
});
formatter.result({
  "duration": 565986800,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSteps.iMouseHoverOnDesktop()"
});
formatter.result({
  "duration": 152974100,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSteps.iClickOnShowAllDesktop()"
});
formatter.result({
  "duration": 771254801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name (A - Z)",
      "offset": 30
    }
  ],
  "location": "DesktopSteps.iSortByPositionNameAtoZ(String)"
});
formatter.result({
  "duration": 393958399,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSteps.iClickOnProductHPLP()"
});
formatter.result({
  "duration": 1021809300,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSteps.iVerifyHPLPTextFromList()"
});
formatter.result({
  "duration": 28960700,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSteps.iClickOnDeliveryDate()"
});
formatter.result({
  "duration": 5281907999,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSteps.iEnterQuantityOne()"
});
formatter.result({
  "duration": 89468000,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSteps.iClickOnAdToCart()"
});
formatter.result({
  "duration": 42137900,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSteps.iVerifyProductAddedToShoppingCartText()"
});
formatter.result({
  "duration": 2035805400,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSteps.iClickOnShoppingCart()"
});
formatter.result({
  "duration": 371575100,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSteps.iVerifyTextShoppingCart()"
});
formatter.result({
  "duration": 2032218400,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSteps.iVerifyTextProductNameHPLP()"
});
formatter.result({
  "duration": 22869500,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSteps.iVerifyDeliveryDate()"
});
formatter.result({
  "duration": 2026715500,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSteps.iVerifyTheModelProductText()"
});
formatter.result({
  "duration": 21294900,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSteps.iVerifyTheTotalPriceText()"
});
formatter.result({
  "duration": 20115901,
  "status": "passed"
});
formatter.after({
  "duration": 740354100,
  "status": "passed"
});
formatter.uri("laptopandnotebook.feature");
formatter.feature({
  "line": 1,
  "name": "laptops And Note books Page Test",
  "description": "As a user I would like to go to laptops And Note books Page into Tutorial Ninja website",
  "id": "laptops-and-note-books-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2984689401,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "verify Products Price Display HighToLow Successfully",
  "description": "",
  "id": "laptops-and-note-books-page-test;verify-products-price-display-hightolow-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 5,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouseHover On Laptops And Desktop Tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click On Show All Laptops And Notebooks",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I sort By Price HighToLow",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I Verify Sort By HighToLow Order",
  "keyword": "Then "
});
formatter.match({
  "location": "DesktopSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 34100,
  "status": "passed"
});
formatter.match({
  "location": "LaptopSteps.iMouseHoverOnLaptopsAndDesktopTab()"
});
formatter.result({
  "duration": 168962000,
  "status": "passed"
});
formatter.match({
  "location": "LaptopSteps.iClickOnShowAllLaptopsAndNotebooks()"
});
formatter.result({
  "duration": 542782700,
  "status": "passed"
});
formatter.match({
  "location": "LaptopSteps.iSortByPriceHighToLow()"
});
formatter.result({
  "duration": 339992600,
  "status": "passed"
});
formatter.match({
  "location": "LaptopSteps.iVerifySortByHighToLowOrder()"
});
formatter.result({
  "duration": 468428500,
  "status": "passed"
});
formatter.after({
  "duration": 626400699,
  "status": "passed"
});
formatter.before({
  "duration": 3579699400,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "verify That User Place Order Successfully",
  "description": "",
  "id": "laptops-and-note-books-page-test;verify-that-user-place-order-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@sanity"
    },
    {
      "line": 14,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I am on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I click On Currency Link",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I mouseHover On Laptops And Desktop Tab",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click On Show All Laptops And Notebooks",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I sort By Price HighToLow",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click On MacBook Tab",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click On Add To Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I verify get Success Text From Link",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I click On Shoppings Cart",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I get Shopping Cart Message",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I Verify Product Macbook",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I send Text Change Quantity To two",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click On Update Cart",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I get Success Modified Cart Message",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I get Verify Total",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click On Checkout Button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I get Checkout Text",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I get New Customer Text",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click On Guest Checkout Radio Button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "click On Continue Tab",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "enter Name \"Devani\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "enter Last Name\"Carli\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "enter Email \"devani123@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "enter Telephone\"1234567890\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "enter Address\"1,kenton road\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "enter City \"Harrow\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "enter Postcode\"HA5 2JB\"",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "enter Country \"Angola\"",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "enter Zone \"Angus\"",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "click On Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "enter Text To Text Area \"Please confirm delivery date\"",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "click On TermsAndConditions Checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "click On Final Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I get Warning Payment Method Required Text",
  "keyword": "Then "
});
formatter.match({
  "location": "DesktopSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 28400,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSteps.iClickOnCurrencyLink()"
});
formatter.result({
  "duration": 661670900,
  "status": "passed"
});
formatter.match({
  "location": "LaptopSteps.iMouseHoverOnLaptopsAndDesktopTab()"
});
formatter.result({
  "duration": 156666300,
  "status": "passed"
});
formatter.match({
  "location": "LaptopSteps.iClickOnShowAllLaptopsAndNotebooks()"
});
formatter.result({
  "duration": 544552300,
  "status": "passed"
});
formatter.match({
  "location": "LaptopSteps.iSortByPriceHighToLow()"
});
formatter.result({
  "duration": 357447399,
  "status": "passed"
});
formatter.match({
  "location": "LaptopSteps.iClickOnMacBookTab()"
});
formatter.result({
  "duration": 994258500,
  "status": "passed"
});
formatter.match({
  "location": "LaptopSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 39275699,
  "status": "passed"
});
formatter.match({
  "location": "LaptopSteps.iVerifyGetSuccessTextFromLink()"
});
formatter.result({
  "duration": 221028000,
  "status": "passed"
});
formatter.match({
  "location": "LaptopSteps.iClickOnShoppingsCart()"
});
formatter.result({
  "duration": 300153101,
  "status": "passed"
});
formatter.match({
  "location": "LaptopSteps.iGetShoppingCartMessage()"
});
formatter.result({
  "duration": 28595200,
  "status": "passed"
});
formatter.match({
  "location": "LaptopSteps.iVerifyProductMacbook()"
});
formatter.result({
  "duration": 27686200,
  "status": "passed"
});
formatter.match({
  "location": "LaptopSteps.iSendTextChangeQuantityToTwo()"
});
formatter.result({
  "duration": 79531700,
  "status": "passed"
});
formatter.match({
  "location": "LaptopSteps.iClickOnUpdateCart()"
});
formatter.result({
  "duration": 435806500,
  "status": "passed"
});
formatter.match({
  "location": "LaptopSteps.iGetSuccessModifiedCartMessage()"
});
formatter.result({
  "duration": 27835800,
  "status": "passed"
});
formatter.match({
  "location": "LaptopSteps.iGetVerifyTotal()"
});
formatter.result({
  "duration": 21860100,
  "status": "passed"
});
formatter.match({
  "location": "LaptopSteps.iClickOnCheckoutButton()"
});
formatter.result({
  "duration": 286210400,
  "status": "passed"
});
formatter.match({
  "location": "LaptopSteps.iGetCheckoutText()"
});
formatter.result({
  "duration": 31581700,
  "status": "passed"
});
formatter.match({
  "location": "LaptopSteps.iGetNewCustomerText()"
});
formatter.result({
  "duration": 2027271200,
  "status": "passed"
});
formatter.match({
  "location": "LaptopSteps.iClickOnGuestCheckoutRadioButton()"
});
formatter.result({
  "duration": 39591500,
  "status": "passed"
});
formatter.match({
  "location": "LaptopSteps.clickOnContinueTab()"
});
formatter.result({
  "duration": 40685500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Devani",
      "offset": 12
    }
  ],
  "location": "LaptopSteps.enterName(String)"
});
formatter.result({
  "duration": 250294099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Carli",
      "offset": 16
    }
  ],
  "location": "LaptopSteps.enterLastName(String)"
});
formatter.result({
  "duration": 68689801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "devani123@gmail.com",
      "offset": 13
    }
  ],
  "location": "LaptopSteps.enterEmail(String)"
});
formatter.result({
  "duration": 79660400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567890",
      "offset": 16
    }
  ],
  "location": "LaptopSteps.enterTelephone(String)"
});
formatter.result({
  "duration": 83534199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1,kenton road",
      "offset": 14
    }
  ],
  "location": "LaptopSteps.enterAddress(String)"
});
formatter.result({
  "duration": 71789899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harrow",
      "offset": 12
    }
  ],
  "location": "LaptopSteps.enterCity(String)"
});
formatter.result({
  "duration": 48613599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HA5 2JB",
      "offset": 15
    }
  ],
  "location": "LaptopSteps.enterPostcode(String)"
});
formatter.result({
  "duration": 52330199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Angola",
      "offset": 15
    }
  ],
  "location": "LaptopSteps.enterCountry(String)"
});
formatter.result({
  "duration": 42853900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Angus",
      "offset": 12
    }
  ],
  "location": "LaptopSteps.enterZone(String)"
});
formatter.result({
  "duration": 42521501,
  "status": "passed"
});
formatter.match({
  "location": "LaptopSteps.clickOnContinueButton()"
});
formatter.result({
  "duration": 54191200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please confirm delivery date",
      "offset": 25
    }
  ],
  "location": "LaptopSteps.enterTextToTextArea(String)"
});
formatter.result({
  "duration": 436517199,
  "status": "passed"
});
formatter.match({
  "location": "LaptopSteps.clickOnTermsAndConditionsCheckbox()"
});
formatter.result({
  "duration": 110577400,
  "status": "passed"
});
formatter.match({
  "location": "LaptopSteps.clickOnFinalContinueButton()"
});
formatter.result({
  "duration": 48066000,
  "status": "passed"
});
formatter.match({
  "location": "LaptopSteps.iGetWarningPaymentMethodRequiredText()"
});
formatter.result({
  "duration": 212973299,
  "status": "passed"
});
formatter.after({
  "duration": 652269899,
  "status": "passed"
});
formatter.uri("myaccount.feature");
formatter.feature({
  "line": 1,
  "name": "MyAccount Page Test",
  "description": "As a user I would like to go to MyAccount Page into Tutorial Ninja website",
  "id": "myaccount-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2928617000,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Verify User Should Navigate To Register Page Successfully",
  "description": "",
  "id": "myaccount-page-test;verify-user-should-navigate-to-register-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 5,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click On MyAccount Link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I select My Account Options \"Register\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify Register Account Message",
  "keyword": "Then "
});
formatter.match({
  "location": "DesktopSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 26799,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.iClickOnMyAccountLink()"
});
formatter.result({
  "duration": 70103201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 29
    }
  ],
  "location": "MyAccountSteps.iSelectMyAccountOptions(String)"
});
formatter.result({
  "duration": 20819551101,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.iVerifyRegisterAccountMessage()"
});
formatter.result({
  "duration": 58397701,
  "status": "passed"
});
formatter.after({
  "duration": 716394900,
  "status": "passed"
});
formatter.before({
  "duration": 3797224400,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Verify User Should Navigate To Login Page Successfully",
  "description": "",
  "id": "myaccount-page-test;verify-user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@sanity"
    },
    {
      "line": 12,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I am on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I click On MyAccount Link",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I select My Account Option \"Login\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify Returning Customer Message",
  "keyword": "Then "
});
formatter.match({
  "location": "DesktopSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 14001,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.iClickOnMyAccountLink()"
});
formatter.result({
  "duration": 49249200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 28
    }
  ],
  "location": "MyAccountSteps.iSelectMyAccountOption(String)"
});
formatter.result({
  "duration": 295720000,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.iVerifyReturningCustomerMessage()"
});
formatter.result({
  "duration": 27183700,
  "status": "passed"
});
formatter.after({
  "duration": 609456400,
  "status": "passed"
});
formatter.before({
  "duration": 2730656700,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Verify That User Register Account Successfully",
  "description": "",
  "id": "myaccount-page-test;verify-that-user-register-account-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I am on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I click On MyAccount Link",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I select My Accounts Options \"Register\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter First Name \"Devani\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter Last Name \"Carli\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter Email Id \"devani9@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter Phone Number \"1234567890\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter Password \"Devani123\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter Confirm Password \"Devani123\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click Subscribe On Yes Radio Button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click On Privacy Policy CheckBox",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click On Continue one",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I get Account Created Message",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I click On Continue Button two",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click On MyAccount Tab",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I select my Accounts Option \"Logout\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I get Account Logout Message",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "I click On Continue Button Three",
  "keyword": "And "
});
formatter.match({
  "location": "DesktopSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 18500,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.iClickOnMyAccountLink()"
});
formatter.result({
  "duration": 43767800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 30
    }
  ],
  "location": "MyAccountSteps.iSelectMyAccountsOptions(String)"
});
formatter.result({
  "duration": 20730001700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Devani",
      "offset": 20
    }
  ],
  "location": "MyAccountSteps.iEnterFirstName(String)"
});
formatter.result({
  "duration": 97569400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Carli",
      "offset": 19
    }
  ],
  "location": "MyAccountSteps.iEnterLastName(String)"
});
formatter.result({
  "duration": 53715800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "devani9@gmail.com",
      "offset": 18
    }
  ],
  "location": "MyAccountSteps.iEnterEmailId(String)"
});
formatter.result({
  "duration": 59495900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567890",
      "offset": 22
    }
  ],
  "location": "MyAccountSteps.iEnterPhoneNumber(String)"
});
formatter.result({
  "duration": 51076300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Devani123",
      "offset": 18
    }
  ],
  "location": "MyAccountSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 54125400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Devani123",
      "offset": 26
    }
  ],
  "location": "MyAccountSteps.iEnterConfirmPassword(String)"
});
formatter.result({
  "duration": 56882300,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.iClickSubscribeOnYesRadioButton()"
});
formatter.result({
  "duration": 42159901,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.iClickOnPrivacyPolicyCheckBox()"
});
formatter.result({
  "duration": 39846199,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.iClickOnContinueOne()"
});
formatter.result({
  "duration": 630636500,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.iGetAccountCreatedMessage()"
});
formatter.result({
  "duration": 26497100,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.iClickOnContinueButtonTwo()"
});
formatter.result({
  "duration": 289575300,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.iClickOnMyAccountTab()"
});
formatter.result({
  "duration": 38712000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Logout",
      "offset": 29
    }
  ],
  "location": "MyAccountSteps.iSelectMyAccountsOption(String)"
});
formatter.result({
  "duration": 468153200,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.iGetAccountLogoutMessage()"
});
formatter.result({
  "duration": 31402100,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.iClickOnContinueButtonThree()"
});
formatter.result({
  "duration": 315013300,
  "status": "passed"
});
formatter.after({
  "duration": 853836100,
  "status": "passed"
});
formatter.before({
  "duration": 2708283500,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Verify That User Should Login And Logout Successfully",
  "description": "",
  "id": "myaccount-page-test;verify-that-user-should-login-and-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 38,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "I am on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "I click On MyAccount Link",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "I select My Account Option \"Login\"",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I enter Email Id \"devanni123@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I enter Password \"Devani123\"",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I click On Login",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I click On MyAccount Tab",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I select my Accounts Option \"Logout\"",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I get Account Logout Message",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I click On Continue Button Three",
  "keyword": "Then "
});
formatter.match({
  "location": "DesktopSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 15700,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.iClickOnMyAccountLink()"
});
formatter.result({
  "duration": 47158600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 28
    }
  ],
  "location": "MyAccountSteps.iSelectMyAccountOption(String)"
});
formatter.result({
  "duration": 302214799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "devanni123@gmail.com",
      "offset": 18
    }
  ],
  "location": "MyAccountSteps.iEnterEmailId(String)"
});
formatter.result({
  "duration": 71182900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Devani123",
      "offset": 18
    }
  ],
  "location": "MyAccountSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 56286700,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.iClickOnLogin()"
});
formatter.result({
  "duration": 382988300,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.iClickOnMyAccountTab()"
});
formatter.result({
  "duration": 40066900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Logout",
      "offset": 29
    }
  ],
  "location": "MyAccountSteps.iSelectMyAccountsOption(String)"
});
formatter.result({
  "duration": 28458201,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.iGetAccountLogoutMessage()"
});
formatter.result({
  "duration": 40120909100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//h1[contains(text(),\u0027Account Logout\u0027)]\"}\n  (Session info: chrome\u003d108.0.5359.125)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.6.0\u0027, revision: \u002779f1c02ae20\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [6e541b5e413743f3b88ab3e0e7445441, findElement {using\u003dxpath, value\u003d//h1[contains(text(),\u0027Account Logout\u0027)]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.125, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\palak\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:52066}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:52066/devtoo..., se:cdpVersion: 108.0.5359.125, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 6e541b5e413743f3b88ab3e0e7445441\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:541)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:365)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:357)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.getText(Unknown Source)\r\n\tat com.ultimateninja.utility.Utility.getTextFromElement(Utility.java:62)\r\n\tat com.ultimateninja.pages.MyAccountPage.getAccountLogoutMessage(MyAccountPage.java:190)\r\n\tat com.ultimateninja.cucumber.steps.MyAccountSteps.iGetAccountLogoutMessage(MyAccountSteps.java:116)\r\n\tat ✽.And I get Account Logout Message(myaccount.feature:48)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MyAccountSteps.iClickOnContinueButtonThree()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 914025800,
  "status": "passed"
});
formatter.uri("topmenu.feature");
formatter.feature({
  "line": 1,
  "name": "Topmenu Page Test",
  "description": "As a user I would like to select top menu into Tutorial Ninja website",
  "id": "topmenu-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2878822400,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Verify User Should Navigate To Desktops Page Successfully",
  "description": "",
  "id": "topmenu-page-test;verify-user-should-navigate-to-desktops-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 5,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse Hover To Element And Click On Desktop",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I select Menu \"Show All Desktops\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I get Desktop Text",
  "keyword": "Then "
});
formatter.match({
  "location": "DesktopSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 21301,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuSteps.iMouseHoverToElementAndClickOnDesktop()"
});
formatter.result({
  "duration": 163448999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show All Desktops",
      "offset": 15
    }
  ],
  "location": "TopMenuSteps.iSelectMenu(String)"
});
formatter.result({
  "duration": 806651400,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuSteps.iGetDesktopText()"
});
formatter.result({
  "duration": 21915200,
  "status": "passed"
});
formatter.after({
  "duration": 630312400,
  "status": "passed"
});
formatter.before({
  "duration": 2915823099,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Verify User Should Navigate To Laptops And Notebooks Page Successfully",
  "description": "",
  "id": "topmenu-page-test;verify-user-should-navigate-to-laptops-and-notebooks-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@sanity"
    },
    {
      "line": 13,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I am on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I mouse Hover To Laptops And Notebooks Tab",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I select Menus \"Show All Laptops \u0026 Notebooks\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I get Laptops And Notebooks Text",
  "keyword": "Then "
});
formatter.match({
  "location": "DesktopSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 25101,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuSteps.iMouseHoverToLaptopsAndNotebooksTab()"
});
formatter.result({
  "duration": 161474900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show All Laptops \u0026 Notebooks",
      "offset": 16
    }
  ],
  "location": "TopMenuSteps.iSelectMenus(String)"
});
formatter.result({
  "duration": 626328700,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuSteps.iGetLaptopsAndNotebooksText()"
});
formatter.result({
  "duration": 23444600,
  "status": "passed"
});
formatter.after({
  "duration": 684724800,
  "status": "passed"
});
formatter.before({
  "duration": 2957676200,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify User Should Navigate To Components Page Successfully",
  "description": "",
  "id": "topmenu-page-test;verify-user-should-navigate-to-components-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I am on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I mouse Hover To Components Tab",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I select menuc \"Show All Components\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I get Components Text",
  "keyword": "Then "
});
formatter.match({
  "location": "DesktopSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 19600,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuSteps.iMouseHoverToComponentsTab()"
});
formatter.result({
  "duration": 152961000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show All Components",
      "offset": 16
    }
  ],
  "location": "TopMenuSteps.iSelectMenuc(String)"
});
formatter.result({
  "duration": 455125500,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuSteps.iGetComponentsText()"
});
formatter.result({
  "duration": 24748100,
  "status": "passed"
});
formatter.after({
  "duration": 645468301,
  "status": "passed"
});
});