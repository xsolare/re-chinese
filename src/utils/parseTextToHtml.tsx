import type { HTMLReactParserOptions } from 'html-react-parser';
import type { IWordType } from '#/store/word';
import React from 'react';
import parse, { attributesToProps, Element, domToReact } from 'html-react-parser';
import { HrStyledHTML, RuleStyledHTML, TextStyledHTML } from '#/styles/common';
import { Word, WordTitle } from '#/components/xsolare';
import { Example } from '#/components/xsolare/components/content/example/example';
import { Warn } from '#/components/xsolare/components/content/warn/warn';

const optionsForGlossary: HTMLReactParserOptions = {
  replace: (domNode) => {
    if (domNode instanceof Element) {
      const { name } = domNode;
      const { type, ...rest } = attributesToProps(domNode.attribs);

      if (name === 'span') {
        if (type === 'h') {
          const { p, t, fixed } = rest;

          const fixedType = fixed ? (+fixed as IWordType) : undefined;

          return (
            <Word {...rest} pinyin={p} translate={t} fixed={fixedType}>
              {domToReact(domNode.children, optionsForGlossary)}
            </Word>
          );
        }

        if (type === 'text')
          return (
            <TextStyledHTML>{domToReact(domNode.children, optionsForGlossary)}</TextStyledHTML>
          );

        if (type === 'warn') {
          return <Warn>{domToReact(domNode.children, optionsForGlossary)}</Warn>;
        }

        if (type === 'rule')
          return (
            <RuleStyledHTML>
              <span>{domToReact(domNode.children, optionsForGlossary)}</span>
            </RuleStyledHTML>
          );
      }

      if (name === 'div') {
        if (type === 'h') {
          const { index, p, t } = rest;

          return (
            <WordTitle index={index} pinyin={p} translate={t}>
              {domToReact(domNode.children, optionsForGlossary)}
            </WordTitle>
          );
        }

        if (type === 'example') {
          return <Example {...rest}>{domToReact(domNode.children, optionsForGlossary)}</Example>;
        }
      }

      if (name === 'hr') {
        return <HrStyledHTML />;
      }
    }
  }
};
export const parseGlossary = (text: string) => parse(text, optionsForGlossary);

const optionsForWord: HTMLReactParserOptions = {
  replace: (domNode) => {
    if (domNode instanceof Element) {
      // const { name } = domNode;
      // const { type, ...rest } = attributesToProps(domNode.attribs);
    }
  }
};

export const parseWord = (text: string) => parse(text, optionsForWord);
