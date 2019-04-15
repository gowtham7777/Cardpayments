export class Payment {
    id: number;
    amount: number;
    paymentCode: string;
    paymentDesc: string;
    startDate: Date;
    constructor(id:number,amount:number,paymentCode:string,paymentDesc:string,startDate:Date)
    {
      this.id = id;
      this.amount = amount;
      this.paymentCode = paymentCode;
      this.paymentDesc = paymentDesc;
      this.startDate = startDate;
    }
  }
  