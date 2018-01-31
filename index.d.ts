declare namespace ResolveFrom {
  interface ResolveFrom {
    (fromDir: string, moduleId: string): string
    silent (fromDir: string, moduleId: string): null | string
  }
}

declare var resolveFrom: ResolveFrom.ResolveFrom;

export = resolveFrom
