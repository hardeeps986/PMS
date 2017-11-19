interface Age{
    currentAge?:number,
    retirementAge?:number
}

interface AnnualInvestmentReturn{
    preRetirementReturn?:number,
    postRetirementReturn?:number,
}

export interface Retirement {
    currentAnnualIncome?:number,
    age?:Age,
    lifeExpectancy?:number,
    currentSavings?:number,
    incomeAfterRetirement?:number,
    annualInvestmentReturn?:AnnualInvestmentReturn
}

