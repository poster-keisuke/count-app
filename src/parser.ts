import type { ParseResult } from '@babel/parser';
import { parse } from '@babel/parser';
import traverse, { NodePath } from '@babel/traverse';
import * as t from '@babel/types';
import * as fs from 'fs';

const getAstFromPath = (filePath: string): ParseResult<t.File> => {
  const codeString = fs.readFileSync(filePath, 'utf-8');
  const ast = parse(codeString, {
    sourceType: 'module',
    plugins: ['jsx', 'typescript'],
  });

  return ast;
};

export const checkUseStateImport = (filePath: string): boolean => {
  const ast = getAstFromPath(filePath);
  let hasUseStateImport = false;

  traverse(ast, {
    ImportDeclaration(path) {
      if (path.node.source.value === 'react') {
        path.node.specifiers.forEach((specifier) => {
          if (
            specifier.type === 'ImportSpecifier' &&
            specifier.imported.type === 'Identifier' &&
            specifier.imported.name === 'useState'
          ) {
            hasUseStateImport = true;
          }
        });
      }
    },
  });

  return hasUseStateImport;
};

export const checkUseStateWithInitialValue = (filePath: string): boolean => {
  const ast = getAstFromPath(filePath);
  let hasUseStateWithInitialValue = false;

  traverse(ast, {
    CallExpression(path: NodePath<t.CallExpression>) {
      if (
        t.isIdentifier(path.node.callee) &&
        path.node.callee.name === 'useState' &&
        path.node.arguments.length > 0
      ) {
        hasUseStateWithInitialValue = true;
      }
    },
  });

  return hasUseStateWithInitialValue;
};

export const checkUseStateNumberInitialValue = (filePath: string): boolean => {
  const ast = getAstFromPath(filePath);
  let hasNumberInitialValue = false;

  traverse(ast, {
    CallExpression(path: NodePath<t.CallExpression>) {
      if (
        t.isIdentifier(path.node.callee) &&
        path.node.callee.name === 'useState' &&
        path.node.arguments.length > 0
      ) {
        const [initialValue] = path.node.arguments;
        if (t.isNumericLiteral(initialValue)) {
          hasNumberInitialValue = true;
        }
      }
    },
  });

  return hasNumberInitialValue;
};

export const checkUseStateUsage = (filePath: string): boolean => {
  const ast = getAstFromPath(filePath);
  let hasUseStateUsage = false;
  traverse(ast, {
    CallExpression(path: NodePath<t.CallExpression>) {
      if (
        t.isIdentifier(path.node.callee) &&
        path.node.callee.name === 'useState'
      ) {
        hasUseStateUsage = true;
      }
    },
  });

  return hasUseStateUsage;
};

export const checkUseStateHasInitialArgument = (filePath: string): boolean => {
  const ast = getAstFromPath(filePath);
  let hasInitialArgument = false;

  traverse(ast, {
    VariableDeclarator(path: NodePath<t.VariableDeclarator>) {
      if (
        t.isArrayPattern(path.node.id) &&
        path.node.init &&
        t.isCallExpression(path.node.init) &&
        t.isIdentifier(path.node.init.callee) &&
        path.node.init.callee.name === 'useState'
      ) {
        const [state] = path.node.id.elements;
        if (state && t.isIdentifier(state)) {
          hasInitialArgument = true;
        }
      }
    },
  });

  return hasInitialArgument;
};

export const checkUseStateHasSetterFunction = (filePath: string): boolean => {
  const ast = getAstFromPath(filePath);
  let hasSetterFunction = false;

  traverse(ast, {
    VariableDeclarator(path: NodePath<t.VariableDeclarator>) {
      if (
        t.isArrayPattern(path.node.id) &&
        path.node.init &&
        t.isCallExpression(path.node.init) &&
        t.isIdentifier(path.node.init.callee) &&
        path.node.init.callee.name === 'useState'
      ) {
        const [, setState] = path.node.id.elements;
        if (setState && t.isIdentifier(setState)) {
          hasSetterFunction = true;
        }
      }
    },
  });

  return hasSetterFunction;
};
