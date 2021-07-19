let CreationTableauLangages =  () => {
    let langages = [ 'Html', 'CSS', 'Java', 'PHP' ];
    return langages;
}

let CreationTableauNombres =  () => {
    return Array.from(Array(6).keys());
}

let RemplacementElement =  (langages) => {
    langages.splice(2, 1, 'Javascript');
    return langages
}

let AjoutElementLangages =  (langages) => {
    langages.push('Ruby', 'Python');
    return langages;
}

let AjoutElementNombres =  (nombres) => {
    nombres.unshift(-2, -1);
    return nombres;
}

let SuppressionPremierElement =  (langages) => {
    langages.shift();
    return langages;
}

let SuppressionDernierElement =  (langages) => {
    langages.pop();
    return langages;
}

let ConversionChaineTableau =  (reseaux_sociaux_chaine) => {
    let reseaux = reseaux_sociaux_chaine.split(',');
    return reseaux;
}

let ConversionTableauChaine =  (langages) => {
    return langages.toString()
}

let TriTableau =  (reseaux_sociaux) => {
   return reseaux_sociaux.sort()
}

let InversionTableau =  (langages) =>{
    return langages.reverse()
}