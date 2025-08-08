function vocales(texto) {
    return texto.replaceAll("a", "4").replaceAll("e", "3").replaceAll("i", "1").replaceAll("o", "0").replaceAll("A", "4").replaceAll("E", "3").replaceAll("I", "1").replaceAll("O", "0");
}

module.exports = vocales;