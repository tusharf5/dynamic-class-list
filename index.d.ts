declare type Value = string | undefined | null | number;
declare type ValueMore = Value | Record<string, () => boolean>;
declare type PossibleValues = ValueMore | Array<ValueMore>;
declare function cl(..._args: PossibleValues[]): string;
export { cl };
