
export enum Province{
    KAMPONGCHAM= 'Kampong Cham',
    KAMPONGTHOM = 'Kampong Thom',
    KRATIE = 'Kratie',
    STEUNGTRENG = 'Steung Treng',
    KAMPONGCHHANG = 'Kampong Chhnang',
    MONDULKIRI = 'Mondulkiri',
    TBONGKHMUM = 'Tbong Khmum',
    RATANAKIRI = 'Ratanakiri',
}

export enum Color{
    RED= 'Red',
    BLUE= 'Blue',
    BLACK= 'Black',
    GOLD= 'Gold',
    ROSEGOLD= 'Rose Gold',
    SILVER= 'Silver',
}

export interface Order{
    province: Province,
    region: string,
    storeName: string
    date: Date
    pModel: string
    amountM: number
    color: {
        value: Color
        amount: number
    }[]
}