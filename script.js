function submitData() {
    let prodprice = document.getElementById("prodprice").value;
    let interest = document.getElementById("interest").value;
    let duration = document.getElementById("duration").value;

    if (prodprice === "" || interest === "" || duration === "") {
        alert("Please fill out all fields.");
        return;
    }

    prodprice = Number(prodprice);
    interest = Number(interest);
    duration = Number(duration);

    if (isNaN(prodprice) || isNaN(interest) || isNaN(duration)) {
        alert("Please enter valid numbers for all fields.");
        return;
    }

    else {
        let totalCost = prodprice + interest;
        document.getElementById("d-cost").innerHTML = totalCost;

        let monthInstallment = totalCost / duration;
        document.getElementById("per-month").innerHTML = monthInstallment;

        document.getElementById("d-price").innerHTML = prodprice;
        document.getElementById("d-interest").innerHTML = interest;
        document.getElementById("d-installment").innerHTML = duration;

        document.getElementById("installmentResult").style.display = "block";
        document.getElementById("installmentForm").style.display = "none";
    }

}







