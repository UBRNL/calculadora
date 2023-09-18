let evalue = document.querySelector("#value");
let botones = document.querySelectorAll("span")


botones.forEach(boton => {
    boton.addEventListener("click", () => {
        let BtnApretado = boton.textContent;

        if (boton.id ==="clear"){
            evalue.textContent = "0";
            return;
        }

        if (boton.id === "equal"){
            if (
                evalue.textContent.length === 1) {
                    evalue.textContent = "0";
                } else {
                    evalue.textContent = evalue.textContent.slice(0, -1);
                }
                return;
        }

        if(evalue.textContent.length === 13){
            evalue.textContent = "Error";
            return;
        }

        if (boton.id === "igual") {
            try {
                evalue.textContent = eval(evalue.textContent);
            } catch {
                evalue.textContent = "Error!";
            }
            return;
        }

        if (evalue.textContent === "0" || evalue.textContent === "Error!") {
            evalue.textContent = BtnApretado;
        } else {
            evalue.textContent += BtnApretado;
        }
    })
})