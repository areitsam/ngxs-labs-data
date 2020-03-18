import { MethodArgsRegistry } from './method-args-registry';

interface ActionNameCreatorOptions {
    stateName: string | null;
    methodName: string;
    argumentsNames: string[];
    argumentRegistry?: MethodArgsRegistry;
}

export function actionNameCreator(options: ActionNameCreatorOptions): string {
    const { stateName, argumentsNames, methodName, argumentRegistry }: ActionNameCreatorOptions = options;

    let argsList: string = '';
    for (let index: number = 0; index < argumentsNames.length; index++) {
        if (argumentRegistry?.getArgumentNameByIndex(index)) {
            argsList += argumentRegistry?.getArgumentNameByIndex(index);
        } else if (argumentRegistry?.getPayloadTypeByIndex(index)) {
            argsList += argumentRegistry?.getPayloadTypeByIndex(index);
        } else {
            argsList += `$arg${index}`;
        }

        if (index !== argumentsNames.length - 1) {
            argsList += ', ';
        }
    }

    return `@${stateName}.${methodName}(${argsList})`;
}