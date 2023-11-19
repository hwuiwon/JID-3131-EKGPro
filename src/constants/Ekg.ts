export class EKG {
    id: number;
    name: string;
    href: string;
    bgColor: string;
  
    constructor(id: number, name: string, href: string, bgColor: string) {
      this.id = id;
      this.name = name;
      this.href = href;
      this.bgColor = bgColor;
    }
  }