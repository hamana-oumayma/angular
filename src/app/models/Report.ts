export interface Report {
    id?: number;
    date: Date;
    firstName: string;
    lastName: string;
    centrale: string;
    report: string;
    reportFile?: File; // This property is optional if you choose not to include it in your Angular application
  }