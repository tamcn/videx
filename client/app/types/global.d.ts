// Declare these modules so as to use "import" those ones in typescript
// If don't want to use this, delete it and just use require in typescript

declare module '*.css' {
  const content: any;
  export = content;
}

declare module '*.png' {
  const content: any;
  export = content;
}

declare module '*.jpg' {
  const content: string;
  export = content;
}
declare module '*.svg' {
  const content: string;
  export = content;
}