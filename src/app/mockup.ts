
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

export interface OrderList{
    _id?: string
    province: string,
    region: string,
    storeName: string
    date: Date
    pModel: string
    amountM: number
    color: {
        value: string
        amount: number
    }[]
}