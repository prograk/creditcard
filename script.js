window.onload = function () {
    const name = document.getElementById("name");
    const cardnumber = document.getElementById("cardnumber");
    const expirationdate = document.getElementById("expirationdate");
    const securitycode = document.getElementById("securitycode");

    //Mask the Credit Card Number Input
    var cardnumber_mask = new IMask(cardnumber, {
        mask: "0000 0000 0000 0000"
    })

    //Mask the Expiration Date
    var expirationdate_mask = new IMask(expirationdate, {
        mask: "MM{/}YY",
        groups: {
            YY: new IMask.MaskedPattern.Group.Range([0, 99]),
            MM: new IMask.MaskedPattern.Group.Range([1, 12])
        }
    });

    //Mask the security code
    var securitycode_mask = new IMask(securitycode, {
        mask: "0000"
    });

    // CREDIT CARD IMAGE JS
    document.querySelector(".preload").classList.remove("preload");
    document.querySelector(".creditcard").addEventListener("click", function () {
        if (this.classList.contains("flipped")) {
            this.classList.remove("flipped");
        } else {
            this.classList.add("flipped");
        }
    });

    //On Input Change Events
    name.addEventListener("input", function () {
        if (name.value.length == 0) {
            document.getElementById("svgname").innerHTML = "Your Name Here";
        } else {
            document.getElementById("svgname").innerHTML = this.value;
        }
    });

    cardnumber_mask.on("accept", function () {
        if (cardnumber_mask.value.length == 0) {
            document.getElementById("svgnumber").innerHTML = "**** **** **** ****";
        } else {
            document.getElementById("svgnumber").innerHTML = cardnumber_mask.value;
        }
    });

    expirationdate_mask.on("accept", function () {
        if (expirationdate_mask.value.length == 0) {
            document.getElementById("svgexpire").innerHTML = "**/**";
        } else {
            document.getElementById("svgexpire").innerHTML = expirationdate_mask.value;
        }
    });

    securitycode_mask.on("accept", function () {
        if (securitycode_mask.value.length == 0) {
            document.getElementById("svgsecurity").innerHTML = "";
        } else {
            document.getElementById("svgsecurity").innerHTML = securitycode_mask.value;
        }
    });

    //On Focus Events
    name.addEventListener("focus", function () {
        document.querySelector(".creditcard").classList.remove("flipped");
    });

    cardnumber.addEventListener("focus", function () {
        document.querySelector(".creditcard").classList.remove("flipped");
    });

    expirationdate.addEventListener("focus", function () {
        document.querySelector(".creditcard").classList.remove("flipped");
    });

    securitycode.addEventListener("focus", function () {
        document.querySelector(".creditcard").classList.add("flipped");
    });
};
