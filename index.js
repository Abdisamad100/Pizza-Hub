$(document).ready(function () {
    function Pizza(type, crust, toppings, size) {
        this.type = type;
        this.crust = crust;
        this.toppings = toppings;
        this.size = size;
    }
    var totalAmount = 0;
    var newOrder = [];

    Pizza.prototype.myToppingsPrice = function () {
        if (this.size === "large") {
            if (this.toppings === "tomato") {
                return 150;
            } else if (this.toppings === "onions") {
                return 120;
            } else {
                return 180;
            }
        } else if (this.size === "medium") {
            if (this.toppings === "tomato") {
                return 100;
            } else if (this.toppings === "onions") {
                return 80;
            } else {
                return 140;
            }
        } else {
            if (this.topping === "tomato") {
                return 80;
            } else if (this.toppings === "onions") {
                return 50;
            } else {
                return 100;
            }
        }
    };

    Pizza.prototype.getCrustPrice = function () {
        if (this.crust === "thick") {
            return 100;
        } else {
            return 0;
        }
    };

    Pizza.prototype.myTypePrice = function () {
        if (this.size === "large") {
            if (this.type === "Veg Tikka") {
                return 1200;
            } else if (this.type === "Periperi") {
                return 1300;
            } else if (this.type === "Hawaiian") {
                return 1100;
            } else {
                return 900;
            }
        } else if (this.size === "medium") {
            if (this.type === "Veg Tikka") {
                return 850;
            } else if (this.type === "Periperi") {
                return 950;
            } else if (this.type === "Hawaiian") {
                return 850;
            } else {
                return 750;
            }
        } else {
            if (this.type === "Veg Tikka") {
                return 600;
            } else if (this.type === "Periperi") {
                return 650;
            } else if (this.type === "Hawaiian") {
                return 750;
            } else {
                return 550;
            }
        }
    }
    Pizza.prototype.myCrustPrice = function () {
        if (this.crust === "thick") {
            return 100;
        } else if (this.crust === "custom") {
            return 50;
        } else {
            return 10;
        }
    }
    Pizza.prototype.myPizzaPrice = function () {
        return this.myCrustPrice() + this.myTypePrice() + this.myToppingsPrice()
    }

    $("#customer-form").submit(function (event) {
        event.preventDefault();
        var customerType = $("#ptype").val();
        var customerCrust = $("#crust").val();
        var customerSize = $("#size").val();
        var customerToppings = $("#toppings").val();
        var newPizza = new Pizza(customerType, customerCrust, customerToppings, customerSize);
        newOrder.push(newPizza);
        $("#ptype").val("");
        $("#crust").val("");
        $("#size").val("");
        $("#toppings").val("");

        totalAmount = 0;

        for (let i = 0; i < newOrder.length; i++) {
            totalAmount += newOrder[i].myPizzaPrice();
        }
        $("#order-summary").append(
            "<tr>" +
            '<th scope="row">' +
            newPizza.type +
            " - " +
            newPizza.size +
            "  @ " +
            newPizza.myTypePrice() +
            "</th>" +
            "<td>" +
            newPizza.toppings +
            " @ " +
            newPizza.myToppingsPrice() +
            "</td>" +
            "<td>" +
            newPizza.crust +
            " @ " +
            newPizza.myCrustPrice() +
            "</td>" +
            "<td>" +
            newPizza.myPizzaPrice() +
            "</td>" +
            "</tr>"
        );
        $("#order-summary").append("");
        if (newOrder.length > 0) {
            $("#form-title").empty();
            $("#form-title").append("Add Another Order");
        }

        $("#finalAmount").fadeIn();
        $("#checkout").fadeIn();
        $("#orders-div").fadeIn();

        $("#finalAmount").empty();
        $("#finalAmount").append(totalAmount);
        $(".finalAmount").show();
    });
    $("#checkout").click(function () {
        $(".checkout-options").show();
    });

    $("#checkout-form").submit(function (event) {
        event.preventDefault();
        var name = $("#name").val();
        var deliveryOption = $("#delivery-option").val();
        customerName = name;
        $("#name").val("");
        $("#delivery-option").val("");
        $(".checkout-options").hide();
        $("#checkout").hide();
        $("#finalAmount").empty();
        if (deliveryOption === "deliver") {
            $(".location").show();
            $(".delivery-cost").show();
            $("#finalAmount").empty();
            $("#delivery-amount").append(300);
            totalAmount += 300;
            $("#finalAmount").empty();
            $("#finalAmount").empty();
            $("#finalAmount").append(totalAmount);
            $(".finalAmount").show();

            $("#finalAmount").append(totalAmount);
        } else {
            alert(customerName + ": Your total bill is Ksh. " + totalAmount + ". Your order will be ready for collection in the next one hours");
        }
    });

    $("#location-form").submit(function (event) {
        event.preventDefault();
        var estateEntered = $("#estate").val();
        var houseNumberEntered = $("#house-number").val();
        estate = estateEntered;
        houseNumber = houseNumberEntered;
        $("#checkout").hide();
        $(".location").hide();
        $("#finalAmount").empty();
        $("#finalAmount").append(totalAmount);
        $(".finalAmount").show();
        alert(customerName + ": Your total bill is Ksh. " + totalAmount + ". Your order will be delivered to " + estate + ", " + houseNumber + " in the next one hours");
    });
    $("#contacts").submit(function (event) {
        event.preventDefault();
        var name1 = $("#form1").val();
        var email1 = $("#form2").val();
        var message1 = $("#form3").val();
        alert("Hello! " + name1 + "," + " We have received your message. Thank you for reaching out to us. ");

    });








});