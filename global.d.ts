declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    PdButton: typeof import('pandaui')['PdButton']
    PdIcon: typeof import('pandaui')['PdIcon']
    PdInput: typeof import('pandaui')['PdInput']
    PdCheckbox: typeof import('pandaui')['PdCheckbox']
  }
}

export {}
