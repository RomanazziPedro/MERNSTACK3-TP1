const countries = require('./countries.json');

/** Get all the data of one single country given the ISO3 code.
 * @param  {string} isoCode
 * @returns {Object}
 */
function getCountryByIso3(isoCode){
    var indice = countries.findIndex(elemento => elemento.iso3 == isoCode)
    return countries[indice];
}

/**
 * Get a country translated name given his ISO3 code and tranlated language.
 * @param  {string} isoCode
 * @param  {string} language example: "es"
 * @returns {string}
 */
function getCountryTranslatedName(isoCode, language){
    var indice = countries.findIndex(pais => pais.iso3 == isoCode)
    var traducciones = countries[indice].translations;
   for (const property in traducciones) {
    if (`${property}`== language){
        return `${traducciones[property]}`;
    };
  }
   
}
/**Get an array of all the countries with the specified subregion
 * @param  {string} subregion
 * @returns {Array}
 */
function getCountriesBySubregion(subregion){
    var paises = [];
    countries.forEach((pais) => {
        if (pais.subregion == subregion){
        paises.push(pais.name)  }
});
    return paises;
}

function main() {
    console.log(
        '///// Ejercicio 1 /////\n',
        getCountryByIso3('ARG'),
        '\n');
    console.log(
        '///// Ejercicio 2 /////\n',
        getCountryTranslatedName('ARG', 'ja'),
        '\n');
    console.log(
        '///// Ejercicio 3 /////\n',
        getCountriesBySubregion('South America'),
        '\n');

}

main();