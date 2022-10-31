import React from 'react';
import parse, { attributesToProps, Element, domToReact } from 'html-react-parser';
import type { HTMLReactParserOptions } from 'html-react-parser';
import {
  ExampleStyledHTML,
  HieroglyphStyledHTML,
  HieroglyphTitleStyledHTML,
  PinyinStyledHTML,
  TextTabStyledHTML,
  TranslateStyledHTML,
  WarnStyledHTML
} from '#/styles/common';

const optionsForGlossary: HTMLReactParserOptions = {
  replace: (domNode) => {
    if (domNode instanceof Element) {
      const { name } = domNode;
      const { type, index } = attributesToProps(domNode.attribs);

      if (name === 'span') {
        if (type === 'h') {
          return (
            <HieroglyphStyledHTML>
              <span>{domToReact(domNode.children, optionsForGlossary)}</span>
            </HieroglyphStyledHTML>
          );
        }
        if (type === 'p') {
          return (
            <PinyinStyledHTML>{domToReact(domNode.children, optionsForGlossary)}</PinyinStyledHTML>
          );
        }
        if (type === 't') {
          return (
            <TranslateStyledHTML>
              {domToReact(domNode.children, optionsForGlossary)}
            </TranslateStyledHTML>
          );
        }
      }

      if (name === 'p') {
        if (type === 'tab') {
          return (
            <TextTabStyledHTML>
              {domToReact(domNode.children, optionsForGlossary)}
            </TextTabStyledHTML>
          );
        }
        if (type === 'warn') {
          return (
            <WarnStyledHTML>{domToReact(domNode.children, optionsForGlossary)}</WarnStyledHTML>
          );
        }
      }

      if (name === 'div') {
        if (type === 'h') {
          return (
            <HieroglyphTitleStyledHTML>
              <span>{index}</span>
              {domToReact(domNode.children, optionsForGlossary)}
            </HieroglyphTitleStyledHTML>
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
    }
  }
};
export const parseGlossary = (text: string) => parse(text, optionsForGlossary);
