import type { HTMLReactParserOptions } from 'html-react-parser';
import React from 'react';
import parse, { attributesToProps, Element, domToReact } from 'html-react-parser';
import { HrStyledHTML, TextTabStyledHTML, RuleStyledHTML, TextStyledHTML } from '#/styles/common';
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
          return <Word {...rest}>{domToReact(domNode.children, optionsForGlossary)}</Word>;
        }

        if (type === 'tab') {
          return (
            <TextTabStyledHTML>
              {domToReact(domNode.children, optionsForGlossary)}
            </TextTabStyledHTML>
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
            <WordTitle index={index} p={p} t={t}>
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
