import * as ts from 'typescript';

export function getDirectTopMostAccessExpression(node: ts.Node): ts.Node | null {
    if (!ts.isPropertyAccessExpression(node) && !ts.isElementAccessExpression(node)) return null;

    return (node !== node.parent && getDirectTopMostAccessExpression(node.parent)) || node;
}
