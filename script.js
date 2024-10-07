const convertButton = document.querySelector('.convert-button')
const selectMoney = document.querySelector(".select-money")
const selectMoney1 = document.querySelector(".select-money1")

function convertValues() {
  const inputValueMoney = document.querySelector('.input-value-money').value;
  const moneyReal = document.querySelector(".money-real")
  const moneyDolar = document.querySelector(".money-dolar")

  let convertedValue = inputValueMoney

  // Conversão Real para Dólar
  if (selectMoney1.value == "real" && selectMoney.value == "dolar") {
    convertedValue = inputValueMoney / 5.4733039599;
    moneyReal.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(inputValueMoney);
    moneyDolar.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(convertedValue);
  }

  // Conversão Real para Euro
  if (selectMoney1.value == "real" && selectMoney.value == "euro") {
    convertedValue = inputValueMoney / 6.0393767363;
    moneyReal.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(inputValueMoney);
    moneyDolar.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    }).format(convertedValue);
  }

  if (selectMoney1.value == "real" && selectMoney.value == "libra") {
    convertedValue = inputValueMoney / 7.02414;  // Ajuste a taxa de câmbio para a real
    moneyReal.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(inputValueMoney);
    moneyDolar.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP"
    }).format(convertedValue);
  }

  if (selectMoney1.value == "real" && selectMoney.value == "bitcoin") {
    convertedValue = inputValueMoney / 336111.99;
    moneyReal.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(inputValueMoney);
    moneyDolar.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "BTC"
    }).format(convertedValue);
  }

  // Conversão Dólar para Real
  if (selectMoney1.value == "dolar" && selectMoney.value == "real") {
    convertedValue = inputValueMoney * 5.4728;
    moneyReal.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(inputValueMoney);
    moneyDolar.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(convertedValue);
  }

  // Conversão Dólar para Euro
  if (selectMoney1.value == "dolar" && selectMoney.value == "euro") {
    convertedValue = inputValueMoney / 1.10344;
    moneyReal.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(inputValueMoney);
    moneyDolar.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    }).format(convertedValue);
  }

  if (selectMoney1.value == "dolar" && selectMoney.value == "libra") {
    convertedValue = inputValueMoney / 1.27;  // Ajuste a taxa de câmbio para a real
    moneyReal.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(inputValueMoney);
    moneyDolar.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP"
    }).format(convertedValue);
  }

  if (selectMoney1.value == "dolar" && selectMoney.value == "bitcoin") {
    convertedValue = inputValueMoney / 60902.00;
    moneyReal.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(inputValueMoney);
    moneyDolar.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "BTC"
    }).format(convertedValue);
  }

  // Conversão Euro para Real
  if (selectMoney1.value == "euro" && selectMoney.value == "real") {
    convertedValue = inputValueMoney * 6.0373;
    moneyReal.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    }).format(inputValueMoney);
    moneyDolar.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(convertedValue);
  }

  // Conversão Euro para Dólar
  if (selectMoney1.value == "euro" && selectMoney.value == "dolar") {
    convertedValue = inputValueMoney * 1.10315;
    moneyReal.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    }).format(inputValueMoney);
    moneyDolar.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(convertedValue);
  }

  if (selectMoney1.value == "euro" && selectMoney.value == "libra") {
    convertedValue = inputValueMoney / 1.18;  // Ajuste a taxa de câmbio para a real
    moneyReal.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    }).format(inputValueMoney);
    moneyDolar.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP"
    }).format(convertedValue);
  }

  if (selectMoney1.value == "euro" && selectMoney.value == "bitcoin") {
    convertedValue = inputValueMoney / 54666.85;
    moneyReal.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    }).format(inputValueMoney);
    moneyDolar.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "BTC"
    }).format(convertedValue);
  }

  // Conversão Libra para Dólar
  if (selectMoney1.value == "libra" && selectMoney.value == "dolar") {
    convertedValue = inputValueMoney * 1.27;  // Ajuste a taxa de câmbio para a real
    moneyReal.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP"
    }).format(inputValueMoney);
    moneyDolar.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(convertedValue);
  }

  // Conversão Libra para Euro
  if (selectMoney1.value == "libra" && selectMoney.value == "euro") {
    convertedValue = inputValueMoney * 1.18;  // Ajuste a taxa de câmbio para a real
    moneyReal.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP"
    }).format(inputValueMoney);
    moneyDolar.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    }).format(convertedValue);
  }

  // Conversão Libra para Real
  if (selectMoney1.value == "libra" && selectMoney.value == "real") {
    convertedValue = inputValueMoney * 7.02414;  // Ajuste a taxa de câmbio para a real
    moneyReal.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP"
    }).format(inputValueMoney);
    moneyDolar.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(convertedValue);
  }

  if (selectMoney1.value == "libra" && selectMoney.value == "bitcoin") {
    convertedValue = inputValueMoney / 46404.08;
    moneyReal.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP"
    }).format(inputValueMoney);
    moneyDolar.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "BTC"
    }).format(convertedValue);
  }



if (selectMoney1.value == "bitcoin" && selectMoney.value == "real") {
  convertedValue = inputValueMoney * 336111.99;
  moneyReal.innerHTML = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "BTC"
  }).format(inputValueMoney);
  moneyDolar.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(convertedValue);
}

if (selectMoney1.value == "bitcoin" && selectMoney.value == "dolar") {
  convertedValue = inputValueMoney * 60902.00;
  moneyReal.innerHTML = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "BTC"
  }).format(inputValueMoney);
  moneyDolar.innerHTML = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(convertedValue);
}


if (selectMoney1.value == "bitcoin" && selectMoney.value == "euro") {
  convertedValue = inputValueMoney * 54666.85;
  moneyReal.innerHTML = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "BTC"
  }).format(inputValueMoney);
  moneyDolar.innerHTML = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR"
  }).format(convertedValue);
}

if (selectMoney1.value == "bitcoin" && selectMoney.value == "libra") {
  convertedValue = inputValueMoney * 46404.08;
  moneyReal.innerHTML = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "BTC"
  }).format(inputValueMoney);
  moneyDolar.innerHTML = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP"
  }).format(convertedValue);
}
}

function selectMoneyChange() {
  let nameMoneyConverted = document.querySelector(".money-name-converted")
  let nameMoneyConverted1 = document.querySelector(".money-name-converted1")

  if (selectMoney1.value == "real") {
    nameMoneyConverted1.innerHTML = "Real"
    let imageLogoMoneyConverted1 = document.querySelector(".image-logo-money-converted1")
    imageLogoMoneyConverted1.src = "./assets/real.png"
  }

  if (selectMoney1.value == "dolar") {
    nameMoneyConverted1.innerHTML = "Dólar Americano"
    let imageLogoMoneyConverted1 = document.querySelector(".image-logo-money-converted1")
    imageLogoMoneyConverted1.src = "./assets/dolar.png"
  }

  if (selectMoney1.value == "euro") {
    nameMoneyConverted1.innerHTML = "Euro"
    let imageLogoMoneyConverted1 = document.querySelector(".image-logo-money-converted1")
    imageLogoMoneyConverted1.src = "./assets/euro.png"
  }

  if (selectMoney1.value == "libra") {
    nameMoneyConverted1.innerHTML = "Libra"
    let imageLogoMoneyConverted1 = document.querySelector(".image-logo-money-converted1")
    imageLogoMoneyConverted1.src = "./assets/libra.png"
  }

  if (selectMoney1.value == "bitcoin") {
    nameMoneyConverted1.innerHTML = "Bitcoin";
    let imageLogoMoneyConverted1 = document.querySelector(".image-logo-money-converted1");
    imageLogoMoneyConverted1.src = "./assets/bitcoin.png";
  }

  if (selectMoney.value == "dolar") {
    nameMoneyConverted.innerHTML = "Dólar Americano"
    let imageLogoMoneyConverted = document.querySelector(".image-logo-money-converted")
    imageLogoMoneyConverted.src = "./assets/dolar.png"
  }

  if (selectMoney.value == "euro") {
    nameMoneyConverted.innerHTML = "Euro"
    let imageLogoMoneyConverted = document.querySelector(".image-logo-money-converted")
    imageLogoMoneyConverted.src = "./assets/euro.png"
  }

  if (selectMoney.value == "real") {
    nameMoneyConverted.innerHTML = "Real"
    let imageLogoMoneyConverted = document.querySelector(".image-logo-money-converted")
    imageLogoMoneyConverted.src = "./assets/real.png"
  }

  if (selectMoney.value == "libra") {
    nameMoneyConverted.innerHTML = "Libra"
    let imageLogoMoneyConverted = document.querySelector(".image-logo-money-converted")
    imageLogoMoneyConverted.src = "./assets/libra.png"
  }


  if (selectMoney.value == "bitcoin") {
    nameMoneyConverted.innerHTML = "Bitcoin";
    let imageLogoMoneyConverted = document.querySelector(".image-logo-money-converted");
    imageLogoMoneyConverted.src = "./assets/bitcoin.png";
  }

  convertValues()
}
selectMoney1.addEventListener("change", selectMoneyChange)
selectMoney.addEventListener("change", selectMoneyChange)
convertButton.addEventListener("click", convertValues)
