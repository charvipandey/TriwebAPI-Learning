interface Emp {
  id: number;
  nm: string;
  pos: string;
  sal: number;
  getDet(): string;
  bon?: number;
  calcBon?(pct: number): void;
}

type ID = number;
type Nm = string;
type Pos = string;
type Sal = number;

class FTEmp implements Emp {
  bon?: number;

  constructor(
      public id: ID,
      public nm: Nm,
      public pos: Pos,
      public sal: Sal
  ) {}

  getDet(): string {
      return `id: ${this.id}, name: ${this.nm}, position: ${this.pos}, salary: $${this.sal}/year`;
  }

  calcBon(pct: number): void {
      this.bon = (this.sal * pct) / 100;
  }
}

class PTEmp implements Emp {
  bon?: number;

  constructor(
      public id: ID,
      public nm: Nm,
      public pos: Pos,
      public hrRate: number,
      public hrsPerWk: number
  ) {}

  get sal(): number {
      return this.hrRate * this.hrsPerWk * 52;
  }

  getDet(): string {
      return `id: ${this.id}, name: ${this.nm}, position: ${this.pos}, salary: $${this.sal}/year (hourly rate: $${this.hrRate}, hours/week: ${this.hrsPerWk})`;
  }

  calcBon(pct: number): void {
      this.bon = (this.sal * pct) / 100;
  }
}

class ContEmp implements Emp {
  bon?: number;

  constructor(
      public id: ID,
      public nm: Nm,
      public pos: Pos,
      public hrRate: number,
      public contDur: number
  ) {}

  get sal(): number {
      return this.hrRate * 40 * 4 * this.contDur;
  }

  getDet(): string {
      return `id: ${this.id}, name: ${this.nm}, position: ${this.pos}, contract duration: ${this.contDur} months, total pay: $${this.sal}`;
  }

  calcBon(pct: number): void {
      this.bon = (this.sal * pct) / 100;
  }
}

const emps: Emp[] = [
  new FTEmp(1, "charvi", "dev", 90000)
];

emps.forEach(emp => {
  console.log(emp.getDet());
  if (emp.calcBon) {
      emp.calcBon(10);
      console.log(`bonus: $${emp.bon}`);
  }
});
