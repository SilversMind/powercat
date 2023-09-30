export const computeTheoreticalPRByRep = (PR: number |undefined, nbrRep: number) => {
    if (!PR) return null
    return Math.round(PR*Math.pow(0.95, nbrRep - 1))
}
