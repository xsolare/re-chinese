import type { HTMLReactParserOptions } from 'html-react-parser';
import React from 'react';
import parse, { attributesToProps, Element, domToReact } from 'html-react-parser';
import {
  ExampleStyledHTML,
  HrStyledHTML,
  TextTabStyledHTML,
  WarnStyledHTML,
  RuleStyledHTML,
  TextStyledHTML
} from '#/styles/common';
import { WordTitle } from '#/components/xsolare/components/word-title/word-title';
import { Word } from '#/components/xsolare/components/word/word';

const optionsForGlossary: HTMLReactParserOptions = {
  replace: (domNode) => {
    if (domNode instanceof Element) {
      const { name } = domNode;
      const { type, ...rest } = attributesToProps(domNode.attribs);

      if (name === 'span') {
        if (type === 'h') {
          const { p, t } = rest;

          return (
            <Word p={p} t={t}>
              {domToReact(domNode.children, optionsForGlossary)}
            </Word>
          );
        }

        if (type === 'tab') {
          return (
            <TextTabStyledHTML>
              {domToReact(domNode.children, optionsForGlossary)}
            </TextTabStyledHTML>
          );
        }
        if (type === 'text') {
          return (
            <TextStyledHTML>{domToReact(domNode.children, optionsForGlossary)}</TextStyledHTML>
          );
        }
        if (type === 'warn') {
          return (
            <WarnStyledHTML>{domToReact(domNode.children, optionsForGlossary)}</WarnStyledHTML>
          );
        }
        if (type === 'rule') {
          return (
            <RuleStyledHTML>
              <span>{domToReact(domNode.children, optionsForGlossary)}</span>
            </RuleStyledHTML>
          );
        }
      }

      if (name === 'div') {
        if (type === 'h') {
          const { index, p, t } = rest;

          return (
            <WordTitle index={index} p={p} t={t}>
              {domToReact(domNode.children, optionsForGlossary)}
            </WordTitle>
          );
        }

        if (type === 'example') {
          return (
            <ExampleStyledHTML>
              {domToReact(domNode.children, optionsForGlossary)}
            </ExampleStyledHTML>
          );
        }
      }

      if (name === 'hr') {
        return <HrStyledHTML />;
      }
    }
  }
};
export const parseGlossary = (text: string) => parse(text, optionsForGlossary);
