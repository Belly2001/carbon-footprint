// facteurs d'emission en kg CO2 (source: ADEME)
// j'ai mis les valeurs en dur comme fallback si l'API repond pas

const facteursTransport = {
  voiture: 0.193,        // kg CO2 par km
  bus: 0.089,
  metro: 0.003,
  tramway: 0.004,
  train: 0.006,
  velo: 0,
  marche: 0
}

const facteursAlimentation = {
  viande_rouge: 7.26,     // kg CO2 par repas
  viande_blanche: 2.10,
  poisson: 1.89,
  vegetarien: 1.15,
  vegan: 0.51
}

const facteursNumerique = {
  streaming: 0.036,       // kg CO2 par heure
  email: 0.004,           // kg CO2 par email
  visio: 0.130,           // kg CO2 par heure
  recherche_web: 0.007    // kg CO2 par recherche
}

// calcul par categorie (tout en kg CO2 par semaine)
export function calculerTransport(type, distanceKm, joursParSemaine) {
  const facteur = facteursTransport[type] || 0
  // aller + retour donc x2
  return facteur * distanceKm * 2 * joursParSemaine
}

export function calculerAlimentation(type, repasParSemaine) {
  const facteur = facteursAlimentation[type] || 0
  return facteur * repasParSemaine
}

export function calculerNumerique(type, heuresParJour) {
  const facteur = facteursNumerique[type] || 0
  // on multiplie par 7 pour avoir la semaine
  return facteur * heuresParJour * 7
}

// empreinte totale
export function calculerTotal(transport, alimentation, numerique) {
  return transport + alimentation + numerique
}

// moyenne francaise ~190 kg CO2 par semaine (9.9t / 52 semaines)
// objectif accord de paris ~38 kg CO2 par semaine (2t / 52 semaines)
export const MOYENNE_FRANCE = 190
export const OBJECTIF_PARIS = 38

// on determine le niveau selon le total
export function getNiveau(totalSemaine) {
  if (totalSemaine <= 30) return { label: 'Excellent', couleur: '#16a34a', emoji: '🌱' }
  if (totalSemaine <= 60) return { label: 'Bien', couleur: '#65a30d', emoji: '👍' }
  if (totalSemaine <= 120) return { label: 'Moyen', couleur: '#eab308', emoji: '⚠️' }
  if (totalSemaine <= 200) return { label: 'Élevé', couleur: '#f97316', emoji: '🔥' }
  return { label: 'Très élevé', couleur: '#ef4444', emoji: '🚨' }
}

// conseils en fonction de la categorie la plus polluante
export function getConseils(transport, alimentation, numerique) {
  const conseils = []

  if (transport > alimentation && transport > numerique) {
    conseils.push('🚲 Essaie le vélo ou les transports en commun pour tes trajets courts.')
    conseils.push('🚆 Le train émet 30x moins de CO2 que la voiture.')
    conseils.push('🏠 Le télétravail 1 jour par semaine réduit ton empreinte transport de 20%.')
  } else if (alimentation > transport && alimentation > numerique) {
    conseils.push('🥗 Remplacer 2 repas de viande rouge par du végétarien divise par 6 les émissions.')
    conseils.push('🍎 Privilégie les produits locaux et de saison.')
    conseils.push('🌱 Un repas vegan émet 14x moins qu\'un repas au boeuf.')
  } else {
    conseils.push('📧 Un email avec pièce jointe = 35g de CO2. Nettoie ta boîte mail.')
    conseils.push('📺 Baisse la qualité vidéo en streaming quand c\'est pas nécessaire.')
    conseils.push('💻 Éteins tes appareils au lieu de les laisser en veille.')
  }

  return conseils
}