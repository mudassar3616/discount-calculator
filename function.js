  function calculateDiscount() {

            let price = Number(document.getElementById("price").value);
            let discount = Number(document.getElementById("discount").value);

            let result = document.getElementById("result");
            let message = document.getElementById("message");

            if (
                document.getElementById("price").value.trim() === "" ||
                document.getElementById("discount").value.trim() === "" ||
                !Number.isFinite(price) ||
                !Number.isFinite(discount) ||
                price <= 0 ||
                discount < 0 ||
                discount > 100
            ) {
                result.style.display = "none";
                message.innerText = "Please enter a valid price and discount (0–100%).";
                return;
            }

            let savedAmount = price * discount / 100;

            let finalPrice = price - savedAmount;

            document.getElementById("original").innerText =
                "Original Price: Rs. " + price.toFixed(2);

            document.getElementById("saved").innerText =
                "You Saved: Rs. " + savedAmount.toFixed(2);

            document.getElementById("final").innerText =
                "Final Price: Rs. " + finalPrice.toFixed(2);

            result.style.display = "block";

            message.innerText = "Discount calculated successfully!";

        }


        function clearCalculator() {

            document.getElementById("price").value = "";

            document.getElementById("discount").value = "";

            document.getElementById("result").style.display = "none";

            document.getElementById("message").innerText = "";

        }